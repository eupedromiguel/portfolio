import { useEffect, useRef, useState } from "react";

const CustomCursor = ({ isDark }) => {
  const cursorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e) => {
      const el = cursorRef.current;
      if (!el) {
        return;
      }

      el.style.transform = `
        translate3d(
          ${e.clientX + 2}px,
          ${e.clientY + 2}px,
          0
        )
      `;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <svg
      ref={cursorRef}
      className="fixed pointer-events-none transition-colors duration-300"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        left: 0,
        top: 0,
        zIndex: 99999,
        willChange: "transform",
        transform: "translate3d(-9999px, -9999px, 0)",
      }}
    >
      <path
        d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
        fill={isDark ? "white" : "black"}
        stroke={isDark ? "black" : "white"}
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default CustomCursor;
