import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer';
import ScrollUp from './Components/ScrollUp/ScrollUp';
import Home from "./Components/Home/Home";
function App() {
  return (
    <div>
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <ScrollUp />
    </Router>
  </div>
  );
}

export default App;
