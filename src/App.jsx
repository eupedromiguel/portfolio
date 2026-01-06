import { useTheme } from './hooks/useTheme';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Certificates from './components/Certificates';
import DownloadResume from './components/DownloadResume';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <CustomCursor isDark={isDark} />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero isDark={isDark} />
        <Experience isDark={isDark} />
        <Projects isDark={isDark} />
        <About isDark={isDark} />
        <DownloadResume isDark={isDark} />
        <Certificates isDark={isDark} />
      </main>

      <footer className="py-12 text-center opacity-50 border-t border-white/10">
        <p>© Pedro Miguel - Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
