import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Nav from "./layout/navigation/components/Nav";
import SlickSlider from "./layout/slider/components/SlickSlider";

const App = () => {
  return (
    <>
      <div className="App">
        <Nav></Nav>
        <SlickSlider></SlickSlider>
      </div>
    </>
  );
};

export default App;
