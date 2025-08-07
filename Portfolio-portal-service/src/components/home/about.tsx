import { Card, CardContent } from "../ui/card";
import { Code, Palette, Zap } from "lucide-react";
import { AnimatedSection } from "../animated-section";
import AvatarImage from "/avatar.jpg";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Giới thiệu về tôi
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection animation="slideRight">
              <div>
                <p className="text-lg text-muted-foreground mb-6 justify-around">
                  Graduated with a Bachelor's degree in Software Engineering,
                  passionate about backend development. Experienced in building
                  full-stack web applications using ASP.NET Core, Entity
                  Framework, and SQL Server. Completed internship at FPT
                  Telecom, working with microservices architecture, Redis, and
                  Kafka. Proactive, quick learner, and eager to grow in a
                  professional software development environment.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft" delay={200}>
              <div className="flex justify-center">
                <img
                  src={AvatarImage}
                  alt="Profile"
                  height={300}
                  width={300}
                  className="rounded-full w-64 h-64 object-cover hover-lift"
                />
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="bounceIn" delay={0}>
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Development</h3>
                  <p className="text-muted-foreground">
                    Phát triển ứng dụng web full-stack với các công nghệ hiện
                    đại
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="bounceIn" delay={200}>
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                  <p className="text-muted-foreground">
                    Thiết kế giao diện người dùng đẹp mắt và dễ sử dụng
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="bounceIn" delay={400}>
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Performance</h3>
                  <p className="text-muted-foreground">
                    Tối ưu hóa hiệu suất và trải nghiệm người dùng
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
