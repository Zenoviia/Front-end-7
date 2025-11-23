import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Image from "./components/Image/Image";
import Gallery from "./components/Gallery/Gallery";


function App() {
  return (
    <div style={{ margin: "20px" }}>
      <Header />
      <Content />
      <Image />
      <Gallery />
    </div>
  );
}

export default App;
