import type { ReactNode } from 'react';

// Image imports
import DigitalNotes from './assets/images/blog/DigitalNotes.png';

// Blog page imports
// TODO: impl

export type BlogMetadata = {
  date: string;
  title: string;
  descr: string;
  href: string;
  backgroundImageUrl: string;
};

export type BlogData = {
  meta: BlogMetadata;
  page: ReactNode;
};

export const blogIndex: BlogData[] = [
  {
    meta: {
      date: "2025/06/14",
      title: "A philosophical defense of digital notetaking",
      descr: "and of technology in general (when it's used right)",
      href: "https://cadenlee2.github.io/blog/defense_of_digital.html",
      backgroundImageUrl: DigitalNotes
    },
    page: <span>Hi</span>
  }
];
