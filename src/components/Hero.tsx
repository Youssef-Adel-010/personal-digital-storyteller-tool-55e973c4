
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pb-20 pt-28 overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-gradient dark:bg-glow-gradient light:bg-light-glow-gradient animate-pulse-soft opacity-30"></div>
      
      <div className="container mx-auto px-6 z-10 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <div className="animate-slide-in-down opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <span className="inline-block text-primary font-medium mb-3">Hello, I'm</span>
          </div>
          
          <h1 className="animate-slide-in-left opacity-0 text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <span className="block text-gradient">Youssef Adel</span>
          </h1>
          
          <div className="animate-slide-in-right opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
            <Separator className="w-24 h-0.5 mx-auto md:mx-0 bg-primary/50 my-6" />
          </div>
          
          <p className="animate-slide-in-up opacity-0 text-xl md:text-2xl font-light text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
            <span className="font-normal text-foreground">Backend Developer</span> specializing in building robust, 
            scalable server-side applications and APIs with a focus on performance and security.
          </p>
          
          <div className="animate-slide-in-up opacity-0 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-8" style={{animationDelay: '1.0s', animationFillMode: 'forwards'}}>
            <Button 
              size="lg" 
              onClick={scrollToAbout} 
              className="glow-effect text-lg transition-all duration-500 hover:scale-105"
            >
              Explore My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact}
              className="text-lg transition-all duration-500 hover:scale-105 hover:shadow-glow"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="animate-slide-in-up opacity-0 mt-12 flex items-center justify-center md:justify-start gap-6" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-125">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/youssef-sobh-21b055244/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-125">
              <Linkedin size={22} />
            </a>
            <a href="mailto:eng.youssef.adel.010@gmail.com" className="text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-125">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={scrollToAbout} className="text-primary hover:scale-110 transition-transform duration-300">
          <ChevronDown size={24} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
