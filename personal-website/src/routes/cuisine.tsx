import './cuisine.css';

import { createEffect, createSignal, createResource, Show, For } from 'solid-js';
import { clientOnly } from '@solidjs/start';

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

// TODO: lazy?
const CuisineMapContainer = clientOnly(() => import('~/components/cuisine/Map'), { lazy: true });

function EntryCard(props: {entry: CuisineEntry, onClick: () => void}) {
  const { entry, onClick } = props;

  return (
    <button class="card" onClick={onClick}>
      <div class="cuisine-header">
        <h3>{entry.title}</h3>
        <span>{entry.dateReviewed}</span>
      </div>
      <div>
        <RatingDisp rating={entry.rating} /> - <EntryIdentifier entry={entry} />
      </div>
      <div class="explanation">{entry.explanation}</div>
    </button>
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
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Search for keywords..."
        />
      </div>
    </div>
  );
}

type MobileScreen = 'list' | 'map';

function ScreenSelector(props: { screen: MobileScreen, setScreen: (s: MobileScreen) => void}) {
  const { screen, setScreen } = props;

  return (
    <div class="screen-selector">
      <button disabled={screen === 'list'} onClick={() => setScreen('list')}>
        <MdFillSearch />
      </button>
      <button disabled={screen === 'map'} onClick={() => setScreen('map')}>
        <MdFillMap />
      </button>
    </div>
  );
}

export default function Cuisine() {
  const [filters, setFilters] = createSignal<CuisineFilters>({
    category: 'all'
  });

  const isMobile = useIsMobile();

  const [mobileScreen, setMobileScreen] = createSignal<MobileScreen>('list');
  const [seenMap, setSeenMap] = createSignal(false);

  const [cuisineData] = createResource(fetchAllCuisineData);

  const coalescedCuisineData = () => cuisineData.state === 'ready' ? cuisineData() : {};

  // TODO: handle leaflet
  // Avoid Leaflet issues with size not updating properly after first render
  createEffect(() => {
    if (mobileScreen() === 'map') setSeenMap(true);
  });

  const { selectedId, navigateToId } = useIdNav();

  // TODO: remove dead comments
  //useEffect(() => {
  //  fetchAllCuisineData().then(res => setCuisineData(res));
  //  }, [setCuisineData]);

  /*createEffect(() => {
    setFiltered();
    });*/

  const filtered = () => {
    // TODO: correct usage of createResource result?
    return filterCuisine(coalescedCuisineData(), filters());
  };

  // TODO: simple loading spinner
  // TODO: "copy link" option?

  createEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigateToId(undefined);
      }
    }
    window.addEventListener('keydown', handleKeydown);
  });

  const selectedEntry = (selectedId && cuisineData.state === "ready" && selectedId in cuisineData) ? cuisineData()[selectedId] : null;

  const pageTitle = selectedEntry ? (`${selectedEntry.title} - Cuisine`) : "Cuisine";

  return (
    <div class="cuisine-main">
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content="Food ratings" />
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
        {(!isMobile || mobileScreen() === 'list') && (
          <>
            <SearchAndFilter filters={filters()} setFilters={setFilters} />
            <div class="main-list">
              <For each={Object.entries(filtered())}>
                {([key, val]) => (
                  <EntryCard entry={val} onClick={() => navigateToId(key)} />
                )}
              </For>
            </div>
          </>
        )}
        <Show when={isMobile() && seenMap}>
          <div class={mobileScreen() === 'map' ? 'mobile-map' : 'hidden'}>
            <CuisineMapContainer cuisineData={filtered()} selected={selectedEntry} />
          </div>
        </Show>
        <Show when={isMobile}>
          <ScreenSelector screen={mobileScreen()} setScreen={setMobileScreen} />
        </Show>
      </div>
      {isMobile() ? <DetailsOverlay cuisineData={coalescedCuisineData()} /> : (
        <div class="cuisine-right">
          <CuisineMapContainer cuisineData={filtered()} selected={selectedEntry} />
          <DetailsOverlay cuisineData={coalescedCuisineData()} />
        </div>
      )}
    </div>
  );
}
