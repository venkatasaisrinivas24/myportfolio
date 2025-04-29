import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HolographicBackground from '@/components/HolographicBackground';
import HoloSection from '@/components/HoloSection';
import HolographicText from '@/components/HolographicText';
import HoloCard from '@/components/ui/holo-card';
import { HoloButton } from '@/components/ui/holo-button';


interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <HoloCard hoverable glowEffect className="flex flex-col h-full">
      <div className="aspect-video mb-4 bg-holo-primary/5 rounded-md overflow-hidden flex items-center justify-center">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-holo-primary/30 text-8xl font-orbitron">#{}</div>
        )}
      </div>
      
      <h3 className="text-xl font-orbitron mb-2 text-holo-primary">{project.title}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
      
      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="text-xs px-2 py-1 bg-holo-primary/10 text-holo-primary rounded-full">
            {tech}
          </span>
        ))}
      </div>
      
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <HoloButton size="sm" className="w-full">View Project</HoloButton>
        </a>
      )}
    </HoloCard>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Monkeypox Detection System",
      description: "Developed a machine learning model to detect Monkeypox from clinical images, utilizing both a custom Convolutional Neural Network (CNN) and a modified VGG16 architecture. Achieved significant accuracy improvements and demonstrated the model's potential for early, automated Monkeypox detection.",
      technologies: ["Python", "TensorFlow", "CNN", "Transfer Learning", "Image Processing", "Data Augmentation"],
      image: "image1.png",
      link: "https://github.com/venkatasaisrinivas24/Monkeypoxdiseasedetection.git"
    },
    {
      title: "WordPress Development Internship",
      description: "Completed a web development internship with smart-interns, Andhra Pradesh. Designed and developed responsive pages, implemented user registration forms with email confirmation, and customized site layouts based on client requirements.",
      technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
      image: "image2.png",
      link: "https://github.com/venkatasaisrinivas24/eye.git"
    },
    {
      title: "Mybank Banking application Using SpringBoot ",
      description: "A Spring Boot banking application enables users to maintain a portfolio by securely managing multiple bank accounts. It supports tracking transactions, balances, and investment details through intuitive RESTful APIs. The application ensures data integrity and scalability with Spring Data JPA and microservices architecture",
      technologies: ["java", "h2database", "HTML", "CSS", "JavaScript"],
      image: "Bank.png",
      link: "https://github.com/venkatasaisrinivas24/mybank.git"
    }
  ];
  
  return (
    <div className="min-h-screen">
      <HolographicBackground />
      <Navbar />
      
      <HoloSection className="pt-32">
        <div className="max-w-6xl mx-auto">
          <HolographicText variant="h1" className="text-center mb-8">My Projects</HolographicText>
          
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Explore my portfolio of projects that demonstrate my technical abilities and problem-solving skills.
            Each project represents unique challenges and innovative solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </HoloSection>
      
      <Footer />
    </div>
  );
};

export default Projects;