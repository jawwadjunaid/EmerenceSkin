import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Home,
  Product,
  AboutPage,
  ContactPage,
  Products,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";
import Services from "./pages/Services";
import CustomerCase from "./pages/CustomerCase";
import FaceWash from "./pages/ProductsPages/Skin Care/FaceWash";
import Shampoo from "./pages/ProductsPages/HairCare/Shampoo";
import AcneAcre from "./pages/ProductsPages/Skin Care/AcneAcre";
import AntiAging from "./pages/ProductsPages/Skin Care/AntiAging";
import Cleanser from "./pages/ProductsPages/Skin Care/Cleanser";
import FormulaDevelopment from "./pages/FormulaAndPackaging/FormulaDevelopment";
import BodyButter from "./pages/ProductsPages/BodyButter/BodyButter.jsx";
import FootCare from './pages/ProductsPages/FootCareAndHandCare/FootCare.jsx';
//import MendelicAcidSerum from './pages/ProductsPages/SubSkinCare/AcneAcreProductPage/MendelicAcidSerum.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Services />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
        <Route path="/customercase" element={<CustomerCase />} />
        <Route path="/facewash" element={<FaceWash />} />
        <Route path="/shampoo" element={<Shampoo />} />
        <Route path="/acneacre" element={<AcneAcre />} />
        <Route path="/antiaging" element={<AntiAging />} />
        <Route path="/cleanser" element={<Cleanser />} />
        <Route path="/formuladevelopment" element={<FormulaDevelopment />} />
        <Route path="/products" element={<Products />} />
        <Route path="/bodybutter" element={<BodyButter />} />
        <Route path="/footcare" element={<FootCare/>}/>
      </Routes>
    </Provider>
  </BrowserRouter>
);
