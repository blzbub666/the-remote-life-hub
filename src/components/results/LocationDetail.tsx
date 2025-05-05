
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { City, MatchResult } from "@/types";
import { Link } from "react-router-dom";

interface LocationDetailProps {
  matchResult: MatchResult | null;
}

export function LocationDetail({ matchResult }: LocationDetailProps) {
  if (!matchResult) {
    return (
      <div className="h-full flex items-center justify-center p-6 bg-card rounded-lg shadow-sm">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Select a Location</h3>
          <p className="text-muted-foreground">
            Click on a location from the map or list to view detailed information.
          </p>
        </div>
      </div>
    );
  }

  const { city, matchPercentage, matchCategories } = matchResult;

  return (
    <div className="bg-card rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <img
          src={city.images[0]}
          alt={city.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h2 className="text-2xl font-bold">{city.name}, {city.country}</h2>
          <p className="text-sm opacity-90">{city.region}</p>
        </div>
        <div className="absolute top-4 right-4 bg-white text-app-blue dark:bg-black dark:text-app-blue font-bold text-lg px-3 py-1 rounded-full shadow-lg">
          {matchPercentage}% Match
        </div>
      </div>

      <div className="flex-grow overflow-auto">
        <Tabs defaultValue="overview" className="w-full">
          <div className="px-4 pt-4">
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="cost">Cost</TabsTrigger>
              <TabsTrigger value="climate">Climate</TabsTrigger>
              <TabsTrigger value="internet">Internet</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="p-4 space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Match Breakdown</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Budget</span>
                      <span className="text-sm font-medium">{matchCategories.budget}%</span>
                    </div>
                    <Progress value={matchCategories.budget} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Climate</span>
                      <span className="text-sm font-medium">{matchCategories.climate}%</span>
                    </div>
                    <Progress value={matchCategories.climate} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Internet</span>
                      <span className="text-sm font-medium">{matchCategories.internet}%</span>
                    </div>
                    <Progress value={matchCategories.internet} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Time Zone</span>
                      <span className="text-sm font-medium">{matchCategories.timeZone}%</span>
                    </div>
                    <Progress value={matchCategories.timeZone} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Amenities</span>
                      <span className="text-sm font-medium">{matchCategories.amenities}%</span>
                    </div>
                    <Progress value={matchCategories.amenities} className="h-2" />
                  </div>
                  {matchCategories.parking && (
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Parking</span>
                        <span className="text-sm font-medium">{matchCategories.parking}%</span>
                      </div>
                      <Progress value={matchCategories.parking} className="h-2" />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Quick Facts</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Card>
                    <CardContent className="p-3">
                      <div className="text-xs text-muted-foreground">Time Zone</div>
                      <div className="font-semibold">{city.timeZone}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-3">
                      <div className="text-xs text-muted-foreground">Safety</div>
                      <div className="font-semibold">{city.infrastructure.safety}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-3">
                      <div className="text-xs text-muted-foreground">Healthcare</div>
                      <div className="font-semibold">{city.infrastructure.healthcare}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-3">
                      <div className="text-xs text-muted-foreground">Public Transport</div>
                      <div className="font-semibold">{city.infrastructure.publicTransport}</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cost" className="p-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Cost of Living</h3>
              <Card>
                <CardContent className="p-4">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold">${city.costOfLiving.overall}</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Housing</span>
                        <span className="text-sm font-medium">${city.costOfLiving.housing}</span>
                      </div>
                      <Progress 
                        value={(city.costOfLiving.housing / city.costOfLiving.overall) * 100} 
                        className="h-2" 
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Food</span>
                        <span className="text-sm font-medium">${city.costOfLiving.food}</span>
                      </div>
                      <Progress 
                        value={(city.costOfLiving.food / city.costOfLiving.overall) * 100} 
                        className="h-2" 
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Transportation</span>
                        <span className="text-sm font-medium">${city.costOfLiving.transportation}</span>
                      </div>
                      <Progress 
                        value={(city.costOfLiving.transportation / city.costOfLiving.overall) * 100} 
                        className="h-2" 
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Other</span>
                        <span className="text-sm font-medium">
                          $
                          {city.costOfLiving.overall - 
                            city.costOfLiving.housing - 
                            city.costOfLiving.food - 
                            city.costOfLiving.transportation}
                        </span>
                      </div>
                      <Progress 
                        value={
                          ((city.costOfLiving.overall - 
                            city.costOfLiving.housing - 
                            city.costOfLiving.food - 
                            city.costOfLiving.transportation) / 
                            city.costOfLiving.overall) * 100
                        } 
                        className="h-2" 
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="climate" className="p-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Climate</h3>
              <Card>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-muted/20 rounded-lg">
                      <div className="text-3xl font-bold">
                        {city.climate.averageTemperature.summer}°C
                      </div>
                      <div className="text-sm text-muted-foreground">Summer Avg.</div>
                    </div>
                    <div className="text-center p-3 bg-muted/20 rounded-lg">
                      <div className="text-3xl font-bold">
                        {city.climate.averageTemperature.winter}°C
                      </div>
                      <div className="text-sm text-muted-foreground">Winter Avg.</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Spring</span>
                        <span className="text-sm font-medium">
                          {city.climate.averageTemperature.spring}°C, 
                          {city.climate.averageRainfall.spring}mm rain
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Summer</span>
                        <span className="text-sm font-medium">
                          {city.climate.averageTemperature.summer}°C, 
                          {city.climate.averageRainfall.summer}mm rain
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Fall</span>
                        <span className="text-sm font-medium">
                          {city.climate.averageTemperature.fall}°C, 
                          {city.climate.averageRainfall.fall}mm rain
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Winter</span>
                        <span className="text-sm font-medium">
                          {city.climate.averageTemperature.winter}°C, 
                          {city.climate.averageRainfall.winter}mm rain
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Humidity</span>
                        <span className="text-sm font-medium">{city.climate.humidity}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="internet" className="p-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Internet</h3>
              <Card>
                <CardContent className="p-4">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold">{city.internet.averageSpeed} Mbps</div>
                    <div className="text-sm text-muted-foreground">Average Speed</div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Reliability</span>
                        <span className="text-sm font-medium">{city.internet.reliability}%</span>
                      </div>
                      <Progress value={city.internet.reliability} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Public Wi-Fi</span>
                        <span className="text-sm font-medium">{city.internet.publicWifi}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="p-4 border-t bg-muted/10">
        <div className="flex justify-between items-center">
          <Button variant="outline">Save Location</Button>
          <Button asChild className="bg-app-blue hover:bg-app-blue/90">
            <Link to={`/location/${city.id}`}>Explore Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
