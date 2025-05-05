
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to a newsletter service API in a real implementation
    console.log("Subscribing email:", email);
    toast.success("Thanks for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-app-blue to-app-green rounded-xl p-1">
          <div className="bg-background rounded-lg p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest location insights, remote work tips, and vanlife destinations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border bg-background"
                required
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-app-blue to-app-green hover:from-app-blue/90 hover:to-app-green/90 text-white font-medium"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="text-sm text-muted-foreground mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
