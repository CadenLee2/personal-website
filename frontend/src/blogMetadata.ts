type BlogMetadata = {
  date: string;
  title: string;
  descr: string;
  categories: string[];
};

const blogMetadata: Record<string, BlogMetadata> = {
  "building_for_yourself": {
    date: "2025/12/24",
    title: "Building for yourself",
    descr: "Creating things for fun in your free time helps you build for others in the long term",
    categories: ["development"],
  },
  "defense_of_digital": {
    date: "2025/06/14",
    title: "A philosophical defense of digital notetaking",
    descr: "and of technology in general (when it's used right)",
    categories: ["software", "editing"],
  }
}

export default blogMetadata;
