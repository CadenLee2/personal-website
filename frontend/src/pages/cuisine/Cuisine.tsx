import './Cuisine.css';

import { useEffect, useState, useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import type {
  SimpleEntry,
  CuisineEntry,
  CuisineMap,
  CuisineFilters,
  CuisineCategory,
} from './CuisineTypes';

import { fetchAllCuisineData, filterCuisine } from './CuisineHelpers';

import Marquee from '../../components/Marquee';

import { MdLocationPin, MdMap, MdSearch } from 'react-icons/md';

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import type { LeafletKeyboardEventHandlerFn } from 'leaflet';

import { useIsMobile } from '../../hooks';

function useIdNav() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedId = searchParams.get('id');

  const navigateToId = useCallback((newId: string | undefined) => {
    const s = searchParams;
    if (newId) {
      s.set('id', newId);
    } else {
      s.delete('id');
    }
    setSearchParams(s);
  }, [setSearchParams, searchParams]);

  return { selectedId, navigateToId };
}

function EntryIdentifier(props: {entry: CuisineEntry}) {
  const { entry } = props;

  if (entry.type === 'dish') return <span>Dish</span>;
  if (entry.type === 'restaurant') return <span>Restaurant in {entry.city}</span>;
  if (entry.type === 'recipe') return <span>Recipe</span>;
  if (entry.type === 'grocery') return <span>Grocery ({entry.priceEfficiencyRating}/10 for the price)</span>;
  if (entry.type === 'grocery-store') return <span>Grocery store in {entry.city}</span>;
}

function EntryCard(props: {entry: CuisineEntry, onClick: () => void}) {
  const { entry, onClick } = props;

  return (
    <button className="card" onClick={onClick}>
      <div className="header">
        <h3>{entry.title}</h3>
        <span>{entry.dateReviewed}</span>
      </div>
      <div>
        <RatingDisp rating={entry.rating} /> - <EntryIdentifier entry={entry} />
      </div>
      <div className="explanation">{entry.explanation}</div>
    </button>
  );
}

function SearchAndFilter(props: {
  filters: CuisineFilters,
  setFilters: (newFilters: CuisineFilters) => void,
}) {
  const { filters, setFilters } = props;

  const setCategory = (newCategory: CuisineCategory) => {
    setFilters({
      ...filters,
      category: newCategory,
    })
  }

  const setKeywords = (newKeywords: string) => {
    setFilters({
      ...filters,
      keywords: newKeywords === '' ? undefined : newKeywords
    })
  }

  const categoryOptions: CuisineCategory[] = ['all', 'locations', 'foods'];

  return (
    <div className="filters">
      <div className="categories">
        {categoryOptions.map(option => (
          <button key={option} onClick={() => setCategory(option)} disabled={filters.category === option}>
            {option}
          </button>
        ))}
      </div>
      <div className="search">
        <input
          value={filters.keywords ?? ''}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Search for keywords..."
        />
      </div>
    </div>
  );
}

function RatingDisp(props: {rating: number}) {
  const { rating } = props;

  return (
    <span className={`chip r${rating}`}>{rating}/10</span>
  );
}

function LocationMark(props: {entry: CuisineEntry}) {
  const { entry } = props;
  if (entry.type === 'grocery-store' || entry.type === 'restaurant') {
    if (entry.mapsLink) {
      return (
        <a title="View on maps" href={entry.mapsLink}><MdLocationPin /></a>
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

function Details(props: {cuisineData: CuisineMap, entryId: string}) {
  const { cuisineData, entryId } = props;

  const { navigateToId } = useIdNav();

  const entry = entryId in cuisineData ? cuisineData[entryId] : null;
  if (!entry) return (
    <div className="details">
      <i>Loading...</i>
    </div>
  );

  // TODO: escape button functionality on click
  const escape = () => {
    navigateToId(undefined);
  }

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
        </div>
        <div className="section-divider"><hr /></div>
        <div className="body">
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

function CuisineMarker(props: { id: string, entry: CuisineEntry }) {
  const { id, entry } = props;

  const { navigateToId } = useIdNav();

  const handleClick = () => {
    navigateToId(id);
  }

  const handleKeydown: LeafletKeyboardEventHandlerFn = (e) => {
    if (e.originalEvent.key === 'Enter') {
      navigateToId(id);
    }
  }

  if ('latitude' in entry && 'longitude' in entry && entry['latitude'] && entry['longitude']) {
    return (
      <Marker eventHandlers={{ click: handleClick, keydown: handleKeydown }} position={[entry.latitude, entry.longitude]}>;
        <Tooltip direction="top" offset={[-15, 0]}>
          {entry.title}
        </Tooltip>
      </Marker>
    );
  } else {
    return null;
  }
}

function CuisineMap(props: { cuisineData: CuisineMap }) {
  const { cuisineData } = props;

  return (
    <>
      <MapContainer
        center={[33.8, -118]}
        zoom={10}
        scrollWheelZoom={true}
        className="map-container"
      >
        {Object.entries(cuisineData).map(([key, val]) => <CuisineMarker id={key} key={key} entry={val} />)}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
}

type MobileScreen = 'list' | 'map';

function ScreenSelector(props: { screen: MobileScreen, setScreen: (s: MobileScreen) => void}) {
  const { screen, setScreen } = props;

  return (
    <div className="screen-selector">
      <button disabled={screen === 'list'} onClick={() => setScreen('list')}>
        <MdSearch />
      </button>
      <button disabled={screen === 'map'} onClick={() => setScreen('map')}>
        <MdMap />
      </button>
    </div>
  );
}

export default function Cuisine() {
  const [cuisineData, setCuisineData] = useState<CuisineMap>({});
  const [filtered, setFiltered] = useState<CuisineMap>({});
  const [filters, setFilters] = useState<CuisineFilters>({
    category: 'all'
  });

  const isMobile = useIsMobile();

  const [mobileScreen, setMobileScreen] = useState<MobileScreen>('list');
  const [seenMap, setSeenMap] = useState(false);

  // Avoid Leaflet issues with size not updating properly
  useEffect(() => {
    if (mobileScreen === 'map') setSeenMap(true);
  }, [mobileScreen, setSeenMap]);

  const { selectedId, navigateToId } = useIdNav();

  useEffect(() => {
    fetchAllCuisineData().then(res => setCuisineData(res));
  }, [setCuisineData]);

  useEffect(() => {
    setFiltered(filterCuisine(cuisineData, filters));
  }, [filters, cuisineData]);

  // TODO: refactor some JSX
  // TODO: move the "for the price" rating out of the identifier

  const pageTitle = (selectedId && selectedId in cuisineData)
    ? (`${cuisineData[selectedId].title} - Cuisine`)
    : "Cuisine";

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigateToId(undefined);
      }
    }

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    }
  }, [navigateToId]);

  return (
    <div className="main">
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content="Food ratings" />
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Cuisine</h1>
          <Marquee duration={30}>
            See recipes, dishes, groceries, restaurants, and grocery stores in one place. You can trust that only first-hand reports are included.
          </Marquee>
        </div>
        {(!isMobile || mobileScreen === 'list') && (
          <>
            <SearchAndFilter filters={filters} setFilters={setFilters} />
            <div className="main-list">
              {Object.entries(filtered).map(([key, val]) => (
                <EntryCard key={key} entry={val} onClick={() => navigateToId(key)} />
              ))}
            </div>
          </>
        )}
        {isMobile && seenMap && (
          <div className={mobileScreen === 'map' ? 'mobile-map' : 'hidden'}>
            <CuisineMap cuisineData={filtered} />
          </div>
        )}
        {isMobile && <ScreenSelector screen={mobileScreen} setScreen={setMobileScreen} />}
      </div>
      {!isMobile && (
        <div className="right">
          <CuisineMap cuisineData={filtered} />
          <div className={`right-over ${selectedId ? 'selected' : ''}`} onClick={() => navigateToId(undefined)}>
            {selectedId && <Details cuisineData={cuisineData} entryId={selectedId} />}
          </div>
        </div>
      )}
      {isMobile && (
        <div className={`right-over ${selectedId ? 'selected' : ''}`} onClick={() => navigateToId(undefined)}>
          {selectedId && <Details cuisineData={cuisineData} entryId={selectedId} />}
        </div>
      )}
    </div>
  );
}
