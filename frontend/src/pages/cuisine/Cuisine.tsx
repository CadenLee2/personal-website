import './Cuisine.css';

import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import type {
  CuisineEntry,
  CuisineMap,
  CuisineFilters,
  CuisineCategory,
} from './CuisineTypes';

import { fetchAllCuisineData, filterCuisine } from './CuisineHelpers';

import Marquee from '../../components/Marquee';

import { MdLocationPin } from 'react-icons/md';

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

function Details(props: {cuisineData: CuisineMap, entryId: string}) {
  const { cuisineData, entryId } = props;

  const entry = entryId in cuisineData ? cuisineData[entryId] : null;
  if (!entry) return (
    <div className="details">
      <i>Loading...</i>
    </div>
  );

  return (
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
      <span className="disclaimer">
        Disclaimer: views expressed are purely the personal opinions of the author
        and should not be taken as advice
      </span>
    </div>
  );
}

export default function Cuisine() {
  const [cuisineData, setCuisineData] = useState<CuisineMap>({});
  const [filtered, setFiltered] = useState<CuisineMap>({});
  const [filters, setFilters] = useState<CuisineFilters>({
    category: 'all'
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedId = searchParams.get('id');

  const navigateToId = (newId: string) => {
    const s = searchParams;
    s.set('id', newId);
    setSearchParams(s);
  }

  useEffect(() => {
    fetchAllCuisineData().then(res => setCuisineData(res));
  }, [setCuisineData]);

  useEffect(() => {
    setFiltered(filterCuisine(cuisineData, filters));
  }, [filters, cuisineData]);

  // TODO: refactor some JSX

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
          <h1>Cuisine</h1>
          <Marquee duration={30}>
            See recipes, dishes, groceries, restaurants, and grocery stores, in one place. Only first-hand, authentic reports are included.
          </Marquee>
        </div>
        <SearchAndFilter filters={filters} setFilters={setFilters} />
        <div className="main-list">
          {Object.entries(filtered).map(([key, val]) => (
            <EntryCard key={key} entry={val} onClick={() => navigateToId(key)} />
          ))}
        </div>
      </div>
      <div className="right">
        {selectedId ? <Details cuisineData={cuisineData} entryId={selectedId} /> : (
          <span>
            <i>Select an entry to see details</i>
          </span>
        )}
      </div>
    </div>
  );
}
