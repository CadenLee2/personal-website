import type { CuisineMap } from './CuisineTypes';

// TODO: replace with real data
const EXAMPLE_DATA: CuisineMap = {
  "brandy": {
    type: 'restaurant',
    title: "Brandywine",
    rating: 5,
    dateReviewed: '2025/12/20',
    explanation: "Great the first time you go. A week later, you'll learn to never eat the O'Brien Potatoes.",
    city: 'Irvine',
    imageUrl: "https://cdn3.emoji.gg/emojis/71338-iphone-skull.png",
    mapsLink: "https://maps.app.goo.gl/9cPPQdbKz1w3zDRf6",
    latitude: -117.8390312593668,
    longitude: 33.64564363107272,
    dishIds: ['obrien_potatoes', 'chicken_katsu_curry', 'brandy_burger'],
  },
  "albertsons": {
    type: 'grocery-store',
    title: "UCI Albertson's",
    rating: 10,
    dateReviewed: '2025/12/20',
    explanation: "Expensive until you get the app (saved ~30% on every purchase since then). $5 Fridays are excellent",
    city: 'Irvine',
    mapsLink: "https://maps.app.goo.gl/9cPPQdbKz1w3zDRf6",
    latitude: -117.83132202957539,
    longitude: 33.65008079698865,
    groceryIds: ['albertsons_chicken', 'waterfront_shrimp', 'scallion_pancakes'],
  },
  "frozen_shrimp": {
    type: "grocery",
    title: "Waterfront Bistro Frozen Shrimp",
    rating: 9,
    dateReviewed: "2025/12/20",
    explanation: "Get this one when it's on sale.",
    priceEfficiencyRating: 10,
  },
  "tokyo_central": {
    type: 'grocery-store',
    title: "Tokyo Central",
    rating: 10,
    dateReviewed: '2025/12/21',
    explanation: "Excellent selection and pricing, especially their fresh seafood and meat; the only problem is that you'll want to purchase everything. Sushi restaurant upstairs (see Waka Sakura) is also great. As the world's largest Japanese grocery store outside of Japan, it absolutely does not disappoint and is a wonderful experience to tour.",
    city: 'Gardena',
    mapsLink: "https://maps.app.goo.gl/M7JWAKbNCmuTeejB6",
    latitude: 33.87216276093707,
    longitude: -118.3076329780358,
    groceryIds: ['cororo']
  },
  "waka_sakura": {
    type: 'restaurant',
    title: "Waka Sakura",
    rating: 9,
    dateReviewed: '2025/12/21',
    explanation: "A conveyor belt sushi restaurant with great quality, variety, and atmosphere, along with efficient service. UI/UX of the ordering menu app could use improvement, as there were a number of small styling and usability issues (i.e. the arrow buttons were too small and confirmation modals were not up to date).",
    city: 'Gardena',
    mapsLink: "https://maps.app.goo.gl/VDRBgzewYL2hU4kR8",
    latitude: 33.872081435337215,
    longitude: -118.30764995977967,
    dishesFlat: [
      {
        title: "Seared tilefish nigiri",
        rating: 7,
      },
      {
        title: "Salmon Party nigiri combo",
        rating: 9,
      },
      {
        title: "Shrimp Lover nigiri combo",
        rating: 10,
      },
      {
        title: "Scallop nigiri combo",
        rating: 10,
      },
      {
        title: "Dragon Roll",
        rating: 10,
      },
    ]
  },
  "cororo": {
    type: "grocery",
    title: "CORORO Gummy Candy",
    rating: 10,
    dateReviewed: "2025/12/21",
    explanation: "The best candy. Muscat and Peach are the best flavors",
    priceEfficiencyRating: 7
  }
};

export default EXAMPLE_DATA;
