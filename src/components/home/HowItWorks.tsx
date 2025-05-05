
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HowItWorks() {
  const steps = [
    {
      title: "Set Your Preferences",
      description: "Tell us about your budget, climate preferences, internet needs, and more.",
      icon: "⚙️",
    },
    {
      title: "Get Personalized Matches",
      description: "Our algorithm finds cities that best match your unique requirements.",
      icon: "🔍",
    },
    {
      title: "Explore Detailed Information",
      description: "Dive deep into each location with comprehensive data and insights.",
      icon: "📊",
    },
    {
      title: "Make Informed Decisions",
      description: "Compare options and find your perfect next destination with confidence.",
      icon: "✅",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our data-driven approach matches you with locations that fit your unique needs,
            whether you're a digital nomad or vanlifer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-4xl bg-gradient-to-r from-app-blue to-app-green rounded-full text-white">
                  {step.icon}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
