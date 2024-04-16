import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Te recomendamos" />} />

        <Route path="/category/:idCategory" element={<ItemListContainer saludo="Nuestros productos" />} />

        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />

        <Route path="/about" element={<AboutUs />} /> {/* Nueva ruta para AboutUs */}

        <Route path="/privacy" element={<PrivacyPolicy />} />

        <Route path="/contact" element={<ContactForm />} />

      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
