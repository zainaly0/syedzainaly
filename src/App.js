import "./App.css";
import Header from './Components/Header/Header'
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
// import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollUp from "./Components/ScrollUp.js/ScrollUp";

function App() {
  return (
    <div className="App">
      {/* header components  */}
      <Header />
      <main>
        <Home />
        <About />
        {/* <Contact /> */}
      </main>
      {/* footer components  */}
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
