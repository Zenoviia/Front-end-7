import React from "react";
import "./GoodsCard.css";

function GoodsCard({ image, name, price }) {
  return (
    <div className="goods-card">
      <img src={image} alt={name} className="goods-image" />
      <h4 className="goods-name">{name}</h4>
      <p className="goods-price">{price} грн</p>
    </div>
  );
}

export default GoodsCard;
