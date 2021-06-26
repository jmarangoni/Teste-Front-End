import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faLemon,
  faFolder,

  faEnvelope,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faTabletAlt,
  faCode,
  
} from "@fortawesome/free-solid-svg-icons";

export default () => {
  return (
    <>
      <div className="container" id="features">
        <div className="content">
          <div className="header-title">
            <h2>Tinyone features</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vitae eros eget tellus tristique bibendum. Donec rutrum sed sem
              quis venenatis.
            </p>
          </div>

          <div className="feature-content">
            <div className="feature-item">
            <FontAwesomeIcon className="icon" icon={faTabletAlt}/>
              <div ClassName="text">
                <h3>Fully Responsive</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent vitae eros eget tellus tristique bibendum.
                </p>
              </div>
            </div>
            <div className="feature-item">
            <FontAwesomeIcon className="icon" icon={faLemon}/>
              <div ClassName="text">
                <h3>Fully Layered PSD</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent vitae eros eget tellus tristique bibendum.
                </p>
              </div>
            </div>
            <div className="feature-item">
            <FontAwesomeIcon className="icon icon-mail-folder" icon={faFolder}/>
              <div ClassName="text">
                <h3>Font Awesome Icons</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent vitae eros eget tellus tristique bibendum.
                </p>
              </div>
            </div>
            <div className="feature-item">
            <FontAwesomeIcon className="icon icon-code" icon={faCode}/>
              <div ClassName="text">
                <h3>HTML3 &amp; CSS3 </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent vitae eros eget tellus tristique bibendum.
                </p>
              </div>
            </div>
            <div className="feature-item">
            <FontAwesomeIcon className="icon icon-mail-folder" icon={faEnvelope}/>
              <div ClassName="text">
                <h3>Email Template</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent vitae eros eget tellus tristique bibendum.
                </p>
              </div>
            </div>
            <div className="feature-item">
            <FontAwesomeIcon className="icon icon-bookmark" icon={faBookmark}/>
              <div ClassName="text">
              
                <h3>Free to Download</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent vitae eros eget tellus tristique bibendum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
