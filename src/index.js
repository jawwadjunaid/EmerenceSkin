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
import FootCare from "./pages/ProductsPages/FootCareAndHandCare/FootCare.jsx";
import LipCare from "./pages/ProductsPages/Skin Care/LipCare";
import Masks from "./pages/ProductsPages/Skin Care/Masks";
import EyeCare from "./pages/ProductsPages/Skin Care/EyeCare";
import GlowEnhancerOils from "./pages/ProductsPages/Skin Care/GlowEnhancerOils";
import HandmadeSoaps from "./pages/ProductsPages/Skin Care/HandmadeSoaps";
import HyperpigmentationMelasma from "./pages/ProductsPages/Skin Care/HyperpigmentationMelasma";
import Emollients from "./pages/ProductsPages/Skin Care/Emollients";
import Moisturisers from "./pages/ProductsPages/Skin Care/Moisturisers";
import Peels from "./pages/ProductsPages/Skin Care/Peels";
import PoreMinimiser from "./pages/ProductsPages/Skin Care/PoreMinimiser";
import ShowerGels from "./pages/ProductsPages/Skin Care/ShowerGels";
import SunCare from "./pages/ProductsPages/Skin Care/SunCare";
import Toner from "./pages/ProductsPages/Skin Care/Toner";
import HairConditionersandMasks from "./pages/ProductsPages/HairCare/HairConditionersandMasks";
import HairGrowthSerum from "./pages/ProductsPages/HairCare/HairGrowthSerum";
import ProductCardPage from "./pages/ProductCardPage/ProductCardPage";

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
        <Route path="/acnecare" element={<AcneAcre />} />
        <Route path="/antiaging" element={<AntiAging />} />
        <Route path="/cleansers" element={<Cleanser />} />
        <Route path="/formuladevelopment" element={<FormulaDevelopment />} />
        <Route path="/products" element={<Products />} />
        <Route path="/bodybutter" element={<BodyButter />} />
        <Route path="/footcare" element={<FootCare />} />
        <Route path="/lipcare" element={<LipCare />} />
        <Route path="/masks" element={<Masks />} />
        <Route path="/eyecare" element={<EyeCare />} />
        <Route path="/glowenhanceroils" element={<GlowEnhancerOils />} />
        <Route path="/handmadesoaps" element={<HandmadeSoaps />} />
        <Route
          path="/hyperpigmentation"
          element={<HyperpigmentationMelasma />}
        />
        <Route path="/emollients" element={<Emollients />} />
        <Route path="/moisturisers" element={<Moisturisers />} />
        <Route path="/peels" element={<Peels />} />
        <Route path="/poreminimiser" element={<PoreMinimiser />} />
        <Route path="/showergels" element={<ShowerGels />} />
        <Route path="/suncare" element={<SunCare />} />
        <Route path="/toner" element={<Toner />} />
        <Route
          path="/hairconditionersandmasks"
          element={<HairConditionersandMasks />}
        />
        <Route path="/hairgrowthserum" element={<HairGrowthSerum />} />
        <Route path="/productCard" element={<ProductCardPage/>}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
