import React, { useContext } from "react";
import "./ProductSection.css";
import productsContext from "../../Contexts/ProductsContext";

function ProductSection() {
  const contextData = useContext(productsContext);
  return (
    <>
      {contextData.allProducts.map((productSection) => (
        <div className="row justify-content-center mt-5">
          <h3 className="text-center">{productSection.title}</h3>

          {productSection.info.map((product) => (
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5">
              <div className="card py-3 px-3">
                <div className="col-12 text-center">
                  <img
                    src="/images/1.jpg"
                    alt="Product Image"
                    className="card-img-top w-75"
                  />
                </div>
                <div className="card-body text-center">
                  <p className="card-text">{product.title}</p>
                  <p className="price">{product.price}$</p>
                  <br />
                  <a href="#" className="btn btn-danger">
                    Add to Cart
                  </a>
                  <a
                    href=""
                    className="btn btn-outline-dark mt-3 text-capitalize"
                  >
                    More Information
                  </a>

                  <p className="number">Number: {product.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default ProductSection;
