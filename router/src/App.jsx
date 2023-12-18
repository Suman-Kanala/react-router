import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";

const App = () => {
  const user = false;
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ProductList" element={<ProductList />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin" element={user ? <Admin /> : <Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
