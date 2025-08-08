import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { AnimatedSection } from "../animation/animated-section";
import { ExternalLink, Download, Calendar, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Certificate } from "../../types/certificates.types";
import LazyImage from "../lazy-loading/lazy-image";
import {
  ENGLISH_CERTIFICATE,
  GIT_AND_GITHUB_MASTERY_CERTIFICATE,
  WORKING_WITH_PEOPLE_CERTIFICATE
} from "../../constants/certificates.constants";

const certificates: Certificate[] = [
  {
    title: "Git Mastery: Beginner to Expert with GitHub & GitLab",
    issuer: "Udemy",
    date: "04/2025",
    credentialId: "UC-b5b46b52-710e-413d-9e19-9525ac61b16c",
    image: GIT_AND_GITHUB_MASTERY_CERTIFICATE,
    verifyUrl:
      "https://www.udemy.com/certificate/UC-b5b46b52-710e-413d-9e19-9525ac61b16c/",
    downloadUrl: GIT_AND_GITHUB_MASTERY_CERTIFICATE,
    tags: ["Git", "GitHub", "Source Control"]
  },
  {
    title: "Certificate of English Proficiency",
    issuer: "Ho Chi Minh University of Technology",
    date: "08/2024",
    credentialId: "CC/0041421",
    image: ENGLISH_CERTIFICATE,
    verifyUrl: ENGLISH_CERTIFICATE,
    downloadUrl: ENGLISH_CERTIFICATE,
    tags: ["English", "B1", "English Proficiency"]
  },
  {
    title: "Kỹ năng giao tiếp và làm việc nhóm",
    issuer: "Ho Chi Minh University of Technology",
    date: "04/2024",
    credentialId: "CC/0043532",
    image: WORKING_WITH_PEOPLE_CERTIFICATE,
    verifyUrl: WORKING_WITH_PEOPLE_CERTIFICATE,
    downloadUrl: WORKING_WITH_PEOPLE_CERTIFICATE,
    tags: ["Communication", "Teamwork", "Presentation"]
  }
];

export function Certificates() {
  const navigator = useNavigate();
  return (
    <section
      id="certificates"
      className="py-20 bg-muted/50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Chứng chỉ & Thành tựu
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((c, i) => (
              <AnimatedSection key={i} animation="slideUp" delay={i * 120}>
                <Card className="overflow-hidden hover-3d group bg-card/60 backdrop-blur-sm">
                  <div className="aspect-video overflow-hidden relative">
                    <LazyImage
                      src={c.image || "/placeholder.svg"}
                      alt={`Certificate ${c.title}`}
                      height={200}
                      width={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader>
                    <CardTitle className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                      {c.title}
                    </CardTitle>
                    <CardDescription className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        {c.issuer}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {c.date}
                      </span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {c.credentialId && (
                      <p className="text-sm text-muted-foreground mb-3">
                        Mã chứng chỉ:{" "}
                        <span className="text-foreground">
                          {c.credentialId}
                        </span>
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((t, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-2">
                    <Button
                      onClick={() =>
                        window.open(c.verifyUrl, "_blank") ||
                        navigator(c.verifyUrl || "#")
                      }
                      size="sm"
                      className="flex-1"
                      variant="outline"
                      style={{ backgroundColor: "#0000ff" }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2 text-white" />
                      <p className="inline-flex items-center text-white">
                        Xác thực
                      </p>
                    </Button>
                    <Button
                      onClick={() => {
                        if (!c.downloadUrl) return;
                        const link = document.createElement("a");
                        link.href = c.downloadUrl;
                        link.download = "";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      size="sm"
                      className="flex-1"
                      variant="outline"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      <p className="inline-flex items-center">Tải về</p>
                    </Button>
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
