
// City Types
export interface Coordinates {
  lat: number;
  lng: number;
}

export interface CostOfLiving {
  overall: number;
  housing: number;
  food: number;
  transportation: number;
}

export interface Climate {
  averageTemperature: {
    winter: number;
    spring: number;
    summer: number;
    fall: number;
  };
  averageRainfall: {
    winter: number;
    spring: number;
    summer: number;
    fall: number;
  };
  humidity: string;
}

export interface Internet {
  averageSpeed: number;
  reliability: number;
  publicWifi: string;
}

export interface Infrastructure {
  healthcare: string;
  safety: string;
  publicTransport: string;
}

export interface VanlifeInfo {
  overnightParking: string;
  waterAccess: string;
  dumpStations: string;
  cellCoverage: string;
}

export interface City {
  id: string;
  name: string;
  country: string;
  region: string;
  coordinates: Coordinates;
  costOfLiving: CostOfLiving;
  climate: Climate;
  internet: Internet;
  timeZone: string;
  infrastructure: Infrastructure;
  digitalNomadFriendly: boolean;
  vanliferFriendly: boolean;
  vanlifeInfo: VanlifeInfo;
  images: string[];
}

// Match Results
export interface MatchCategories {
  budget: number;
  climate: number;
  internet: number;
  timeZone: number;
  amenities: number;
  parking?: number;
  waterAccess?: number;
  cellCoverage?: number;
  roadConditions?: number;
}

export interface MatchResult {
  city: City;
  matchPercentage: number;
  matchCategories: MatchCategories;
}

// Detailed Data Types
export interface CityClimateData {
  cityId: string;
  monthlyTemperature: {
    winter: number;
    spring: number;
    summer: number;
    fall: number;
  };
  monthlyRainfall: {
    winter: number;
    spring: number;
    summer: number;
    fall: number;
  };
  humidity: {
    winter: number;
    spring: number;
    summer: number;
    fall: number;
  };
  sunnyDays: {
    winter: number;
    spring: number;
    summer: number;
    fall: number;
  };
}

export interface CityCostData {
  cityId: string;
  monthlyTotal: number;
  housing: {
    monthlyRent: number;
    utilities: number;
    internet: number;
  };
  food: {
    monthlyExpense: number;
    mealOut: number;
    groceries: number;
  };
  transportation: {
    monthlyExpense: number;
    publicTransport: number;
    taxi: number;
  };
  entertainment: {
    monthlyExpense: number;
    coffee: number;
    beer: number;
  };
  coworking: {
    monthlyMembership: number;
    dayPass: number;
  };
}

export interface CityInternetData {
  cityId: string;
  averageSpeed: {
    download: number;
    upload: number;
  };
  reliability: number;
  providers: {
    name: string;
    maxSpeed: number;
    monthlyPrice: number;
    reliability: number;
  }[];
  publicWifi: {
    availability: string;
    averageSpeed: number;
    freeLocations: string[];
  };
  mobileData: {
    4gCoverage: number;
    5gAvailable: boolean;
    providers: string[];
    averagePrice: number;
  };
}

export interface VanlifeData {
  cityId: string;
  parkingRegulations: {
    overnightParking: string;
    restrictions: string;
    enforcementLevel: string;
  };
  waterAccess: {
    drinkingWater: string;
    publicFacilities: string;
    dumpStations: string;
  };
  cellCoverage: {
    city: string;
    surroundingAreas: string;
    deadSpots: string;
  };
  roadConditions: {
    cityStreets: string;
    highways: string;
    ruralRoads: string;
  };
  communityRating: number;
  popularSpots: string[];
  tips: string[];
}

// User Preference Types
export interface RemoteWorkerPreferences {
  budget: {
    min: number;
    max: number;
    importance: number;
  };
  climate: {
    temperatureMin: number;
    temperatureMax: number;
    precipitationMax: number;
    humidity: string;
    importance: number;
  };
  internet: {
    minimumSpeed: number;
    reliability: number;
    importance: number;
  };
  timeZone: {
    preferredZones: string[];
    importance: number;
  };
  stayDuration: {
    minimum: number; // in months
    preferred: number;
  };
  amenities: {
    coworkingSpaces: boolean;
    cafes: boolean;
    publicTransport: boolean;
    healthcare: boolean;
    safety: boolean;
    nightlife: boolean;
    importance: number;
  };
}

export interface VanliferPreferences extends RemoteWorkerPreferences {
  vanlifeSpecific: {
    overnightParking: {
      importance: number;
    };
    waterAccess: {
      importance: number;
    };
    cellCoverage: {
      importance: number;
    };
    roadConditions: {
      importance: number;
    };
  };
}

export type UserType = 'remoteWorker' | 'vanlifer';

export interface UserPreferences {
  userType: UserType;
  preferences: RemoteWorkerPreferences | VanliferPreferences;
}
