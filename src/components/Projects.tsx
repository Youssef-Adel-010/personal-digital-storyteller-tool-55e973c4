
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js. Features include product filtering, user authentication, cart management, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks and projects. Includes features like drag-and-drop organization, reminders, and team collaboration.",
    tags: ["React", "TypeScript", "Redux", "Firebase"],
    imageUrl: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills. Features a responsive design, dark mode, and contact form.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one presented unique challenges and opportunities for growth.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="animate-on-scroll overflow-hidden flex flex-col">
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button size="sm" variant="outline" className="gap-2 flex-1" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="gap-2 flex-1" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            See More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
