import './DetailsOverlay.css';

import type { CuisineMap, CuisineEntry, SimpleEntry, Friend, GroceryStore, Restaurant } from './CuisineTypes';
import { useIdNav } from './hooks';
import { EntryIdentifier, RatingDisp } from '~/components/cuisine/shared';

import { For, Switch, Match, Show, Resource, createMemo } from 'solid-js';

import { MdFillArrow_outward, MdFillPeople_alt } from 'solid-icons/md';

function LocationMark(props: {entry: CuisineEntry}) {
  return (
    <Show when={(props.entry.type === 'grocery-store' || props.entry.type === 'restaurant') && props.entry.mapsLink}>
      <a target="_blank" title="View on maps" href={(props.entry as GroceryStore | Restaurant).mapsLink} class="map-icon">
        <MdFillArrow_outward />
      </a>
    </Show>
  );
}

function MiniCard(props: { id?: string, title: string, rating: number }) {
  const { navigateToId } = useIdNav();

  return (
    <div class="mini-card">
      <RatingDisp rating={props.rating} />
      <span>
        <Switch fallback={props.title}>
          <Match keyed when={props.id}>
            {(id) => <button onClick={() => navigateToId(id)}>{props.title}</button>}
          </Match>
        </Switch>
      </span>
    </div>
  );
}

function MiniList(props: { cuisineData: CuisineMap, flat?: SimpleEntry[], ids?: string[], title: string }) {
  return (
    <>
      <h3>{props.title}</h3>
      <div class="mini-list">
        <For each={props.ids?.filter(i => i in props.cuisineData)}>
          {(i) => (
            <MiniCard id={i} title={props.cuisineData[i].title} rating={props.cuisineData[i].rating} />
          )}
        </For>
        <For each={props.flat}>
          {(f) => (
            <MiniCard title={f.title} rating={f.rating} />
          )}
        </For>
      </div>
    </>
  );
}

function TriedWith(props: {friends: Friend[]}) {
  return (
    <span class="tried-with subspan">
      <MdFillPeople_alt />
      <span>
        Tried with:
      </span>
      <For each={props.friends}>
        {(friend) => (
          <Switch>
            <Match when={friend.siteUrl}>
              <a class="friend" target="_blank" href={friend.siteUrl}>{friend.name}</a>
            </Match>
            <Match when={!friend.siteUrl}>
              <span class="friend">{friend.name}</span>
            </Match>
          </Switch>
        )}
      </For>
    </span>
  );
}

function ExplanationParagraphs(props: {explanation: string | undefined}) {
  return (
    <Switch fallback={<i>No details provided</i>}>
      <Match keyed when={props.explanation}>
        {(explanation) => (
          explanation.split('\n').map(s => s.length > 0 ? <p>{s}</p> : null)
        )}
      </Match>
    </Switch>
  );
}

function DetailsContent(props: {cuisineData: CuisineMap, entry: CuisineEntry}) {
  return (
    <>
      <div class="cuisine-header">
        <h2>{props.entry.title}</h2>
        <span title="Date reviewed">{props.entry.dateReviewed}</span>
      </div>
      <EntryIdentifier entry={props.entry} />
      <div class="misc-info">
        <RatingDisp rating={props.entry.rating} />
        <LocationMark entry={props.entry} />
        <Show when={props.entry.type === 'grocery'}>
          <>
            <span class="subspan">(For the price:</span>
            <RatingDisp rating={props.entry.type === 'grocery' ? props.entry.priceEfficiencyRating! : 0} />
            <span class="subspan">)</span>
          </>
        </Show>
        {props.entry.triedWith && <TriedWith friends={props.entry.triedWith} />}
      </div>
      <div class="section-divider"><hr /></div>
      <div class="explanation">
        <ExplanationParagraphs explanation={props.entry.explanation} />
      </div>
      <div class="section-divider"><hr /></div>
      {props.entry.type === 'grocery-store' && (props.entry.groceriesFlat || props.entry.groceryIds) && (
        <MiniList title="Groceries" cuisineData={props.cuisineData!} flat={props.entry.groceriesFlat} ids={props.entry.groceryIds} />
      )}
      {props.entry.type === 'restaurant' && (props.entry.dishesFlat || props.entry.dishIds) && (
        <MiniList title="Dishes" cuisineData={props.cuisineData!} flat={props.entry.dishesFlat} ids={props.entry.dishIds} />
      )}
      <span class="disclaimer">
        Disclaimer: views expressed are purely the personal opinions of the author
        and should not be taken as advice. The author is not affiliated with any listed establishments.
      </span>
    </>
  );
}

function Details(props: {cuisineData: Resource<CuisineMap> | undefined, entryId: string}) {
  const { navigateToId } = useIdNav();

  const escape = () => {
    navigateToId(undefined);
  }

  return (
    <div class="details-wrapper" onClick={(e) => e.stopPropagation()}>
      <div class="details">
        <button onClick={escape} class="escape-hotkey">[ESC]</button>
        <Switch>
          <Match when={!props.cuisineData || props.cuisineData.state !== 'ready'}>
            <i>Loading...</i>
          </Match>
          <Match when={props.cuisineData && props.cuisineData.state === 'ready' && !(props.entryId in props.cuisineData())}>
            <i>This entry doesn't exist!</i>
          </Match>
          <Match when={props.cuisineData && props.cuisineData()}>
            {(cuisineData) => (
              <DetailsContent cuisineData={cuisineData()} entry={cuisineData()[props.entryId]} />
            )}
          </Match>
        </Switch>
      </div>
    </div>
  );
}

export default function DetailsOverlay(props: {
  cuisineData: Resource<CuisineMap> | undefined,
}) {
  const { selectedId, navigateToId } = useIdNav();

  return (
    <div class={`cuisine-right-over ${selectedId() ? 'selected' : ''}`} onClick={() => navigateToId(undefined)}>
      <Show when={selectedId()}>
        {(id) => (
          <Details cuisineData={props.cuisineData} entryId={id()} />
        )}
      </Show>
    </div>
  );
}
