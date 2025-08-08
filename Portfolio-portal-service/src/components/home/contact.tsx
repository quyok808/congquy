import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "../ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { AnimatedSection } from "../animation/animated-section";
import { ADDRESS, EMAIL, PHONE } from "../../constants/home.constants";
import { QRCodeSVG } from "qrcode.react";

export function Contact() {
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
                  Tôi luôn sẵn sàng thảo luận về các dự án mới, cơ hội hợp tác,
                  làm việc hoặc đơn giản chỉ là trò chuyện về công nghệ.
                </p>

                <div className="space-y-4">
                  <AnimatedSection animation="fadeIn" delay={200}>
                    <div className="flex items-center space-x-3 hover:text-primary transition-colors cursor-pointer">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>{EMAIL}</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeIn" delay={400}>
                    <div className="flex items-center space-x-3 hover:text-primary transition-colors cursor-pointer">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>{PHONE}</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeIn" delay={600}>
                    <div className="flex items-center space-x-3 hover:text-primary transition-colors cursor-pointer">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>{ADDRESS}</span>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft" delay={300}>
              <Card className="hover-lift text-center">
                <CardHeader>
                  <CardTitle>Quét mã để liên hệ thông qua Zalo</CardTitle>
                  <CardDescription>
                    Dùng Zalo để quét mã và kết nối trực tiếp.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <QRCodeSVG
                    value={`https://zalo.me/${PHONE}`}
                    size={250}
                    bgColor="#ffffff"
                    fgColor="#000000"
                    level="H"
                    includeMargin={true}
                    imageSettings={{
                      src: "/congquy/zalo_avatar.jpg",
                      height: 40,
                      width: 40,
                      excavate: true
                    }}
                  />
                </CardContent>
                <p className="text-muted-foreground">
                  Hoặc truy cập{" "}
                  <a href={`http://zalo.me/${PHONE}`} target="_blank">
                    <span className="font-semibold">ZALO</span>
                  </a>{" "}
                  để kết nối với tôi!
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
