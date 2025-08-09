import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AnimatedSection } from "../animation/animated-section";
import { ParticleBackground } from "../animation/particle-background";
import { getProjectBySlug } from "../../lib/projects";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  CheckCircle2,
  BarChart3
} from "lucide-react";
import { Navigate, useParams } from "react-router-dom";
import LazyImage from "../lazy-loading/lazy-image";
import ReactMarkdown from "react-markdown";
import ZoomableImage from "../zoomimage";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const project = getProjectBySlug(slug || "");

  if (!project) return <Navigate to="/not-found" replace />;

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection animation="fadeIn">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4 justify-center">
                <Calendar className="h-4 w-4" />
                <span>{project.date}</span>
                <span className="mx-2">•</span>
                <User className="h-4 w-4" />
                <span>{project.role}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {project.technologies.map((t, i) => (
                  <Badge key={i} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                {project.liveUrl && (
                  <Button
                    onClick={() => window.open(project.liveUrl)}
                    className="gap-2"
                    variant="outline"
                    style={{ backgroundColor: "#1DA1F2", color: "white" }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Xem Live
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    onClick={() => window.open(project.githubUrl)}
                    variant="outline"
                    className="gap-2"
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    <Github className="h-4 w-4" />
                    Xem Code
                  </Button>
                )}
                <Button
                  onClick={() => {
                    window.history.back();
                  }}
                  variant="ghost"
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Quay lại dự án
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slideUp" delay={150}>
            <div className="aspect-video max-w-5xl mx-auto overflow-hidden rounded-xl border bg-card/60 backdrop-blur">
              <LazyImage
                src={
                  project.image ||
                  "/placeholder.svg?height=600&width=1200&query=project-hero"
                }
                width={1200}
                height={600}
                alt={`Ảnh hero của ${project.title}`}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Nội dung chi tiết */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Overview + Highlights */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection animation="fadeIn">
                <Card className="bg-card/60 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Tổng quan</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed markdown prose">
                    <ReactMarkdown>{project.longDescription}</ReactMarkdown>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slideUp" delay={100}>
                <Card className="bg-card/60 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Tính năng nổi bật</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slideUp" delay={150}>
                <Card className="bg-card/60 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Thư viện ảnh</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.gallery.map((src, i) => (
                        <div
                          key={i}
                          className="overflow-hidden rounded-lg border hover-lift"
                        >
                          <ZoomableImage
                            src={src || "/placeholder.svg"}
                            alt={`Ảnh ${i + 1} của ${project.title}`}
                            className="w-full h-48 md:h-56 object-cover"
                          />
                        </div>
                      ))}
                      {(!project.gallery || project.gallery.length === 0) && (
                        <div className="col-span-3 text-sm text-muted-foreground">
                          Không có thêm ảnh nào khác cho dự án này
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Sidebar info */}
            <div className="space-y-8">
              <AnimatedSection animation="slideUp">
                <Card className="bg-card/60 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Công nghệ sử dụng</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {project.technologies.map((t, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slideUp" delay={100}>
                <Card className="bg-card/60 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Chỉ số</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-3">
                      {(project.stats || []).map((s, i) => (
                        <div
                          key={i}
                          className="rounded-lg border p-3 text-center"
                        >
                          <div className="text-sm text-muted-foreground">
                            {s.label}
                          </div>
                          <div className="text-lg font-semibold">{s.value}</div>
                        </div>
                      ))}
                      {(!project.stats || project.stats.length === 0) && (
                        <div className="col-span-3 text-sm text-muted-foreground">
                          Chưa có số liệu công khai.
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slideUp" delay={150}>
                <Card className="bg-card/60 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Đánh giá</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {project.rating?.feedbacks} <br />
                      Kết quả được lấy từ nguồn: {project.rating?.source}
                    </span>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slideUp" delay={200}>
                <Card className="bg-card/60 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Hiệu năng (Lighthouse)</CardTitle>
                  </CardHeader>
                  <CardContent className="items-center text-sm text-muted-foreground">
                    {(project.performance || []).map((s, i) => (
                      <div className="flex items-center gap-2 mb-4">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        <div key={i}>
                          <div className="text-sm font-semibold">
                            {s.results}
                          </div>
                          <div className="text-xs">{s.data}</div>
                        </div>
                      </div>
                    ))}
                    {(!project.performance ||
                      project.performance.length === 0) && (
                      <div className="col-span-3 text-sm text-muted-foreground">
                        Chưa có số liệu công khai.
                      </div>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
