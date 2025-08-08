export interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  rootMargin?: string; // ví dụ: "200px" để load sớm hơn
}
