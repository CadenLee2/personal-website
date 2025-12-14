import type { ReactNode } from 'react';

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
