import './cuisine.css';

import {
  createEffect,
  createSignal,
  createResource,
  Show,
  For,
} from 'solid-js';
import { clientOnly } from '@solidjs/start';

import { Meta, Title } from '@solidjs/meta';

import type {
  CuisineEntry,
  CuisineFilters,
  CuisineCategory,
} from '~/components/cuisine/CuisineTypes';

import { fetchAllCuisineData, filterCuisine } from '~/components/cuisine/CuisineHelpers';

import DetailsOverlay from '~/components/cuisine/DetailsOverlay';
import { EntryIdentifier, RatingDisp } from '~/components/cuisine/shared';
import Marquee from '~/components/Marquee';

import { MdFillMap, MdFillSearch, MdOutlineInfo } from 'solid-icons/md';

import { useIsMobile } from '~/hooks';
import { useIdNav } from '~/components/cuisine/hooks';

import { A } from '@solidjs/router';

const CuisineMapContainer = clientOnly(() => import('~/components/cuisine/Map'), { lazy: false });

function EntryCard(props: {entry: CuisineEntry, onClick: () => void}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {if (e.key === 'Enter' || e.key === ' ') { props.onClick(); }}}
      class="card"
      onClick={props.onClick}
    >
      <div class="cuisine-header">
        <h3>{props.entry.title}</h3>
        <span>{props.entry.dateReviewed}</span>
      </div>
      <div>
        <RatingDisp rating={props.entry.rating} /> - <EntryIdentifier entry={props.entry} />
      </div>
      <div class="explanation">{props.entry.explanation}</div>
    </div>
  );
}

function SearchAndFilter(props: {
  filters: CuisineFilters,
  setFilters: (newFilters: CuisineFilters) => void,
}) {
  const setCategory = (newCategory: CuisineCategory) => {
    props.setFilters({
      ...props.filters,
      category: newCategory,
    })
  }

  const setKeywords = (newKeywords: string) => {
    props.setFilters({
      ...props.filters,
      keywords: newKeywords === '' ? undefined : newKeywords
    })
  }

  const categoryOptions: CuisineCategory[] = ['all', 'locations', 'foods'];

  return (
    <div class="filters">
      <div class="categories">
        <For each={categoryOptions}>
          {(option) => (
            <button onClick={() => setCategory(option)} disabled={props.filters.category === option}>
              {option}
            </button>
          )}
        </For>
      </div>
      <div class="search">
        <input
          value={props.filters.keywords ?? ''}
          onInput={(e) => setKeywords(e.target.value)}
          placeholder="Search for keywords..."
        />
      </div>
    </div>
  );
}

type MobileScreen = 'list' | 'map';

function ScreenSelector(props: { screen: MobileScreen, setScreen: (s: MobileScreen) => void}) {
  return (
    <div class="screen-selector">
      <button disabled={props.screen === 'list'} onClick={() => props.setScreen('list')}>
        <MdFillSearch />
      </button>
      <button disabled={props.screen === 'map'} onClick={() => props.setScreen('map')}>
        <MdFillMap />
      </button>
    </div>
  );
}

export default function Cuisine() {
  const [filters, setFilters] = createSignal<CuisineFilters>({
    category: 'all'
  });

  const [mobileScreen, setMobileScreen] = createSignal<MobileScreen>('list');

  // Defer so the metadata loads properly server-side (i.e. for og)
  const [cuisineData] = createResource(fetchAllCuisineData, { deferStream: true });

  // Avoid Leaflet issues with size not updating properly after first render
  const [seenMap, setSeenMap] = createSignal(false);
  createEffect(() => {
    if (mobileScreen() === 'map') setSeenMap(true);
  });

  const isMobile = useIsMobile();

  const { selectedId, navigateToId } = useIdNav();

  const filtered = () => {
    return filterCuisine(cuisineData.state === 'ready' ? cuisineData() : {}, filters());
  };

  // TODO: "copy link" option?

  createEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigateToId(undefined);
      }
    }
    window.addEventListener('keydown', handleKeydown);
  });

  const selectedEntry = () => {
    const selectedIdVal = selectedId();
    return (cuisineData.state === 'ready' && selectedIdVal && selectedIdVal in cuisineData()) ? cuisineData()[selectedIdVal] : null;
  }

  const pageTitle = () => {
    const selectedEntryVal = selectedEntry();
    return selectedEntryVal ? (`${selectedEntryVal.title} - Cuisine`) : "Cuisine";
  }

  const pageDescription = () => {
    const selectedEntryVal = selectedEntry();
    if (selectedEntryVal && selectedEntryVal.explanation !== undefined) {
      return `${selectedEntryVal.explanation.substring(0, 100)}...`;
    } else {
      return "Your trustworthy site for food ratings";
    }
  }

  return (
    <div class="cuisine-main">
      <Show when={cuisineData()}>
        <Title>{pageTitle()}</Title>
        <Meta name="title" content={pageTitle()} />
        <Meta name="description" content={pageDescription()} />
        <Meta name="author" content="Caden Lee" />
        <Meta name="og:title" content={pageTitle()} />
        <Meta name="og:description" content={pageDescription()} />
      </Show>
      <div class="sidebar">
        <div class="sidebar-header">
          <div class="top-header">
            <h1>Cuisine</h1>
            <A href="/blog/building_for_yourself">
              <MdOutlineInfo />
            </A>
          </div>
          <Marquee duration={30}>
            See recipes, dishes, groceries, restaurants, and grocery stores in one place. You can trust that only first-hand reports are included.
          </Marquee>
        </div>
        <Show when={!isMobile() || mobileScreen() === 'list'}>
          <SearchAndFilter filters={filters()} setFilters={setFilters} />
          <div class="main-list">
            <Show keyed when={cuisineData()}>
              <For each={Object.entries(filtered())}>
                {([key, val]) => (
                  <EntryCard entry={val} onClick={() => navigateToId(key)} />
                )}
              </For>
            </Show>
          </div>
        </Show>
        <Show when={isMobile() && seenMap()}>
          <div class={mobileScreen() === 'map' ? 'mobile-map' : 'hidden'}>
            <CuisineMapContainer filtered={filtered()} selected={selectedEntry()} />
          </div>
        </Show>
        <Show when={isMobile()}>
          <ScreenSelector screen={mobileScreen()} setScreen={setMobileScreen} />
        </Show>
      </div>
      <Show when={isMobile()}>
        <DetailsOverlay cuisineData={cuisineData} />
      </Show>
      <Show when={!isMobile()}>
        <div class="cuisine-right">
          <CuisineMapContainer filtered={filtered()} selected={selectedEntry()} />
          <DetailsOverlay cuisineData={cuisineData} />
        </div>
      </Show>
    </div>
  );
}
