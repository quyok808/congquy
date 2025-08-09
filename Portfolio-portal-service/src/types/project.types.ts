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
