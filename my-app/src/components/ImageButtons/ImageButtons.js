import React, { Component } from "react";
import "./ImageButtons.css";

class ImageButtons extends Component {
  render() {
    const { addImage, increaseImage, decreaseImage, removeImage } = this.props;

    return (
      <div className="image-buttons">
        <button onClick={addImage}>Додати</button>
        <button onClick={increaseImage}>Збільшити</button>
        <button onClick={decreaseImage}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
    );
  }
}

export default ImageButtons;
