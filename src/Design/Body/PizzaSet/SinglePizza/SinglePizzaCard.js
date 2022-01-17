import React from "react";
import { clrs } from "../../../../DataSheet";
import pizza1 from "./pizza.png";
import "./Res.css";

export default function SinglePizzaCard(prop) {
  return (
    <div
      style={{
        backgroundColor: clrs[1],
        width: "50%",
        padding: "5px 8px",
        margin: "0px 10px",
        borderRadius: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p
          id="txt2"
          style={{
            margin: "0px",
            color: clrs[0],
            fontWeight: "bold",
            // fontSize: "25px",
            padding: "5px 10px",
          }}
        >
          {prop.val.name}
        </p>
        <p
          id="txt"
          style={{
            margin: "0px",
            color: "white",
            opacity: "50%",
            fontSize: "15px",
            padding: "5px 10px",
          }}
        >
          {prop.val.size}
        </p>
      </div>
      <div style={{ margin: "auto" }}>
        <img src={pizza1} style={{ margin: "auto" }} id="pizzaImage" />
      </div>
      <div style={{ padding: "10px" }} id="txt">
        <p style={{ margin: "0px" }}>
          Ingredients - Lorem Ipsum, has been, the, industry's, standard, dummy
          text, ever since
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 10px",
          marginRight: "20px",
        }}
      >
        <p style={{ margin: "0px" }} id="txt1">
          Price
        </p>
        <div style={{ display: "flex" }}>
          <p
            style={{ margin: "0px", color: "red", fontWeight: "bold" }}
            id="txt1"
          >
            Rs. {prop.val.price}.00
          </p>
        </div>
      </div>
    </div>
  );
}
