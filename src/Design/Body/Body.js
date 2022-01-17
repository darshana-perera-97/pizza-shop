import React from "react";
import image from "./img47.jpg";
import PizzaSet from "./PizzaSet/PizzaSet";
import Promotion from "./Promotions/Promotion";

export default function Body() {
  return (
    <div>
      <img
        src={image}
        alt="logo"
        style={{ width: "100%", marginBottom: "20px" }}
      />
      <PizzaSet />
      <Promotion />
    </div>
  );
}
