import { Main } from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import { ProductDetail } from "./pages/ProductDetail";
import { FashionCategory } from "./components/category/FashionCategory";
import { JeweleryCategory } from "./components/category/JeweleryCategory";
import { ElectronicsCategory } from "./components/category/ElectronicsCategory";

export const PageNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/fashion" element={<FashionCategory />} />
      <Route path="/accessory" element={<JeweleryCategory />} />
      <Route path="/digital" element={<ElectronicsCategory />} />
    </Routes>
  );
};
