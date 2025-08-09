import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AnimatedSection } from "../animation/animated-section";
import {
  APIS_AND_AUTH,
  DATABASES,
  DESIGN_PATTERNS_ARCHITECTURE,
  DEVOPS_AND_TOOLS,
  FRAMEWORKS,
  OTHERS,
  PROGRAMMING_LANGUAGES,
  TESTING_AND_DEBUGGING,
  VERSION_CONTROL
} from "../../constants/skill.constants";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: Object.values(PROGRAMMING_LANGUAGES)
    },
    {
      title: "Frameworks",
      skills: Object.values(FRAMEWORKS)
    },
    {
      title: "Databases",
      skills: Object.values(DATABASES)
    },
    {
      title: "APIs & Authentication",
      skills: Object.values(APIS_AND_AUTH)
    },
    {
      title: "Design patterns & Architecture",
      skills: Object.values(DESIGN_PATTERNS_ARCHITECTURE)
    },
    {
      title: "Testing & Debugging",
      skills: Object.values(TESTING_AND_DEBUGGING)
    },
    {
      title: "Version Control",
      skills: Object.values(VERSION_CONTROL)
    },
    {
      title: "DevOps & Tools",
      skills: Object.values(DEVOPS_AND_TOOLS)
    },
    {
      title: "Others",
      skills: Object.values(OTHERS)
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
