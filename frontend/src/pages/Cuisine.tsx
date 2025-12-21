import './Cuisine.css';

import { useEffect, useState } from 'react';

import type {
  CuisineEntry,
  CuisineMap
} from './CuisineData';

import { fetchAllCuisineData } from './CuisineData';

function EntryIdentifier(props: {entry: CuisineEntry}) {
  const { entry } = props;

  if (entry.type == 'dish') return <span>Dish</span>;
  if (entry.type == 'restaurant') return <span>Restaurant in {entry.city}</span>;
  if (entry.type == 'recipe') return <span>Recipe</span>;
  if (entry.type == 'grocery') return <span>Grocery ({entry.priceEfficiencyRating}/10 for the price)</span>;
  if (entry.type == 'grocery-chain') return <span>Grocery store in {entry.city}</span>;
}

function EntryCard(props: {entry: CuisineEntry}) {
  const { entry } = props;

  return (
    <div className="card">
      <h2>{entry.title}</h2>
      <div>
        {entry.rating}/10 - <EntryIdentifier entry={entry} />
      </div>
      <div className="explanation">{entry.explanation}</div>
    </div>
  );
}

export default function Cuisine() {
  const [cuisineData, setCuisineData] = useState<CuisineMap>({});

  useEffect(() => {
    fetchAllCuisineData().then(res => setCuisineData(res));
  }, []);

  return (
    <div className="main">
      <div className="main-list">
        {Object.entries(cuisineData).map(([key, val]) => <EntryCard key={key} entry={val} />)}
      </div>
    </div>
  );
}
