import './Cuisine.css';
import './DetailsOverlay.css';

import type { CuisineMap, CuisineEntry, SimpleEntry, Friend } from './CuisineTypes';
import { useIdNav } from './hooks';
import { EntryIdentifier, RatingDisp } from './shared';

import { MdLocationPin, MdPeopleAlt } from 'react-icons/md';

function LocationMark(props: {entry: CuisineEntry}) {
  const { entry } = props;
  if (entry.type === 'grocery-store' || entry.type === 'restaurant') {
    if (entry.mapsLink) {
      return (
        <a target="_blank" title="View on maps" href={entry.mapsLink} className="map-icon">
          <MdLocationPin />
        </a>
      );
    }
  } else {
    return null;
  }
}

function MiniCard(props: { id?: string, title: string, rating: number }) {
  const { id, title, rating } = props;

  const { navigateToId } = useIdNav();

  return (
    <div className="mini-card">
      <RatingDisp rating={rating} />
      <span>{id ? <button onClick={() => navigateToId(id)}>{title}</button> : title}</span>
    </div>
  );
}

function MiniList(props: { cuisineData: CuisineMap, flat?: SimpleEntry[], ids?: string[], title: string }) {
  const { cuisineData, flat, ids, title } = props;

  return (
    <>
      <h3>{title}</h3>
      <div className="mini-list">
        {ids && ids.map(
          i => i in cuisineData && <MiniCard key={cuisineData[i].title} id={i} title={cuisineData[i].title} rating={cuisineData[i].rating} />
        )}
        {flat && flat.map(
          f => <MiniCard key={f.title} title={f.title} rating={f.rating} />
        )}
      </div>
    </>
  );
}

function TriedWith(props: {friends: Friend[]}) {
  const { friends } = props;

  return (
    <span className="tried-with subspan">
      <MdPeopleAlt />
      <span>
        Tried with:
      </span>
      {friends.map(friend => friend.siteUrl ? (
        <a className="friend" href={friend.siteUrl}>{friend.name}</a>
      ) : (
        <span className="friend">{friend.name}</span>
      ))}
    </span>
  );
}

function Details(props: {cuisineData: CuisineMap, entryId: string}) {
  const { cuisineData, entryId } = props;

  const { navigateToId } = useIdNav();

  const escape = () => {
    navigateToId(undefined);
  }

  const entry = entryId in cuisineData ? cuisineData[entryId] : null;

  if (!entry) return (
    <div className="details-wrapper" onClick={(e) => e.stopPropagation()}>
      <button onClick={escape} className="escape-hotkey">[ESC]</button>
      <div className="details">
        <i>Loading...</i>
      </div>
    </div>
  );

  return (
    <div className="details-wrapper" onClick={(e) => e.stopPropagation()}>
      <button onClick={escape} className="escape-hotkey">[ESC]</button>
      <div className="details">
        <div className="header">
          <h2>{entry.title}</h2>
          <span title="Date reviewed">{entry.dateReviewed}</span>
        </div>
        <EntryIdentifier entry={entry} />
        <div className="misc-info">
          <RatingDisp rating={entry.rating} />
          <LocationMark entry={entry} />
          {entry.type === 'grocery' && (
            <>
              <span className="subspan">(For the price:</span>
              <RatingDisp rating={entry.priceEfficiencyRating} />
              <span className="subspan">)</span>
            </>
          )}
          {entry.triedWith && <TriedWith friends={entry.triedWith} />}
        </div>
        <div className="section-divider"><hr /></div>
        <div>
          {entry.explanation ?? <i>No details provided</i>}
        </div>
        <div className="section-divider"><hr /></div>
        {entry.type === 'grocery-store' && (entry.groceriesFlat || entry.groceryIds) && (
          <MiniList title="Groceries" cuisineData={cuisineData} flat={entry.groceriesFlat} ids={entry.groceryIds} />
        )}
        {entry.type === 'restaurant' && (entry.dishesFlat || entry.dishIds) && (
          <MiniList title="Dishes" cuisineData={cuisineData} flat={entry.dishesFlat} ids={entry.dishIds} />
        )}
        <span className="disclaimer">
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
  const { cuisineData } = props;

  const { selectedId, navigateToId } = useIdNav();

  return (
    <div className={`right-over ${selectedId ? 'selected' : ''}`} onClick={() => navigateToId(undefined)}>
      {selectedId && <Details cuisineData={cuisineData} entryId={selectedId} />}
    </div>
  );
}
