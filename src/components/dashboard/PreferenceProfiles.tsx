
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PreferenceProfiles() {
  // Mock data for preference profiles
  const profiles = [
    {
      id: "1",
      name: "Remote Worker - Summer Destinations",
      type: "remoteWorker",
      createdDate: "2023-05-01",
      keyPreferences: "Budget: $1500-2500, Warm climate, Fast internet"
    },
    {
      id: "2",
      name: "Vanlifer - Mountain Regions",
      type: "vanlifer",
      createdDate: "2023-06-05",
      keyPreferences: "Good overnight parking, Cell coverage important, Mild temperatures"
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Preference Profiles</CardTitle>
        <Button 
          variant="outline" 
          size="sm"
          asChild
        >
          <Link to="/preferences">
            New Profile
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {profiles.map((profile) => (
            <div 
              key={profile.id}
              className="p-4 border rounded-lg hover:bg-muted/20 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{profile.name}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs px-2 py-0.5 bg-muted rounded-full mr-2">
                      {profile.type === "remoteWorker" ? "Remote Worker" : "Vanlifer"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Created on {profile.createdDate}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{profile.keyPreferences}</p>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <Link to={`/results?profile=${profile.id}`}>
                      Find Matches
                    </Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-muted-foreground"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
