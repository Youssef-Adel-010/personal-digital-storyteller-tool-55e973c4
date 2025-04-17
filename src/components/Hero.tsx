
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      className="relative min-h-screen flex items-center justify-center pb-20 pt-28"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">Hello, I'm</span>
            <span className="text-5xl md:text-6xl lg:text-7xl mt-2 inline-block">John Doe</span>
          </h1>
          <p className="animate-fade-in delay-100 text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Frontend Developer & UX Designer creating beautiful, functional digital experiences.
          </p>
          
          <div className="animate-fade-in delay-200 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={scrollToAbout} className="text-lg">
              View My Work
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={scrollToAbout}>
          <ArrowDown />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
