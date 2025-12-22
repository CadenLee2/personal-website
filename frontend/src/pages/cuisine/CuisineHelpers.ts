import type { CuisineMap, CuisineEntry, CuisineFilters } from './CuisineTypes';
import EXAMPLE_DATA from './CuisineExampleData';

export async function fetchAllCuisineData(): Promise<CuisineMap> {
  // TODO: replace with actual data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(EXAMPLE_DATA);
    }, 200);
  });
}

function isLocation(entry: CuisineEntry) {
  return entry.type === 'restaurant' || entry.type === 'grocery-store';
}

function matchesFilters(entry: CuisineEntry, filters: CuisineFilters) {
  if (filters.keywords) {
    const searchFor = filters.keywords;
    const containsKeywords = Object.values(entry).some(v => (
      typeof v === 'string' && v.includes(searchFor)
    ))
    if (!containsKeywords) return false;
  }
  if (filters.category === 'locations') {
    if (!isLocation(entry)) return false;
  } else if (filters.category === 'foods') {
    if (isLocation(entry)) return false;
  }
  return true;
}

export function filterCuisine(all: CuisineMap, filters: CuisineFilters): CuisineMap {
  const matching = Object.entries(all).filter(([, entry]) => matchesFilters(entry, filters));
  const sorted = matching.sort(([, a], [, b]) => {
    if (a.dateReviewed > b.dateReviewed) return -1;
    if (a.dateReviewed < b.dateReviewed) return 1;
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  })
  return Object.fromEntries(sorted);
}
