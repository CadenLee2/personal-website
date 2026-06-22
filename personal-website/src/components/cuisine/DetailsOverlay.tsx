import './DetailsOverlay.css';

import type { CuisineMap, CuisineEntry, SimpleEntry, Friend } from './CuisineTypes';
import { useIdNav } from './hooks';
import { EntryIdentifier, RatingDisp } from '~/components/cuisine/shared';

import { For, Switch, Match, Show, Resource, createMemo } from 'solid-js';

// TODO: is MdFillPin the right icon?
import { MdFillArrow_outward, MdFillPeople_alt } from 'solid-icons/md';

function LocationMark(props: {entry: CuisineEntry}) {
  const entry = props.entry;

  // TODO: type error with mapsLink

  return (
    <Show when={(entry.type === 'grocery-store' || entry.type === 'restaurant') && entry.mapsLink}>
      <a target="_blank" title="View on maps" href={('mapsLink' in entry) ? entry.mapsLink : undefined} class="map-icon">
        <MdFillArrow_outward />
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

function DetailsContent(props: {cuisineData: CuisineMap, entry: CuisineEntry}) {
  const entry = props.entry;

  return (
    <div class="details">
      <div class="cuisine-header">
        <h2>{entry.title}</h2>
        <span title="Date reviewed">{entry.dateReviewed}</span>
      </div>
      <EntryIdentifier entry={entry} />
      <div class="misc-info">
        <RatingDisp rating={entry.rating} />
        <LocationMark entry={entry} />
        <Show when={entry.type === 'grocery'}>
          <>
            <span class="subspan">(For the price:</span>
            <RatingDisp rating={entry.type === 'grocery' ? entry.priceEfficiencyRating! : 0} />
            <span class="subspan">)</span>
          </>
          )}
        </Show>
        {entry.triedWith && <TriedWith friends={entry.triedWith} />}
      </div>
      <div class="section-divider"><hr /></div>
      <div class="explanation">
        <ExplanationParagraphs explanation={entry.explanation} />
      </div>
      <div class="section-divider"><hr /></div>
      {entry.type === 'grocery-store' && (entry.groceriesFlat || entry.groceryIds) && (
        <MiniList title="Groceries" cuisineData={props.cuisineData!} flat={entry.groceriesFlat} ids={entry.groceryIds} />
      )}
      {entry.type === 'restaurant' && (entry.dishesFlat || entry.dishIds) && (
        <MiniList title="Dishes" cuisineData={props.cuisineData!} flat={entry.dishesFlat} ids={entry.dishIds} />
      )}
      <span class="disclaimer">
        Disclaimer: views expressed are purely the personal opinions of the author
        and should not be taken as advice. The author is not affiliated with any listed establishments.
      </span>
    </div>
  );
}

function Details(props: {cuisineData: Resource<CuisineMap>, entryId: string}) {
  // TODO: clean up
  const cuisineData = props.cuisineData;
  const entryId = props.entryId;

  const { navigateToId } = useIdNav();

  const escape = () => {
    navigateToId(undefined);
  }

  const notLoaded = cuisineData.state !== 'ready' || !(entryId in cuisineData());
  if (notLoaded) return (
    <div class="details-wrapper" onClick={(e) => e.stopPropagation()}>
      <button onClick={escape} class="escape-hotkey">[ESC]</button>
      <div class="details">
        <i>Loading...</i>
      </div>
    </div>
  );

  const entry = createMemo(() => {
    return cuisineData()[entryId];
  });

  // TODO: replace all conditional returns with match or show

  // TODO: LOADING ANIMATION based on the resource

  return (
    <div class="details-wrapper" onClick={(e) => e.stopPropagation()}>
      <button onClick={escape} class="escape-hotkey">[ESC]</button>
      <DetailsContent cuisineData={cuisineData()} entry={entry()} />
    </div>
  );
}

export default function DetailsOverlay(props: {
  cuisineData: Resource<CuisineMap>,
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
