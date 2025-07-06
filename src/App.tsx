import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Destinations from "./pages/Destination";
import TripTypes from "./pages/TripTypes";
import ContactPage from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/triptypes" element={<TripTypes />} />
          <Route path="/contactus" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
