import React, {useState} from "react";




import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import Home from "./screens/Home";
import Products from "./screens/Products";
import Contact from "./screens/Contact";

export default function App() {
  //carrito global
  const[cart, setCart] = useState ([]);

  //estado para la notificacion
  const [toast, setToast] = useState("");


  //estado para la notificacion
  const showToast = (text) => {
    setToast(text);
    setTimeout(() => setToast(""), 2000); //se oculta sola despues de 2s)
  };

  // funcion para agregar productos al carrito
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    showToast("Producto agregado al carrito");
  };




  return (
    <BrowserRouter>
      <MainLayout cartCount={cart.length}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* notificacione visible solo cuando toast tiene texto*/}
        {toast && <Toast message={toast}/>}

      </MainLayout>
    </BrowserRouter>
  );
}

// Browser permite navegar sin recargar la pagina
// Routes contiene todas las rutas
// MainLayout envuelve cada panta con los componentes hijos