
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SignupForm } from "@/components/auth/SignupForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="w-full max-w-md px-4">
          <SignupForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
