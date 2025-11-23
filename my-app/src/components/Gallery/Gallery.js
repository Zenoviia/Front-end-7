import React from "react";
import GoodsCard from "../GoodsCard/GoodsCard";
import "./Gallery.css";

function Gallery() {
  const goods = [
    {
      image:
        "https://i.pinimg.com/1200x/a3/5f/0e/a35f0ec94e0f23910f5b999eb5b3a07e.jpg",
      name: "Вишневий пиріг",
      price: 160,
    },
    {
      image:
        "https://i.pinimg.com/1200x/4a/a5/0a/4aa50a06d59af6a6e08b434d787527c6.jpg",
      name: "Яблучний пиріг",
      price: 140,
    },
    {
      image:
        "https://i.pinimg.com/1200x/b9/5a/b9/b95ab90f38369c84038d504fd48b3685.jpg",
      name: "Брауні",
      price: 95,
    },
    {
      image:
        "https://i.pinimg.com/1200x/b4/cc/e0/b4cce070e1387e48b20494b84761cab5.jpg",
      name: "Блонді",
      price: 105,
    },
    {
      image:
        "https://i.pinimg.com/736x/3c/41/24/3c4124fda666b5b5e7f548a02091c4a5.jpg",
      name: "Галета з персиком",
      price: 130,
    },
    {
      image:
        "https://i.pinimg.com/736x/dd/45/8d/dd458d7f24e9b014051ba229dc84193a.jpg",
      name: "Галета з яблуком",
      price: 110,
    },
    {
      image:
        "https://i.pinimg.com/1200x/d5/5e/9c/d55e9c19522505f5b0b8bd794d9a36c0.jpg",
      name: "Карамельний чизкейк",
      price: 180,
    },
    {
      image:
        "https://i.pinimg.com/1200x/c8/07/a0/c807a05b1c380d2d76828a146e8952b3.jpg",
      name: "Вишневий чизкейк",
      price: 190,
    },
  ];

  return (
    <div className="gallery-wrapper">
      <h2 className="gallery-title">Товари</h2>
      <div className="gallery-container">
        {goods.map((item, index) => (
          <GoodsCard
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
