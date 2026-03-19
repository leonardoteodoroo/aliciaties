import { type HTMLAttributes, useEffect, useRef, useState } from "react";

interface SectionRevealProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section";
}

export function SectionReveal({
  as = "div",
  children,
  className = "",
  ...props
}: SectionRevealProps) {
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined",
  );
  const ref = useRef<HTMLDivElement | HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    if (visible || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.18 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [visible]);

  const Component = as;

  return (
    <Component
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
