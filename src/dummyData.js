export const sarvamitraData = [
  {
    id: 1,
    name: "Sangamner",
    latitude: 18.5,
    longitude: 73.7,
    radiusServing: 50,
    equipments: { Tractor: 1000, Thresher: 2000, Drone: 3000, Rotavator: 7800 },
  },
  {
    id: 2,
    name: "Akole",
    latitude: 18.6,
    longitude: 73.8,
    radiusServing: 50,
    equipments: { Tractor: 1200, Thresher: 2100, Drone: 2900, Rotavator: 7800 },
  },
  {
    id: 3,
    name: "Kheda",
    latitude: 50,
    longitude: 22,
    radiusServing: 50,
    equipments: ["Tractor", "Thresher", "Drone", "Rotavator"],
  },
  {
    id: 4,
    name: "Borsad",
    latitude: 50,
    longitude: 22,
    radiusServing: 50,
    equipments: ["Tractor", "Thresher", "Drone", "Rotavator"],
  },
  {
    id: 5,
    name: "Saswad",
    latitude: 18.6,
    longitude: 73.9,
    radiusServing: 50,
    equipments: { Tractor: 1300, Thresher: 1500, Drone: 2700, Rotavator: 6000 },
  },
];

export const equipmentInfo = {
  Tractor: {
    usedFor: "Ploughing, Tilling, Dowing, and Harrowing",
    purchasedOn: "24-05-2000",
    usedByCustomers: 198,
    customerRatings: 3.6,
  },
  Thresher: {
    usedFor: "Separating grain from chaff and straw",
    purchasedOn: "26-07-2010",
    usedByCustomers: 898,
    customerRatings: 4,
  },
  Drone: {
    usedFor:
      "Assessing the health of any vegetation or crop, field areas inflicted by weeds, infections and pests ",
    purchasedOn: "22-10-2022",
    usedByCustomers: 101,
    customerRatings: 3.1,
  },
  Rotavator: {
    usedFor:
      "Seed bed preparation within one or two passes and is suitable in removing & mixing residual of maize",
    purchasedOn: "22-10-2022",
    usedByCustomers: 101,
    customerRatings: 4.8,
  },
};
