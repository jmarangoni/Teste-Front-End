import React from "react";
import "./contentRigth.css";
import Ipad from "../../assets/iPad.png";
import BackgroundBlackIpad from "../../assets/background-black-ipad.png";
import Logo from "../Header/logo";

export default () => {
  return (
    <>
      <div className="main-rigth">
        <div className="ipad-mini">
          <div>
            <img src={Ipad} />
          </div>
        </div>
      </div>
    </>
  );
};
