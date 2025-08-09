// src/components/zoomimage/ZoomableImage.tsx
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import LazyImage from "./lazy-loading/lazy-image";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ZoomableImage({
  src,
  alt,
  className = ""
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  // khoá body scroll + tránh layout shift do scrollbar
  useEffect(() => {
    if (!isOpen) return;
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0)
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
    };
  }, [isOpen]);

  // đóng bằng phím Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const overlay = (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      {/* nút đóng (stopPropagation để không kích sự kiện của overlay) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(false);
        }}
        className="absolute top-4 right-4 rounded-full p-2 bg-black/40 text-black"
        aria-label="Đóng"
      >
        ✕
      </button>

      {/* ảnh thật sự (stopPropagation để click vào ảnh không đóng) */}
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );

  return (
    <>
      <LazyImage
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in`}
        onClick={() => setIsOpen(true)}
      />

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(overlay, document.body)}
    </>
  );
}
