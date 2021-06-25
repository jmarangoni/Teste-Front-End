import React from "react";
import "./logo.css";
import Logo from "../../assets/fingerprint.png";

export default () => {
  return (
    <>
      <div className="logo">
        <img src={Logo} />
        <h1>tinyone</h1>
      </div>
    </>
  );
};
