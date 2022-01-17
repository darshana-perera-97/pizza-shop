import React from "react";

export default function AboutUs() {
  return (
    <div
      style={{
        margin: "50px 30px",
        borderRadius: "20px",
        border: "2px solid white",
        padding: "15px 2px",
      }}
    >
      <div>
        <p
          style={{
            textAlign: "center",
            margin: "0px",
            fontSize: "25px",
            color: "white",
            margin: "5px",
          }}
        >
          About Us
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ padding: "5px 20px" }}>
            <p style={{ color: "white", margin: "0px", fontSize: "18px" }}>
              Address :
            </p>
            <p
              style={{
                color: "white",
                margin: "0px",
                fontSize: "15px",
                opacity: "80%",
                paddingLeft: "10px",
              }}
            >
              No.409, Main Street <br /> Chilaw
            </p>
            <p style={{ color: "white", margin: "0px", fontSize: "18px" }}>
              Contatcts :
            </p>
            <p
              style={{
                color: "white",
                margin: "0px",
                fontSize: "15px",
                opacity: "80%",
                paddingLeft: "10px",
              }}
            >
              HotLine : 077-77 77 777{" "}
            </p>
            <p
              style={{
                color: "white",
                margin: "0px",
                fontSize: "15px",
                opacity: "80%",
                paddingLeft: "10px",
              }}
            >
              LandLine : 032-22 22 222
            </p>
          </div>
          <div style={{ padding: "5px 20px" }}>
            <p style={{ color: "white", margin: "0px", fontSize: "18px" }}>
              Services From Us :
            </p>
            <p
              style={{
                color: "white",
                margin: "0px",
                fontSize: "15px",
                opacity: "80%",
                paddingLeft: "10px",
              }}
            >
              * Cash on Delivery service is available
            </p>
            <p
              style={{
                color: "white",
                margin: "0px",
                fontSize: "15px",
                opacity: "80%",
                paddingLeft: "20px",
              }}
            >
              [ Arround 20km area ]
            </p>
            <p
              style={{
                color: "white",
                margin: "0px",
                fontSize: "15px",
                opacity: "80%",
                paddingLeft: "10px",
              }}
            >
              * Delivery Service to your Door step
            </p>
            <p
              style={{
                color: "white",
                margin: "0px",
                fontSize: "15px",
                opacity: "80%",
                paddingLeft: "20px",
              }}
            >
              [ Arround 20km area ]
            </p>
            <p
              style={{
                color: "white",
                margin: "0px",
                fontSize: "15px",
                opacity: "80%",
                paddingLeft: "10px",
              }}
            >
              * All online mwthords are accepted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
