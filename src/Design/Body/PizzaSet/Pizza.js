import React from "react";
import SinglePizzaCard from "./SinglePizza/SinglePizzaCard";

export default function Pizza() {
  return (
    <div style={{padding:"20px 50px",display:"flex"}}>
      <SinglePizzaCard />
      <SinglePizzaCard />
    </div>
  );
}
