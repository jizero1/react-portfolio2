import logo from './logo.svg';
import './App.css';
// import Menu from './components/Menu.js';
import Main from './components/Main.js';
import { motion } from "framer-motion";
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Main/>
      {/* <Menu/> */}
    </div>
  );
}

export default App;
