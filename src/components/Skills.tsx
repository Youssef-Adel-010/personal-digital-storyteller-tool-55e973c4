
import { Progress } from '@/components/ui/progress';

const skillsData = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "UI/UX Design", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Skills</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I've worked with a variety of technologies and tools in my career. Here's an overview of my technical skills.
        </p>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <div key={index} className="animate-on-scroll">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">Other Skills & Tools</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Git", "Figma", "Redux", "GraphQL", "Jest", "Webpack",
              "Docker", "AWS", "Firebase", "MongoDB", "PostgreSQL", "Sass"
            ].map(tool => (
              <span 
                key={tool}
                className="bg-accent px-4 py-2 rounded-full font-medium animate-on-scroll"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
