import './App.css';
import NavBar from './components/NavBar';
import Objective from './components/Objective'
import About  from './components/About';
import  Education from './components/Education';
import  Skills from './components/Skills';
import  Projects from './components/Projects';
import Contact from './Contact'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Objective />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
