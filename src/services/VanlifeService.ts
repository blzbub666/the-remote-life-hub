
import { VanlifeData } from '@/types';

/**
 * Service for fetching vanlife-specific data
 */
export const VanlifeService = {
  /**
   * Get vanlife data for a specific city/region
   * @param cityId - Identifier for the city
   * @returns Promise with vanlife data
   */
  getCityVanlifeData: async (cityId: string): Promise<VanlifeData> => {
    console.log(`Fetching vanlife data for city ${cityId}`);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 700));
    
    const vanlifeData = MOCK_VANLIFE_DATA.find(c => c.cityId === cityId);
    if (!vanlifeData) {
      throw new Error(`Vanlife data for city with ID ${cityId} not found`);
    }
    return vanlifeData;
  },

  /**
   * Get overnight parking spots in a city/region
   * @param cityId - City identifier
   * @param options - Filtering options
   * @returns Promise with parking spots data
   */
  getParkingSpots: async (cityId: string, options: any = {}): Promise<any[]> => {
    console.log(`Fetching parking spots for city ${cityId} with options:`, options);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock data - in real implementation, this would fetch from a database
    // and filter based on options
    return [
      {
        name: 'Mountain View Campground',
        coordinates: { lat: 38.7223 + (Math.random() * 0.1 - 0.05), lng: -9.1393 + (Math.random() * 0.1 - 0.05) },
        type: 'Campground',
        price: 15,
        amenities: ['Water', 'Toilets', 'Showers', 'Electricity'],
        maxStay: 7,
        rating: 4.2,
        reviews: 45
      },
      {
        name: 'City Park Overnight',
        coordinates: { lat: 38.7223 + (Math.random() * 0.1 - 0.05), lng: -9.1393 + (Math.random() * 0.1 - 0.05) },
        type: 'Urban Parking',
        price: 10,
        amenities: ['Toilets', 'Near Shops'],
        maxStay: 2,
        rating: 3.8,
        reviews: 23
      },
      {
        name: 'Forest Service Road',
        coordinates: { lat: 38.7223 + (Math.random() * 0.1 - 0.05), lng: -9.1393 + (Math.random() * 0.1 - 0.05) },
        type: 'Dispersed Camping',
        price: 0,
        amenities: ['None'],
        maxStay: 14,
        rating: 4.5,
        reviews: 12
      },
      {
        name: 'Walmart Parking',
        coordinates: { lat: 38.7223 + (Math.random() * 0.1 - 0.05), lng: -9.1393 + (Math.random() * 0.1 - 0.05) },
        type: 'Store Parking',
        price: 0,
        amenities: ['Shopping', 'Restrooms in Store'],
        maxStay: 1,
        rating: 3.5,
        reviews: 67
      },
      {
        name: 'RV Park',
        coordinates: { lat: 38.7223 + (Math.random() * 0.1 - 0.05), lng: -9.1393 + (Math.random() * 0.1 - 0.05) },
        type: 'RV Park',
        price: 25,
        amenities: ['Full Hookups', 'Showers', 'Laundry', 'WiFi'],
        maxStay: 30,
        rating: 4.0,
        reviews: 89
      }
    ];
  },

  /**
   * Get water and dump stations in a city/region
   * @param cityId - City identifier
   * @returns Promise with water/dump stations data
   */
  getWaterAndDumpStations: async (cityId: string): Promise<any[]> => {
    console.log(`Fetching water and dump stations for city ${cityId}`);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Mock data
    return [
      {
        name: 'Central RV Dump',
        coordinates: { lat: 38.7223 + (Math.random() * 0.1 - 0.05), lng: -9.1393 + (Math.random() * 0.1 - 0.05) },
        services: ['Water', 'Dump'],
        price: 5,
        hours: '24/7',
        lastVerified: '2023-05-15'
      },
      {
        name: 'Highway Rest Area',
        coordinates: { lat: 38.7223 + (Math.random() * 0.1 - 0.05), lng: -9.1393 + (Math.random() * 0.1 - 0.05) },
        services: ['Water', 'Dump', 'Restrooms'],
        price: 0,
        hours: '24/7',
        lastVerified: '2023-06-20'
      },
      {
        name: 'City Park Water Station',
        coordinates: { lat: 38.7223 + (Math.random() * 0.1 - 0.05), lng: -9.1393 + (Math.random() * 0.1 - 0.05) },
        services: ['Water'],
        price: 0,
        hours: '8am-8pm',
        lastVerified: '2023-07-05'
      }
    ];
  },

  /**
   * Get vanlife community events in a city/region
   * @param cityId - City identifier
   * @returns Promise with community events data
   */
  getCommunityEvents: async (cityId: string): Promise<any[]> => {
    console.log(`Fetching vanlife community events for city ${cityId}`);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock data
    return [
      {
        name: 'Vanlife Meetup',
        date: '2023-08-15',
        location: 'Central Park',
        description: 'Monthly gathering of van dwellers and nomads',
        organizer: 'Local Vanlife Community',
        attendees: 35
      },
      {
        name: 'Outdoor Movie Night',
        date: '2023-08-22',
        location: 'Beach Parking Lot',
        description: 'Movie screening and potluck for van dwellers',
        organizer: 'Nomadic Cinema Club',
        attendees: 20
      },
      {
        name: 'Skills Workshop',
        date: '2023-09-03',
        location: 'Community Center',
        description: 'Learn van maintenance and off-grid living skills',
        organizer: 'Vanlife Veterans',
        attendees: 15
      }
    ];
  }
};

// Mock vanlife data
const MOCK_VANLIFE_DATA: VanlifeData[] = [
  {
    cityId: '1', // Lisbon
    parkingRegulations: {
      overnightParking: 'Moderate',
      restrictions: 'Parking in city center is limited, but outskirts are more accommodating',
      enforcementLevel: 'Medium'
    },
    waterAccess: {
      drinkingWater: 'Good',
      publicFacilities: 'Common',
      dumpStations: 'Limited but available'
    },
    cellCoverage: {
      city: 'Excellent',
      surroundingAreas: 'Good',
      deadSpots: 'Few'
    },
    roadConditions: {
      cityStreets: 'Good',
      highways: 'Excellent',
      ruralRoads: 'Variable but mostly good'
    },
    communityRating: 4.2,
    popularSpots: ['Costa da Caparica', 'Sintra Region', 'Cascais'],
    tips: [
      'Avoid parking in the city center during tourist season',
      'The west coast has many surf spots with relaxed overnight parking',
      'Look for camper vans - locals are often more tolerant where they gather'
    ]
  },
  {
    cityId: '2', // Chiang Mai
    parkingRegulations: {
      overnightParking: 'Unknown',
      restrictions: 'Vanlife is not common in Thailand, limited information available',
      enforcementLevel: 'Unknown'
    },
    waterAccess: {
      drinkingWater: 'Limited - bottled water recommended',
      publicFacilities: 'Few',
      dumpStations: 'Very limited'
    },
    cellCoverage: {
      city: 'Good',
      surroundingAreas: 'Variable',
      deadSpots: 'Many in mountainous areas'
    },
    roadConditions: {
      cityStreets: 'Moderate',
      highways: 'Good',
      ruralRoads: 'Poor in many areas'
    },
    communityRating: 2.0,
    popularSpots: ['Not a common vanlife destination'],
    tips: [
      'Consider alternative accommodation as vanlife infrastructure is limited',
      'Local regulations may not accommodate western-style vanlife',
      'Motorbike rental may be more practical than a van'
    ]
  },
  {
    cityId: '3', // Medellin
    parkingRegulations: {
      overnightParking: 'Good',
      restrictions: 'Some restrictions in urban areas, but generally accommodating',
      enforcementLevel: 'Low to Medium'
    },
    waterAccess: {
      drinkingWater: 'Available but filtration recommended',
      publicFacilities: 'Moderate',
      dumpStations: 'Limited'
    },
    cellCoverage: {
      city: 'Good',
      surroundingAreas: 'Variable',
      deadSpots: 'Many in mountainous regions'
    },
    roadConditions: {
      cityStreets: 'Good',
      highways: 'Good',
      ruralRoads: 'Variable, some challenging areas'
    },
    communityRating: 3.8,
    popularSpots: ['Guatapé', 'El Peñol', 'Santa Fe de Antioquia'],
    tips: [
      'Security can be a concern - research safe areas carefully',
      'The surrounding mountains offer beautiful spots but challenging driving',
      'Consider joining local vanlife groups for safety information'
    ]
  },
  {
    cityId: '4', // Bali
    parkingRegulations: {
      overnightParking: 'Limited',
      restrictions: 'Not well-suited for western vanlife style',
      enforcementLevel: 'Variable'
    },
    waterAccess: {
      drinkingWater: 'Limited - bottled water recommended',
      publicFacilities: 'Few',
      dumpStations: 'Very limited'
    },
    cellCoverage: {
      city: 'Good',
      surroundingAreas: 'Variable',
      deadSpots: 'Common'
    },
    roadConditions: {
      cityStreets: 'Poor to Moderate',
      highways: 'Limited',
      ruralRoads: 'Poor, often narrow'
    },
    communityRating: 2.5,
    popularSpots: ['Not recommended for vanlife'],
    tips: [
      'Consider renting a scooter and staying in guesthouses instead',
      'Roads are often narrow and congested',
      'Local accommodation is often cheaper than maintaining a vehicle'
    ]
  },
  {
    cityId: '5', // Prague
    parkingRegulations: {
      overnightParking: 'Restricted',
      restrictions: 'Strict in city center, more relaxed outside',
      enforcementLevel: 'High'
    },
    waterAccess: {
      drinkingWater: 'Good',
      publicFacilities: 'Good',
      dumpStations: 'Moderate'
    },
    cellCoverage: {
      city: 'Excellent',
      surroundingAreas: 'Good',
      deadSpots: 'Few'
    },
    roadConditions: {
      cityStreets: 'Good',
      highways: 'Excellent',
      ruralRoads: 'Good'
    },
    communityRating: 3.5,
    popularSpots: ['Český Krumlov area', 'Bohemian Paradise', 'Šumava National Park'],
    tips: [
      'City parking is expensive and restricted - head to the countryside',
      'Campsites are well-developed with good facilities',
      'Winter can be challenging - prepare for cold weather'
    ]
  },
  {
    cityId: '6', // Mexico City
    parkingRegulations: {
      overnightParking: 'Good',
      restrictions: 'Variable by neighborhood',
      enforcementLevel: 'Medium'
    },
    waterAccess: {
      drinkingWater: 'Limited - purification needed',
      publicFacilities: 'Moderate',
      dumpStations: 'Limited'
    },
    cellCoverage: {
      city: 'Good',
      surroundingAreas: 'Variable',
      deadSpots: 'Common in rural areas'
    },
    roadConditions: {
      cityStreets: 'Variable',
      highways: 'Good',
      ruralRoads: 'Variable, some poor'
    },
    communityRating: 3.7,
    popularSpots: ['Tepoztlán', 'Valle de Bravo', 'Cuernavaca'],
    tips: [
      'Security is a concern - research safe areas carefully',
      'The altitude can affect vehicle performance',
      'Join local vanlife groups for current safety information'
    ]
  },
  {
    cityId: '7', // Bend
    parkingRegulations: {
      overnightParking: 'Good',
      restrictions: 'Some restrictions in city, excellent options nearby',
      enforcementLevel: 'Medium'
    },
    waterAccess: {
      drinkingWater: 'Excellent',
      publicFacilities: 'Good',
      dumpStations: 'Good'
    },
    cellCoverage: {
      city: 'Excellent',
      surroundingAreas: 'Good',
      deadSpots: 'Some in national forest areas'
    },
    roadConditions: {
      cityStreets: 'Excellent',
      highways: 'Excellent',
      ruralRoads: 'Good'
    },
    communityRating: 4.8,
    popularSpots: ['Deschutes National Forest', 'Three Sisters Wilderness', 'Smith Rock State Park'],
    tips: [
      'Dispersed camping in national forests is excellent',
      'Winter requires preparation for snow and cold',
      'Very vanlife-friendly community with many resources'
    ]
  }
];
