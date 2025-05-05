
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ClimateChart } from "@/components/location/ClimateChart";
import { CostBreakdown } from "@/components/location/CostBreakdown";
import { InternetQuality } from "@/components/location/InternetQuality";
import { VanlifeDetails } from "@/components/location/VanlifeDetails";
import { LocationService } from "@/services/LocationService";
import { WeatherService } from "@/services/WeatherService";
import { CostService } from "@/services/CostService";
import { InternetService } from "@/services/InternetService";
import { VanlifeService } from "@/services/VanlifeService";
import { City, CityClimateData, CityCostData, CityInternetData, VanlifeData } from "@/types";

const LocationDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState<City | null>(null);
  const [climateData, setClimateData] = useState<CityClimateData | null>(null);
  const [costData, setCostData] = useState<CityCostData | null>(null);
  const [internetData, setInternetData] = useState<CityInternetData | null>(null);
  const [vanlifeData, setVanlifeData] = useState<VanlifeData | null>(null);
  
  useEffect(() => {
    const fetchLocationData = async () => {
      if (!id) return;
      
      setIsLoading(true);
      try {
        // Fetch all data in parallel
        const [cityData, climate, costs, internet, vanlife] = await Promise.all([
          LocationService.getCityDetails(id),
          WeatherService.getCityClimate(id),
          CostService.getCityCosts(id),
          InternetService.getCityInternet(id),
          VanlifeService.getCityVanlifeData(id),
        ]);
        
        setCity(cityData);
        setClimateData(climate);
        setCostData(costs);
        setInternetData(internet);
        setVanlifeData(vanlife);
      } catch (error) {
        console.error("Error fetching location data:", error);
        toast.error("Failed to load location data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchLocationData();
  }, [id]);
  
  const handleSaveLocation = () => {
    // In a real app, this would save to user's account
    toast.success("Location saved to favorites!");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-app-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl font-semibold">Loading location details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!city) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">Location Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The location you're looking for could not be found. It may have been removed or you might have followed an incorrect link.
            </p>
            <Button asChild className="bg-app-blue hover:bg-app-blue/90">
              <a href="/results">Back to Results</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative h-72 md:h-96">
          <img 
            src={city.images[0]} 
            alt={city.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
            <div className="container mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold">{city.name}, {city.country}</h1>
              <p className="text-lg opacity-90">{city.region}</p>
            </div>
          </div>
        </div>
        
        {/* Quick facts */}
        <div className="bg-muted py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3">
                <p className="text-sm text-muted-foreground">Cost of Living</p>
                <p className="text-xl md:text-2xl font-bold">${city.costOfLiving.overall}/mo</p>
              </div>
              <div className="text-center p-3">
                <p className="text-sm text-muted-foreground">Internet</p>
                <p className="text-xl md:text-2xl font-bold">{city.internet.averageSpeed} Mbps</p>
              </div>
              <div className="text-center p-3">
                <p className="text-sm text-muted-foreground">Climate</p>
                <p className="text-xl md:text-2xl font-bold">{city.climate.averageTemperature.summer}°C Summer</p>
              </div>
              <div className="text-center p-3">
                <p className="text-sm text-muted-foreground">Time Zone</p>
                <p className="text-xl md:text-2xl font-bold">{city.timeZone}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Detailed content */}
        <div className="container mx-auto px-4 py-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Location Deep Dive</h2>
            <Button onClick={handleSaveLocation}>Save to Favorites</Button>
          </div>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="cost">Cost</TabsTrigger>
              <TabsTrigger value="climate">Climate</TabsTrigger>
              <TabsTrigger value="internet">Internet</TabsTrigger>
              <TabsTrigger value="vanlife">Vanlife</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">About {city.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {city.name} is a {city.digitalNomadFriendly ? 'digital nomad friendly' : ''} 
                    {city.vanliferFriendly ? ' and vanlife friendly' : ''} city in {city.country}, 
                    located in {city.region}. 
                  </p>
                  
                  <h4 className="font-semibold mt-6 mb-2">Infrastructure</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Healthcare:</span>
                      <span className="font-medium">{city.infrastructure.healthcare}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Safety:</span>
                      <span className="font-medium">{city.infrastructure.safety}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Public Transport:</span>
                      <span className="font-medium">{city.infrastructure.publicTransport}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Overview</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Best For:</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {city.digitalNomadFriendly && (
                          <span className="px-2 py-1 bg-app-blue/10 text-app-blue rounded-full text-sm">
                            Digital Nomads
                          </span>
                        )}
                        {city.vanliferFriendly && (
                          <span className="px-2 py-1 bg-app-green/10 text-app-green rounded-full text-sm">
                            Vanlifers
                          </span>
                        )}
                        {city.internet.averageSpeed > 50 && (
                          <span className="px-2 py-1 bg-muted rounded-full text-sm">
                            Fast Internet
                          </span>
                        )}
                        {city.costOfLiving.overall < 1500 && (
                          <span className="px-2 py-1 bg-muted rounded-full text-sm">
                            Budget Friendly
                          </span>
                        )}
                        {(city.climate.averageTemperature.summer > 25 && city.climate.averageTemperature.winter > 15) && (
                          <span className="px-2 py-1 bg-muted rounded-full text-sm">
                            Warm Climate
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Ideal Visiting Time:</h4>
                      <p className="mt-2 text-muted-foreground">
                        {city.climate.averageTemperature.summer > 25 ? 
                          'Spring and Fall for mild temperatures' : 
                          'Summer for warmer weather'}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">Internet Situation:</h4>
                      <p className="mt-2 text-muted-foreground">
                        {city.internet.averageSpeed > 50 ? 
                          `Fast internet with average speeds of ${city.internet.averageSpeed} Mbps and ${city.internet.reliability}% reliability.` : 
                          `Moderate internet with average speeds of ${city.internet.averageSpeed} Mbps and ${city.internet.reliability}% reliability.`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="cost" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {costData && <CostBreakdown costData={costData} />}
                
                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Cost Insights</h3>
                    <p className="text-muted-foreground mb-4">
                      With a monthly cost of living around ${city.costOfLiving.overall}, 
                      {city.name} is considered {
                        city.costOfLiving.overall < 1200 ? 'very affordable' : 
                        city.costOfLiving.overall < 2000 ? 'moderately priced' : 
                        'relatively expensive'
                      } for {city.region}.
                    </p>
                    
                    <h4 className="font-semibold mt-4 mb-2">Budget Considerations</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Housing represents approximately {Math.round((city.costOfLiving.housing / city.costOfLiving.overall) * 100)}% of total costs</li>
                      <li>Eating out costs around ${costData?.food.mealOut} per meal on average</li>
                      <li>Monthly public transportation passes cost approximately ${costData?.transportation.publicTransport}</li>
                      <li>Coworking spaces offer monthly memberships from ${costData?.coworking.monthlyMembership}</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Cost-Saving Tips</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Consider accommodations outside the city center to save up to 30% on rent</li>
                      <li>Local markets can reduce your grocery expenses compared to supermarkets</li>
                      <li>Monthly transportation passes offer significant savings over single tickets</li>
                      <li>Many cafés offer free WiFi with a purchase, saving coworking costs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="climate" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {climateData && <ClimateChart climateData={climateData} />}
                
                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Climate Overview</h3>
                    <p className="text-muted-foreground mb-4">
                      {city.name} has a {
                        city.climate.humidity === 'Low' ? 'dry' : 
                        city.climate.humidity === 'Moderate' ? 'moderate' : 'humid'
                      } climate with {
                        (city.climate.averageTemperature.summer + city.climate.averageTemperature.winter) / 2 < 10 ? 'cool' :
                        (city.climate.averageTemperature.summer + city.climate.averageTemperature.winter) / 2 < 20 ? 'mild' :
                        'warm'
                      } temperatures throughout the year.
                    </p>
                    
                    <h4 className="font-semibold mt-4 mb-2">Seasonal Highlights</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><span className="font-medium">Spring:</span> {city.climate.averageTemperature.spring}°C, {city.climate.averageRainfall.spring}mm rainfall</li>
                      <li><span className="font-medium">Summer:</span> {city.climate.averageTemperature.summer}°C, {city.climate.averageRainfall.summer}mm rainfall</li>
                      <li><span className="font-medium">Fall:</span> {city.climate.averageTemperature.fall}°C, {city.climate.averageRainfall.fall}mm rainfall</li>
                      <li><span className="font-medium">Winter:</span> {city.climate.averageTemperature.winter}°C, {city.climate.averageRainfall.winter}mm rainfall</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Best Time to Visit</h3>
                    <p className="text-muted-foreground mb-4">
                      {
                        city.climate.averageRainfall.summer < 50 && city.climate.averageTemperature.summer < 30 ? 
                          'Summer offers the best combination of warm temperatures and minimal rainfall.' :
                        city.climate.averageRainfall.spring < city.climate.averageRainfall.fall ? 
                          'Spring offers pleasant temperatures with less rainfall than other seasons.' :
                          'Fall is ideal with comfortable temperatures and moderate precipitation.'
                      }
                    </p>
                    
                    <h4 className="font-semibold mt-4 mb-2">Weather Considerations</h4>
                    <ul className="space-y-2 text-sm">
                      <li>{city.climate.averageRainfall.winter > 100 ? 'Winters can be quite rainy' : 'Winters have moderate precipitation'}</li>
                      <li>{city.climate.humidity === 'High' ? 'High humidity can make temperatures feel warmer' : ''}</li>
                      <li>{city.climate.averageTemperature.summer > 30 ? 'Summer temperatures can reach uncomfortable levels' : 'Summer temperatures are generally pleasant'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="internet" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {internetData && <InternetQuality internetData={internetData} />}
                
                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Internet Overview</h3>
                    <p className="text-muted-foreground mb-4">
                      {city.name} offers {
                        city.internet.averageSpeed < 30 ? 'moderate' :
                        city.internet.averageSpeed < 50 ? 'good' :
                        'excellent'
                      } internet infrastructure with average speeds of {city.internet.averageSpeed} Mbps
                      and {city.internet.reliability}% reliability.
                    </p>
                    
                    <h4 className="font-semibold mt-4 mb-2">Remote Work Suitability</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        <span className="font-medium">Video Calls:</span> {
                          city.internet.averageSpeed < 20 ? 'May experience occasional issues' :
                          city.internet.averageSpeed < 40 ? 'Generally good quality' :
                          'Excellent, reliable quality'
                        }
                      </li>
                      <li>
                        <span className="font-medium">Large File Transfers:</span> {
                          city.internet.averageSpeed < 30 ? 'Can be slow at times' :
                          city.internet.averageSpeed < 50 ? 'Reasonably fast' :
                          'Very fast and efficient'
                        }
                      </li>
                      <li>
                        <span className="font-medium">Power Outages:</span> {
                          city.internet.reliability < 80 ? 'Somewhat common' :
                          city.internet.reliability < 95 ? 'Occasional' :
                          'Rare'
                        }
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Working Spaces</h3>
                    <p className="text-muted-foreground mb-4">
                      {city.name} has {
                        city.internet.publicWifi === 'Excellent' ? 'numerous' :
                        city.internet.publicWifi === 'Good' ? 'several' :
                        'some'
                      } spaces suitable for remote work.
                    </p>
                    
                    <h4 className="font-semibold mt-4 mb-2">Options Include</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <span className="font-medium">Coworking Spaces:</span> Starting at ${costData?.coworking.monthlyMembership}/month or ${costData?.coworking.dayPass}/day
                      </li>
                      <li>
                        <span className="font-medium">Cafés with WiFi:</span> {
                          city.internet.publicWifi === 'Excellent' ? 'Abundant throughout the city' :
                          city.internet.publicWifi === 'Good' ? 'Common in central areas' :
                          'Available in tourist areas'
                        }
                      </li>
                      <li>
                        <span className="font-medium">Public WiFi:</span> {city.internet.publicWifi}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="vanlife" className="mt-6">
              {vanlifeData ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <VanlifeDetails vanlifeData={vanlifeData} />
                  
                  <div className="space-y-6">
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">Vanlife Suitability</h3>
                      <p className="text-muted-foreground mb-4">
                        {city.name} is {
                          city.vanliferFriendly ? 
                            vanlifeData.communityRating > 4 ? 'highly suitable' : 'suitable' : 
                            'challenging but possible'
                        } for vanlife, with a community rating of {vanlifeData.communityRating}/5.
                      </p>
                      
                      <h4 className="font-semibold mt-4 mb-2">Key Considerations</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                          <span className="font-medium">Overnight Parking:</span> {vanlifeData.parkingRegulations.overnightParking}
                          {vanlifeData.parkingRegulations.enforcementLevel === 'High' ? ' with strict enforcement' : ''}
                        </li>
                        <li>
                          <span className="font-medium">Water Access:</span> {vanlifeData.waterAccess.drinkingWater} for drinking water, 
                          {vanlifeData.waterAccess.dumpStations}
                        </li>
                        <li>
                          <span className="font-medium">Cell Coverage:</span> {vanlifeData.cellCoverage.city} in city areas, 
                          {vanlifeData.cellCoverage.surroundingAreas} in surrounding regions
                        </li>
                        <li>
                          <span className="font-medium">Road Conditions:</span> {vanlifeData.roadConditions.cityStreets} in the city, 
                          {vanlifeData.roadConditions.highways} on highways, 
                          {vanlifeData.roadConditions.ruralRoads} on rural roads
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">Local Insights</h3>
                      
                      <h4 className="font-semibold mb-2">Popular Spots</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {vanlifeData.popularSpots.join(', ')}
                      </p>
                      
                      <h4 className="font-semibold mb-2">Community Tips</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {vanlifeData.tips.map((tip, index) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl font-semibold">Vanlife information not available for this location</p>
                  <p className="text-muted-foreground mt-2">
                    This location may not be suitable for vanlife or data is still being collected.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocationDetail;
