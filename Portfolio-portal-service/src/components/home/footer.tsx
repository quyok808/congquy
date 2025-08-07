import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <p className="text-muted-foreground mb-4">
            © 2024 Nguyễn Văn A. Tất cả quyền được bảo lưu.
          </p>

          <p className="text-sm text-muted-foreground">
            Được xây dựng với ❤️ sử dụng Next.js và Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
