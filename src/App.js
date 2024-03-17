import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Service from "./components/Service";
import PortScan from "./components/PortScan";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service/>}/>
        <Route path="/service/portscan" element={<PortScan/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
