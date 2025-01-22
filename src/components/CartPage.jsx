import React from "react";

function CartPage() {
  return (
    <>
      <h1>Cart Page</h1>
      <hr />
      <div>
        <div className="cart-items">
          <div className="cart-item"></div>
        </div>
        <div className="total">
          <h3>
            Total Items: <span></span>
          </h3>
          <h3>
            Total purchase Value: <span></span>
          </h3>
          <h3>
            Applicable tax: <span></span>
          </h3>
          <h3>
            Total payment amount: <span></span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default CartPage;
