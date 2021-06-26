import React from "react";
import "./contentLeft.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faAndroid,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";

export default () => {
  return (
    <>
      <div className="main-left">
        <div className="title">
          <h2>Inspire your inspiration</h2>
        </div>
        <h5>
          Simple to use for your app, product showcase and your inspiration{" "}
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
          venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et
          eros porta lobortis sit.
        </p>
        <div className="platforms">
      <FontAwesomeIcon className="icon" icon={faApple}/>
      <FontAwesomeIcon className="icon" icon={faAndroid}/>
      <FontAwesomeIcon className="icon" icon={faWindows}/>
      </div>
      </div>
      
    </>
  );
};
