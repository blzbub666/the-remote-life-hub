
import { CityClimateData } from '@/types';

/**
 * Service for fetching weather and climate data
 */
export const WeatherService = {
  /**
   * Get climate data for a specific city
   * @param cityId - Identifier for the city
   * @returns Promise with climate data
   */
  getCityClimate: async (cityId: string): Promise<CityClimateData> => {
    console.log(`Fetching climate data for city ${cityId}`);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 700));
    
    const climateData = MOCK_CLIMATE_DATA.find(c => c.cityId === cityId);
    if (!climateData) {
      throw new Error(`Climate data for city with ID ${cityId} not found`);
    }
    return climateData;
  },

  /**
   * Get current weather for a specific city
   * @param cityId - Identifier for the city
   * @returns Promise with current weather data
   */
  getCurrentWeather: async (cityId: string): Promise<any> => {
    console.log(`Fetching current weather for city ${cityId}`);
    // This would fetch real-time weather data from a service like OpenWeatherMap
    // For now, return random weather based on the season
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const seasons = ['winter', 'spring', 'summer', 'fall'];
    const currentSeason = seasons[Math.floor(Math.random() * seasons.length)];
    
    const climateData = MOCK_CLIMATE_DATA.find(c => c.cityId === cityId);
    if (!climateData) {
      throw new Error(`Climate data for city with ID ${cityId} not found`);
    }
    
    // Generate a random current temperature near the average for the season
    const baseTemp = climateData.monthlyTemperature[currentSeason];
    const currentTemp = baseTemp + (Math.random() * 10 - 5); // +/- 5 degrees
    
    return {
      currentTemperature: Math.round(currentTemp),
      condition: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Rainy', 'Stormy'][Math.floor(Math.random() * 5)],
      humidity: Math.floor(Math.random() * 40) + 30,
      windSpeed: Math.floor(Math.random() * 20)
    };
  },

  /**
   * Get seasonal weather patterns for a city
   * @param cityId - Identifier for the city
   * @returns Promise with seasonal weather data
   */
  getSeasonalPatterns: async (cityId: string): Promise<any> => {
    console.log(`Fetching seasonal patterns for city ${cityId}`);
    // This would provide more detailed seasonal information
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const climateData = MOCK_CLIMATE_DATA.find(c => c.cityId === cityId);
    if (!climateData) {
      throw new Error(`Climate data for city with ID ${cityId} not found`);
    }
    
    return {
      seasons: {
        winter: {
          description: 'Cold and rainy',
          avgTemperature: climateData.monthlyTemperature.winter,
          precipitation: climateData.monthlyRainfall.winter
        },
        spring: {
          description: 'Mild and moderate rainfall',
          avgTemperature: climateData.monthlyTemperature.spring,
          precipitation: climateData.monthlyRainfall.spring
        },
        summer: {
          description: 'Warm and dry',
          avgTemperature: climateData.monthlyTemperature.summer,
          precipitation: climateData.monthlyRainfall.summer
        },
        fall: {
          description: 'Cool and occasional rain',
          avgTemperature: climateData.monthlyTemperature.fall,
          precipitation: climateData.monthlyRainfall.fall
        }
      },
      rainyMonths: ['November', 'December', 'January'].join(', '),
      dryMonths: ['June', 'July', 'August'].join(', '),
      extremeWeatherRisks: ['Heavy rainfall', 'Occasional flooding'].join(', ')
    };
  }
};

// Mock climate data
const MOCK_CLIMATE_DATA: CityClimateData[] = [
  {
    cityId: '1', // Lisbon
    monthlyTemperature: {
      winter: 12,
      spring: 16,
      summer: 24,
      fall: 18
    },
    monthlyRainfall: {
      winter: 110,
      spring: 65,
      summer: 6,
      fall: 80
    },
    humidity: {
      winter: 80,
      spring: 70,
      summer: 60,
      fall: 75
    },
    sunnyDays: {
      winter: 15,
      spring: 20,
      summer: 29,
      fall: 21
    }
  },
  {
    cityId: '2', // Chiang Mai
    monthlyTemperature: {
      winter: 22,
      spring: 28,
      summer: 30,
      fall: 26
    },
    monthlyRainfall: {
      winter: 10,
      spring: 50,
      summer: 180,
      fall: 150
    },
    humidity: {
      winter: 60,
      spring: 65,
      summer: 80,
      fall: 75
    },
    sunnyDays: {
      winter: 28,
      spring: 25,
      summer: 15,
      fall: 18
    }
  },
  {
    cityId: '3', // Medellin
    monthlyTemperature: {
      winter: 22,
      spring: 22,
      summer: 22,
      fall: 22
    },
    monthlyRainfall: {
      winter: 50,
      spring: 130,
      summer: 150,
      fall: 180
    },
    humidity: {
      winter: 65,
      spring: 70,
      summer: 75,
      fall: 75
    },
    sunnyDays: {
      winter: 20,
      spring: 15,
      summer: 15,
      fall: 15
    }
  },
  {
    cityId: '4', // Bali
    monthlyTemperature: {
      winter: 27,
      spring: 28,
      summer: 29,
      fall: 28
    },
    monthlyRainfall: {
      winter: 345,
      spring: 150,
      summer: 40,
      fall: 90
    },
    humidity: {
      winter: 85,
      spring: 80,
      summer: 75,
      fall: 80
    },
    sunnyDays: {
      winter: 10,
      spring: 15,
      summer: 28,
      fall: 20
    }
  },
  {
    cityId: '5', // Prague
    monthlyTemperature: {
      winter: 0,
      spring: 9,
      summer: 19,
      fall: 10
    },
    monthlyRainfall: {
      winter: 30,
      spring: 40,
      summer: 70,
      fall: 40
    },
    humidity: {
      winter: 80,
      spring: 70,
      summer: 65,
      fall: 75
    },
    sunnyDays: {
      winter: 5,
      spring: 12,
      summer: 18,
      fall: 12
    }
  },
  {
    cityId: '6', // Mexico City
    monthlyTemperature: {
      winter: 15,
      spring: 19,
      summer: 17,
      fall: 16
    },
    monthlyRainfall: {
      winter: 10,
      spring: 20,
      summer: 180,
      fall: 100
    },
    humidity: {
      winter: 50,
      spring: 45,
      summer: 70,
      fall: 65
    },
    sunnyDays: {
      winter: 25,
      spring: 23,
      summer: 15,
      fall: 18
    }
  },
  {
    cityId: '7', // Bend
    monthlyTemperature: {
      winter: 0,
      spring: 8,
      summer: 18,
      fall: 10
    },
    monthlyRainfall: {
      winter: 45,
      spring: 30,
      summer: 15,
      fall: 30
    },
    humidity: {
      winter: 70,
      spring: 60,
      summer: 40,
      fall: 55
    },
    sunnyDays: {
      winter: 10,
      spring: 18,
      summer: 25,
      fall: 20
    }
  }
];
