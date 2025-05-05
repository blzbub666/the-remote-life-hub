
import { CityInternetData } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface InternetQualityProps {
  internetData: CityInternetData;
}

export function InternetQuality({ internetData }: InternetQualityProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Internet Infrastructure</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-muted/20 rounded-lg">
            <div className="text-3xl font-bold">{internetData.averageSpeed.download}</div>
            <div className="text-sm text-muted-foreground">Mbps Download</div>
          </div>
          <div className="text-center p-4 bg-muted/20 rounded-lg">
            <div className="text-3xl font-bold">{internetData.averageSpeed.upload}</div>
            <div className="text-sm text-muted-foreground">Mbps Upload</div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Reliability</span>
            <span>{internetData.reliability}%</span>
          </div>
          <Progress value={internetData.reliability} className="h-2" />
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Available Providers</h4>
          <div className="space-y-4">
            {internetData.providers.map((provider, index) => (
              <div key={index} className="border p-3 rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{provider.name}</span>
                  <span>${provider.monthlyPrice}/mo</span>
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  Max speed: {provider.maxSpeed} Mbps, Reliability: {provider.reliability}%
                </div>
                <Progress value={(provider.maxSpeed / 1000) * 100} className="h-1.5" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-semibold">Public WiFi</h4>
          <div className="text-sm">
            <div className="flex justify-between mb-1">
              <span>Availability</span>
              <span className="font-medium">{internetData.publicWifi.availability}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Average Speed</span>
              <span className="font-medium">{internetData.publicWifi.averageSpeed} Mbps</span>
            </div>
            <div className="flex mb-1">
              <span>Free Locations:</span>
              <span className="font-medium ml-2">{internetData.publicWifi.freeLocations.join(', ')}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-semibold">Mobile Data</h4>
          <div className="text-sm">
            <div className="flex justify-between mb-1">
              <span>4G Coverage</span>
              <span className="font-medium">{internetData.mobileData["4gCoverage"]}%</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>5G Available</span>
              <span className="font-medium">{internetData.mobileData["5gAvailable"] ? "Yes" : "No"}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Average Price</span>
              <span className="font-medium">${internetData.mobileData.averagePrice}/month</span>
            </div>
            <div className="flex mb-1">
              <span>Providers:</span>
              <span className="font-medium ml-2">{internetData.mobileData.providers.join(', ')}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
