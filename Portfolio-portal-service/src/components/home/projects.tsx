import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedSection } from "../animation/animated-section";
import { MagneticButton } from "../animation/magnetic-button";

export function Projects() {
  const projects = [
    {
      slug: "ecommerce-platform",
      title: "E-commerce Platform",
      description:
        "Nền tảng thương mại điện tử hoàn chỉnh với thanh toán trực tuyến, quản lý kho hàng và dashboard admin.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      slug: "ecommerce-platform1",
      title: "Task Management App",
      description:
        "Ứng dụng quản lý công việc với tính năng real-time collaboration, drag & drop và notifications.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      slug: "ecommerce-platform2",
      title: "Weather Dashboard",
      description:
        "Dashboard thời tiết với dự báo 7 ngày, bản đồ tương tác và lưu trữ địa điểm yêu thích.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Vue.js", "Express", "OpenWeather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-text-gradient">
                Dự án nổi bật
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.slug}
                animation="slideUp"
                delay={index * 200}
              >
                <Card className="overflow-hidden hover-3d group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-500">
                  <div className="aspect-video overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader className="relative">
                    <CardTitle className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 group-hover:text-muted-foreground/30 transition-colors">
                      {project.slug}
                    </CardDescription>
                    <CardDescription className="group-hover:text-muted-foreground/80 transition-colors">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-3">
                    <MagneticButton
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </MagneticButton>
                    <MagneticButton
                      variant="outline"
                      size="sm"
                      className="flex-1 border-white/20 hover:bg-white/10"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </MagneticButton>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
