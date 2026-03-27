import { LocaleProvider } from './i18n/LocaleContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <LocaleProvider>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LocaleProvider>
  );
}

export default App;
