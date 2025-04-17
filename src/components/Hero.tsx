
import { ChevronDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pb-20 pt-28 overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-gradient animate-pulse-glow opacity-30"></div>
      
      <div className="container mx-auto px-6 z-10 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <div className="animate-fade-in delay-100">
            <span className="inline-block text-primary font-medium mb-3">Hello, I'm</span>
          </div>
          
          <h1 className="animate-fade-in text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
            <span className="block text-gradient">Youssef Adel</span>
          </h1>
          
          <div className="animate-fade-in delay-100 mb-6">
            <Separator className="w-24 h-0.5 mx-auto md:mx-0 bg-primary/50 my-6" />
          </div>
          
          <p className="animate-fade-in delay-200 text-xl md:text-2xl font-light text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
            <span className="font-normal text-foreground">Backend Developer</span> specializing in building robust, 
            scalable server-side applications and APIs with a focus on performance and security.
          </p>
          
          <div className="animate-fade-in delay-300 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-8">
            <Button size="lg" onClick={scrollToAbout} className="glow-effect text-lg">
              Explore My Work
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="animate-fade-in delay-400 mt-12 flex items-center justify-center md:justify-start gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={22} />
            </a>
            <a href="mailto:contact@youssefadel.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={scrollToAbout} className="text-primary">
          <ChevronDown size={24} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
