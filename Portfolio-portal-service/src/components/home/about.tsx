import { AnimatedSection } from "../animation/animated-section";
import LazyImage from "../lazy-loading/lazy-image";
import AvatarImage from "/avatar.jpg";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Giới thiệu về tôi
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideRight">
              <section id="about" className="py-10">
                <p className="mb-4">
                  Tôi tốt nghiệp{" "}
                  <strong>Cử nhân ngành Công nghệ thông tin</strong>, với niềm
                  đam mê đặc biệt dành cho phát triển backend. Có kinh nghiệm
                  xây dựng ứng dụng web full-stack sử dụng{" "}
                  <strong>ASP.NET Core</strong>,{" "}
                  <strong>Entity Framework</strong>, và{" "}
                  <strong>SQL Server</strong>, tôi thích biến ý tưởng thành các
                  giải pháp mạnh mẽ, có khả năng mở rộng.
                </p>
                <p className="mb-4">
                  Trong thời gian thực tập tại <strong>FPT Telecom</strong>, tôi
                  đã tham gia xây dựng hệ thống sử dụng kiến trúc{" "}
                  <strong>microservices</strong>, đồng thời làm việc với các
                  công nghệ như <strong>Redis</strong> và <strong>Kafka</strong>{" "}
                  trong môi trường thực tế.
                </p>
                <p>
                  Tôi là người <em>chủ động</em>, <em>học hỏi nhanh</em>, và
                  luôn sẵn sàng tiếp thu kiến thức mới để phát triển bản thân
                  trong môi trường lập trình chuyên nghiệp.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft" delay={200}>
              <div className="flex justify-center">
                <LazyImage
                  src={AvatarImage}
                  alt="Profile"
                  height={400}
                  width={400}
                  className="rounded-full w-64 h-64 object-cover hover-lift"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
