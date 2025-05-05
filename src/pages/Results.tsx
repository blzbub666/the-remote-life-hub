import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapView } from "@/components/results/MapView";
import { ListView } from "@/components/results/ListView";
import { LocationDetail } from "@/components/results/LocationDetail";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LocationService } from "@/services/LocationService";
import { MatchResult, UserPreferences } from "@/types";

const Results = () => {
  const location = useLocation();
  const preferences = location.state?.preferences as UserPreferences;
  
  const [isLoading, setIsLoading] = useState(true);
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState("map");
  
  const selectedMatch = matches.find(match => match.city.id === selectedLocationId) || null;
  
  useEffect(() => {
    const fetchMatches = async () => {
      setIsLoading(true);
      try {
        if (preferences) {
          // Use actual preferences if available
          const results = await LocationService.findMatches(preferences);
          setMatches(results);
          
          // Select the highest match by default
          if (results.length > 0) {
            setSelectedLocationId(results[0].city.id);
          }
        } else {
          // Otherwise fetch all cities as fallback
          const cities = await LocationService.getAllCities();
          const mockMatches = cities.map(city => ({
            city,
            matchPercentage: Math.floor(Math.random() * 30) + 70,
            matchCategories: {
              budget: Math.floor(Math.random() * 40) + 60,
              climate: Math.floor(Math.random() * 40) + 60,
              internet: Math.floor(Math.random() * 40) + 60,
              timeZone: Math.floor(Math.random() * 40) + 60,
              amenities: Math.floor(Math.random() * 40) + 60
            }
          })).sort((a, b) => b.matchPercentage - a.matchPercentage);
          
          setMatches(mockMatches);
          
          if (mockMatches.length > 0) {
            setSelectedLocationId(mockMatches[0].city.id);
          }
        }
      } catch (error) {
        console.error("Error fetching matches:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMatches();
  }, [preferences]);
  
  const handleLocationSelect = (locationId: string) => {
    setSelectedLocationId(locationId);
    
    // If on mobile and a location is selected, show the details tab
    if (window.innerWidth < 768) {
      setActiveView("details");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Your Matching Locations</h1>
          
          {isLoading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-app-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-xl font-semibold">Finding your matches...</p>
                <p className="text-muted-foreground">Analyzing locations based on your preferences</p>
              </div>
            </div>
          ) : (
            <>
              {/* Mobile view (tabs) */}
              <div className="md:hidden mb-6">
                <Tabs value={activeView} onValueChange={setActiveView}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="map">Map</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                  </TabsList>
                  <TabsContent value="map" className="mt-4">
                    <div className="h-[70vh]">
                      <MapView 
                        matches={matches} 
                        onLocationSelect={handleLocationSelect}
                        selectedLocationId={selectedLocationId}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="list" className="mt-4">
                    <ListView 
                      matches={matches} 
                      onLocationSelect={handleLocationSelect}
                      selectedLocationId={selectedLocationId}
                    />
                  </TabsContent>
                  <TabsContent value="details" className="mt-4">
                    <div className="h-[70vh]">
                      <LocationDetail matchResult={selectedMatch} />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Desktop view (side by side) */}
              <div className="hidden md:grid grid-cols-3 gap-6">
                <div className="col-span-2 h-[calc(100vh-200px)]">
                  <MapView 
                    matches={matches} 
                    onLocationSelect={handleLocationSelect}
                    selectedLocationId={selectedLocationId}
                  />
                </div>
                <div className="col-span-1 grid grid-rows-2 gap-6">
                  <div className="overflow-auto">
                    <ListView 
                      matches={matches} 
                      onLocationSelect={handleLocationSelect}
                      selectedLocationId={selectedLocationId}
                    />
                  </div>
                  <div className="overflow-auto">
                    <LocationDetail matchResult={selectedMatch} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Results;
