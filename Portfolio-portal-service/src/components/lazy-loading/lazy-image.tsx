import { useEffect, useRef, useState } from "react";
import type { LazyImageProps } from "../../types/lazy-image.types";

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = "",
  rootMargin = "150px"
}: LazyImageProps) {
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return (
    <img
      ref={imgRef}
      src={visible ? src : ""}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={`transition-all duration-700 ease-out ${
        loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
      } ${className}`}
    />
  );
}
