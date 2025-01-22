import React from "react";

function ProductCard({ img, name, price, desc }) {
  return (
    <div className="product-card bg-slate-200/40 rounded-md max-w-[350px]">
      <img src={img} className="rounded mx-auto" alt="" />
      <div className="content p-4">
        <div className="wrapper flex gap-3 justify-between">
          <h2 className="text-2xl text-slate-700 font-semibold">{name}</h2>
          <span className="text-2xl text-teal-700 font-semibold">${price}</span>
        </div>
        <p className="text-slate-500">{desc}</p>
        <button className="btn mx-2">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
