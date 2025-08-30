import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Women Safety Analytics",
      description: "Women Safety Analytics is a web-based application designed to enhance the safety of women by integrating real-time location tracking, hotspot/red-zone detection, and instant alerts/notifications. The project aims to provide awareness about unsafe areas, send notifications when someone enters a danger-prone location, and empower both users and volunteers to contribute to community safety.",
      image: "https://images.unsplash.com/photo-1602430360078-008e26bda970?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBzYWZldHl8ZW58MHx8MHx8fDA%3D",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/santanu0905/Womensafety"
    },
    {
      title: "Portfolio Website",
      description: "My portfolio website featuring my projects, skills, and journey. Built with HTML, CSS, and JavaScript for a modern, interactive experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["HTML", "Tailwind CSS", "JavaScript", "CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "https://github.com/santanu0905/Santanu-Portfolio"
    },
    {
      title: "COVID Tracker",
      description: "COVID-19 Tracker is a React-based web application that provides real-time global and country-specific statistics about COVID-19. It fetches data from reliable APIs to display the number of cases, recoveries, and deaths. The project includes interactive maps, data tables, and graphs to visualize the pandemic's impact worldwide.",
      image: "https://images.unsplash.com/photo-1584931423298-c576fda54bd2?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdmlkfGVufDB8fDB8fHww",
      tech: ["React", "Tailwind CSS", "OpenAI", "Render", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Currency Converter",
      description: "The Currency Converter is a simple web-based application that allows users to convert amounts between different currencies. It uses live exchange rates (or static rates if offline) and supports multiple international currency codes. The goal of this project is to provide a lightweight and user-friendly tool for quick currency conversions.",
      image: "https://plus.unsplash.com/premium_photo-1675055730303-a513dca9e344?q=80&w=600&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["HTML","CSS","JAVASCRIPT"],
      liveUrl: "#",
      githubUrl: "https://github.com/santanu0905/Currency-Converter"
    },
    {
      title: "To-Do-List",
      description: "A simple and responsive To-Do List Application built using HTML, CSS, and JavaScript.This app allows users to add, delete, and manage their daily tasks efficiently.It also includes a data storage facility using localStorage, so tasks remain saved even after refreshing the page.",
      image: "https://images.unsplash.com/photo-1598791318878-10e76d178023?q=80&w=600&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["React", "Tailwind CSS", "Markdown", "Vercel", "Vite"],
      liveUrl: "#",
      githubUrl: "https://github.com/santanu0905/To-Do-List"
    },
    {
      title: "Tic Tac Toe",
      description: "Tic-Tac-Toe Game is a simple implementation of the classic Tic-Tac-Toe (also known as Noughts and Crosses) built using HTML, CSS, and JavaScript.The game allows two players to take turns marking spaces in a 3×3 grid, with the objective of being the first to place three of their marks (X or O) in a horizontal, vertical, or diagonal row.",
      image: "https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?q=80&w=600&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["React", "Tailwind CSS", "React Router", "MongoDB", "Node.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/santanu0905/Tic-Tac-Toe-Game"
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Some of the things I've built with passion and dedication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden shadow-card hover:shadow-glow transition-smooth group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Upcoming Projects
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Billboard Detection System",
                description: "A computer vision project that uses deep learning and object detection techniques to automatically identify and locate billboards in images or video frames. The system can be applied in advertising analytics, smart city monitoring, and traffic surveillance, enabling automated recognition of billboard locations for marketing insights and regulatory compliance."
              },
              {
                title: "Predictive Health Analytics",
                description: "Predictive Health Analytics: Diabetes Risk Prediction using Wearable Device Data is a machine learning-based system that analyzes health metrics from wearable devices. It provides early detection and personalized insights to predict an individual’s risk of developing diabetes."
              },
              {
                title: "Chatbot Application",
                description: "A Chatbot Application that enables users to interact with an AI-powered assistant for answering queries, providing information, and simulating human-like conversations. It can be integrated into websites, apps, or messaging platforms to improve customer support, automation, and user engagement."
              }
            ].map((project, index) => (
              <Card 
                key={project.title}
                className="p-6 shadow-card text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold mb-3">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                  Coming Soon
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;