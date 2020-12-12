import './App.css';
import Nav from './layout/Nav.js'
import Section from './layout/Section.js'
import Footer from './layout/Footer.js';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Nav/>
      <Section/>
      <Footer/>      
    </Router>

    </div>
  );
}

export default App;
