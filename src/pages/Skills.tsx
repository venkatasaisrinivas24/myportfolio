
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HolographicBackground from '@/components/HolographicBackground';
import HoloSection from '@/components/HoloSection';
import HolographicText from '@/components/HolographicText';
import HoloCard from '@/components/ui/holo-card';
import { useSound } from '@/hooks/use-sound';
import { 
  Coffee, 
  FileCode, 
  FileJson, 
  Code, 
  Braces,
  Layout,
  CircuitBoard,
  Database,
  Github,
  Terminal,
  MonitorSmartphone,
  Server,
  GitBranch,
  Code2 
} from 'lucide-react';

const SkillLogo = ({ name, icon: Icon, url }: { name: string; icon: React.ComponentType<any>; url: string }) => {
  const { playHoloSound } = useSound();

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={() => playHoloSound('click')}
      className="group"
    >
      <div className="flex flex-col items-center space-y-4 p-4">
        <div className="w-16 h-16 rounded-lg bg-holo-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-12 h-12 text-holo-primary/80" />
        </div>
        <span className="text-gray-300 group-hover:text-holo-primary transition-colors">{name}</span>
      </div>
    </a>
  );
};

const Skills = () => {
  const programmingSkills = [
    { name: 'Java', icon: Coffee, url: 'https://www.java.com/' },
    { name: 'Python', icon: FileCode, url: 'https://www.python.org/' },
    { name: 'JavaScript', icon: Braces, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'HTML', icon: Code, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: Layout, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  ];
  
  const webSkills = [
    { name: 'Bootstrap', icon: Layout, url: 'https://getbootstrap.com/' },
    { name: 'Spring Boot', icon: Server, url: 'https://spring.io/projects/spring-boot' },
    { name: 'Servlet', icon: CircuitBoard, url: 'https://javaee.github.io/servlet-spec/' },
    { name: 'Hibernate', icon: FileJson, url: 'https://hibernate.org/' },
    { name: 'React', icon: MonitorSmartphone, url: 'https://reactjs.org/' },
  ];
  
  const databaseSkills = [
    { name: 'MySQL', icon: Database, url: 'https://www.mysql.com/' },
    { name: 'Oracle', icon: Database, url: 'https://www.oracle.com/' },
    { name: 'AWS', icon: Terminal, url: 'https://aws.amazon.com/' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/' },
  ];
  
  return (
    <div className="min-h-screen page-transition">
      <HolographicBackground />
      <Navbar />
      
      <HoloSection className="pt-32">
        <div className="max-w-5xl mx-auto">
          <HolographicText variant="h1" className="text-center mb-8">My Skills</HolographicText>
          
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            With expertise in a wide range of technologies, I bring diverse skill sets to every project. 
            Here's a comprehensive breakdown of my technical proficiencies.
          </p>
          
          <div className="flex flex-col space-y-8">
            <HoloCard glowEffect>
              <HolographicText variant="h3" className="mb-6 text-center">Programming Languages</HolographicText>
              <div className="flex flex-wrap justify-center gap-8">
                {programmingSkills.map(skill => (
                  <SkillLogo key={skill.name} {...skill} />
                ))}
              </div>
            </HoloCard>
            
            <HoloCard glowEffect>
              <HolographicText variant="h3" className="mb-6 text-center">Web Technologies</HolographicText>
              <div className="flex flex-wrap justify-center gap-8">
                {webSkills.map(skill => (
                  <SkillLogo key={skill.name} {...skill} />
                ))}
              </div>
            </HoloCard>
            
            <HoloCard glowEffect>
              <HolographicText variant="h3" className="mb-6 text-center">Tools & Databases</HolographicText>
              <div className="flex flex-wrap justify-center gap-8">
                {databaseSkills.map(skill => (
                  <SkillLogo key={skill.name} {...skill} />
                ))}
              </div>
            </HoloCard>
          </div>
        </div>
      </HoloSection>
      
      <Footer />
    </div>
  );
};

export default Skills;
