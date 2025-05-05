
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface VanlifePreferenceProps {
  parkingImportance: number;
  waterAccessImportance: number;
  cellCoverageImportance: number;
  roadConditionsImportance: number;
  onParkingImportanceChange: (value: number) => void;
  onWaterAccessImportanceChange: (value: number) => void;
  onCellCoverageImportanceChange: (value: number) => void;
  onRoadConditionsImportanceChange: (value: number) => void;
}

export function VanlifePreference({
  parkingImportance,
  waterAccessImportance,
  cellCoverageImportance,
  roadConditionsImportance,
  onParkingImportanceChange,
  onWaterAccessImportanceChange,
  onCellCoverageImportanceChange,
  onRoadConditionsImportanceChange,
}: VanlifePreferenceProps) {
  return (
    <div className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      <div>
        <h3 className="text-xl font-semibold mb-4">Vanlife-Specific Options</h3>
        <p className="text-muted-foreground mb-6">
          Set the importance of vanlife-specific considerations for your travels.
        </p>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <Label>Overnight Parking Regulations</Label>
              <span className="font-medium">
                {parkingImportance === 1
                  ? "Nice to have"
                  : parkingImportance === 2
                  ? "Important"
                  : "Must have"}
              </span>
            </div>
            <Slider
              defaultValue={[parkingImportance]}
              min={1}
              max={3}
              step={1}
              onValueChange={(values) => onParkingImportanceChange(values[0])}
              className="my-6"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Nice to have</span>
              <span>Must have</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label>Access to Water/Dump Stations</Label>
              <span className="font-medium">
                {waterAccessImportance === 1
                  ? "Nice to have"
                  : waterAccessImportance === 2
                  ? "Important"
                  : "Must have"}
              </span>
            </div>
            <Slider
              defaultValue={[waterAccessImportance]}
              min={1}
              max={3}
              step={1}
              onValueChange={(values) => onWaterAccessImportanceChange(values[0])}
              className="my-6"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Nice to have</span>
              <span>Must have</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label>Cell Coverage in Remote Areas</Label>
              <span className="font-medium">
                {cellCoverageImportance === 1
                  ? "Nice to have"
                  : cellCoverageImportance === 2
                  ? "Important"
                  : "Must have"}
              </span>
            </div>
            <Slider
              defaultValue={[cellCoverageImportance]}
              min={1}
              max={3}
              step={1}
              onValueChange={(values) => onCellCoverageImportanceChange(values[0])}
              className="my-6"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Nice to have</span>
              <span>Must have</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label>Road Conditions</Label>
              <span className="font-medium">
                {roadConditionsImportance === 1
                  ? "Nice to have"
                  : roadConditionsImportance === 2
                  ? "Important"
                  : "Must have"}
              </span>
            </div>
            <Slider
              defaultValue={[roadConditionsImportance]}
              min={1}
              max={3}
              step={1}
              onValueChange={(values) => onRoadConditionsImportanceChange(values[0])}
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
