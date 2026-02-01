import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";

import Homepage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import Supportpage from "./landing_page/support/SupportPage";
import Pricingpage from "./landing_page/pricing/PricingPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/footer";
import NotFound from "./landing_page/NotFound";
import Login from "./Client/login";
import Signup from "./Client/signup";
import Home from "./Client/home";
// import Dashboard from "../../dashboard/src/components/Home";

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<Pricingpage />} />
          <Route path="/support" element={<Supportpage />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  </CookiesProvider>
);
