import DigitalNotes from './assets/images/blog/DigitalNotes.png';
import CuisineBlur from './assets/images/blog/CuisineBlur.png';

import type { BlogMetadata } from './types';

const blogMetadata: Record<string, BlogMetadata> = {
  "building_for_yourself": {
    href: "building_for_yourself",
    date: "2025/12/24",
    title: "Building for yourself",
    descr: "Creating things for fun in your free time helps you build for others in the long term",
    backgroundImageUrl: CuisineBlur
  },
  "defense_of_digital": {
    href: "defense_of_digital",
    date: "2025/06/14",
    title: "A philosophical defense of digital notetaking",
    descr: "and of technology in general (when it's used right)",
    backgroundImageUrl: DigitalNotes
  }
}

export default blogMetadata;
