
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    console.log('View Projects button clicked');
    navigate('/projects');
  };

  const handleGetInTouch = () => {
    console.log('Get In Touch button clicked');
    navigate('/contact');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background animated dots */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center animate-fade-in z-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">Hi, I'm</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">SANTANU</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            An aspiring <span className="text-primary font-semibold">Full Stack Developer</span> passionate about building sleek web experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg"
              onClick={handleViewProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-glow"
            >
              View Projects
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleGetInTouch}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
