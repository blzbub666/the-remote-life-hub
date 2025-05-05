
import { CityClimateData } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// This would use a charting library like recharts in a real app
// For now, creating a simple visualization

interface ClimateChartProps {
  climateData: CityClimateData;
}

export function ClimateChart({ climateData }: ClimateChartProps) {
  const seasons = ["winter", "spring", "summer", "fall"] as const;
  const maxTemp = Math.max(...Object.values(climateData.monthlyTemperature));
  const maxRain = Math.max(...Object.values(climateData.monthlyRainfall));
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Climate Data</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="temperature">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="temperature">Temperature</TabsTrigger>
            <TabsTrigger value="rainfall">Rainfall</TabsTrigger>
            <TabsTrigger value="humidity">Humidity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="temperature" className="space-y-4 pt-4">
            <div className="flex items-end h-48 gap-4">
              {seasons.map(season => {
                const temp = climateData.monthlyTemperature[season];
                const height = (temp / maxTemp) * 100;
                
                return (
                  <div key={season} className="flex-1 flex flex-col items-center">
                    <div className="text-sm font-medium mb-2">{temp}°C</div>
                    <div 
                      className="w-full bg-app-blue rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                    <div className="text-sm mt-2 capitalize">{season}</div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>This chart shows average temperatures throughout the seasons.</p>
              <p className="mt-2">
                Highest temperatures are typically in {
                  seasons.reduce((max, season) => 
                    climateData.monthlyTemperature[season] > climateData.monthlyTemperature[max] 
                      ? season 
                      : max
                  , seasons[0])
                }, while the coolest season is {
                  seasons.reduce((min, season) => 
                    climateData.monthlyTemperature[season] < climateData.monthlyTemperature[min] 
                      ? season 
                      : min
                  , seasons[0])
                }.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="rainfall" className="space-y-4 pt-4">
            <div className="flex items-end h-48 gap-4">
              {seasons.map(season => {
                const rain = climateData.monthlyRainfall[season];
                const height = (rain / maxRain) * 100;
                
                return (
                  <div key={season} className="flex-1 flex flex-col items-center">
                    <div className="text-sm font-medium mb-2">{rain}mm</div>
                    <div 
                      className="w-full bg-app-green rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                    <div className="text-sm mt-2 capitalize">{season}</div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>This chart shows average precipitation (in mm) throughout the seasons.</p>
              <p className="mt-2">
                The wettest season is typically {
                  seasons.reduce((max, season) => 
                    climateData.monthlyRainfall[season] > climateData.monthlyRainfall[max] 
                      ? season 
                      : max
                  , seasons[0])
                }, while the driest season is {
                  seasons.reduce((min, season) => 
                    climateData.monthlyRainfall[season] < climateData.monthlyRainfall[min] 
                      ? season 
                      : min
                  , seasons[0])
                }.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="humidity" className="space-y-4 pt-4">
            <div className="flex items-end h-48 gap-4">
              {seasons.map(season => {
                const humidity = climateData.humidity[season];
                const height = (humidity / 100) * 100;
                
                return (
                  <div key={season} className="flex-1 flex flex-col items-center">
                    <div className="text-sm font-medium mb-2">{humidity}%</div>
                    <div 
                      className="w-full bg-app-orange rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                    <div className="text-sm mt-2 capitalize">{season}</div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>This chart shows average humidity levels throughout the seasons.</p>
              <p className="mt-2">
                Humidity is highest during {
                  seasons.reduce((max, season) => 
                    climateData.humidity[season] > climateData.humidity[max] 
                      ? season 
                      : max
                  , seasons[0])
                }, and lowest during {
                  seasons.reduce((min, season) => 
                    climateData.humidity[season] < climateData.humidity[min] 
                      ? season 
                      : min
                  , seasons[0])
                }.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
