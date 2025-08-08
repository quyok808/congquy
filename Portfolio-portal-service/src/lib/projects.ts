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
};

const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description:
      "Nền tảng thương mại điện tử với thanh toán online, quản lý kho và dashboard admin.",
    longDescription:
      "Một nền tảng thương mại điện tử hoàn chỉnh hỗ trợ duyệt sản phẩm, giỏ hàng, thanh toán Stripe, quản lý kho, theo dõi đơn hàng và trang quản trị. Tối ưu SEO, tốc độ tải nhanh, và bảo mật.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    liveUrl: "#",
    githubUrl: "#",
    date: "2024-05",
    role: "Full Stack Developer",
    highlights: [
      "Tối ưu Core Web Vitals",
      "Thanh toán an toàn với Stripe",
      "Admin dashboard trực quan"
    ],
    stats: [
      { label: "Tốc độ", value: "95/100" },
      { label: "Trang", value: "25+" },
      { label: "MAU", value: "10k+" }
    ]
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "Ứng dụng quản lý công việc real-time, drag & drop và thông báo đẩy.",
    longDescription:
      "Giải pháp quản lý công việc theo bảng Kanban, cộng tác real-time, kéo thả, gán người phụ trách, hạn chót và thông báo. Hỗ trợ tìm kiếm nhanh và bộ lọc nâng cao.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200"
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Zustand"],
    liveUrl: "#",
    githubUrl: "#",
    date: "2024-02",
    role: "Frontend Lead",
    highlights: [
      "Cộng tác thời gian thực",
      "Drag & drop mượt mà",
      "Thông báo đẩy"
    ],
    stats: [
      { label: "Tương tác", value: "Realtime" },
      { label: "Độ trễ", value: "< 150ms" },
      { label: "Board", value: "50+" }
    ]
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Dashboard thời tiết với dự báo 7 ngày, bản đồ tương tác và lưu địa điểm.",
    longDescription:
      "Bảng điều khiển thời tiết hiện đại, hiển thị thời tiết hiện tại, dự báo 7 ngày, bản đồ nhiệt và lưu địa điểm yêu thích. UI trực quan, dữ liệu cập nhật nhanh.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200"
    ],
    technologies: ["Vue.js", "Express", "OpenWeather API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    date: "2023-11",
    role: "Frontend Developer",
    highlights: [
      "Dự báo 7 ngày",
      "Bản đồ nhiệt tương tác",
      "Lưu địa điểm yêu thích"
    ],
    stats: [
      { label: "API calls", value: "1k+/ngày" },
      { label: "Độ trễ", value: "< 200ms" },
      { label: "Điểm UI", value: "A+" }
    ]
  }
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
