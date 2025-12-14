import type { BlogData } from './types';
import blogMetadata from './blogMetadata';

// Blog page imports
import DefenseOfDigital from './pages/blog/DefenseOfDigital';

export const blogIndex: BlogData[] = [
  {
    meta: blogMetadata['defense_of_digital'],
    page: DefenseOfDigital
  }
];
