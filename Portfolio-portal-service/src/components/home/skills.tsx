import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AnimatedSection } from "../animation/animated-section";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Dart", "Javascript", "C#", "Java"]
    },
    {
      title: "Frameworks",
      skills: [
        "Entity Framework Core",
        "Spring Boot",
        "Express.js",
        "React.js",
        "TypeScript",
        "Flutter"
      ]
    },
    {
      title: "Databases",
      skills: ["SQL Server", "Oracle", "MongoDB", "MySQL", "Firebase"]
    },
    {
      title: "APIs & Authentication",
      skills: ["RESTful APIs", "JWT", "OAuth2"]
    },
    {
      title: "Design patterns & Architecture",
      skills: [
        "Microservices",
        "Clean Architecture",
        "Mediator",
        "Domain-Driven Design"
      ]
    },
    {
      title: "Testing & Debugging",
      skills: ["Unit Testing", "Debugging", "Automation Testing"]
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Vercel", "GitHub Actions", "Render"]
    },
    {
      title: "Others",
      skills: [
        "Socket.IO",
        "Socket TCP/IP",
        "SignalR",
        "JavaFX",
        "Tailwind CSS"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Kỹ năng
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-4">
            {skillCategories.map((category, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 200}
              >
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="text-center">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className={`text-sm transition-all duration-300 hover:scale-110 animate-fade-in animate-stagger-${Math.min(
                            skillIndex + 1,
                            6
                          )}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
