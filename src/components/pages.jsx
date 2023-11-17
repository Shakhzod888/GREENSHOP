import React from "react";
import Main from "./main/main";
import Products from "./products/products";
import flo from "../components/assets/flower1.png"
function Pages() {
  return (
    <>
      <div className="container">
        <Main />
        <Products />
      </div>
    </>
  );
}

export default Pages;
