import './Cuisine.css';

import type { CuisineEntry } from './CuisineTypes';

export function EntryIdentifier(props: {entry: CuisineEntry}) {
  const { entry } = props;

  if (entry.type === 'dish') return <span>Dish</span>;
  if (entry.type === 'restaurant') return <span>Restaurant in {entry.city}</span>;
  if (entry.type === 'recipe') return <span>Recipe</span>;
  if (entry.type === 'grocery') return <span>Grocery</span>;
  if (entry.type === 'grocery-store') return <span>Grocery store in {entry.city}</span>;
}

export function RatingDisp(props: {rating: number}) {
  const { rating } = props;

  return (
    <span className={`chip r${rating}`}>{rating}/10</span>
  );
}
