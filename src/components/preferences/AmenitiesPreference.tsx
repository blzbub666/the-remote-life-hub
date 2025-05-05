
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

interface AmenitiesPreference {
  coworkingSpaces: boolean;
  cafes: boolean;
  publicTransport: boolean;
  healthcare: boolean;
  safety: boolean;
  nightlife: boolean;
}

interface AmenitiesPreferenceProps {
  amenities: AmenitiesPreference;
  importance: number;
  onAmenitiesChange: (amenities: AmenitiesPreference) => void;
  onImportanceChange: (value: number) => void;
}

export function AmenitiesPreference({
  amenities,
  importance,
  onAmenitiesChange,
  onImportanceChange,
}: AmenitiesPreferenceProps) {
  const handleAmenityChange = (amenity: keyof AmenitiesPreference, checked: boolean) => {
    onAmenitiesChange({
      ...amenities,
      [amenity]: checked,
    });
  };

  return (
    <div className="space-y-6 p-6 bg-card rounded-lg shadow-sm border border-gray-100">
      <div>
        <h3 className="text-xl font-semibold mb-4">Must-Have Amenities</h3>
        <p className="text-muted-foreground mb-6">
          Select the amenities and facilities that are important for your lifestyle.
        </p>

        <div className="space-y-8">
          <div>
            <Label className="mb-4 block font-medium">Available Amenities</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md">
                <Checkbox
                  id="coworkingSpaces"
                  checked={amenities.coworkingSpaces}
                  onCheckedChange={(checked) =>
                    handleAmenityChange("coworkingSpaces", checked as boolean)
                  }
                  className="h-5 w-5"
                />
                <label
                  htmlFor="coworkingSpaces"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Coworking Spaces
                </label>
              </div>
              
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md">
                <Checkbox
                  id="cafes"
                  checked={amenities.cafes}
                  onCheckedChange={(checked) =>
                    handleAmenityChange("cafes", checked as boolean)
                  }
                  className="h-5 w-5"
                />
                <label
                  htmlFor="cafes"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Cafes with WiFi
                </label>
              </div>
              
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md">
                <Checkbox
                  id="publicTransport"
                  checked={amenities.publicTransport}
                  onCheckedChange={(checked) =>
                    handleAmenityChange("publicTransport", checked as boolean)
                  }
                  className="h-5 w-5"
                />
                <label
                  htmlFor="publicTransport"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Good Public Transport
                </label>
              </div>
              
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md">
                <Checkbox
                  id="healthcare"
                  checked={amenities.healthcare}
                  onCheckedChange={(checked) =>
                    handleAmenityChange("healthcare", checked as boolean)
                  }
                  className="h-5 w-5"
                />
                <label
                  htmlFor="healthcare"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Quality Healthcare
                </label>
              </div>
              
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md">
                <Checkbox
                  id="safety"
                  checked={amenities.safety}
                  onCheckedChange={(checked) =>
                    handleAmenityChange("safety", checked as boolean)
                  }
                  className="h-5 w-5"
                />
                <label
                  htmlFor="safety"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  High Safety
                </label>
              </div>
              
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md">
                <Checkbox
                  id="nightlife"
                  checked={amenities.nightlife}
                  onCheckedChange={(checked) =>
                    handleAmenityChange("nightlife", checked as boolean)
                  }
                  className="h-5 w-5"
                />
                <label
                  htmlFor="nightlife"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Active Nightlife
                </label>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-3 mt-6">
              <Label>How important are these amenities to you?</Label>
              <span className="font-medium">
                {importance === 1
                  ? "Nice to have"
                  : importance === 2
                  ? "Important"
                  : "Must have"}
              </span>
            </div>
            <Slider
              defaultValue={[importance]}
              min={1}
              max={3}
              step={1}
              onValueChange={(values) => onImportanceChange(values[0])}
              className="my-6"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Nice to have</span>
              <span>Must have</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
