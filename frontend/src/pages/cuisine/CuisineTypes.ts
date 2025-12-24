export type Friend = {
  name: string;
  siteUrl: string;
}

export type Dish = {
  type: 'dish';
};

export type SimpleEntry = {
  title: string;
  rating: number;
}

export type Restaurant = {
  type: 'restaurant';
  city: string;
  mapsLink?: string;
  latitude?: number;
  longitude?: number;
  dishIds?: string[];
  dishesFlat?: SimpleEntry[];
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

export type GroceryStore = {
  type: 'grocery-store';
  city: string;
  mapsLink?: string;
  latitude?: number;
  longitude?: number;
  groceryIds?: string[];
  groceriesFlat?: SimpleEntry[];
};

export type CuisineEntry = (Dish | Grocery | Restaurant | Recipe | GroceryStore) & {
  title: string;
  rating: number;
  dateReviewed: string;
  explanation?: string;
  triedWith?: Friend[];
  imageUrl?: string;
};

export type CuisineMap = Record<string, CuisineEntry>;

export type CuisineCategory = 'locations' | 'foods' | 'all';

export type CuisineFilters = {
  keywords?: string;
  category: CuisineCategory;
};

// Example entry using the cuisine type
/*
  "tokyo_central": {
    type: 'grocery-store',
    title: "Tokyo Central",
    rating: 10,
    dateReviewed: '2025/12/21',
    explanation: "Excellent selection and pricing, especially their fresh seafood and meat; the only problem is that you'll want to purchase everything. Sushi restaurant upstairs is also great.",
    city: 'Gardena',
    mapsLink: "https://maps.app.goo.gl/M7JWAKbNCmuTeejB6",
    latitude: 33.87216276093707,
    longitude: -118.3076329780358,
    groceryIds: ['cororo'],
    groceriesFlat: [
      {
        title: "Hondashi",
        rating: 10
      }
    ]
  }
*/
