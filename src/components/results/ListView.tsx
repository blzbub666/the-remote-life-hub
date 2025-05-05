
import { Button } from "@/components/ui/button";
import { MatchResult } from "@/types";
import { useState } from "react";

interface ListViewProps {
  matches: MatchResult[];
  onLocationSelect: (locationId: string) => void;
  selectedLocationId: string | null;
}

export function ListView({ matches, onLocationSelect, selectedLocationId }: ListViewProps) {
  const [sortBy, setSortBy] = useState<"match" | "cost" | "internet">("match");

  const sortedMatches = [...matches].sort((a, b) => {
    if (sortBy === "match") {
      return b.matchPercentage - a.matchPercentage;
    } else if (sortBy === "cost") {
      return a.city.costOfLiving.overall - b.city.costOfLiving.overall;
    } else if (sortBy === "internet") {
      return b.city.internet.averageSpeed - a.city.internet.averageSpeed;
    }
    return 0;
  });

  const getMatchClass = (matchPercentage: number) => {
    if (matchPercentage >= 90) return "text-app-green";
    if (matchPercentage >= 80) return "text-app-blue";
    if (matchPercentage >= 70) return "text-app-yellow";
    return "text-app-orange";
  };

  return (
    <div className="bg-card rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Matching Locations</h3>
          <div className="flex space-x-2">
            <Button 
              variant={sortBy === "match" ? "default" : "ghost"} 
              size="sm"
              onClick={() => setSortBy("match")}
              className={sortBy === "match" ? "bg-app-blue hover:bg-app-blue/90" : ""}
            >
              Match %
            </Button>
            <Button 
              variant={sortBy === "cost" ? "default" : "ghost"} 
              size="sm"
              onClick={() => setSortBy("cost")}
              className={sortBy === "cost" ? "bg-app-blue hover:bg-app-blue/90" : ""}
            >
              Cost
            </Button>
            <Button 
              variant={sortBy === "internet" ? "default" : "ghost"} 
              size="sm"
              onClick={() => setSortBy("internet")}
              className={sortBy === "internet" ? "bg-app-blue hover:bg-app-blue/90" : ""}
            >
              Internet
            </Button>
          </div>
        </div>
      </div>

      <div className="divide-y max-h-[560px] overflow-y-auto">
        {sortedMatches.map((match) => (
          <div 
            key={match.city.id} 
            className={`p-4 hover:bg-muted/40 cursor-pointer transition-colors ${
              match.city.id === selectedLocationId ? "bg-muted/60" : ""
            }`}
            onClick={() => onLocationSelect(match.city.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{match.city.name}, {match.city.country}</h4>
                <p className="text-sm text-muted-foreground">{match.city.region}</p>
              </div>
              <div className={`text-lg font-bold ${getMatchClass(match.matchPercentage)}`}>
                {match.matchPercentage}%
              </div>
            </div>
            
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">Monthly Cost</div>
                <div className="font-semibold">${match.city.costOfLiving.overall}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">Internet</div>
                <div className="font-semibold">{match.city.internet.averageSpeed} Mbps</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">Climate</div>
                <div className="font-semibold">{match.city.climate.averageTemperature.summer}°C</div>
              </div>
            </div>

            <div className="mt-3 flex justify-between items-center">
              <div className="flex space-x-1 text-xs">
                {match.city.digitalNomadFriendly && (
                  <span className="px-2 py-1 bg-app-blue/10 text-app-blue rounded-full">Nomad Friendly</span>
                )}
                {match.city.vanliferFriendly && (
                  <span className="px-2 py-1 bg-app-green/10 text-app-green rounded-full">Vanlifer Friendly</span>
                )}
              </div>
              
              <Button variant="ghost" size="sm">Save</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
