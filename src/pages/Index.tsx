import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HolographicBackground from '@/components/HolographicBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HolographicText from '@/components/HolographicText';
import HoloSection from '@/components/HoloSection';
import { HoloButton } from '@/components/ui/holo-button';
import HoloCard from '@/components/ui/holo-card';
import { useSound } from '@/hooks/use-sound';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { playHoloSound } = useSound();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleHoloClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (!target.closest('button') && !target.closest('a')) {
      createHoloRipple(e);
      playHoloSound('click');
    }
  };

  const createHoloRipple = (e: React.MouseEvent) => {
    const ripple = document.createElement('div');
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.className = 'holo-ripple';
    
    e.currentTarget.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 1000);
  };

  return (
    <div 
      className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleHoloClick}
    >
      <HolographicBackground />
      <Navbar />
      
      {/* Hero Section */}
      <HoloSection fullHeight className="pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-holo-primary font-orbitron tracking-widest">WELCOME TO MY PORTFOLIO</p>
                <HolographicText variant="h1" className="mb-4">
                  Somavarapu Venkata <br />Sai Srinivas
                </HolographicText>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Computer Science graduate with expertise in developing innovative solutions
                using cutting-edge technologies. Specializing in AI, web development, and cloud computing.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <HoloButton size="lg">
                  <Link to="/projects">View Projects</Link>
                </HoloButton>
                <HoloButton variant="outline" size="lg">
                  <Link to="/contact">Get In Touch</Link>
                </HoloButton>
              </div>
              
              <div className="flex items-center pt-8">
                <div className="h-px flex-1 bg-holo-primary/30"></div>
                <span className="px-4 text-gray-400">Featured Skills</span>
                <div className="h-px flex-1 bg-holo-primary/30"></div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {['Java', 'Python', 'React', 'AWS', 'Spring Boot'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-holo-primary/10 text-holo-primary border border-holo-primary/30 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
      <div className="w-64 h-64 md:w-80 md:h-80 relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-holo-blue via-holo-primary to-holo-cyan opacity-30 blur-2xl"></div>
        <div className="absolute inset-0 rounded-full border-4 border-holo-primary/30"></div>
        <div className="absolute inset-4 rounded-full border border-holo-cyan/50"></div>
        <div className="absolute inset-8 rounded-full border border-holo-blue/40"></div>

        {/* Add the image inside the circle */}
        <div className="absolute inset-8 rounded-full overflow-hidden">
          <img
            src="/Sriuphoto.png"  // Replace with your actual image path
            alt="Somavarapu Venkata Sai Srinivas"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
      </HoloSection>
      
      {/* Projects Preview Section */}
      <HoloSection className="bg-holo-dark/30 holo-grid">
        <div className="text-center mb-16">
          <HolographicText>Featured Projects</HolographicText>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Innovative solutions to real-world problems using cutting-edge technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HoloCard hoverable glowEffect className="flex flex-col h-full">
            <h3 className="text-xl font-orbitron mb-4 text-holo-primary">Monkeypox Detection</h3>
            <p className="text-gray-300 flex-grow">An AI-based system for early detection of Monkeypox using computer vision and machine learning.</p>
            <div className="mt-6">
              <HoloButton size="sm">Learn More</HoloButton>
            </div>
          </HoloCard>
          
          <HoloCard hoverable glowEffect className="flex flex-col h-full">
            <h3 className="text-xl font-orbitron mb-4 text-holo-primary">Cloud Migration Tool</h3>
            <p className="text-gray-300 flex-grow">A tool for seamless migration of applications to AWS cloud environment with minimal downtime.</p>
            <div className="mt-6">
              <HoloButton size="sm">Learn More</HoloButton>
            </div>
          </HoloCard>
          
          <HoloCard hoverable glowEffect className="flex flex-col h-full">
            <h3 className="text-xl font-orbitron mb-4 text-holo-primary">Reactive Web Dashboard</h3>
            <p className="text-gray-300 flex-grow">A responsive web dashboard built with React and Spring Boot for real-time data monitoring.</p>
            <div className="mt-6">
              <HoloButton size="sm">Learn More</HoloButton>
            </div>
          </HoloCard>
        </div>
        
        <div className="mt-12 text-center">
          <HoloButton>
            <Link to="/projects">View All Projects</Link>
          </HoloButton>
        </div>
      </HoloSection>
      
      {/* About Preview Section */}
      <HoloSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <HolographicText>About Me</HolographicText>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              I'm a Computer Science graduate with a passion for solving complex problems through innovative technology solutions. 
              With expertise in Java, Python, and modern web development frameworks, I specialize in creating efficient and 
              scalable applications.
            </p>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              My background includes experience in AI/ML, cloud computing, and full-stack development, 
              enabling me to tackle diverse challenges across multiple domains.
            </p>
            <div className="mt-8">
              <HoloButton>
                <Link to="/about">Learn More About Me</Link>
              </HoloButton>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
  <HoloCard glowEffect className="relative p-0 overflow-hidden aspect-square bg-transparent">
    <div className="absolute inset-0 bg-gradient-to-br from-holo-blue/20 via-holo-primary/20 to-holo-cyan/20"></div>
    <div className="absolute inset-0 holo-grid"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <img 
        src="/About.png" 
        alt="About Me" 
        className="w-100 h-100 object-contain" 
      />
    </div>
  </HoloCard>
</div>

        </div>
      </HoloSection>
      
      {/* Contact CTA Section */}
      <HoloSection className="bg-holo-dark/30">
        <div className="max-w-3xl mx-auto text-center">
          <HolographicText>Let's Work Together</HolographicText>
          <p className="mt-6 text-xl text-gray-300">
            Interested in collaborating on a project or have a job opportunity? 
            I'm always open to discussing new ideas and ventures.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <HoloButton size="lg">
              <Link to="/contact">Contact Me</Link>
            </HoloButton>
            <HoloButton variant="outline" size="lg">
              <Link to="/projects">View My Work</Link>
            </HoloButton>
          </div>
        </div>
      </HoloSection>
      
      <Footer />
    </div>
  );
};

export default Index;
