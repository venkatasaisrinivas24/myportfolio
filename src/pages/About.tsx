
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HolographicBackground from '@/components/HolographicBackground';
import HoloSection from '@/components/HoloSection';
import HolographicText from '@/components/HolographicText';
import HoloCard from '@/components/ui/holo-card';
import { HoloButton } from '@/components/ui/holo-button';

const About = () => {
  return (
    <div className="min-h-screen">
      <HolographicBackground />
      <Navbar />
      
      <HoloSection className="pt-32">
        <div className="max-w-4xl mx-auto">
          <HolographicText variant="h1" className="text-center mb-8">About Me</HolographicText>
          
          <HoloCard className="mb-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed">
                Goal-oriented and adaptable B.Tech graduate seeking a role that provides opportunities for continuous learning 
                and skill development within a dynamic, global environment. Aiming to leverage technical skills and a proactive 
                approach to contribute effectively to organizational success.
              </p>
            </div>
          </HoloCard>
          
          <div className="mb-16">
            <HolographicText variant="h2" className="mb-8">Education</HolographicText>
            <div className="relative border-l-2 border-holo-primary/50 pl-8 ml-4 space-y-12">
              <div className="relative">
                <div className="absolute -left-[2.7rem] top-0 w-6 h-6 rounded-full bg-holo-primary/30 border-2 border-holo-primary"></div>
                <HolographicText variant="h4">B.Tech in Computer Science And Engineering</HolographicText>
                <p className="text-holo-primary mt-1">2020 - 2024</p>
                <p className="text-gray-300 mt-2">
                  Sree Vahini Institute of science and technology (Affiliated to JNTUK)<br />
                  CGPA: 7.62
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[2.7rem] top-0 w-6 h-6 rounded-full bg-holo-primary/30 border-2 border-holo-primary"></div>
                <HolographicText variant="h4">Intermediate</HolographicText>
                <p className="text-holo-primary mt-1">2018 - 2020</p>
                <p className="text-gray-300 mt-2">
                  Sri Nidhi Junior College, Tiruvuru<br />
                  CGPA: 9.67
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[2.7rem] top-0 w-6 h-6 rounded-full bg-holo-primary/30 border-2 border-holo-primary"></div>
                <HolographicText variant="h4">Secondary School Certificate</HolographicText>
                <p className="text-holo-primary mt-1">2018</p>
                <p className="text-gray-300 mt-2">
                  Vision High School, Tiruvuru<br />
                  CGPA: 9.7
                </p>
              </div>
            </div>
          </div>

          <HoloCard className="mb-12">
            <HolographicText variant="h3" className="mb-6">Key Strengths</HolographicText>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-holo-primary">Quick Learner:</strong> Adapts rapidly to new tasks, tools, and technologies, enhancing efficiency and productivity.
              </li>
              <li>
                <strong className="text-holo-primary">Integrity and Positivity:</strong> Maintains a positive approach and high ethical standards in all professional interactions.
              </li>
              <li>
                <strong className="text-holo-primary">Self-Motivated and Disciplined:</strong> Demonstrates strong self-motivation, discipline, and a commitment to achieving goals independently and within team environments.
              </li>
            </ul>
          </HoloCard>
          
          <div className="text-center mb-8">
            <HoloButton size="lg"><a href="/Somavarapu_Venkata_Sai_Srinivas_Resume (3).pdf" download="Somavarapu_Venkata_Sai_Srinivas_Resume (3).pdf">
    Download Resume
  </a></HoloButton>
          </div>
        </div>
      </HoloSection>
      
      <Footer />
    </div>
  );
};

export default About;
