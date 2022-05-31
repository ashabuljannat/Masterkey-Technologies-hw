import "./App.css";
import Header from "./components/Header";
import HNavbar from "./components/Navbar";
import Section1 from "./components/Section1";
import RTab from "./components/Tab";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Slide from "./components/Slide";


function App() {
  return (
    <div className="App">
      <HNavbar />
      <Header />
      <Section1 />
      <RTab />
      <Title />
      <Slide />
      <Footer />
      
    </div>
  );
}

export default App;
