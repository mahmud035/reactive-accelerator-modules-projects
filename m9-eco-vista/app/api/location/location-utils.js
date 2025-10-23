const data = [
  {
    location: 'Dhaka',
    latitude: 23.8103,
    longitude: 90.4125,
  },
  {
    location: 'Tokyo',
    latitude: 35.682839,
    longitude: 139.759455,
  },
  {
    location: 'Mumbai',
    latitude: 19.076,
    longitude: 72.8777,
  },
  {
    location: 'Delhi',
    latitude: 28.7041,
    longitude: 77.1025,
  },
  {
    location: 'New York',
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    location: 'Singapore',
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: 'Toronto',
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: 'Hyderabad',
    latitude: 17.385,
    longitude: 78.4867,
  },
  {
    location: 'London',
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    location: 'Moscow',
    latitude: 55.7558,
    longitude: 37.6176,
  },
  {
    location: 'Istanbul',
    latitude: 41.0082,
    longitude: 28.9784,
  },
  {
    location: 'Paris',
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    location: 'São Paulo',
    latitude: -23.5505,
    longitude: -46.6333,
  },
  {
    location: 'Seoul',
    latitude: 37.5665,
    longitude: 126.978,
  },
  {
    location: 'Mexico City',
    latitude: 19.4326,
    longitude: -99.1332,
  },

  {
    location: 'Shanghai',
    latitude: 31.2304,
    longitude: 121.4737,
  },
  {
    location: 'Kolkata',
    latitude: 22.5726,
    longitude: 88.3639,
  },
  {
    location: 'Bangkok',
    latitude: 13.7563,
    longitude: 100.5018,
  },
  {
    location: 'Bangalore',
    latitude: 12.9716,
    longitude: 77.5946,
  },

  {
    location: 'Chennai',
    latitude: 13.0827,
    longitude: 80.2707,
  },
  {
    location: 'Los Angeles',
    latitude: 34.0522,
    longitude: -118.2437,
  },

  {
    location: 'Buenos Aires',
    latitude: -34.6037,
    longitude: -58.3816,
  },
  {
    location: 'Karachi',
    latitude: 24.8607,
    longitude: 67.0011,
  },
  {
    location: 'Cairo',
    latitude: 30.0444,
    longitude: 31.2357,
  },
  {
    location: 'Rio de Janeiro',
    latitude: -22.9068,
    longitude: -43.1729,
  },
  {
    location: 'Osaka',
    latitude: 34.6937,
    longitude: 135.5023,
  },
  {
    location: 'Beijing',
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    location: 'Manila',
    latitude: 14.5995,
    longitude: 120.9842,
  },
  {
    location: 'Lagos',
    latitude: 6.5244,
    longitude: 3.3792,
  },
  {
    location: 'Lima',
    latitude: -12.0464,
    longitude: -77.0428,
  },
  {
    location: 'New Taipei City',
    latitude: 25.032969,
    longitude: 121.565414,
  },
  {
    location: 'Bogotá',
    latitude: 4.711,
    longitude: -74.0721,
  },
];

const getLocations = () => {
  return data;
};

const getLocationByName = (location) => {
  if (!location) return null;

  const found = data.find(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );

  return found || {};
};

export { getLocationByName, getLocations };
