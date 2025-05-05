
import { Button } from "@/components/ui/button";
import { UserType } from "@/types";
import { Laptop, Caravan } from "lucide-react";

interface UserTypeSelectorProps {
  selectedType: UserType | null;
  onSelect: (type: UserType) => void;
}

export function UserTypeSelector({ selectedType, onSelect }: UserTypeSelectorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">I am a...</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Button
          onClick={() => onSelect("remoteWorker")}
          variant={selectedType === "remoteWorker" ? "default" : "outline"}
          className={`h-auto py-8 px-8 flex flex-col items-center ${
            selectedType === "remoteWorker" 
              ? "bg-app-blue hover:bg-app-blue/90 text-white" 
              : "hover:border-app-blue hover:text-app-blue"
          }`}
        >
          <div className="mb-4 p-3 rounded-full bg-opacity-20 bg-white">
            <Laptop size={40} className={selectedType === "remoteWorker" ? "text-white" : ""} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Remote Worker</h3>
          <p className="text-sm opacity-90 text-center">
            Digital nomad, freelancer, or remote employee looking for the perfect location to work and live.
          </p>
        </Button>

        <Button
          onClick={() => onSelect("vanlifer")}
          variant={selectedType === "vanlifer" ? "default" : "outline"}
          className={`h-auto py-8 px-8 flex flex-col items-center ${
            selectedType === "vanlifer" 
              ? "bg-app-green hover:bg-app-green/90 text-white" 
              : "hover:border-app-green hover:text-app-green"
          }`}
        >
          <div className="mb-4 p-3 rounded-full bg-opacity-20 bg-white">
            <Caravan size={40} className={selectedType === "vanlifer" ? "text-white" : ""} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Vanlifer</h3>
          <p className="text-sm opacity-90 text-center">
            Van dweller or nomadic traveler seeking locations with good overnight parking, amenities, and accessibility.
          </p>
        </Button>
      </div>
    </div>
  );
}
