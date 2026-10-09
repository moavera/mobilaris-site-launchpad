import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Extra delay in ms before the reveal starts */
  delay?: number;
  /** Background class for the outer (never-fading) wrapper, e.g. "bg-paper".
   *  Keeps the section's own background opaque during the fade-in so light
   *  sections never read as dark over the page background. */
  bg?: string;
  className?: string;
}

/**
 * Fades and slides content in when it scrolls into view (Linear-style).
 * Respects prefers-reduced-motion via CSS.
 */
export const Reveal = ({ children, delay = 0, bg, className = "" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={bg || undefined}>
      <div
        className={`reveal ${visible ? "reveal--visible" : ""} ${className}`}
        style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      >
        {children}
      </div>
    </div>
  );
};
