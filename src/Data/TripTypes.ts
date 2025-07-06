export interface TripPackage {
  title: string;
  images: string;
  description: string;
  price: string;
  offer?: string;
}

export const tripPackages: TripPackage[] = [
  {
    title: "Honeymoon",
    images: "/assets/honey-moon.jpg",
    description:
      "Romantic getaways to breathtaking destinations with customized experiences for couples.",
    price: "$1500",
    offer: "10% off for bookings before August",
  },
  {
    title: "Family",
    images: "/assets/family-vacas.jpg",
    description:
      "Fun-filled safaris and tours perfect for all ages, ensuring quality time with loved ones.",
    price: "$1200",
  },
  {
    title: "Adventure",
    images: "/assets/adventure.jpg",
    description:
      "Thrilling adventures including mountain climbing, rafting, and desert camping.",
    price: "$1800",
  },
  {
    title: "Cultural Tours",
    images: "/assets/culture-tours.jpg",
    description:
      "Explore rich Kenyan traditions, tribes, and heritage in immersive cultural trips.",
    price: "$1100",
  },
  {
    title: "Wildlife Safaris",
    images: "/assets/wild-safaris.jpg",
    description:
      "Iconic African safaris to witness the Big Five and more in natural habitats.",
    price: "$1600",
  },
  {
    title: "Eco-Tours",
    images: "/assets/eco-tours.jpg",
    description:
      "Sustainable travel experiences focused on nature conservation and community tourism.",
    price: "$1000",
  },
  {
    title: "Luxury Vacations",
    images: "/assets/luxury-vacas.jpg",
    description:
      "Top-tier accommodations, gourmet meals, and VIP travel for ultimate comfort.",
    price: "$2500",
    offer: "Free spa treatment included",
  },
  {
    title: "Beach Holidays",
    images: "/assets/beach.jpg",
    description:
      "Relax on Kenya’s finest beaches with water sports and stunning ocean views.",
    price: "$1300",
  },
  {
    title: "Wellness Retreats",
    images: "/assets/wellness.jpg",
    description:
      "Mind and body healing through yoga, meditation, and peaceful nature stays.",
    price: "$1400",
  },
  {
    title: "Culinary Tours",
    images: "/assets/cullinary.jpg",
    description:
      "Discover Kenyan cuisine through curated food experiences and local markets.",
    price: "$900",
  },
];
