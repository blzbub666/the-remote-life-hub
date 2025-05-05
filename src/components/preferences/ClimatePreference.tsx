
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ClimatePreferenceProps {
  minTemp: number;
  maxTemp: number;
  maxPrecipitation: number;
  humidity: string;
  importance: number;
  onTempRangeChange: (values: number[]) => void;
  onPrecipitationChange: (value: number) => void;
  onHumidityChange: (value: string) => void;
  onImportanceChange: (value: number) => void;
}

export function ClimatePreference({
  minTemp,
  maxTemp,
  maxPrecipitation,
  humidity,
  importance,
  onTempRangeChange,
  onPrecipitationChange,
  onHumidityChange,
  onImportanceChange,
}: ClimatePreferenceProps) {
  return (
    <div className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      <div>
        <h3 className="text-xl font-semibold mb-4">Climate Preferences</h3>
        <p className="text-muted-foreground mb-6">
          Select your ideal climate conditions for temperature, precipitation, and humidity.
        </p>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <Label>Temperature Range (°C)</Label>
              <span className="font-medium">
                {minTemp}°C - {maxTemp}°C
              </span>
            </div>
            <Slider
              defaultValue={[minTemp, maxTemp]}
              min={-10}
              max={40}
              step={1}
              onValueChange={onTempRangeChange}
              className="my-6"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Cold (-10°C)</span>
              <span>Hot (40°C)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label>Maximum Monthly Precipitation (mm)</Label>
              <span className="font-medium">{maxPrecipitation} mm</span>
            </div>
            <Slider
              defaultValue={[maxPrecipitation]}
              min={0}
              max={300}
              step={10}
              onValueChange={(values) => onPrecipitationChange(values[0])}
              className="my-6"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Dry (0mm)</span>
              <span>Wet (300mm)</span>
            </div>
          </div>

          <div>
            <Label className="mb-2 block">Preferred Humidity</Label>
            <Select value={humidity} onValueChange={onHumidityChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select humidity preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low Humidity</SelectItem>
                <SelectItem value="moderate">Moderate Humidity</SelectItem>
                <SelectItem value="high">High Humidity</SelectItem>
                <SelectItem value="any">Any Humidity Level</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label>How important is climate to you?</Label>
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
