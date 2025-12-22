import './Cuisine.css';

import { useEffect, useState } from 'react';

import type {
  CuisineEntry,
  CuisineMap,
  CuisineFilters,
  CuisineCategory,
} from './CuisineTypes';

import { fetchAllCuisineData, filterCuisine } from './CuisineHelpers';

import Marquee from '../../components/Marquee';

function EntryIdentifier(props: {entry: CuisineEntry}) {
  const { entry } = props;

  if (entry.type === 'dish') return <span>Dish</span>;
  if (entry.type === 'restaurant') return <span>Restaurant in {entry.city}</span>;
  if (entry.type === 'recipe') return <span>Recipe</span>;
  if (entry.type === 'grocery') return <span>Grocery ({entry.priceEfficiencyRating}/10 for the price)</span>;
  if (entry.type === 'grocery-store') return <span>Grocery store in {entry.city}</span>;
}

function EntryCard(props: {entry: CuisineEntry}) {
  const { entry } = props;

  return (
    <button className="card">
      <div className="header">
        <h3>{entry.title}</h3>
        <span>{entry.dateReviewed}</span>
      </div>
      <div>
        {entry.rating}/10 - <EntryIdentifier entry={entry} />
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

  const categoryOptions: CuisineCategory[] = ['locations', 'foods', 'all'];

  return (
    <div>
      <input placeholder="Search for keywords..." />
      <div className="categories">
        {categoryOptions.map(option => (
          <button onClick={() => setCategory(option)} disabled={filters.category === option}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Cuisine() {
  const [cuisineData, setCuisineData] = useState<CuisineMap>({});
  const [filtered, setFiltered] = useState<CuisineMap>({});
  const [filters, setFilters] = useState<CuisineFilters>({
    category: 'locations'
  });

  useEffect(() => {
    fetchAllCuisineData().then(res => setCuisineData(res));
  }, []);

  useEffect(() => {
    setFiltered(filterCuisine(cuisineData, filters));
  }, [filters, filtered, cuisineData]);

  return (
    <div className="main">
      <div className="sidebar">
        <h1>Cuisine</h1>
        <Marquee duration={30}>
          See recipes, dishes, groceries, restaurants, and grocery stores, in one place. Only first-hand, authentic reports are included.
        </Marquee>
        <SearchAndFilter filters={filters} setFilters={setFilters} />
        <div className="main-list">
          {Object.entries(filtered).map(([key, val]) => <EntryCard key={key} entry={val} />)}
        </div>
      </div>
    </div>
  );
}
