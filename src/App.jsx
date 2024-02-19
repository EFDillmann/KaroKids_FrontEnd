import "./App.css";
import Header from "./components/Header/Header";
import Landing from "./components/Home/Landing";
import SideBarSocial from "./components/SidebarSocial/SideBarSocial";
import { Footer } from "./components/Footer/Footer";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductList from "./components/ProductList/ProductList";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <main className="min-h-screen font-montserrat">
      {pathname !== "/admin" && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/productos" element={<ProductList />} />
      </Routes>
      {pathname !== "/admin" && <SideBarSocial />}
      {pathname !== "/admin" && <Footer />}
    </main>
  );
}

export default App;
