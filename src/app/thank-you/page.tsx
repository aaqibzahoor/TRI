import React from "react";

export default function ThankYou() {
  return (
    <div className="section-padding">
      <div className="container">
        <div style={{ textAlign: "center"}}>
          <div style={{color: "#28a745" }}>
            <i
              className="fa-light fa-badge-check"
              style={{ fontSize: "80px" }}
            ></i>
          </div>
          <h1 className="py-2">Thank you!</h1>
          <p style={{ fontSize: "18px", color: "#555" }}>
            We will get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
}
