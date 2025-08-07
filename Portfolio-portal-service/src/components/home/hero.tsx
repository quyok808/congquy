import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { TypingAnimation } from "../typing-animation";
import { AnimatedSection } from "../animated-section";
import { MagneticButton } from "../magnetic-button";
import { ParticleBackground } from "../particle-background";
import { CV, LINKEDIN, GITHUB, EMAIL } from "../../constants/home.constants";
import { useState } from "react";

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <ParticleBackground />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float animate-morphing"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float animate-morphing"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto mt-10">
          <AnimatedSection animation="fadeIn">
            <div className="mb-8">
              <div className="inline-block p-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 mb-6 animate-pulse-glow">
                <span className="text-2xl">👋</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Xin chào, tôi là <br />
              <span className="animate-text-gradient">
                <TypingAnimation text="Nguyễn Công Quý" speed={150} />
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={500}>
            <p className="text-xl md:text-3xl text-muted-foreground mb-4 font-light">
              Backend Developer | Full Stack Developer | .NET Developer
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={800}>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed italic">
              “Điều cấm kị nhất là việc nghĩ rằng bản thân sẽ không làm được.”
            </p>
          </AnimatedSection>

          <AnimatedSection animation="bounceIn" delay={1200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <MagneticButton
                size="lg"
                className="text-lg px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 rounded-full shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="mr-2">🚀</span>
                Xem dự án
              </MagneticButton>
              <MagneticButton
                // onClick={() => setIsOpen(true)}
                variant="outline"
                size="lg"
                className="text-lg px-10 py-4 border-2 border-gradient rounded-full hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 backdrop-blur-sm"
              >
                <a href={CV} target="_blank" rel="noopener noreferrer">
                  <span className="mr-2">📄</span>
                  Xem CV
                </a>
              </MagneticButton>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={1500}>
            <div className="flex justify-center space-x-8 mb-12">
              <MagneticButton
                variant="ghost"
                size="icon"
                className="h-14 w-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/50 transition-all duration-300"
              >
                <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </MagneticButton>
              <MagneticButton
                variant="ghost"
                size="icon"
                className="h-14 w-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/50 transition-all duration-300"
              >
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </MagneticButton>
              <MagneticButton
                variant="ghost"
                size="icon"
                className="h-14 w-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/50 transition-all duration-300"
              >
                <a
                  href={`mailto:${EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </MagneticButton>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="bounceIn" delay={2000}>
            <div className="animate-bounce">
              <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
