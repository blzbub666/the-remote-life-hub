
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { SavedLocations } from "@/components/dashboard/SavedLocations";
import { PreferenceProfiles } from "@/components/dashboard/PreferenceProfiles";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
          
          <DashboardStats />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <SavedLocations />
            <PreferenceProfiles />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
