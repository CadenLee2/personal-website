import type { BlogData } from './types';
import blogMetadata from './blogMetadata';

// Blog page imports
import DefenseOfDigital from './pages/blog/DefenseOfDigital';
import BuildingForYourself from './pages/blog/BuildingForYourself';

export const blogIndex: BlogData[] = [
  {
    meta: blogMetadata['building_for_yourself'],
    page: BuildingForYourself
  },
  {
    meta: blogMetadata['defense_of_digital'],
    page: DefenseOfDigital
  }
];
