
import { useState, useEffect } from "react";
import { MatchResult, Coordinates } from "@/types";

interface MapViewProps {
  matches: MatchResult[];
  onLocationSelect: (locationId: string) => void;
  selectedLocationId: string | null;
}

export function MapView({ matches, onLocationSelect, selectedLocationId }: MapViewProps) {
  const [mapReady, setMapReady] = useState(false);

  // This would be replaced with an actual map integration
  useEffect(() => {
    // Simulate map loading
    setTimeout(() => {
      setMapReady(true);
      console.log("Map loaded with coordinates:", matches.map(m => m.city.coordinates));
    }, 1000);
  }, [matches]);

  const getMarkerColor = (matchPercentage: number) => {
    if (matchPercentage >= 90) return "bg-app-green";
    if (matchPercentage >= 80) return "bg-app-blue";
    if (matchPercentage >= 70) return "bg-app-yellow";
    return "bg-app-orange";
  };

  const generateRandomPosition = (baseCoord: Coordinates, multiplier: number = 1): { top: string, left: string } => {
    // This is just for the mock map visualization
    // A real map would position markers based on lat/lng
    return {
      top: `${(100 - ((baseCoord.lat + 90) / 180 * 100)) * multiplier}%`,
      left: `${((baseCoord.lng + 180) / 360 * 100) * multiplier}%`,
    };
  };

  return (
    <div className="bg-muted/30 rounded-lg overflow-hidden relative h-full min-h-[500px]">
      {!mapReady && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <p className="text-xl font-semibold mb-2">Loading Map...</p>
            <div className="w-8 h-8 border-4 border-app-blue border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      )}

      {/* Placeholder map with markers */}
      <div className="absolute inset-0 bg-[#f8f8f8] dark:bg-gray-800 overflow-hidden">
        {/* This would be a real map component in a production app */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
            alt="Map background" 
            className="w-full h-full object-cover opacity-30"
          />
          
          {/* Placeholder markers */}
          {mapReady && matches.map((match, index) => {
            const position = generateRandomPosition(match.city.coordinates);
            const isSelected = match.city.id === selectedLocationId;
            const markerColor = getMarkerColor(match.matchPercentage);
            
            return (
              <div 
                key={match.city.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-10
                          ${isSelected ? 'scale-150 z-20' : 'hover:scale-125'}`}
                style={{ top: position.top, left: position.left }}
                onClick={() => onLocationSelect(match.city.id)}
              >
                <div className={`w-5 h-5 ${markerColor} rounded-full shadow-lg flex items-center justify-center relative`}>
                  {isSelected && (
                    <div className="absolute -inset-1 bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-30 rounded-full animate-pulse"></div>
                  )}
                </div>
                
                {isSelected && (
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-2 rounded shadow-md whitespace-nowrap">
                    <p className="text-xs font-semibold">{match.city.name}, {match.city.country}</p>
                    <p className="text-xs text-muted-foreground">{match.matchPercentage}% Match</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Map controls */}
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-lg shadow-md">
          <div className="flex flex-col space-y-2">
            {/* These would be functional controls in a real map implementation */}
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              +
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              −
            </button>
          </div>
        </div>
        
        {/* Map legend */}
        <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg shadow-md">
          <p className="text-xs font-semibold mb-2">Match Percentage</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-app-green rounded-full"></div>
              <span className="text-xs">90%+</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-app-blue rounded-full"></div>
              <span className="text-xs">80-89%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-app-yellow rounded-full"></div>
              <span className="text-xs">70-79%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-app-orange rounded-full"></div>
              <span className="text-xs">Below 70%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
