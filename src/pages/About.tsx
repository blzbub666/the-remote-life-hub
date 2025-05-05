
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">About NomadMatcher</h1>
          
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p>
              NomadMatcher is a specialized tool designed to help remote workers and vanlifers 
              find their ideal locations based on personalized preferences and needs.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              We believe that everyone deserves to find a place where they can thrive, whether they're
              working remotely or living the vanlife. Our mission is to make location-independent
              living more accessible by providing data-driven recommendations that match your unique
              requirements.
            </p>
            
            <h2>How It Works</h2>
            <p>
              Our platform uses comprehensive data on cities worldwide, including:
            </p>
            <ul>
              <li>Cost of living details</li>
              <li>Climate information and seasonal patterns</li>
              <li>Internet infrastructure and reliability</li>
              <li>Time zone compatibility</li>
              <li>Digital nomad communities and coworking spaces</li>
              <li>Vanlife-specific data like overnight parking regulations and facilities</li>
            </ul>
            
            <p>
              We then match this data against your personal preferences to find locations that
              best suit your lifestyle, budget, and work requirements.
            </p>
            
            <h2>Our Data</h2>
            <p>
              We gather information from multiple reliable sources:
            </p>
            <ul>
              <li>Government statistics and economic data</li>
              <li>Weather and climate historical records</li>
              <li>Internet quality testing and telecommunications reports</li>
              <li>Community-sourced information from digital nomads and vanlifers</li>
              <li>Local regulations and infrastructure assessments</li>
            </ul>
            
            <h2>Contact Us</h2>
            <p>
              Have questions, suggestions, or want to contribute to our database?
              We'd love to hear from you at <a href="mailto:info@nomadmatcher.com" className="text-app-blue hover:underline">info@nomadmatcher.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
