
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="font-bold text-2xl mb-1">Portfolio</h3>
            <p className="text-muted-foreground">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <Button variant="outline" size="icon" onClick={scrollToTop}>
              <ArrowUp />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
