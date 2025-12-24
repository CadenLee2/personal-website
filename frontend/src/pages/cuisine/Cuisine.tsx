import './Cuisine.css';

import { useEffect, useState } from 'react';

import type {
  CuisineEntry,
  CuisineMap,
  CuisineFilters,
  CuisineCategory,
} from './CuisineTypes';

import { fetchAllCuisineData, filterCuisine } from './CuisineHelpers';

import CuisineMapContainer from './Map';
import DetailsOverlay from './DetailsOverlay';
import { EntryIdentifier, RatingDisp } from './shared';
import Marquee from '../../components/Marquee';

import { MdMap, MdSearch, MdInfoOutline } from 'react-icons/md';

import { useIsMobile } from '../../hooks';
import { useIdNav } from './hooks';

import { NavLink } from 'react-router-dom';

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

  // Avoid Leaflet issues with size not updating properly after first render
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

  // TODO: simple loading spinner
  // TODO: "copy link" option?

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

  const pageTitle = (selectedId && selectedId in cuisineData)
    ? (`${cuisineData[selectedId].title} - Cuisine`)
    : "Cuisine";

  return (
    <div className="main">
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content="Food ratings" />
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="top-header">
            <h1>Cuisine</h1>
            <NavLink to="/blog/building_for_yourself">
              <MdInfoOutline />
            </NavLink>
          </div>
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
            <CuisineMapContainer cuisineData={filtered} />
          </div>
        )}
        {isMobile && <ScreenSelector screen={mobileScreen} setScreen={setMobileScreen} />}
      </div>
      {isMobile ? <DetailsOverlay cuisineData={cuisineData} /> : (
        <div className="right">
          <CuisineMapContainer cuisineData={filtered} />
          <DetailsOverlay cuisineData={cuisineData} />
        </div>
      )}
    </div>
  );
}
