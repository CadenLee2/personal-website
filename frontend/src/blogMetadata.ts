type BlogMetadata = {
  date: string;
  title: string;
  descr: string;
  categories: string[];
  imageUrl: string;
};

export const blogIdsOrdered: string[] = [
  "learn_to_cook",
  "less_of_the_internet",
  "building_for_yourself",
  "defense_of_digital",
];

const blogMetadata: Record<string, BlogMetadata> = {
  "learn_to_cook": {
    date: "2026/06/17",
    title: "Learn to cook",
    descr: "It's worth it!",
    categories: ["habits", "interests"],
    imageUrl: "/images/blog/LearnToCook.png",
  },
  "less_of_the_internet": {
    date: "2026/03/12",
    title: "Less of the Internet",
    descr: "Making the most of the Information Age",
    categories: ["habits"],
    imageUrl: "/images/blog/LessOfTheInternet.jpg",
  },
  "building_for_yourself": {
    date: "2026/01/03",
    title: "Building for yourself",
    descr: "Creating things for fun in your free time helps you build for others in the long term",
    categories: ["development"],
    imageUrl: "/images/blog/CuisineBlur.png",
  },
  "defense_of_digital": {
    date: "2025/06/14",
    title: "A philosophical defense of digital notetaking",
    descr: "and of technology in general (when it's used right)",
    categories: ["software", "editing", "habits"],
    imageUrl: "/images/blog/DigitalNotes.png",
  },
}

export default blogMetadata;
