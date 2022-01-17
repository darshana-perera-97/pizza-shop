import React from "react";
import logo from "./logo.png";
import "./styles.css";

export default function Loading() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ margin: "0px", marginTop: "50px", fontSize: "30px" }}>
            Welcome to
          </p>
          <p style={{ margin: "0px", fontSize: "45px", fontFamily: "Lobster" }}>
            Chilaw Pizza Palace
          </p>
        </header>
      </div>
    </div>
  );
}
