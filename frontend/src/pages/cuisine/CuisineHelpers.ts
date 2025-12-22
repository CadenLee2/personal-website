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

function stringsMatch(searchIn: string, searchFor: string) {
  return searchIn.toLowerCase().includes(searchFor.toLowerCase());
}

function containsKeywords(entry: CuisineEntry, keywords: string) {
  return Object.values(entry).some(v => (
    (typeof v === 'string' && stringsMatch(v, keywords))
    || (Array.isArray(v) && v.some(inner => (
      (typeof inner === 'string' && stringsMatch(inner, keywords))
      || (typeof inner !== 'string' && Object.values(inner).some(z => (
        typeof z === 'string' && stringsMatch(z, keywords)
      )))
    )))
  ));
}

function matchesFilters(entry: CuisineEntry, filters: CuisineFilters) {
  if (filters.keywords) {
    if (!containsKeywords(entry, filters.keywords)) return false;
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
