import { Button } from "../ui/button";
import { ParticleBackground } from "../animation/particle-background";
import { AnimatedSection } from "../animation/animated-section";
import { Compass, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedBackgroundElements from "../animation/animated-background-elements";
import { NOT_FOUND_MESSAGE } from "../../constants/error.constants";

export default function NotFound() {
  const navigator = useNavigate();
  return (
    <main className="min-h-[80vh] md:min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <ParticleBackground />

      <AnimatedBackgroundElements />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fadeIn">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-6">
              <Compass className="h-10 w-10" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {NOT_FOUND_MESSAGE}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Có vẻ như đường dẫn bạn truy cập không tồn tại hoặc đã được di
              chuyển.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={150}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
              <Button
                onClick={() => navigator("/congquy")}
                className="gap-2"
                variant="outline"
              >
                <Home className="h-4 w-4" />
                Về trang chủ
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
