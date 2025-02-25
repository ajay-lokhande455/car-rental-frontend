import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import CarDetailsPage from "./pages/CarDetailsPage";
import CarBookingPage from "./pages/CarBookingPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carDetailsPage" element={<CarDetailsPage />} />
        <Route path="/carBookingPage" element={<CarBookingPage />} />
        <Route path = "/faqPage" element={<FAQPage />} />
        <Route path = "/contactPage" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
