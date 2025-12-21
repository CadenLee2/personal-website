export type Friend = {
  name: string;
  siteUrl: string;
}

export type Dish = {
  type: 'dish';
};

export type Restaurant = {
  type: 'restaurant';
  city: string;
  mapsLink?: string;
  latitude?: number;
  longitude?: number;
  dishIds?: string[];
};

export type Grocery = {
  type: 'grocery';
  priceEfficiencyRating: number;
};

export type Recipe = {
  type: 'recipe';
  directions?: string;
  ingredientGroceryIds?: string[];
};

export type GroceryChain = {
  type: 'grocery-chain';
  city: string;
  mapsLink?: string;
  latitude?: number;
  longitude?: number;
  groceryIds?: string[];
};

export type CuisineEntry = (Dish | Grocery | Restaurant | Recipe | GroceryChain) & {
  title: string;
  rating: number;
  explanation?: string;
  triedWith?: Friend[];
  imageUrl?: string;
  dateReviewed?: string;
};

export type CuisineMap = Record<string, CuisineEntry>;

// TODO: replace with real data
export const EXAMPLE_DATA: CuisineMap = {
  "brandy": {
    type: 'restaurant',
    title: "Brandywine",
    rating: 5,
    city: 'Irvine',
    explanation: "Great the first time you go. A week later, you'll learn to never eat the O'Brien Potatoes.",
    imageUrl: "https://cdn3.emoji.gg/emojis/71338-iphone-skull.png",
    mapsLink: "https://maps.app.goo.gl/9cPPQdbKz1w3zDRf6",
    latitude: -117.8390312593668,
    longitude: 33.64564363107272,
    dishIds: ['obrien_potatoes', 'chicken_katsu_curry', 'brandy_burger'],
    dateReviewed: '2025/12/20'
  },
  "albertsons": {
    type: 'grocery-chain',
    title: "UCI Albertson's",
    rating: 10,
    city: 'Irvine',
    explanation: "Expensive until you get the app (saved ~30% on every purchase since then). $5 fridays are excellent",
    mapsLink: "https://maps.app.goo.gl/9cPPQdbKz1w3zDRf6",
    latitude: -117.83132202957539,
    longitude: 33.65008079698865,
    groceryIds: ['albertsons_chicken', 'waterfront_shrimp', 'scallion_pancakes'],
    dateReviewed: '2025/12/20'
  },
  "frozen_shrimp": {
    type: "grocery",
    title: "Waterfront Bistro Frozen Shrimp",
    rating: 9,
    explanation: "Get this one when it's on sale.",
    priceEfficiencyRating: 10,
    dateReviewed: "2025/12/20"
  }
};

export async function fetchAllCuisineData(): Promise<CuisineMap> {
  // TODO: replace with actual data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(EXAMPLE_DATA);
    }, 200);
  });
}
