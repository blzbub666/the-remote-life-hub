
import { CityCostData } from '@/types';

/**
 * Service for fetching cost of living data
 */
export const CostService = {
  /**
   * Get cost of living data for a specific city
   * @param cityId - Identifier for the city
   * @returns Promise with cost data
   */
  getCityCosts: async (cityId: string): Promise<CityCostData> => {
    console.log(`Fetching cost data for city ${cityId}`);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const costData = MOCK_COST_DATA.find(c => c.cityId === cityId);
    if (!costData) {
      throw new Error(`Cost data for city with ID ${cityId} not found`);
    }
    return costData;
  },

  /**
   * Compare costs between two cities
   * @param cityId1 - First city identifier
   * @param cityId2 - Second city identifier
   * @returns Promise with comparison data
   */
  compareCosts: async (cityId1: string, cityId2: string): Promise<any> => {
    console.log(`Comparing costs between cities ${cityId1} and ${cityId2}`);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const cost1 = MOCK_COST_DATA.find(c => c.cityId === cityId1);
    const cost2 = MOCK_COST_DATA.find(c => c.cityId === cityId2);
    
    if (!cost1 || !cost2) {
      throw new Error('One or both cities not found');
    }
    
    // Calculate percentage differences
    const percentageDiff = (a: number, b: number) => Math.round(((a - b) / b) * 100);
    
    return {
      overallDifference: percentageDiff(cost1.monthlyTotal, cost2.monthlyTotal),
      categories: {
        housing: percentageDiff(cost1.housing.monthlyRent, cost2.housing.monthlyRent),
        food: percentageDiff(cost1.food.monthlyExpense, cost2.food.monthlyExpense),
        transportation: percentageDiff(cost1.transportation.monthlyExpense, cost2.transportation.monthlyExpense),
        entertainment: percentageDiff(cost1.entertainment.monthlyExpense, cost2.entertainment.monthlyExpense),
      }
    };
  },

  /**
   * Get historical cost trends for a city
   * @param cityId - City identifier
   * @returns Promise with historical cost data
   */
  getHistoricalCosts: async (cityId: string): Promise<any> => {
    console.log(`Fetching historical cost data for city ${cityId}`);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 700));
    
    // This would normally fetch historical data from a database
    // For now, generate some mock data
    return {
      years: ['2018', '2019', '2020', '2021', '2022', '2023'],
      monthlyTotals: [1200, 1300, 1400, 1500, 1700, 1800],
      housingCosts: [550, 600, 650, 700, 750, 800],
      inflation: '5.3%'
    };
  }
};

// Mock cost data
const MOCK_COST_DATA: CityCostData[] = [
  {
    cityId: '1', // Lisbon
    monthlyTotal: 1800,
    housing: {
      monthlyRent: 800,
      utilities: 120,
      internet: 40
    },
    food: {
      monthlyExpense: 400,
      mealOut: 15,
      groceries: 250
    },
    transportation: {
      monthlyExpense: 100,
      publicTransport: 40,
      taxi: 8
    },
    entertainment: {
      monthlyExpense: 200,
      coffee: 2.50,
      beer: 3
    },
    coworking: {
      monthlyMembership: 120,
      dayPass: 15
    }
  },
  {
    cityId: '2', // Chiang Mai
    monthlyTotal: 1000,
    housing: {
      monthlyRent: 400,
      utilities: 60,
      internet: 30
    },
    food: {
      monthlyExpense: 300,
      mealOut: 4,
      groceries: 150
    },
    transportation: {
      monthlyExpense: 50,
      publicTransport: 1,
      taxi: 3
    },
    entertainment: {
      monthlyExpense: 100,
      coffee: 2,
      beer: 2
    },
    coworking: {
      monthlyMembership: 80,
      dayPass: 8
    }
  },
  {
    cityId: '3', // Medellin
    monthlyTotal: 1200,
    housing: {
      monthlyRent: 500,
      utilities: 80,
      internet: 35
    },
    food: {
      monthlyExpense: 350,
      mealOut: 8,
      groceries: 200
    },
    transportation: {
      monthlyExpense: 50,
      publicTransport: 0.8,
      taxi: 4
    },
    entertainment: {
      monthlyExpense: 150,
      coffee: 1.50,
      beer: 2
    },
    coworking: {
      monthlyMembership: 100,
      dayPass: 10
    }
  },
  {
    cityId: '4', // Bali
    monthlyTotal: 1300,
    housing: {
      monthlyRent: 600,
      utilities: 70,
      internet: 35
    },
    food: {
      monthlyExpense: 350,
      mealOut: 5,
      groceries: 200
    },
    transportation: {
      monthlyExpense: 100,
      publicTransport: 0.5,
      taxi: 5
    },
    entertainment: {
      monthlyExpense: 150,
      coffee: 2,
      beer: 2.50
    },
    coworking: {
      monthlyMembership: 130,
      dayPass: 12
    }
  },
  {
    cityId: '5', // Prague
    monthlyTotal: 1600,
    housing: {
      monthlyRent: 700,
      utilities: 150,
      internet: 30
    },
    food: {
      monthlyExpense: 400,
      mealOut: 10,
      groceries: 250
    },
    transportation: {
      monthlyExpense: 30,
      publicTransport: 25,
      taxi: 10
    },
    entertainment: {
      monthlyExpense: 200,
      coffee: 2.50,
      beer: 1.80
    },
    coworking: {
      monthlyMembership: 150,
      dayPass: 15
    }
  },
  {
    cityId: '6', // Mexico City
    monthlyTotal: 1400,
    housing: {
      monthlyRent: 600,
      utilities: 100,
      internet: 40
    },
    food: {
      monthlyExpense: 400,
      mealOut: 10,
      groceries: 230
    },
    transportation: {
      monthlyExpense: 100,
      publicTransport: 0.5,
      taxi: 5
    },
    entertainment: {
      monthlyExpense: 180,
      coffee: 2.50,
      beer: 2
    },
    coworking: {
      monthlyMembership: 120,
      dayPass: 12
    }
  },
  {
    cityId: '7', // Bend
    monthlyTotal: 2500,
    housing: {
      monthlyRent: 1400,
      utilities: 200,
      internet: 70
    },
    food: {
      monthlyExpense: 500,
      mealOut: 20,
      groceries: 350
    },
    transportation: {
      monthlyExpense: 150,
      publicTransport: 2,
      taxi: 15
    },
    entertainment: {
      monthlyExpense: 250,
      coffee: 4,
      beer: 6
    },
    coworking: {
      monthlyMembership: 200,
      dayPass: 25
    }
  }
];
