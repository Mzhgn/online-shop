import React, { useContext } from "react";
import "./Cart.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import productsContext from "../../Contexts/ProductsContext";

function Cart() {
  const contextData = useContext(productsContext);
  return (
    <aside className={`${contextData.isShowCart ? "active" : ""} bag-sidebar `}>
      {/*  add activeclass to show bag sidebar*/}
      <h3 className="bag-title">
        {" "}
        <span>
          <BsBag /> Bag
        </span>
        <span>
          <AiOutlineClose
            className="close-icon"
            onClick={() => {
              contextData.setIsShowCart(false);
            }}
          />
        </span>
      </h3>

      <div className="row bag-wrapper">
        <div className="col-12 mt-5">
          <div className="card py-3 px-3">
            <div className="col-12 text-center">
              <img
                src="./images/1.jpg"
                alt="Product Image"
                className="cart-img-top w-75"
              />
            </div>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <p className="card-text">Samsung A51</p>
              <p className="price">12000</p>
              <br />
              <a href="#" className="btn btn-danger">
                Buy
              </a>
              <a href="#" className="btn btn-outline-dark mt-3 text-capitalize">
                More Info
              </a>
              <p className="number">12</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Cart;
