import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Mail, Github, Download } from 'lucide-react';
import profileImage from '@/assets/santanu.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              I'm <span className="gradient-text">Santanu Mangaraj</span>, a Full Stack Developer building creative and scalable web applications.
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm currently pursuing my B.Tech in Computer Science Engineering at 
                Trident Academy of Technology,BBSR. I specialize in both frontend and 
                backend development, transforming ideas into functional digital 
                experiences using modern technologies.
              </p>
              
              <p>
                I'm passionate about <span className="text-primary font-semibold">JavaScript</span>, 
                <span className="text-primary font-semibold"> React</span>, 
                <span className="text-primary font-semibold"> Node.js</span>, 
                <span className="text-primary font-semibold"> MongoDB</span>, and bringing 
                smooth, responsive UIs to life with animations and performance in mind. 
                Outside of code, I love exploring photography, tech, and new ideas.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://www.instagram.com/santanu_.x05?igsh=MTR3aXVieWg1d2JrNg==', '_blank')}
                className="border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://www.linkedin.com/in/santanudev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}
                className="border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('mailto:santanumangaraj80@gmail.com')}
                className="border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://github.com/santanumangaraj', '_blank')}
                className="border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>

            <Button 
              className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.open('Santanu_resume.pdf', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="animate-float">
            <Card className="p-8 shadow-card">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <img 
                    src={profileImage} 
                    alt="Santanu Mangarj" 
                    className="w-64 h-64 rounded-full object-cover shadow-glow"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">My Journey</h3>
                    <div className="space-y-4 text-sm text-muted-foreground">
                      <div className="border-l-2 border-primary/30 pl-4">
                        <h4 className="font-medium text-foreground">Internship at CTTC,BBSR</h4>
                        <p className="text-xs">June 2025 - Jul 2025</p>
                        <p>Data Analytics</p>
                      </div>
                      
                      <div className="border-l-2 border-primary/30 pl-4">
                        <h4 className="font-medium text-foreground">Internship at INNOVATE INTERN</h4>
                        <p className="text-xs">June 2024 - Jul 2024</p>
                        <p>Cloud Computing on Google Cloud</p>
                      </div>
                      
                      <div className="border-l-2 border-primary/30 pl-4">
                        <h4 className="font-medium text-foreground">B.Tech – Computer Science</h4>
                        <p className="text-xs">Trident Academy of Technology,BBSR (2022 - 2026)</p>
                        <p>Full-stack development focus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
