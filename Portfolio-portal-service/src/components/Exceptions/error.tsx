import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ParticleBackground } from "../animation/particle-background";
import { AnimatedSection } from "../animation/animated-section";
import { AlertTriangle, RefreshCw, Home, Mail } from "lucide-react";
import { EMAIL } from "../../constants/home.constants";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const navigate = useNavigate();
  useEffect(() => {
    // Gửi log tới monitoring tại đây nếu cần
    // e.g. Sentry.captureException(error)
    console.error("App error:", error);
  }, [error]);

  return (
    <main className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-16">
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fadeIn">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-500/10 text-red-500 border border-red-500/20 mb-6">
              <AlertTriangle className="h-10 w-10" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Đã xảy ra lỗi không mong muốn
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Xin lỗi vì sự bất tiện này. Hãy thử tải lại trang hoặc quay về
              trang chủ.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={150}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
              <Button
                onClick={() => reset()}
                className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
              >
                <RefreshCw className="h-4 w-4" />
                Thử lại
              </Button>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="gap-2"
              >
                <Home className="h-4 w-4" />
                Về trang chủ
              </Button>
              <Button
                onClick={() =>
                  navigate(
                    `mailto:${EMAIL}?subject=Bao%20loi%20tren%20portfolio`
                  )
                }
                variant="ghost"
                className="gap-2"
              >
                <Mail className="h-4 w-4" />
                Báo lỗi
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={250}>
            <div className="mx-auto max-w-xl rounded-2xl border bg-card/50 backdrop-blur p-6 text-left">
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg?height=120&width=180"
                  alt="Minh họa lỗi"
                  className="rounded-md object-cover w-[180px] h-[120px]"
                />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-2">
                    Chi tiết kỹ thuật (dành cho developer):
                  </p>
                  <pre className="whitespace-pre-wrap break-words text-xs bg-muted/50 p-3 rounded">
                    {error?.message || "Không có thông tin lỗi."}
                    {error?.digest ? `\nDigest: ${error.digest}` : ""}
                  </pre>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
