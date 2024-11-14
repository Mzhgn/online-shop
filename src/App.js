import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductSection from "./Components/productsSections/ProductSection";
import Toast from "./Components/Toast/Toast";
import "./App.css";
import products from "./data/Products";
import Cart from "./Components/Cart/Cart";
import productsContext from "./Contexts/ProductsContext";

export default function App() {
  const [allProducts, setAllProducts] = useState(products);
  const [userCat, setUserCart] = useState([]);
  const [isShowToast, setIsShowToast] = useState(false);
  const [isShowCart, setIsShowCart] = useState(false);
  return (
    <div>
      <productsContext.Provider
        value={{
          allProducts,
          userCat,
          setUserCart,
          isShowToast,
          setIsShowToast,
          isShowCart,
          setIsShowCart,
        }}
      >
        <Navbar />

        <main className="pb-5">
          <div className="container">
            <h1 className="text-center main-title">All Products</h1>
            {allProducts.map(() => (
              <ProductSection />
            ))}
          </div>
        </main>
        <Toast />
        <Cart />
      </productsContext.Provider>
    </div>
  );
}
