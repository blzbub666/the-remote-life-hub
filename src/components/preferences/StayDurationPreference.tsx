
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface StayDurationPreferenceProps {
  minDuration: number;
  preferredDuration: number;
  onMinDurationChange: (value: number) => void;
  onPreferredDurationChange: (value: number) => void;
}

export function StayDurationPreference({
  minDuration,
  preferredDuration,
  onMinDurationChange,
  onPreferredDurationChange,
}: StayDurationPreferenceProps) {
  return (
    <div className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      <div>
        <h3 className="text-xl font-semibold mb-4">Stay Duration</h3>
        <p className="text-muted-foreground mb-6">
          Define your minimum and preferred duration of stay in months.
        </p>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <Label>Minimum Stay Duration (months)</Label>
              <span className="font-medium">
                {minDuration === 0.5 ? "2 weeks" : `${minDuration} month${minDuration !== 1 ? "s" : ""}`}
              </span>
            </div>
            <Slider
              defaultValue={[minDuration]}
              min={0.5}
              max={12}
              step={0.5}
              onValueChange={(values) => onMinDurationChange(values[0])}
              className="my-6"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>2 weeks</span>
              <span>1 year+</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label>Preferred Stay Duration (months)</Label>
              <span className="font-medium">
                {preferredDuration === 0.5 ? "2 weeks" : `${preferredDuration} month${preferredDuration !== 1 ? "s" : ""}`}
              </span>
            </div>
            <Slider
              defaultValue={[preferredDuration]}
              min={0.5}
              max={12}
              step={0.5}
              onValueChange={(values) => onPreferredDurationChange(values[0])}
              className="my-6"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>2 weeks</span>
              <span>1 year+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
