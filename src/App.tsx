import "./index.css";
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white scroll-smooth">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>

        {/* <section id="resume"><Resume /></section> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
