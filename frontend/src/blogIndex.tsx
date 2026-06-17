import type { ReactNode } from 'react';

// Blog page imports
import DefenseOfDigital from './pages/blog/DefenseOfDigital';
import BuildingForYourself from './pages/blog/BuildingForYourself';
import LessOfTheInternet from './pages/blog/LessOfTheInternet';
import LearnToCook from './pages/blog/LearnToCook';

export const blogPages: Record<string, () => ReactNode> = {
  "learn_to_cook": LearnToCook,
  "less_of_the_internet": LessOfTheInternet,
  "building_for_yourself": BuildingForYourself,
  "defense_of_digital": DefenseOfDigital,
};
