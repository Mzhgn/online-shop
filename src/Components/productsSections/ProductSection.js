import React, { useContext } from "react";
import "./ProductSection.css";
import productsContext from "../../Contexts/ProductsContext";

function ProductSection() {
  const contextData = useContext(productsContext);

  const addToCard = (product) => {
    contextData.setIsShowToast(true);

    setTimeout(() => {
      contextData.setIsShowToast(false);
    }, 3000);

    let isInUserCart = contextData.userCart.some(
      (item) => item.title === product.title
    );

    if (!isInUserCart) {
      let newUserCartProduct = {
        id: contextData.userCart.length + 1,
        title: product.title,
        price: product.price,
        count: 1,
      };

      contextData.setUserCart((prevProduct) => [
        ...prevProduct,
        newUserCartProduct,
      ]);
    } else {
      let userCart = [...contextData.userCart];

      userCart.some((item) => {
        if (item.title === product.title) {
          item.count += 1;
          return true;
        }
      });
      contextData.setUserCart(userCart);
    }
  };
  return (
    <>
      {contextData.allProducts.map((productSection) => (
        <div
          key={productSection.CategoryTitle}
          className="row justify-content-center mt-5"
        >
          <h3 className="text-center">{productSection.title} </h3>

          {productSection.info.map((product) => (
            <div
              key={product.id}
              className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5"
            >
              <div className="card py-3 px-3">
                <div className="col-12 text-center">
                  <img
                    src={product.img}
                    alt="Product Image"
                    className="card-img-top product-image"
                  />
                </div>
                <div className="card-body text-center">
                  <p className="card-text">{product.title}</p>
                  <p className="price">{product.price}$</p>
                  <br />
                  <button
                    className="btn btn-danger"
                    onClick={() => addToCard(product)}
                  >
                    Add to Cart
                  </button>
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
