import React from "react";
import { clrs } from "../../../DataSheet";
import Pizza from "./Pizza";

export default function PizzaSet() {
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          margin: "0px",
          fontSize: "34px",
          fontFamily: "Lobster",
          color: clrs[0],
        }}
      >
        Pizza Set
      </p>
      <Pizza />
    </div>
  );
}
