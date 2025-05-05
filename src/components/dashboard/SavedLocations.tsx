
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function SavedLocations() {
  // Mock data for saved locations
  const savedLocations = [
    {
      id: "1",
      name: "Lisbon",
      country: "Portugal",
      matchPercentage: 87,
      notes: "Great internet, mild climate, affordable",
      savedDate: "2023-05-15"
    },
    {
      id: "5",
      name: "Prague",
      country: "Czech Republic",
      matchPercentage: 82,
      notes: "Beautiful city, good transport, moderate cost",
      savedDate: "2023-06-02"
    },
    {
      id: "3",
      name: "Medellin",
      country: "Colombia",
      matchPercentage: 79,
      notes: "Perfect weather, friendly community, need to check safety",
      savedDate: "2023-06-10"
    },
    {
      id: "7",
      name: "Bend",
      country: "United States",
      matchPercentage: 91,
      notes: "Outdoor paradise, great for vanlifer, check winter conditions",
      savedDate: "2023-06-18"
    },
    {
      id: "6",
      name: "Mexico City",
      country: "Mexico",
      matchPercentage: 76,
      notes: "Rich culture, good food, check neighborhood safety",
      savedDate: "2023-06-25"
    }
  ];

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Saved Locations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {savedLocations.map((location) => (
            <div 
              key={location.id}
              className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/20 transition-colors"
            >
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold">{location.name}, {location.country}</h3>
                  <span className="text-sm px-2 py-0.5 bg-app-blue/10 text-app-blue rounded-full">
                    {location.matchPercentage}% Match
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{location.notes}</p>
                <p className="text-xs text-muted-foreground mt-2">Saved on {location.savedDate}</p>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <Link to={`/location/${location.id}`}>
                    View
                  </Link>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-muted-foreground"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
