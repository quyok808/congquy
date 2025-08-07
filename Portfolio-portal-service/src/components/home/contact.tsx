import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { AnimatedSection } from "../animated-section";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Liên hệ với tôi
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection animation="slideRight">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Hãy kết nối với tôi
                </h3>
                <p className="text-muted-foreground mb-8">
                  Tôi luôn sẵn sàng thảo luận về các dự án mới, cơ hội hợp tác
                  hoặc đơn giản chỉ là trò chuyện về công nghệ.
                </p>

                <div className="space-y-4">
                  <AnimatedSection animation="fadeIn" delay={200}>
                    <div className="flex items-center space-x-3 hover:text-primary transition-colors cursor-pointer">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>contact@example.com</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeIn" delay={400}>
                    <div className="flex items-center space-x-3 hover:text-primary transition-colors cursor-pointer">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+84 123 456 789</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeIn" delay={600}>
                    <div className="flex items-center space-x-3 hover:text-primary transition-colors cursor-pointer">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Hồ Chí Minh, Việt Nam</span>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft" delay={300}>
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Gửi tin nhắn</CardTitle>
                  <CardDescription>
                    Điền thông tin bên dưới và tôi sẽ phản hồi sớm nhất có thể.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="transform transition-all duration-300 focus-within:scale-105">
                      <Input
                        name="name"
                        placeholder="Họ và tên"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="transform transition-all duration-300 focus-within:scale-105">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="transform transition-all duration-300 focus-within:scale-105">
                      <Textarea
                        name="message"
                        placeholder="Tin nhắn của bạn"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <Button type="submit" className="w-full hover-lift">
                      Gửi tin nhắn
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
