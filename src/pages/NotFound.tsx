
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import HolographicBackground from '@/components/HolographicBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HoloSection from '@/components/HoloSection';
import HolographicText from '@/components/HolographicText';
import { HoloButton } from '@/components/ui/holo-button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <HolographicBackground />
      <Navbar />
      
      <HoloSection className="pt-32 min-h-screen flex items-center">
        <div className="max-w-xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="text-[150px] font-orbitron font-bold opacity-10 text-holo-primary">404</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <HolographicText variant="h1" className="text-6xl">404</HolographicText>
            </div>
          </div>
          
          <HolographicText variant="h2" className="mb-6">Page Not Found</HolographicText>
          
          <p className="text-xl text-gray-300 mb-8">
            The holographic coordinates you're looking for don't exist in this dimension.
            Return to the main interface to continue your journey.
          </p>
          
          <HoloButton size="lg">
            <Link to="/">Return to Home</Link>
          </HoloButton>
        </div>
      </HoloSection>
      
      <Footer />
    </div>
  );
};

export default NotFound;
