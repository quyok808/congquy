import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AnimatedSection } from "../animated-section";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript"
      ]
    },
    {
      title: "Backend",
      skills: ["C#", "ASP.NET Core", "Node.js", "Express", "REST API"]
    },
    {
      title: "Database",
      skills: ["SQL Server", "Oracle", "MongoDB", "MySQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "Vercel", "Jira", "PostMan", "Katalon"]
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
