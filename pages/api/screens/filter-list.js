const filterList = [
  {
    id: 1,
    name: "all",
  },
  {
    id: 2,
    name: "New",
  },
  {
    id: 3,
    name: "Popular",
  },
  {
    id: 4,
    name: "Onboarding",
  },
  {
    id: 5,
    name: "Auth",
  },
  {
    id: 6,
    name: "Shop",
  },
  {
    id: 7,
    name: "Chat",
  },
  {
    id: 8,
    name: "TOP Verification",
  },
  {
    id: 9,
    name: "Dashboard",
  },
  {
    id: 10,
    name: "Food",
  },
  {
    id: 11,
    name: "Restaurent",
  },
  {
    id: 12,
    name: "Fitness",
  },
];

export default function handler(req, res) {
  res.status(200).json(filterList);
}
