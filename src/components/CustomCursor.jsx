import { useEffect, useState } from 'react';

const CustomCursor = ({ isDark }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verifica se é mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verifica no mount e em resize
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Não renderiza o cursor em mobile
  if (isMobile) return null;

  return (
    <svg
      className="fixed pointer-events-none transition-colors duration-300"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(2px, 2px)',
        zIndex: 99999,
      }}
    >
      {/* Cursor estilo Windows (seta) */}
      <path
        d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
        fill={isDark ? 'white' : 'black'}
        stroke={isDark ? 'black' : 'white'}
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default CustomCursor;
