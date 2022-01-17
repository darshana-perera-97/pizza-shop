import { Button } from "@mui/material";
import React from "react";

export default function ButtonSet() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{
          margin: "20px",
        }}
      >
        <p style={{ color: "white", fontSize: "12px", margin: "0px" }}>
          Be easy{" "}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "20px",
            padding: "0px",
            margin: "0px",
            fontWeight: "bold",
          }}
        >
          with these{" "}
        </p>
      </div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button variant="outlined" style={{ margin: "10px" }}>
          Open Cart
        </Button>
        <Button variant="outlined" style={{ margin: "10px" }}>
          View Profile
        </Button>
        <Button variant="outlined" color="error" style={{ margin: "10px" }}>
          View Promition Details
        </Button>
      </div>
    </div>
  );
}
