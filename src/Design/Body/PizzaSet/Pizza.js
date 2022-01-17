import React from "react";
import SinglePizzaCard from "./SinglePizza/SinglePizzaCard";
import { pizza } from "../../../DataSheet";

export default function Pizza() {
  return (
    <div>
      <div style={{ padding: "20px 20px", display: "flex" }}>
        <SinglePizzaCard val={pizza[0]} />
        <SinglePizzaCard val={pizza[0]} />
        <SinglePizzaCard val={pizza[0]} />
      </div>
      <div style={{ padding: "20px 20px", display: "flex" }}>
        <SinglePizzaCard val={pizza[0]} />
        <SinglePizzaCard val={pizza[0]} />
        <SinglePizzaCard val={pizza[0]} />
      </div>
    </div>
  );
}
