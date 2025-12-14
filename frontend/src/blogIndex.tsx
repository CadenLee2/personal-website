import type { ReactNode } from 'react';

// Image imports
import DigitalNotes from './assets/images/blog/DigitalNotes.png';

// Blog page imports
import DefenseOfDigital from './pages/blog/DefenseOfDigital';

export type BlogMetadata = {
  href: string;
  date: string;
  title: string;
  descr: string;
  backgroundImageUrl: string;
};

export type BlogData = {
  meta: BlogMetadata;
  page: () => ReactNode;
};

export const blogIndex: BlogData[] = [
  {
    meta: {
      href: "defense_of_digital",
      date: "2025/06/14",
      title: "A philosophical defense of digital notetaking",
      descr: "and of technology in general (when it's used right)",
      backgroundImageUrl: DigitalNotes
    },
    page: DefenseOfDigital
  }
];
