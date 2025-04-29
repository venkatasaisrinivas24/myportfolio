import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HolographicBackground from '@/components/HolographicBackground';
import HoloSection from '@/components/HoloSection';
import HolographicText from '@/components/HolographicText';
import HoloCard from '@/components/ui/holo-card';
import { HoloButton } from '@/components/ui/holo-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send, Facebook, Instagram, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useSound } from '@/hooks/use-sound';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { playHoloSound } = useSound();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    playHoloSound('click');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'service_yx64kbj',      // Replace with your EmailJS service ID
        'template_btzr8bt',     // Replace with your EmailJS template ID
        templateParams,
        'p1QvHyj53FPQ2lgjq'       // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      playHoloSound('success');
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
      playHoloSound('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen page-transition">
      <HolographicBackground />
      <Navbar />
      
      <HoloSection className="pt-32">
        <div className="max-w-6xl mx-auto">
          <HolographicText variant="h1" className="text-center mb-8">Get In Touch</HolographicText>
          
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Have a question or want to work together? Fill out the form below, 
            and I'll get back to you as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <HoloCard>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-holo-dark/50 border-holo-primary/30 focus:border-holo-primary focus:ring-1 focus:ring-holo-primary"
                        placeholder="your name "
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-holo-dark/50 border-holo-primary/30 focus:border-holo-primary focus:ring-1 focus:ring-holo-primary"
                        placeholder="yourmail@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-holo-dark/50 border-holo-primary/30 focus:border-holo-primary focus:ring-1 focus:ring-holo-primary"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-holo-dark/50 border-holo-primary/30 focus:border-holo-primary focus:ring-1 focus:ring-holo-primary min-h-[150px]"
                      placeholder="Hello! I'd like to discuss a project with you..."
                    />
                  </div>
                  
                  <HoloButton type="submit" disabled={isSubmitting} className="w-full">
                    <div className="flex items-center justify-center">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-4 w-4" />
                    </div>
                  </HoloButton>
                </form>
              </HoloCard>
            </div>
            
            <div className="lg:col-span-1">
              <HoloCard className="h-full flex flex-col">
                <HolographicText variant="h3" className="mb-6">Contact Information</HolographicText>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-holo-primary/20 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-holo-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                      <a href="mailto:venkatasaisrinivas24@gmail.com" className="text-gray-300 hover:text-holo-primary transition-colors">
                      venkatasaisrinivas24@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-holo-primary/20 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-holo-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                      <p className="text-gray-300">Tiruvuru, Andhra Pradesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-holo-primary/20 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-holo-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                      <a href="tel: +91 80744 03355" className="text-gray-300 hover:text-holo-primary transition-colors">
                        +91 80744 03355
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-holo-primary/30">
                  <h4 className="text-lg font-semibold text-white mb-4">Social Profiles</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/venkatasaisrinivas24" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-holo-primary/20 flex items-center justify-center hover:bg-holo-primary/40 transition-colors"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href="www.linkedin.com/in/somavarapu-venkata-sai-srinivas-64136b267" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-holo-primary/20 flex items-center justify-center hover:bg-holo-primary/40 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-holo-primary/20 flex items-center justify-center hover:bg-holo-primary/40 transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-holo-primary/20 flex items-center justify-center hover:bg-holo-primary/40 transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href="https://wa.me/+918074403355" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-holo-primary/20 flex items-center justify-center hover:bg-holo-primary/40 transition-colors"
                    >
                      <MessageSquare className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </HoloCard>
            </div>
          </div>
        </div>
      </HoloSection>
      
      <Footer />
    </div>
  );
};

export default Contact;
