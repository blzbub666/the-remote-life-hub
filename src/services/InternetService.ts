
import { CityInternetData } from '@/types';

/**
 * Service for fetching internet and connectivity data
 */
export const InternetService = {
  /**
   * Get internet data for a specific city
   * @param cityId - Identifier for the city
   * @returns Promise with internet data
   */
  getCityInternet: async (cityId: string): Promise<CityInternetData> => {
    console.log(`Fetching internet data for city ${cityId}`);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const internetData = MOCK_INTERNET_DATA.find(c => c.cityId === cityId);
    if (!internetData) {
      throw new Error(`Internet data for city with ID ${cityId} not found`);
    }
    return internetData;
  },

  /**
   * Get coworking spaces in a city
   * @param cityId - City identifier
   * @returns Promise with coworking spaces data
   */
  getCoworkingSpaces: async (cityId: string): Promise<any[]> => {
    console.log(`Fetching coworking spaces for city ${cityId}`);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Mock data - in real implementation, this would fetch from a database
    return [
      {
        name: 'Digital Nomad Hub',
        address: '123 Main St',
        monthlyPrice: 150,
        dailyPrice: 15,
        amenities: ['Fast Wifi', '24/7 Access', 'Meeting Rooms', 'Coffee'],
        rating: 4.5
      },
      {
        name: 'Remote Work Space',
        address: '456 Second Ave',
        monthlyPrice: 180,
        dailyPrice: 18,
        amenities: ['Fast Wifi', 'Standing Desks', 'Events', 'Coffee & Snacks'],
        rating: 4.2
      },
      {
        name: 'Nomad Office',
        address: '789 Third St',
        monthlyPrice: 130,
        dailyPrice: 12,
        amenities: ['Wifi', 'Community Events', 'Quiet Areas'],
        rating: 4.0
      }
    ];
  },

  /**
   * Get internet cafes in a city
   * @param cityId - City identifier
   * @returns Promise with internet cafes data
   */
  getInternetCafes: async (cityId: string): Promise<any[]> => {
    console.log(`Fetching internet cafes for city ${cityId}`);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock data - in real implementation, this would fetch from a database
    return [
      {
        name: 'Connected Coffee',
        address: '321 Fourth St',
        wifiSpeed: 50,
        pricePerHour: 3,
        amenities: ['Coffee', 'Food', 'Power Outlets'],
        rating: 4.3
      },
      {
        name: 'Digital Brew',
        address: '654 Fifth Ave',
        wifiSpeed: 70,
        pricePerHour: 0,
        amenities: ['Free with Purchase', 'Comfortable Seating', 'Long Stay Friendly'],
        rating: 4.1
      },
      {
        name: 'Work & Sip',
        address: '987 Sixth St',
        wifiSpeed: 40,
        pricePerHour: 2,
        amenities: ['Quiet Environment', 'Food', 'Outdoor Seating'],
        rating: 3.9
      }
    ];
  }
};

// Mock internet data
const MOCK_INTERNET_DATA: CityInternetData[] = [
  {
    cityId: '1', // Lisbon
    averageSpeed: {
      download: 60,
      upload: 30
    },
    reliability: 95,
    providers: [
      {
        name: 'MEO',
        maxSpeed: 1000,
        monthlyPrice: 35,
        reliability: 95
      },
      {
        name: 'NOS',
        maxSpeed: 500,
        monthlyPrice: 30,
        reliability: 92
      },
      {
        name: 'Vodafone',
        maxSpeed: 1000,
        monthlyPrice: 40,
        reliability: 96
      }
    ],
    publicWifi: {
      availability: 'Excellent',
      averageSpeed: 40,
      freeLocations: ['Parks', 'Libraries', 'City Center']
    },
    mobileData: {
      4gCoverage: 98,
      5gAvailable: true,
      providers: ['MEO', 'NOS', 'Vodafone'],
      averagePrice: 15
    }
  },
  {
    cityId: '2', // Chiang Mai
    averageSpeed: {
      download: 50,
      upload: 20
    },
    reliability: 90,
    providers: [
      {
        name: 'AIS',
        maxSpeed: 500,
        monthlyPrice: 25,
        reliability: 92
      },
      {
        name: 'True',
        maxSpeed: 300,
        monthlyPrice: 20,
        reliability: 88
      },
      {
        name: '3BB',
        maxSpeed: 400,
        monthlyPrice: 22,
        reliability: 90
      }
    ],
    publicWifi: {
      availability: 'Good',
      averageSpeed: 30,
      freeLocations: ['Cafes', 'Malls']
    },
    mobileData: {
      4gCoverage: 95,
      5gAvailable: false,
      providers: ['AIS', 'DTAC', 'True Move'],
      averagePrice: 10
    }
  },
  {
    cityId: '3', // Medellin
    averageSpeed: {
      download: 30,
      upload: 15
    },
    reliability: 85,
    providers: [
      {
        name: 'Claro',
        maxSpeed: 300,
        monthlyPrice: 30,
        reliability: 85
      },
      {
        name: 'Tigo',
        maxSpeed: 200,
        monthlyPrice: 25,
        reliability: 80
      },
      {
        name: 'Movistar',
        maxSpeed: 250,
        monthlyPrice: 28,
        reliability: 83
      }
    ],
    publicWifi: {
      availability: 'Good',
      averageSpeed: 20,
      freeLocations: ['Parks', 'Malls', 'Some Streets']
    },
    mobileData: {
      4gCoverage: 90,
      5gAvailable: false,
      providers: ['Claro', 'Tigo', 'Movistar'],
      averagePrice: 12
    }
  },
  {
    cityId: '4', // Bali
    averageSpeed: {
      download: 20,
      upload: 10
    },
    reliability: 70,
    providers: [
      {
        name: 'Indosat',
        maxSpeed: 100,
        monthlyPrice: 30,
        reliability: 70
      },
      {
        name: 'Telkomsel',
        maxSpeed: 150,
        monthlyPrice: 35,
        reliability: 75
      },
      {
        name: 'XL',
        maxSpeed: 100,
        monthlyPrice: 28,
        reliability: 65
      }
    ],
    publicWifi: {
      availability: 'Moderate',
      averageSpeed: 15,
      freeLocations: ['Cafes', 'Hotels', 'Coworking Spaces']
    },
    mobileData: {
      4gCoverage: 80,
      5gAvailable: false,
      providers: ['Telkomsel', 'XL', 'Indosat'],
      averagePrice: 15
    }
  },
  {
    cityId: '5', // Prague
    averageSpeed: {
      download: 50,
      upload: 25
    },
    reliability: 95,
    providers: [
      {
        name: 'O2',
        maxSpeed: 500,
        monthlyPrice: 25,
        reliability: 95
      },
      {
        name: 'UPC',
        maxSpeed: 600,
        monthlyPrice: 30,
        reliability: 93
      },
      {
        name: 'T-Mobile',
        maxSpeed: 400,
        monthlyPrice: 22,
        reliability: 94
      }
    ],
    publicWifi: {
      availability: 'Excellent',
      averageSpeed: 35,
      freeLocations: ['Cafes', 'Public Transport', 'Libraries', 'City Center']
    },
    mobileData: {
      4gCoverage: 99,
      5gAvailable: true,
      providers: ['O2', 'T-Mobile', 'Vodafone'],
      averagePrice: 20
    }
  },
  {
    cityId: '6', // Mexico City
    averageSpeed: {
      download: 40,
      upload: 15
    },
    reliability: 85,
    providers: [
      {
        name: 'Telmex',
        maxSpeed: 300,
        monthlyPrice: 30,
        reliability: 85
      },
      {
        name: 'Izzi',
        maxSpeed: 350,
        monthlyPrice: 35,
        reliability: 82
      },
      {
        name: 'Totalplay',
        maxSpeed: 400,
        monthlyPrice: 40,
        reliability: 88
      }
    ],
    publicWifi: {
      availability: 'Good',
      averageSpeed: 25,
      freeLocations: ['Parks', 'Cafes', 'Some Public Areas']
    },
    mobileData: {
      4gCoverage: 92,
      5gAvailable: true,
      providers: ['Telcel', 'Movistar', 'AT&T'],
      averagePrice: 15
    }
  },
  {
    cityId: '7', // Bend
    averageSpeed: {
      download: 100,
      upload: 50
    },
    reliability: 98,
    providers: [
      {
        name: 'Spectrum',
        maxSpeed: 1000,
        monthlyPrice: 70,
        reliability: 97
      },
      {
        name: 'CenturyLink',
        maxSpeed: 940,
        monthlyPrice: 65,
        reliability: 95
      },
      {
        name: 'BendBroadband',
        maxSpeed: 600,
        monthlyPrice: 60,
        reliability: 93
      }
    ],
    publicWifi: {
      availability: 'Excellent',
      averageSpeed: 50,
      freeLocations: ['Cafes', 'Libraries', 'Public Spaces']
    },
    mobileData: {
      4gCoverage: 95,
      5gAvailable: true,
      providers: ['Verizon', 'AT&T', 'T-Mobile'],
      averagePrice: 60
    }
  }
];
