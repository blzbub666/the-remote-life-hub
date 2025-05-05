
import { City, MatchResult } from '@/types';

/**
 * Service for fetching location data and matching cities to user preferences
 */
export const LocationService = {
  /**
   * Fetches all available cities
   * @returns Promise with array of cities
   */
  getAllCities: async (): Promise<City[]> => {
    // Mock implementation - will be replaced with actual API call
    console.log('Fetching all cities...');
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return MOCK_CITIES;
  },

  /**
   * Find matching cities based on user preferences
   * @param preferences - User preference settings
   * @returns Promise with match results
   */
  findMatches: async (preferences: any): Promise<MatchResult[]> => {
    console.log('Finding matches with preferences:', preferences);
    // Simulate API delay and processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock implementation that returns weighted results
    // In real implementation, this would send preferences to backend
    // and receive calculated matches
    return MOCK_CITIES.map(city => ({
      city,
      matchPercentage: Math.floor(Math.random() * 40) + 60, // Random match between 60-99%
      matchCategories: {
        budget: Math.floor(Math.random() * 40) + 60,
        climate: Math.floor(Math.random() * 40) + 60,
        internet: Math.floor(Math.random() * 40) + 60,
        timeZone: Math.floor(Math.random() * 40) + 60,
        amenities: Math.floor(Math.random() * 40) + 60,
        ...(preferences.userType === 'vanlifer' 
          ? {
              parking: Math.floor(Math.random() * 40) + 60,
              waterAccess: Math.floor(Math.random() * 40) + 60,
              cellCoverage: Math.floor(Math.random() * 40) + 60,
              roadConditions: Math.floor(Math.random() * 40) + 60,
            } 
          : {})
      }
    })).sort((a, b) => b.matchPercentage - a.matchPercentage);
  },

  /**
   * Get detailed information about a specific city
   * @param cityId - Identifier for the city
   * @returns Promise with detailed city information
   */
  getCityDetails: async (cityId: string): Promise<City> => {
    console.log(`Fetching detailed information for city ${cityId}`);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const city = MOCK_CITIES.find(c => c.id === cityId);
    if (!city) {
      throw new Error(`City with ID ${cityId} not found`);
    }
    return city;
  }
};

// Mock data
const MOCK_CITIES: City[] = [
  {
    id: '1',
    name: 'Lisbon',
    country: 'Portugal',
    region: 'Europe',
    coordinates: { lat: 38.7223, lng: -9.1393 },
    costOfLiving: {
      overall: 1800, // USD per month
      housing: 800,
      food: 400,
      transportation: 100
    },
    climate: {
      averageTemperature: { winter: 12, spring: 16, summer: 24, fall: 18 },
      averageRainfall: { winter: 110, spring: 65, summer: 6, fall: 80 },
      humidity: 'Moderate'
    },
    internet: {
      averageSpeed: 60, // Mbps
      reliability: 95, // percentage
      publicWifi: 'Excellent'
    },
    timeZone: 'GMT+0',
    infrastructure: {
      healthcare: 'Good',
      safety: 'High',
      publicTransport: 'Excellent'
    },
    digitalNomadFriendly: true,
    vanliferFriendly: true,
    vanlifeInfo: {
      overnightParking: 'Moderate',
      waterAccess: 'Good',
      dumpStations: 'Limited',
      cellCoverage: 'Excellent'
    },
    images: [
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    ]
  },
  {
    id: '2',
    name: 'Chiang Mai',
    country: 'Thailand',
    region: 'Asia',
    coordinates: { lat: 18.7061, lng: 98.9817 },
    costOfLiving: {
      overall: 1000, // USD per month
      housing: 400,
      food: 300,
      transportation: 50
    },
    climate: {
      averageTemperature: { winter: 22, spring: 28, summer: 30, fall: 26 },
      averageRainfall: { winter: 10, spring: 50, summer: 180, fall: 150 },
      humidity: 'High'
    },
    internet: {
      averageSpeed: 50, // Mbps
      reliability: 90, // percentage
      publicWifi: 'Good'
    },
    timeZone: 'GMT+7',
    infrastructure: {
      healthcare: 'Good',
      safety: 'Moderate',
      publicTransport: 'Moderate'
    },
    digitalNomadFriendly: true,
    vanliferFriendly: false,
    vanlifeInfo: {
      overnightParking: 'Unknown',
      waterAccess: 'Limited',
      dumpStations: 'Limited',
      cellCoverage: 'Good'
    },
    images: [
      'https://images.unsplash.com/photo-1530015111835-7cddad2f6eb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    ]
  },
  {
    id: '3',
    name: 'Medellin',
    country: 'Colombia',
    region: 'South America',
    coordinates: { lat: 6.2442, lng: -75.5812 },
    costOfLiving: {
      overall: 1200, // USD per month
      housing: 500,
      food: 350,
      transportation: 50
    },
    climate: {
      averageTemperature: { winter: 22, spring: 22, summer: 22, fall: 22 },
      averageRainfall: { winter: 50, spring: 130, summer: 150, fall: 180 },
      humidity: 'Moderate'
    },
    internet: {
      averageSpeed: 30, // Mbps
      reliability: 85, // percentage
      publicWifi: 'Good'
    },
    timeZone: 'GMT-5',
    infrastructure: {
      healthcare: 'Good',
      safety: 'Improving',
      publicTransport: 'Good'
    },
    digitalNomadFriendly: true,
    vanliferFriendly: true,
    vanlifeInfo: {
      overnightParking: 'Good',
      waterAccess: 'Moderate',
      dumpStations: 'Limited',
      cellCoverage: 'Good'
    },
    images: [
      'https://images.unsplash.com/photo-1562309653-327abe254af2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    ]
  },
  {
    id: '4',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    coordinates: { lat: -8.4095, lng: 115.1889 },
    costOfLiving: {
      overall: 1300, // USD per month
      housing: 600,
      food: 350,
      transportation: 100
    },
    climate: {
      averageTemperature: { winter: 27, spring: 28, summer: 29, fall: 28 },
      averageRainfall: { winter: 345, spring: 150, summer: 40, fall: 90 },
      humidity: 'High'
    },
    internet: {
      averageSpeed: 20, // Mbps
      reliability: 70, // percentage
      publicWifi: 'Moderate'
    },
    timeZone: 'GMT+8',
    infrastructure: {
      healthcare: 'Moderate',
      safety: 'Good',
      publicTransport: 'Limited'
    },
    digitalNomadFriendly: true,
    vanliferFriendly: false,
    vanlifeInfo: {
      overnightParking: 'Limited',
      waterAccess: 'Good',
      dumpStations: 'Poor',
      cellCoverage: 'Variable'
    },
    images: [
      'https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    ]
  },
  {
    id: '5',
    name: 'Prague',
    country: 'Czech Republic',
    region: 'Europe',
    coordinates: { lat: 50.0755, lng: 14.4378 },
    costOfLiving: {
      overall: 1600, // USD per month
      housing: 700,
      food: 400,
      transportation: 30
    },
    climate: {
      averageTemperature: { winter: 0, spring: 9, summer: 19, fall: 10 },
      averageRainfall: { winter: 30, spring: 40, summer: 70, fall: 40 },
      humidity: 'Moderate'
    },
    internet: {
      averageSpeed: 50, // Mbps
      reliability: 95, // percentage
      publicWifi: 'Excellent'
    },
    timeZone: 'GMT+1',
    infrastructure: {
      healthcare: 'Excellent',
      safety: 'High',
      publicTransport: 'Excellent'
    },
    digitalNomadFriendly: true,
    vanliferFriendly: true,
    vanlifeInfo: {
      overnightParking: 'Restricted',
      waterAccess: 'Good',
      dumpStations: 'Moderate',
      cellCoverage: 'Excellent'
    },
    images: [
      'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    ]
  },
  {
    id: '6',
    name: 'Mexico City',
    country: 'Mexico',
    region: 'North America',
    coordinates: { lat: 19.4326, lng: -99.1332 },
    costOfLiving: {
      overall: 1400, // USD per month
      housing: 600,
      food: 400,
      transportation: 100
    },
    climate: {
      averageTemperature: { winter: 15, spring: 19, summer: 17, fall: 16 },
      averageRainfall: { winter: 10, spring: 20, summer: 180, fall: 100 },
      humidity: 'Moderate'
    },
    internet: {
      averageSpeed: 40, // Mbps
      reliability: 85, // percentage
      publicWifi: 'Good'
    },
    timeZone: 'GMT-6',
    infrastructure: {
      healthcare: 'Good',
      safety: 'Variable',
      publicTransport: 'Good'
    },
    digitalNomadFriendly: true,
    vanliferFriendly: true,
    vanlifeInfo: {
      overnightParking: 'Good',
      waterAccess: 'Moderate',
      dumpStations: 'Limited',
      cellCoverage: 'Good'
    },
    images: [
      'https://images.unsplash.com/photo-1564060958001-73e45a6b51dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    ]
  },
  {
    id: '7',
    name: 'Bend',
    country: 'United States',
    region: 'North America',
    coordinates: { lat: 44.0582, lng: -121.3153 },
    costOfLiving: {
      overall: 2500, // USD per month
      housing: 1400,
      food: 500,
      transportation: 150
    },
    climate: {
      averageTemperature: { winter: 0, spring: 8, summer: 18, fall: 10 },
      averageRainfall: { winter: 45, spring: 30, summer: 15, fall: 30 },
      humidity: 'Low'
    },
    internet: {
      averageSpeed: 100, // Mbps
      reliability: 98, // percentage
      publicWifi: 'Excellent'
    },
    timeZone: 'GMT-8',
    infrastructure: {
      healthcare: 'Excellent',
      safety: 'High',
      publicTransport: 'Limited'
    },
    digitalNomadFriendly: true,
    vanliferFriendly: true,
    vanlifeInfo: {
      overnightParking: 'Good',
      waterAccess: 'Excellent',
      dumpStations: 'Good',
      cellCoverage: 'Good'
    },
    images: [
      'https://images.unsplash.com/photo-1635546293698-3f030092b6b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    ]
  }
];
