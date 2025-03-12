import logo from './logo.svg';
import './App.css';
// import Menu from './components/Menu.js';
import Main from './components/Main.js';
import About from './components/About.js';
import Project from './components/Project.js';
import Skill from './components/Skill.js';

function App() {
  return (
    <div className="App">
      <Main/>
      <About/>
      <Skill/>
      <Project/>
    </div>
  );
}

export default App;
