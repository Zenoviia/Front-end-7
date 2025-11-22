import React, { useState } from "react";
import ImageButtons from "../ImageButtons/ImageButtons";
import "./Image.css";

function Image() {
  const [images, setImages] = useState([
    {
      url: "https://piligrimos.com/wp-content/uploads/2024/03/oblozhka.jpg",
      size: 500,
    },
  ]);

  const addImage = () => {
    const baseSize = images[0].size;
    setImages([...images, { url: images[0].url, size: baseSize }]);
  };

  const increaseImage = () => {
    setImages((prev) =>
      prev.map((img, index) =>
        index === prev.length - 1 ? { ...img, size: img.size + 40 } : img
      )
    );
  };

  const decreaseImage = () => {
    setImages((prev) =>
      prev.map((img, index) =>
        index === prev.length - 1 && img.size > 100
          ? { ...img, size: img.size - 40 }
          : img
      )
    );
  };

  const removeImage = () => {
    if (images.length > 1) {
      setImages((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className="image-container">
      {images.map((img, index) => (
        <a
          key={index}
          href="https://www.britannica.com/place/Rome"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={img.url}
            alt="Рим"
            className="main-image"
            style={{ width: img.size }}
          />
        </a>
      ))}

      <ImageButtons
        addImage={addImage}
        increaseImage={increaseImage}
        decreaseImage={decreaseImage}
        removeImage={removeImage}
      />
    </div>
  );
}

export default Image;
