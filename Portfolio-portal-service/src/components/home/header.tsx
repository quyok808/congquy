import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold hover:text-primary transition-colors cursor-pointer">
            NGUYEN CONG QUY
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-primary transition-all duration-300 hover:scale-110 relative group"
            >
              Trang chủ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-primary transition-all duration-300 hover:scale-110 relative group"
            >
              Giới thiệu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-primary transition-all duration-300 hover:scale-110 relative group"
            >
              Kỹ năng
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className="hover:text-primary transition-all duration-300 hover:scale-110 relative group"
            >
              Chứng chỉ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-primary transition-all duration-300 hover:scale-110 relative group"
            >
              Dự án
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-all duration-300 hover:scale-110 relative group"
            >
              Liên hệ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:scale-110 transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t animate-slide-up">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                Trang chủ
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                Giới thiệu
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                Kỹ năng
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                Dự án
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                Liên hệ
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
