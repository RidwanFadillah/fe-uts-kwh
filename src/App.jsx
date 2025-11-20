import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Navbar from "./components/Navbar";
import EditProduct from "./pages/EditProduct";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Impact from "./pages/Impact";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import GreenPoints from "./pages/GreenPoints";
import Cart from "./pages/Cart";
import Messages from "./pages/Messages";
import Checkout from "./pages/Checkout";

function LayoutWrapper() {
  const location = useLocation();

  // Daftar halaman yang TIDAK boleh punya navbar/footer
  const noLayoutPages = ["/checkout"];

  const hideLayout = noLayoutPages.includes(location.pathname.toLowerCase());

  return (
    <div className="flex flex-col min-h-screen">
      {/* Tampilkan navbar hanya jika bukan halaman yang di-hide */}
      {!hideLayout && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />

          {/* Informational Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/community" element={<Community />} />

          {/* User Dashboard Pages */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/green-points" element={<GreenPoints />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </main>

      {/* Tampilkan footer hanya jika bukan halaman yang di-hide */}
      {!hideLayout && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}
