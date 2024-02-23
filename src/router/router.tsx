import { Main } from "../pages/Main";
import { Route, Routes } from "react-router-dom";
import { ProductDetail } from "../pages/ProductDetail";
import { FashionCategory } from "../components/category/FashionCategory";
import { JeweleryCategory } from "../components/category/JeweleryCategory";
import { ElectronicsCategory } from "../components/category/ElectronicsCategory";
import { GroceryCategory } from "../components/category/GroceryCategory";
import { Cart } from "../pages/Cart";
import { Error } from "../pages/Error";

export const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Main />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/fashion" element={<FashionCategory limit={0} />} />
      <Route path="/accessory" element={<JeweleryCategory limit={0} />} />
      <Route path="/digital" element={<ElectronicsCategory limit={0} />} />
      <Route path="/grocery" element={<GroceryCategory />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
