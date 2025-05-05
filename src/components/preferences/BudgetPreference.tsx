
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface BudgetPreferenceProps {
  minBudget: number;
  maxBudget: number;
  importance: number;
  onMinMaxChange: (values: number[]) => void;
  onImportanceChange: (value: number) => void;
}

export function BudgetPreference({
  minBudget,
  maxBudget,
  importance,
  onMinMaxChange,
  onImportanceChange,
}: BudgetPreferenceProps) {
  return (
    <div className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      <div>
        <h3 className="text-xl font-semibold mb-4">Budget Range</h3>
        <p className="text-muted-foreground mb-6">
          Set your monthly budget range for cost of living (housing, food, transportation).
        </p>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <Label>Budget Range (USD per month)</Label>
              <span className="font-medium">
                ${minBudget} - ${maxBudget}
              </span>
            </div>
            <Slider
              defaultValue={[minBudget, maxBudget]}
              min={500}
              max={5000}
              step={100}
              onValueChange={onMinMaxChange}
              className="my-6"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>$500</span>
              <span>$5,000+</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label>How important is budget to you?</Label>
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
