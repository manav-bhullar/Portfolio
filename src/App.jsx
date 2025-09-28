
import './App.css';
import Hero from '../sections/Hero/hero';
import Projects from '../sections/Projects/Projects';
import Skills from '../sections/Skills/Skills';
import Contact from '../sections/Contact/Contact';
import Footer from '../sections/Footer/Footer';
import Suggest from '../sections/Suggestions/Suggest';
import ColorPicker from './common/ColorPicker';

function App() {
  return (
    <>
      <ColorPicker />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Suggest />
      <Footer />
    </>
  );
}

export default App;
