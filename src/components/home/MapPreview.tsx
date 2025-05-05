
export function MapPreview() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Discover Your Perfect Location</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore an interactive map of locations around the world, filtered according to your preferences.
          </p>
        </div>

        <div className="relative h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-xl">
          {/* This would be replaced with an actual map component */}
          <div className="absolute inset-0 bg-gradient-to-r from-app-blue/20 to-app-green/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6 bg-background/80 backdrop-blur-md rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Interactive World Map</h3>
                <p className="mb-4">Find your perfect match from cities around the globe</p>
                <div className="flex justify-center space-x-2">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-app-green mr-2"></span>
                    <span className="text-sm">90%+ Match</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-app-blue mr-2"></span>
                    <span className="text-sm">80%+ Match</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-app-orange mr-2"></span>
                    <span className="text-sm">70%+ Match</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sample map markers */}
            <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-app-green rounded-full animate-pulse-slow shadow-lg"></div>
            <div className="absolute top-1/2 left-1/3 w-5 h-5 bg-app-blue rounded-full animate-pulse-slow shadow-lg"></div>
            <div className="absolute bottom-1/3 left-2/3 w-5 h-5 bg-app-orange rounded-full animate-pulse-slow shadow-lg"></div>
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-app-blue rounded-full animate-pulse-slow shadow-lg"></div>
            <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-app-green rounded-full animate-pulse-slow shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
