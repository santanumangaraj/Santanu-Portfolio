import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import { Contact } from 'lucide-react';
import ContactPage from './ContactPage';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About/>
        <Skills/>
        <Projects/>
        <ContactPage/>
      </main>
    </div>
  );
};

export default Index;
