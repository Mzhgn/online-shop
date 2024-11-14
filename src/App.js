import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductSection from "./Components/productsSections/ProductSection";
import Toast from "./Components/Toast/Toast";
import "./App.css";
import products from "./data/Products";
import Cart from "./Components/Cart/Cart";

export default function App() {
  const [allProducts, setAllProducts] = useState(products);
  return (
    <div>
      <Navbar />

      <main className="pb-5">
        <div className="container">
          <h1 className="text-center main-title">All Products</h1>
          {allProducts.map((product) => (
            <ProductSection {...product} />
          ))}
        </div>
      </main>
      <Toast />
      <Cart />
    </div>
  );
}
