import {
  APIS_AND_AUTH,
  DATABASES,
  DESIGN_PATTERNS_ARCHITECTURE,
  DEVOPS_AND_TOOLS,
  FRAMEWORKS,
  OTHERS,
  PROGRAMMING_LANGUAGES
} from "../constants/skill.constants";
import type { Project } from "../types/project.types";

const projects: Project[] = [
  {
    slug: "deceptive-draw-game",
    title: "Deceptive Draw Game",
    description: "Card game that uses the power of AI to trick the player.",
    longDescription: `The Deceptive Draw Game is a card game where the AI analyzes the cards in your hand, the current situation, and your play history to predict the probability (%) of you choosing each card. These predictions allow the AI to devise counter-strategies, creating intense mind battles between human and machine.
    
  **Dữ liệu test ngày 09/08/2025**
    `,
    image: "/congquy/projects/deceptive-draw-game/GameCard.png",
    gallery: [],
    technologies: [
      APIS_AND_AUTH.RESTFUL_APIS,
      OTHERS.SOCKET_IO,
      FRAMEWORKS.REACT_JS,
      FRAMEWORKS.EXPRESS_JS,
      DEVOPS_AND_TOOLS.VERCEL,
      DEVOPS_AND_TOOLS.RENDER
    ],
    liveUrl: "https://deceptive-draw-game-portal-service.vercel.app/",
    githubUrl: "https://github.com/quyok808/deceptive-draw-game",
    date: "2025-07",
    role: "Full Stack Developer",
    highlights: ["MultiPlayer Game", "AI Predictions", "Entertaining game"],
    stats: [
      { label: "Performance", value: "60/100" },
      { label: "Accessibility", value: "86/100" },
      { label: "Best Practices", value: "100/100" },
      { label: "SEO", value: "91/100" }
    ],
    performance: [
      {
        data: "First Contentful Paint",
        results: "1.5 s"
      },
      {
        data: "Largest Contentful Paint",
        results: "1.9 s"
      },
      {
        data: "Total Blocking Time",
        results: "630 ms"
      },
      {
        data: "Cumulative Layout Shift",
        results: "0.001"
      },
      {
        data: "Speed Index",
        results: "1.8 s"
      }
    ],
    rating: {
      feedbacks: "Chạy ổn định, chơi vui, có yếu tố giải trí, chiến thuật",
      source: "Dữ liệu từ 3 người bạn thử nghiệm"
    }
  },
  {
    slug: "skill-exchange-platform",
    title: "Skill Exchange Platform",
    description: "Card game that uses the power of AI to trick the player.",
    longDescription: `
  ## Features
  **1. Real-time chatting**
  - Using Socket.io for real-time communication between users. Can send and receive multimedia include: text, images, and files in real-time.
  
  **2. Video call**
  - Using WebRTC for video call between users. Can send and receive video in real-time.

  **3. Admin dashboard**
  - Admin dashboard for managing users, reports, and number of connections per month.

  **4. Booking Schedule**
  - Booking schedule for users who want to learn new skills or improve existing skills.

  **5. Notifications**
  - Notifications when users have new request add friends.

  **6. User management**
  - Admin can manage user roles, permissions, and lock user account.

  **Dữ liệu test ngày 09/08/2025**`,
    image: "/congquy/projects/skill-exchange-platform/SE.png",
    gallery: [
      "/congquy/projects/skill-exchange-platform/lib/Picture1.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture2.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture3.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture4.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture5.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture6.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture7.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture8.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture9.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture10.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture11.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture12.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture13.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture14.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture15.png",
      "/congquy/projects/skill-exchange-platform/lib/Picture16.png"
    ],
    technologies: [
      APIS_AND_AUTH.RESTFUL_APIS,
      OTHERS.SOCKET_IO,
      FRAMEWORKS.REACT_JS,
      FRAMEWORKS.EXPRESS_JS,
      DEVOPS_AND_TOOLS.VERCEL,
      DEVOPS_AND_TOOLS.RENDER,
      DATABASES.MONGODB,
      APIS_AND_AUTH.JWT,
      OTHERS.TAILWIND_CSS
    ],
    liveUrl: "https://onlyaclassroom.edu.vn/",
    githubUrl: "https://github.com/quyok808/Skill-Exchange-Website-BE",
    date: "2025-07",
    role: "Full Stack Developer",
    highlights: [
      "Real-time chatting",
      "Video call",
      "Admin dashboard",
      "Booking Schedule",
      "Notifications"
    ],
    stats: [
      { label: "Performance", value: "63/100" },
      { label: "Accessibility", value: "79/100" },
      { label: "Best Practices", value: "100/100" },
      { label: "SEO", value: "83/100" }
    ],
    performance: [
      {
        data: "First Contentful Paint",
        results: "1.1 s"
      },
      {
        data: "Largest Contentful Paint",
        results: "1.2 s"
      },
      {
        data: "Total Blocking Time",
        results: "750 ms"
      },
      {
        data: "Cumulative Layout Shift",
        results: "0.003"
      },
      {
        data: "Speed Index",
        results: "2.8 s"
      }
    ],
    rating: {
      feedbacks: "Điểm đồ án 10/10",
      source: "Giảng viên đánh giá"
    }
  },
  {
    slug: "english-vocabulary-learning-app",
    title: "English Vocabulary Learning App",
    description:
      "Mobile app for learning English vocabulary with flashcards and games.",
    longDescription: `
  # To do
  `,
    image:
      "/congquy/projects/english-vocabulary-learning-app/Mobile_English.png",
    gallery: [],
    technologies: [
      PROGRAMMING_LANGUAGES.DART,
      FRAMEWORKS.FLUTTER,
      APIS_AND_AUTH.JWT,
      APIS_AND_AUTH.OAUTH2,
      DATABASES.FIREBASE
    ],
    liveUrl: "",
    githubUrl: "https://github.com/quyok808/mobile_English",
    date: "2025-01",
    role: "Full Stack Developer",
    highlights: [
      "Dictionary searching",
      "Flash Cards",
      "Analyze Essay",
      "Vocabulary Game"
    ],
    stats: [],
    performance: [],
    rating: {
      feedbacks: "",
      source: "Dữ liệu từ 3 người bạn thử nghiệm"
    }
  },
  {
    slug: "olympia-game-app",
    title: "Olympia Game App",
    description:
      "Olympia Game App is a Java Swing-based quiz game that simulates a TV-style game show with multiplayer support and score tracking.",
    longDescription: `
  # To do
  `,
    image: "/congquy/projects/olympia-game-app/GameShow_Olympya.png",
    gallery: [],
    technologies: [
      PROGRAMMING_LANGUAGES.JAVA,
      OTHERS.JAVAFX,
      OTHERS.SOCKET_TCP_IP,
      DATABASES.MYSQL
    ],
    liveUrl: "",
    githubUrl: "https://github.com/quyok808/GameShow_Java",
    date: "2025-01",
    role: "Full Stack Developer",
    highlights: [
      "Ranking",
      "OLYMPIA Game Show",
      "Multiplayer",
      "Score Tracking"
    ],
    stats: [],
    performance: [],
    rating: {
      feedbacks: "",
      source: "Dữ liệu từ 3 người bạn thử nghiệm"
    }
  },
  {
    slug: "online-classroom-management",
    title: "Online Classroom Management",
    description:
      "This project is a comprehensive Online Classroom Management Website designed to streamline the management of virtual classrooms. It provides a robust set of features for managing users, classes, students, attendance, grading, online learning, and real-time communication within a class using SignalR.",
    longDescription: `
  ## Features

  **1. Classroom Management**

  - View and manage all classrooms in a centralized index.
  - Create new classes with customizable settings.
  - Join existing classes as a student or instructor.

  **2. Assignment Management**

  - Create, distribute, and manage assignments for each class.
  - Grade assignments and provide feedback to students.

  **3. Student Management**

  - Maintain and update student rosters for each class.
  - Track student participation and performance.

  **4. Real-Time Communication**

  - Enable in-class messaging and discussions using SignalR for seamless, real-time 
  interaction.

  **5. Grade Management**

  - Maintain and update gradebooks for tracking student performance across 
  assignments and exams.

  **6. Schedule Management**

  - Create and manage class schedules to keep students and instructors organized.

  **7. Class Customization**

  - Customize class settings, layouts, and configurations to suit specific teaching 
  needs.

  **8. Notifications**

  - Send and manage class-wide announcements and notifications.

  **9. Content Reuse**

  - Reuse posts, lectures, and assignments from other classes to save time and 
  maintain consistency.

  ## Technologies Used

  - **ASP.NET Core**: Backend framework for building the web application.
  - **SignalR**: For real-time communication within classes.
  - **HTML/CSS/JavaScript**: Frontend technologies for building the user interface.
  - **SQL Server**: Database for storing user, class, and assignment data.
  - **Entity Framework Core**: ORM for database interactions.  
  - **Bootstrap**: For responsive and modern UI design.
  `,
    image:
      "/congquy/projects/online-classroom-management/78796d07e4792bb818cb079a1b57a791.jpg",
    gallery: [],
    technologies: [
      PROGRAMMING_LANGUAGES.C_SHARP,
      PROGRAMMING_LANGUAGES.JAVASCRIPT,
      FRAMEWORKS.ENTITY_FRAMEWORK_CORE,
      DATABASES.SQL_SERVER,
      APIS_AND_AUTH.IDENTITY,
      DESIGN_PATTERNS_ARCHITECTURE.MVC,
      OTHERS.SIGNALR
    ],
    liveUrl: "",
    githubUrl:
      "https://github.com/quyok808/Online_Classroom_Management_Website",
    date: "2024-12",
    role: "Full Stack Developer",
    highlights: [
      "Meeting Room",
      "Online Learning",
      "Real-time Communication",
      "Grading"
    ],
    stats: [],
    performance: [],
    rating: {
      feedbacks: "Điểm đồ án: 8.5/10",
      source: "Dữ liệu từ 3 người bạn thử nghiệm, giảng viên đánh giá"
    }
  },
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
        data: "500 sản phẩm, 1000 người, 1000 đơn hàng",
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
