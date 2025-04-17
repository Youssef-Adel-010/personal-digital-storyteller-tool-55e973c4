
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach out.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="animate-on-scroll">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">hello@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+1 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <h4 className="font-medium mb-3">Social Media</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-on-scroll">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
