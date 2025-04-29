import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { HoloButton } from './ui/holo-button';
import { useSound } from '@/hooks/use-sound';

const Footer = () => {
  const { playHoloSound } = useSound();

  const handleHoloClick = () => {
    playHoloSound('click');
  };

  return (
    <footer className="relative mt-20 border-t border-holo-primary/30">
      <div className="noise-bg"></div>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-orbitron mb-4 holo-text">DIGITAL HOLOSPHERE</h3>
            <p className="text-gray-400 mb-4">
              A holographic portfolio experience showcasing the work and skills of Somavarapu Venkata Sai Srinivas.
            </p>
            <a 
              href="mailto:venkatasaisrinivas24@gmail.com"
              className="flex items-center space-x-4 mt-auto group hover:text-holo-primary transition-colors"
              onClick={handleHoloClick}
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-holo-primary/20 text-holo-primary group-hover:bg-holo-primary/40 transition-colors">
                <Mail size={16} />
              </span>
              <span className="text-gray-400 group-hover:text-holo-primary transition-colors">venkatasaisrinivas24@gmail.com</span>
            </a>
            <a 
              href="https://maps.google.com/?q=Tiruvuru,NTR(DT),AndhraPradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 mt-3 group hover:text-holo-primary transition-colors"
              onClick={handleHoloClick}
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-holo-primary/20 text-holo-primary group-hover:bg-holo-primary/40 transition-colors">
                <MapPin size={16} />
              </span>
              <span className="text-gray-400 group-hover:text-holo-primary transition-colors">Tiruvuru, NTR(DT), Andhra Pradesh</span>
            </a>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-lg font-orbitron mb-4 text-white">Navigation</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-holo-primary transition-colors">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-holo-primary transition-colors">About</Link>
              <Link to="/skills" className="text-gray-400 hover:text-holo-primary transition-colors">Skills</Link>
              <Link to="/projects" className="text-gray-400 hover:text-holo-primary transition-colors">Projects</Link>
              <Link to="/contact" className="text-gray-400 hover:text-holo-primary transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-lg font-orbitron mb-4 text-white">Connect</h4>
            <div className="flex flex-col space-y-2">
              <a href="https://github.com/venkatasaisrinivas24" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-holo-primary transition-colors flex items-center">
                GitHub <ExternalLink className="ml-1" size={12} />
              </a>
              <a href="www.linkedin.com/in/somavarapu-venkata-sai-srinivas-64136b267" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-holo-primary transition-colors flex items-center">
                LinkedIn <ExternalLink className="ml-1" size={12} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-holo-primary/30 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Digital Holosphere. All rights reserved.</p>
          <p className="mt-1">Designed and developed with holographic precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
