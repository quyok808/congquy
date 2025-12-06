import { Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB, LINKEDIN } from "../../constants/home.constants";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigator = useNavigate();
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <button
              className="bg-black/40 text-dark dark:bg-white/20 dark:text-white"
              onClick={() => {
                window.open(GITHUB, "_blank", "noopener,noreferrer");
              }}
            >
              <Github className="h-5 w-5" />
            </button>
            <button
              className="bg-black/40 text-dark dark:bg-white/20 dark:text-white"
              onClick={() => {
                window.open(LINKEDIN, "_blank", "noopener,noreferrer");
              }}
            >
              <Linkedin className="h-5 w-5" />
            </button>
            <button
              className="bg-black/40 text-dark dark:bg-white/20 dark:text-white"
              onClick={() => {
                window.open(`mailto:${EMAIL}`, "_blank", "noopener,noreferrer");
              }}
            >
              <Mail className="h-5 w-5" />
            </button>
          </div>

          <div id="qr" className="flex justify-center space-x-6 mb-6">
            <button
              className="px-4 py-2 rounded-lg bg-black/40 text-dark dark:bg-white/10 dark:text-white hover:bg-black/60 transition"
              onClick={() => navigator("/qrCode")}
            >
              QR Code
            </button>

            <button
              className="px-4 py-2 rounded-lg bg-black/40 text-dark dark:bg-white/10 dark:text-white hover:bg-black/60 transition"
              onClick={() => navigator("/viewqr")}
            >
              View QR
            </button>
          </div>

          <p className="text-muted-foreground mb-4">
            © 2025 Nguyễn Công Quý. All Rights Reserved.
          </p>

          <p className="text-sm text-muted-foreground">From Cong Quy with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
