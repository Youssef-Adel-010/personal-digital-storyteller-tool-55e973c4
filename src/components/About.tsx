
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
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-lg">
                <img src="../../Youssef_Adel.jpg"></img>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Hey! I'm Youssef Adel, a passionate Backend Developer with a strong foundation in building APIs using ASP.NET and Flask. 
              I'm currently in my final year of Computer Science, and I've worked on various real-world projects ranging from 
              point-of-sale systems to static analysis tools.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              With over a year of experience teaching coding at iSchool and leading development sessions at GDSC, I've honed 
              both my technical and communication skills. I love diving deep into topics like cybersecurity, problem-solving, 
              and clean code architecture. My goal is to build secure, scalable, and efficient backend systems that make a real impact.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {['ASP.NET', 'Flask', 'C#', 'Python', 'API Design', 'SQL'].map(tag => (
                <span 
                  key={tag}
                  className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a href="../../Youssef-Adel.pdf" download>
            <Button className="gap-2">
              <Download size={16} />
              Download Resume
            </Button>
            </a>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">What I Do</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Backend Development',
                description: 'Building secure, scalable API solutions using ASP.NET, Flask, and modern backend technologies.'
              },
              {
                title: 'Coding Instructor',
                description: 'Teaching programming skills at iSchool and leading development sessions at GDSC.'
              },
              {
                title: 'Content Creator',
                description: 'Sharing knowledge and insights on programming, backend development, and technology.'
              },
              {
                title: 'Business Owner',
                description: 'Managing projects and selling on online stores.'
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
