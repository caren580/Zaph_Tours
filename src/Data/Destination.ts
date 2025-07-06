export interface Destination {
  name: string;
  image: string;
  description: string;
  link: string;
  groupPrice: string;
  individualPrice: string;
}

export const destinations: Destination[] = [
  {
    name: "Mount Kenya",
    image: "/assets/mount-kenya.jpg",
    description:
      "From lush forests to glacial peaks, Mount Kenya offers an unforgettable trekking experience.",
    link: "#",
    groupPrice: "$1200",
    individualPrice: "$300",
  },
  {
    name: "Lake Nakuru",
    image: "/assets/lake-nakuru.jpg",
    description:
      "From rhinos to giraffes, Lake Nakuru National Park offers diverse wildlife sightings and unforgettable safari experiences.",
    link: "#",
    groupPrice: "$1000",
    individualPrice: "$250",
  },
  {
    name: "Tsavo National Park",
    image: "/assets/tsavo-park.jpg",
    description:
      "Unforgettable wildlife encounters await in Tsavo National Park",
    link: "#",
    groupPrice: "$1400",
    individualPrice: "$350",
  },
  {
    name: "Nairobi National Park",
    image: "/assets/nairobi-nat-park.jpg",
    description: "This park is full of unexpected beauty and diverse habitats",
    link: "#",
    groupPrice: "$950",
    individualPrice: "$220",
  },
  {
    name: "Mt. Ruwenzori",
    image: "/assets/mount-ruwenzori.jpg",
    description:
      "Discover the wonders of the Ruwenzori, from lush forests to glacial valleys.",
    link: "#",
    groupPrice: "$1600",
    individualPrice: "$400",
  },
  {
    name: "Coastal Kenya",
    image: "/assets/coastal.jpg",
    description: "Hakuna Matata by the beach.",
    link: "#",
    groupPrice: "$1100",
    individualPrice: "$280",
  },
];
