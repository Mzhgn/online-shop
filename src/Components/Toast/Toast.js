import React, { useContext } from "react";
import productsContext from "../../Contexts/ProductsContext";

function Toast() {
  const contextData = useContext(productsContext);
  return (
    <div className="toast-container position-fixed bottom-0 me-4 end-0 mb-4">
      <div
        className={`${
          contextData.isShowToast ? "show" : ""
        } toast align-items-center  text-white bg-primary`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="btn-close btn-close-white ms-3"
            onClick={() => {
              contextData.setIsShowToast(false);
            }}
          ></button>
          <div className="toast-body"> The item added to your cart</div>
        </div>
      </div>
    </div>
  );
}

export default Toast;
