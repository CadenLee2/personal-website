import type { ReactNode } from 'react';

// Blog page imports
import DefenseOfDigital from './pages/blog/DefenseOfDigital';
import BuildingForYourself from './pages/blog/BuildingForYourself';

export const blogPages: Record<string, () => ReactNode> = {
  "building_for_yourself": BuildingForYourself,
  "defense_of_digital": DefenseOfDigital,
};

export const blogIds = [
  "building_for_yourself",
  "defense_of_digital",
];
