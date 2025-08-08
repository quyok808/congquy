export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  role: string;
  highlights: string[];
  stats?: { label: string; value: string }[];
  performance?: { data: string; results: string }[];
  rating?: { feedbacks: string; source: string };
};

const projects: Project[] = [
  {
    slug: "supermarket-management-website",
    title: "Supermarket Management Website",
    description:
      "Nền tảng thương mại điện tử với thanh toán online, quản lý kho và dashboard admin.",
    longDescription:
      "The supermarket management project is a software system that helps manage inventory, sales, payments, and staff, optimizing operational processes and improving business efficiency.",
    image: "/congquy/projects/supermarket-management-website/QLST.jpg",
    gallery: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200"
    ],
    technologies: ["Java Spring Boot", "MySQL", "Restful APIs", "React.js"],
    liveUrl: "",
    githubUrl: "https://github.com/quyok808/QLST",
    date: "2024-09",
    role: "Full Stack Developer",
    highlights: ["Admin dashboard trực quan"],
    stats: [
      { label: "Performance", value: "95/100" },
      { label: "Accessibility", value: "90/100" },
      { label: "Best Practices", value: "90/100" },
      { label: "SEO", value: "95/100" },
      { label: "TBT (Total Blocking Time)", value: "0.5s" },
      { label: "FCP (First Contentful Paint)", value: "0.7s" },
      { label: "LCP (Largest Contentful Paint)", value: "1.7s" },
      { label: "CLS (Cumulative Layout Shift)", value: "0.1s" }
    ],
    performance: [
      {
        data: "500 sản phẩm (Dữ liệu giả lập để test hệ thống)",
        results: "Hệ thống chạy ổn định"
      }
    ],
    rating: { feedbacks: "4.5", source: "Google" }
  }
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
