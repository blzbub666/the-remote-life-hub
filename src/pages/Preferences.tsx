
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { UserType, UserPreferences } from "@/types";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserTypeSelector } from "@/components/preferences/UserTypeSelector";
import { BudgetPreference } from "@/components/preferences/BudgetPreference";
import { ClimatePreference } from "@/components/preferences/ClimatePreference";
import { InternetPreference } from "@/components/preferences/InternetPreference";
import { TimeZonePreference } from "@/components/preferences/TimeZonePreference";
import { AmenitiesPreference } from "@/components/preferences/AmenitiesPreference";
import { VanlifePreference } from "@/components/preferences/VanlifePreference";
import { StayDurationPreference } from "@/components/preferences/StayDurationPreference";

const Preferences = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract user type from URL if available
  const queryParams = new URLSearchParams(location.search);
  const userTypeParam = queryParams.get("type") as UserType | null;
  
  const [userType, setUserType] = useState<UserType | null>(userTypeParam);
  
  // Budget preferences
  const [minBudget, setMinBudget] = useState(1500);
  const [maxBudget, setMaxBudget] = useState(2500);
  const [budgetImportance, setBudgetImportance] = useState(2);
  
  // Climate preferences
  const [minTemp, setMinTemp] = useState(15);
  const [maxTemp, setMaxTemp] = useState(30);
  const [maxPrecipitation, setMaxPrecipitation] = useState(100);
  const [humidity, setHumidity] = useState("moderate");
  const [climateImportance, setClimateImportance] = useState(2);
  
  // Internet preferences
  const [minSpeed, setMinSpeed] = useState(25);
  const [reliability, setReliability] = useState(90);
  const [internetImportance, setInternetImportance] = useState(3);
  
  // Time zone preferences
  const [preferredZones, setPreferredZones] = useState<string[]>(["gmt0", "gmt+1"]);
  const [timeZoneImportance, setTimeZoneImportance] = useState(2);
  
  // Amenities preferences
  const [amenities, setAmenities] = useState({
    coworkingSpaces: true,
    cafes: true,
    publicTransport: true,
    healthcare: true,
    safety: true,
    nightlife: false
  });
  const [amenitiesImportance, setAmenitiesImportance] = useState(2);
  
  // Stay duration
  const [minDuration, setMinDuration] = useState(1);
  const [preferredDuration, setPreferredDuration] = useState(3);
  
  // Vanlife specific preferences
  const [parkingImportance, setParkingImportance] = useState(3);
  const [waterAccessImportance, setWaterAccessImportance] = useState(3);
  const [cellCoverageImportance, setCellCoverageImportance] = useState(2);
  const [roadConditionsImportance, setRoadConditionsImportance] = useState(2);
  
  // Update URL when user type changes
  useEffect(() => {
    if (userType) {
      navigate(`/preferences?type=${userType}`, { replace: true });
    }
  }, [userType, navigate]);
  
  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
  };
  
  const handleBudgetRangeChange = (values: number[]) => {
    setMinBudget(values[0]);
    setMaxBudget(values[1]);
  };
  
  const handleTempRangeChange = (values: number[]) => {
    setMinTemp(values[0]);
    setMaxTemp(values[1]);
  };
  
  const handleFindMatches = () => {
    if (!userType) {
      toast.error("Please select whether you're a Remote Worker or Vanlifer.");
      return;
    }
    
    const preferences: UserPreferences = {
      userType,
      preferences: {
        budget: {
          min: minBudget,
          max: maxBudget,
          importance: budgetImportance
        },
        climate: {
          temperatureMin: minTemp,
          temperatureMax: maxTemp,
          precipitationMax: maxPrecipitation,
          humidity,
          importance: climateImportance
        },
        internet: {
          minimumSpeed: minSpeed,
          reliability,
          importance: internetImportance
        },
        timeZone: {
          preferredZones,
          importance: timeZoneImportance
        },
        stayDuration: {
          minimum: minDuration,
          preferred: preferredDuration
        },
        amenities: {
          ...amenities,
          importance: amenitiesImportance
        },
        ...(userType === 'vanlifer' && {
          vanlifeSpecific: {
            overnightParking: {
              importance: parkingImportance
            },
            waterAccess: {
              importance: waterAccessImportance
            },
            cellCoverage: {
              importance: cellCoverageImportance
            },
            roadConditions: {
              importance: roadConditionsImportance
            }
          }
        })
      }
    };
    
    console.log("Submitting preferences:", preferences);
    // In a real app, this would store preferences in context or state management
    // and then navigate to results
    navigate('/results', { 
      state: { preferences } 
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader className="text-center border-b">
              <CardTitle className="text-3xl">Find Your Perfect Match</CardTitle>
              <p className="text-muted-foreground">
                Tell us your preferences and we'll match you with the best locations
              </p>
            </CardHeader>
            <CardContent className="py-6">
              <UserTypeSelector 
                selectedType={userType} 
                onSelect={handleUserTypeSelect} 
              />
              
              {userType && (
                <div className="space-y-8">
                  <BudgetPreference
                    minBudget={minBudget}
                    maxBudget={maxBudget}
                    importance={budgetImportance}
                    onMinMaxChange={handleBudgetRangeChange}
                    onImportanceChange={setBudgetImportance}
                  />
                  
                  <ClimatePreference
                    minTemp={minTemp}
                    maxTemp={maxTemp}
                    maxPrecipitation={maxPrecipitation}
                    humidity={humidity}
                    importance={climateImportance}
                    onTempRangeChange={handleTempRangeChange}
                    onPrecipitationChange={setMaxPrecipitation}
                    onHumidityChange={setHumidity}
                    onImportanceChange={setClimateImportance}
                  />
                  
                  <InternetPreference
                    minSpeed={minSpeed}
                    reliability={reliability}
                    importance={internetImportance}
                    onSpeedChange={setMinSpeed}
                    onReliabilityChange={setReliability}
                    onImportanceChange={setInternetImportance}
                  />
                  
                  <TimeZonePreference
                    preferredZones={preferredZones}
                    importance={timeZoneImportance}
                    onZoneChange={setPreferredZones}
                    onImportanceChange={setTimeZoneImportance}
                  />
                  
                  <StayDurationPreference
                    minDuration={minDuration}
                    preferredDuration={preferredDuration}
                    onMinDurationChange={setMinDuration}
                    onPreferredDurationChange={setPreferredDuration}
                  />
                  
                  <AmenitiesPreference
                    amenities={amenities}
                    importance={amenitiesImportance}
                    onAmenitiesChange={setAmenities}
                    onImportanceChange={setAmenitiesImportance}
                  />
                  
                  {userType === 'vanlifer' && (
                    <VanlifePreference
                      parkingImportance={parkingImportance}
                      waterAccessImportance={waterAccessImportance}
                      cellCoverageImportance={cellCoverageImportance}
                      roadConditionsImportance={roadConditionsImportance}
                      onParkingImportanceChange={setParkingImportance}
                      onWaterAccessImportanceChange={setWaterAccessImportance}
                      onCellCoverageImportanceChange={setCellCoverageImportance}
                      onRoadConditionsImportanceChange={setRoadConditionsImportance}
                    />
                  )}
                  
                  <div className="pt-6 text-center">
                    <Button 
                      onClick={handleFindMatches}
                      size="lg"
                      className="bg-app-blue hover:bg-app-blue/90"
                    >
                      Find My Matches
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Preferences;
