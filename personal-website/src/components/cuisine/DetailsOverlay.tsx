import './DetailsOverlay.css';

import type { CuisineMap, CuisineEntry, SimpleEntry, Friend } from './CuisineTypes';
import { useIdNav } from './hooks';
import { EntryIdentifier, RatingDisp } from '~/components/cuisine/shared';

import { For, Switch, Match, Show } from 'solid-js';

// TODO: is MdFillPin the right icon?
import { MdFillPin, MdFillPeople_alt } from 'solid-icons/md';

function LocationMark(props: {entry: CuisineEntry}) {
  const entry = props.entry;

  // TODO: type error with mapsLink

  return (
    <Show when={(entry.type === 'grocery-store' || entry.type === 'restaurant') && entry.mapsLink}>
      <a target="_blank" title="View on maps" href={('mapsLink' in entry) ? entry.mapsLink : undefined} class="map-icon">
        <MdFillPin />
      </a>
    </Show>
  );
}

function MiniCard(props: { id?: string, title: string, rating: number }) {
  const { id, title, rating } = props;

  const { navigateToId } = useIdNav();

  return (
    <div class="mini-card">
      <RatingDisp rating={rating} />
      <span>{id ? <button onClick={() => navigateToId(id)}>{title}</button> : title}</span>
    </div>
  );
}

function MiniList(props: { cuisineData: CuisineMap, flat?: SimpleEntry[], ids?: string[], title: string }) {
  // TODO: is this non-destructuring allowed?
  const cuisineData = props.cuisineData;

  return (
    <>
      <h3>{props.title}</h3>
      <div class="mini-list">
        <For each={props.ids?.filter(i => i in cuisineData)}>
          {(i) => (
            <MiniCard id={i} title={cuisineData[i].title} rating={cuisineData[i].rating} />
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
  const { friends } = props;

  return (
    <span class="tried-with subspan">
      <MdFillPeople_alt />
      <span>
        Tried with:
      </span>
      <For each={friends}>
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
  const explanation = props.explanation;
  if (!explanation) {
    return <i>No details provided</i>;
  }
  return (
    <>
      {explanation.split('\n').map(s => s.length > 0 ? <p>{s}</p> : null)}
    </>
  )
}

function Details(props: {cuisineData: CuisineMap, entryId: string}) {
  const { cuisineData, entryId } = props;

  const { navigateToId } = useIdNav();

  const escape = () => {
    navigateToId(undefined);
  }

  const entry = entryId in cuisineData ? cuisineData[entryId] : null;

  // TODO: replace conditional returns with match or show

  if (!entry) return (
    <div class="details-wrapper" onClick={(e) => e.stopPropagation()}>
      <button onClick={escape} class="escape-hotkey">[ESC]</button>
      <div class="details">
        <i>Loading...</i>
      </div>
    </div>
  );

  return (
    <div class="details-wrapper" onClick={(e) => e.stopPropagation()}>
      <button onClick={escape} class="escape-hotkey">[ESC]</button>
      <div class="details">
        <div class="cuisine-header">
          <h2>{entry.title}</h2>
          <span title="Date reviewed">{entry.dateReviewed}</span>
        </div>
        <EntryIdentifier entry={entry} />
        <div class="misc-info">
          <RatingDisp rating={entry.rating} />
          <LocationMark entry={entry} />
          {entry.type === 'grocery' && (
            <>
              <span class="subspan">(For the price:</span>
              <RatingDisp rating={entry.priceEfficiencyRating} />
              <span class="subspan">)</span>
            </>
          )}
          {entry.triedWith && <TriedWith friends={entry.triedWith} />}
        </div>
        <div class="section-divider"><hr /></div>
        <div class="explanation">
          <ExplanationParagraphs explanation={entry.explanation} />
        </div>
        <div class="section-divider"><hr /></div>
        {entry.type === 'grocery-store' && (entry.groceriesFlat || entry.groceryIds) && (
          <MiniList title="Groceries" cuisineData={cuisineData} flat={entry.groceriesFlat} ids={entry.groceryIds} />
        )}
        {entry.type === 'restaurant' && (entry.dishesFlat || entry.dishIds) && (
          <MiniList title="Dishes" cuisineData={cuisineData} flat={entry.dishesFlat} ids={entry.dishIds} />
        )}
        <span class="disclaimer">
          Disclaimer: views expressed are purely the personal opinions of the author
          and should not be taken as advice. The author is not affiliated with any listed establishments.
        </span>
      </div>
    </div>
  );
}

export default function DetailsOverlay(props: {
  cuisineData: CuisineMap,
}) {
  const { selectedId, navigateToId } = useIdNav();

  return (
    <div class={`cuisine-right-over ${selectedId ? 'selected' : ''}`} onClick={() => navigateToId(undefined)}>
      {selectedId && <Details cuisineData={props.cuisineData} entryId={selectedId} />}
    </div>
  );
}
