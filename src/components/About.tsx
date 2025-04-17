
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative">
              {/* You can replace this with an actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-lg">
                Profile Image
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground text-lg mb-6">
              I'm a passionate frontend developer and UX designer with over 5 years of experience creating
              beautiful, functional web applications. I specialize in React, TypeScript, and design systems,
              bringing both technical expertise and an eye for design to every project.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              When I'm not coding, you can find me hiking in nature, experimenting with new recipes,
              or diving into the latest design trends. I believe in continuous learning and pushing
              creative boundaries.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {['React', 'TypeScript', 'UX/UI', 'Tailwind CSS', 'Next.js'].map(tag => (
                <span 
                  key={tag}
                  className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <Button className="gap-2">
              <Download size={16} />
              Download Resume
            </Button>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">What I Do</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Frontend Development',
                description: 'Building responsive, performant web applications using modern frameworks and best practices.'
              },
              {
                title: 'UX Design',
                description: 'Creating intuitive user experiences through thoughtful design, research, and prototyping.'
              },
              {
                title: 'Responsive Design',
                description: 'Ensuring applications work flawlessly across all devices and screen sizes.'
              }
            ].map((item, index) => (
              <Card key={index} className="animate-on-scroll">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
