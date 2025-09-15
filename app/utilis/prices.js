// export const Prices = { 
//   "Airport transfer": 40000,
//   "Intrastate": 60000,
//   "Interstate": 100000,
//   "Uyo Half Day": 70000,
//   "Uyo Full Day": 100000,
//   "Wedding Full Day": 120000,
//   "Others": 60000
// };


export const Prices = [
  { id: 1, title: "Airport transfer", value: 40000 },
  { id: 2, title: "Intrastate", value: 60000 },
  { id: 3, title: "Interstate", value: 100000 },
  { id: 4, title: "Uyo Half Day", value: 70000 },
  { id: 5, title: "Uyo Full Day", value: 100000 },
  { id: 6, title: "Wedding Full Day", value: 120000 },
];


// // 👉 quick lookup object for calculations
// export const PriceMap = Prices.reduce((acc, p) => {
//   acc[p.title] = p.value;
//   return acc;
// }, {});
