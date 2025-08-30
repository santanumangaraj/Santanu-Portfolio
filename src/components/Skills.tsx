import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", icon: "🟨" },
        { name: "React", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "HTML", icon: "📄" },
        { name: "CSS", icon: "🎨" },
        { name: "Framer Motion", icon: "🎭" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "Python", icon: "🐍" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "React Router", icon: "🛣️" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "Oracle", icon: "🔴" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "📚" },
        { name: "GitHub", icon: "🐙" },
        { name: "Google Cloud", icon: "☁️" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="p-6 shadow-card hover:shadow-glow transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary/50 transition-smooth"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-16">
          <Card className="p-8 shadow-card text-center">
            <h3 className="text-2xl font-bold mb-8 gradient-text">GitHub Activity</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">7</div>
                <div className="text-sm text-muted-foreground">Public Repositories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">16</div>
                <div className="text-sm text-muted-foreground">Total Stars</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10</div>
                <div className="text-sm text-muted-foreground">Recent Commits</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;