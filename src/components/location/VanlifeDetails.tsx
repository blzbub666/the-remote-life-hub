
import { VanlifeData } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VanlifeDetailsProps {
  vanlifeData: VanlifeData;
}

export function VanlifeDetails({ vanlifeData }: VanlifeDetailsProps) {
  // Helper function to determine color based on rating
  const getRatingColor = (rating: string) => {
    if (rating.toLowerCase().includes("good") || rating.toLowerCase().includes("excellent")) {
      return "text-app-green";
    }
    if (rating.toLowerCase().includes("moderate")) {
      return "text-app-yellow";
    }
    return "text-app-orange";
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Vanlife Information</CardTitle>
          <Badge variant="outline" className="bg-app-green/10 text-app-green border-app-green">
            {vanlifeData.communityRating}/5 Rating
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-semibold">Parking Regulations</h4>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Overnight Parking</span>
                <span className={`text-sm font-medium ${getRatingColor(vanlifeData.parkingRegulations.overnightParking)}`}>
                  {vanlifeData.parkingRegulations.overnightParking}
                </span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Enforcement Level</span>
                <span className="text-sm font-medium">
                  {vanlifeData.parkingRegulations.enforcementLevel}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {vanlifeData.parkingRegulations.restrictions}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Water Access</h4>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Drinking Water</span>
                <span className={`text-sm font-medium ${getRatingColor(vanlifeData.waterAccess.drinkingWater)}`}>
                  {vanlifeData.waterAccess.drinkingWater}
                </span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Public Facilities</span>
                <span className="text-sm font-medium">
                  {vanlifeData.waterAccess.publicFacilities}
                </span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Dump Stations</span>
                <span className="text-sm font-medium">
                  {vanlifeData.waterAccess.dumpStations}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-semibold">Cell Coverage</h4>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">City Coverage</span>
                <span className={`text-sm font-medium ${getRatingColor(vanlifeData.cellCoverage.city)}`}>
                  {vanlifeData.cellCoverage.city}
                </span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Surrounding Areas</span>
                <span className={`text-sm font-medium ${getRatingColor(vanlifeData.cellCoverage.surroundingAreas)}`}>
                  {vanlifeData.cellCoverage.surroundingAreas}
                </span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Dead Spots</span>
                <span className="text-sm font-medium">
                  {vanlifeData.cellCoverage.deadSpots}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Road Conditions</h4>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">City Streets</span>
                <span className={`text-sm font-medium ${getRatingColor(vanlifeData.roadConditions.cityStreets)}`}>
                  {vanlifeData.roadConditions.cityStreets}
                </span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Highways</span>
                <span className={`text-sm font-medium ${getRatingColor(vanlifeData.roadConditions.highways)}`}>
                  {vanlifeData.roadConditions.highways}
                </span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Rural Roads</span>
                <span className="text-sm font-medium">
                  {vanlifeData.roadConditions.ruralRoads}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">Popular Spots</h4>
          <div className="flex flex-wrap gap-2">
            {vanlifeData.popularSpots.map((spot, index) => (
              <Badge key={index} variant="outline" className="bg-muted/30">
                {spot}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">Tips from the Community</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            {vanlifeData.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
