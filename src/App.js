import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Hobbies from './components/Hobbies';
import { BrowserRouter as Router, Route,  Switch} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Header />
      <Sidebar/>
      <Home/>
      <Hobbies/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </Router>
  );
}

export default App;
