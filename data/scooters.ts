export interface Scooter {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  rating: number;
  reviews: number;
  trips: number;
  location: string;
  images: string[];
  features: {
    seats: number;
    transmission: string;
    fuel: string;
    weightCapacity: number;
    batteryType: string;
    range: number;
    category: string;
  };
  host: {
    name: string;
    avatar: string;
    rating: number;
    trips: number;
    responseTime: string;
  };
  description: string;
  guidelines: string[];
  extras: Array<{ name: string; price: number; included: boolean }>;
}

export const scooters: Scooter[] = [
  {
    id: '1',
    make: 'Vespa',
    model: 'Primavera',
    year: 2023,
    price: 89,
    rating: 4.9,
    reviews: 127,
    trips: 312,
    location: 'San Francisco, CA',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    features: {
      seats: 1,
      transmission: 'Automatic',
      fuel: 'Electric',
      weightCapacity: 300,
      batteryType: 'Lithium-Ion',
      range: 50,
      category: 'Standard'
    },
    host: {
      name: 'Alex Chen',
      avatar: '/api/placeholder/48/48',
      rating: 4.9,
      trips: 312,
      responseTime: 'within an hour'
    },
    description:
      'Experience the freedom of urban mobility with this pristine Vespa Primavera. Perfect for city commuting and exploring with exceptional battery range and performance.',
    guidelines: [
      'No smoking or pets allowed',
      'Return with at least 50% battery',
      'Treat the scooter with care as if it were your own'
    ],
    extras: [
      { name: 'Prepaid charging', price: 15, included: false },
      { name: 'Helmet rental', price: 10, included: false },
      { name: 'Premium cleaning', price: 20, included: false }
    ]
  },
  {
    id: '2',
    make: 'Honda',
    model: 'PCX',
    year: 2022,
    price: 120,
    rating: 4.8,
    reviews: 89,
    trips: 156,
    location: 'Los Angeles, CA',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    features: {
      seats: 1,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      weightCapacity: 350,
      batteryType: 'Lead-Acid',
      range: 45,
      category: 'Performance'
    },
    host: {
      name: 'Sarah Miller',
      avatar: '/api/placeholder/48/48',
      rating: 4.8,
      trips: 156,
      responseTime: 'within a few hours'
    },
    description:
      'Reliable Honda PCX ready for your next adventure. Smooth ride with great fuel efficiency and storage space.',
    guidelines: [
      'No off-road use',
      'Return with full tank',
      'Report any damage immediately'
    ],
    extras: [
      { name: 'GPS Mount', price: 8, included: false },
      { name: 'Phone holder', price: 5, included: true },
      { name: 'Extra battery pack', price: 25, included: false }
    ]
  },
  {
    id: '3',
    make: 'Yamaha',
    model: 'AeroX',
    year: 2021,
    price: 45,
    rating: 4.7,
    reviews: 65,
    trips: 89,
    location: 'New York, NY',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    features: {
      seats: 1,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      weightCapacity: 320,
      batteryType: 'Lithium-Ion',
      range: 60,
      category: 'Economy'
    },
    host: {
      name: 'Mike Johnson',
      avatar: '/api/placeholder/48/48',
      rating: 4.7,
      trips: 89,
      responseTime: 'within a day'
    },
    description:
      'Efficient Yamaha AeroX, perfect for navigating city streets with ease and style.',
    guidelines: [
      'Return on time',
      'No racing or stunts',
      'Keep it clean'
    ],
    extras: [
      { name: 'Delivery to location', price: 30, included: false },
      { name: 'Rain poncho', price: 7, included: false }
    ]
  }
]
