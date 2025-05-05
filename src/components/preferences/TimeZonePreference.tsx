
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

interface TimeZonePreferenceProps {
  preferredZones: string[];
  importance: number;
  onZoneChange: (zones: string[]) => void;
  onImportanceChange: (value: number) => void;
}

export function TimeZonePreference({
  preferredZones,
  importance,
  onZoneChange,
  onImportanceChange,
}: TimeZonePreferenceProps) {
  const timeZones = [
    { id: "gmt-8", label: "GMT-8 (Pacific)" },
    { id: "gmt-5", label: "GMT-5 (Eastern)" },
    { id: "gmt-4", label: "GMT-4 (Atlantic)" },
    { id: "gmt0", label: "GMT+0 (London)" },
    { id: "gmt+1", label: "GMT+1 (Central Europe)" },
    { id: "gmt+2", label: "GMT+2 (Eastern Europe)" },
    { id: "gmt+3", label: "GMT+3 (Moscow)" },
    { id: "gmt+5.5", label: "GMT+5.5 (India)" },
    { id: "gmt+8", label: "GMT+8 (China, Singapore)" },
    { id: "gmt+9", label: "GMT+9 (Japan, Korea)" },
    { id: "gmt+10", label: "GMT+10 (Sydney)" },
    { id: "gmt+12", label: "GMT+12 (New Zealand)" },
  ];

  const handleTimeZoneChange = (timeZone: string, checked: boolean) => {
    if (checked) {
      onZoneChange([...preferredZones, timeZone]);
    } else {
      onZoneChange(preferredZones.filter((zone) => zone !== timeZone));
    }
  };

  return (
    <div className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      <div>
        <h3 className="text-xl font-semibold mb-4">Time Zone Requirements</h3>
        <p className="text-muted-foreground mb-6">
          Select preferred time zones for your work or travel schedule.
        </p>

        <div className="space-y-8">
          <div>
            <Label className="mb-4 block">Preferred Time Zones</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {timeZones.map((zone) => (
                <div key={zone.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={zone.id}
                    checked={preferredZones.includes(zone.id)}
                    onCheckedChange={(checked) =>
                      handleTimeZoneChange(zone.id, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={zone.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {zone.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label>How important is time zone to you?</Label>
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
