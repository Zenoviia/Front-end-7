import React, { Component } from "react";
import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstState: "initial",
      secondState: "initial",
    };
  }

  toggleFirst = () => {
    this.setState((prevState) => {
      if (prevState.firstState === "initial") return { firstState: "active1" };
      if (prevState.firstState === "active1")
        return { firstState: "active1-soft" };
      return { firstState: "active1" };
    });
  };

  toggleSecond = () => {
    this.setState((prevState) => {
      if (prevState.secondState === "initial")
        return { secondState: "active2" };
      if (prevState.secondState === "active2")
        return { secondState: "active2-soft" };
      return { secondState: "active2" };
    });
  };

  render() {
    const hobbies = [
      "Читати книги",
      "Дивитися серіали",
      "Дивитися Формулу-1",
      "Подорожувати",
      "Готувати",
    ];

    const favoriteBooks = [
      '"Heartless" — Elsie Silver',
      '"До зустрічі з тобою"',
      '"Опівнічне сонце"',
    ];

    return (
      <div className="content-container">
        <h3>Хобі:</h3>
        <ul>
          {hobbies.map((item, index) => {
            let className = "";
            let onClick = null;
            let clickable = false;

            if (item === "Дивитися серіали") {
              className =
                this.state.firstState !== "initial"
                  ? this.state.firstState
                  : "";
              onClick = this.toggleFirst;
              clickable = true;
            }

            if (item === "Дивитися Формулу-1") {
              className =
                this.state.secondState !== "initial"
                  ? this.state.secondState
                  : "";
              onClick = this.toggleSecond;
              clickable = true;
            }

            return (
              <li
                key={index}
                className={`${className} ${clickable ? "clickable" : ""}`}
                onClick={onClick}
              >
                {item}
              </li>
            );
          })}
        </ul>

        <h3>Улюблені книги та фільми:</h3>
        <ol>
          {favoriteBooks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Content;
