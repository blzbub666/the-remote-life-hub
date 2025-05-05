
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-app-blue/10 to-app-green/10 z-0" />

      <div className="container mx-auto px-4 py-16 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-app-blue to-app-green bg-clip-text text-transparent">
                Find Your Perfect
              </span>
              <br />
              Location Match
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Discover ideal cities for remote work or vanlife based on your preferences 
              for climate, cost, internet, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-app-blue hover:bg-app-blue/90">
                <Link to="/preferences?type=remoteWorker">
                  Remote Worker
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-app-green text-app-green hover:bg-app-green/10">
                <Link to="/preferences?type=vanlifer">
                  Vanlifer
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-app-blue/20 to-app-green/20 rounded-lg z-0" />
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
              alt="Remote landscape" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover z-10 relative"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-black p-4 rounded-lg shadow-lg z-20">
              <p className="font-semibold text-app-blue">87% Match</p>
              <p className="text-sm text-muted-foreground">Lisbon, Portugal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
