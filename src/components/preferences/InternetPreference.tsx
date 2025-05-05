
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface InternetPreferenceProps {
  minSpeed: number;
  reliability: number;
  importance: number;
  onSpeedChange: (value: number) => void;
  onReliabilityChange: (value: number) => void;
  onImportanceChange: (value: number) => void;
}

export function InternetPreference({
  minSpeed,
  reliability,
  importance,
  onSpeedChange,
  onReliabilityChange,
  onImportanceChange,
}: InternetPreferenceProps) {
  return (
    <div className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      <div>
        <h3 className="text-xl font-semibold mb-4">Internet Requirements</h3>
        <p className="text-muted-foreground mb-6">
          Define your minimum internet speed and reliability requirements.
        </p>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <Label>Minimum Internet Speed (Mbps)</Label>
              <span className="font-medium">{minSpeed} Mbps</span>
            </div>
            <Slider
              defaultValue={[minSpeed]}
              min={5}
              max={100}
              step={5}
              onValueChange={(values) => onSpeedChange(values[0])}
              className="my-6"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Basic (5 Mbps)</span>
              <span>Fast (100+ Mbps)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label>Minimum Reliability (%)</Label>
              <span className="font-medium">{reliability}%</span>
            </div>
            <Slider
              defaultValue={[reliability]}
              min={70}
              max={99}
              step={1}
              onValueChange={(values) => onReliabilityChange(values[0])}
              className="my-6"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>70%</span>
              <span>99%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label>How important is internet to you?</Label>
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
