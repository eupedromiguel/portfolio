import { useState, useEffect } from 'react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        backgroundColor: isScrolled
          ? isDark
            ? 'rgba(0, 0, 0, 0.8)'
            : 'rgba(255, 255, 255, 0.8)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(7px)' : 'blur(0px)',
        WebkitBackdropFilter: isScrolled ? 'blur(7px)' : 'blur(0px)',
        borderBottom: isScrolled
          ? isDark
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.1)'
          : '1px solid transparent',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <div className="max-w-6xl mx-auto px-8 py-6">
        <div className="flex items-center justify-center">
          <div
            className={`flex items-center gap-8 px-8 py-3 rounded-full border transition-colors duration-300 ${
              isDark
                ? 'bg-black/50 border-white/20'
                : 'bg-white/50 border-black/20'
            }`}
          >
            <button
              onClick={() => scrollToSection('comecar')}
              className={`text-sm transition-colors ${
                isDark ? 'hover:opacity-70' : 'hover:text-black/10'
              }`}
            >
              Home
            </button>
            <span className={isDark ? 'text-white/30' : 'text-black/30'}>·</span>
            <button
              onClick={() => scrollToSection('experiencia')}
              className={`text-sm transition-colors ${
                isDark ? 'hover:opacity-70' : 'hover:text-black/10'
              }`}
            >
              Experiência
            </button>
            <span className={isDark ? 'text-white/30' : 'text-black/30'}>·</span>
            <button
              onClick={() => scrollToSection('projetos')}
              className={`text-sm transition-colors ${
                isDark ? 'hover:opacity-70' : 'hover:text-black/10'
              }`}
            >
              Projetos
            </button>
            <span className={isDark ? 'text-white/30' : 'text-black/30'}>·</span>
            <button
              onClick={() => scrollToSection('sobre')}
              className={`text-sm transition-colors ${
                isDark ? 'hover:opacity-70' : 'hover:text-black/10'
              }`}
            >
              Sobre mim
            </button>
            <span className={isDark ? 'text-white/30' : 'text-black/30'}>·</span>
            <button
              onClick={() => scrollToSection('certificados')}
              className={`text-sm transition-colors ${
                isDark ? 'hover:opacity-70' : 'hover:text-black/10'
              }`}
            >
              Certificados
            </button>
            <span className={isDark ? 'text-white/30' : 'text-black/30'}>·</span>
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-2 text-sm transition-colors ${
                isDark ? 'hover:opacity-70' : 'hover:text-black/10'
              }`}
            >
              {isDark ? (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                  </svg>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
