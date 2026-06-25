import type { CuisineEntry } from './CuisineTypes';

export function EntryIdentifier(props: {entry: CuisineEntry}) {
  const text = () => {
    switch (props.entry.type) {
      case 'dish':
        return 'Dish';
      case 'restaurant':
        return `Restaurant in ${props.entry.city}`;
      case 'recipe':
        return 'Recipe';
      case 'grocery':
        return 'Grocery';
      case 'grocery-store':
        return `Grocery store in ${props.entry.city}`;
    }
  };

  return <span>{text()}</span>
}

export function RatingDisp(props: {rating: number}) {
  const className = () => `chip r${props.rating}`;
  return (
    <span class={className()}>{props.rating}/10</span>
  );
}
