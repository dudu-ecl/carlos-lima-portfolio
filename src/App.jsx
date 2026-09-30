/**
 * =====================================================
 * APP
 * -----------------------------------------------------
 * Componente principal da aplicação.
 *
 * Responsável por organizar a estrutura geral
 * do portfólio e suas principais seções.
 *
 * Também aplica o tema atual na raiz da aplicação,
 * permitindo a alternância entre Light e Dark Mode.
 *
 * Projeto: Portfólio 2.0
 * Autor: Carlos Lima
 * =====================================================
 */

import Hero from "./components/Hero/Hero";
import {useTheme} from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Footer from "./components/Footer";

function App() {

  const {theme} = useTheme();

  return (

    <div className={`app ${theme}`}>

      <Navbar />

      <main>
      
        <Hero />

        <About />

        <Projects />

        <Skills />

        <Journey />

        <Contact />

      </main>

      <Footer />
      
    </div>

  );
}

export default App;