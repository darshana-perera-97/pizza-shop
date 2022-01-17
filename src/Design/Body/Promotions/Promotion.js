import React from "react";
import { clrs } from "../../../DataSheet";
import Carasole from "./Carasole";

export default function Promotion() {
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          margin: "0px",
          fontSize: "34px",
          fontFamily: "Lobster",
          color: clrs[0],
          marginTop: "30px",
        }}
      >
        Promotions
      </p>
      <p
        style={{
          textAlign: "center",
          margin: "0px",
          fontSize: "15px",
          color: "white",
          marginTop: "-10px",
          opacity: "50%",
          marginBottom: "10px",
        }}
      >
        ** Promotions are Only valid for this Week Only **
      </p>
      <Carasole />
    </div>
  );
}
