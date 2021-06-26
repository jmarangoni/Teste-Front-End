import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faGooglePlusSquare,
  faPinterestSquare,
} from "@fortawesome/free-brands-svg-icons";

export default () => {
  return (
    <>
      <div className="container box-black" id="support">
        <div className="content">
          <div className="header-title footer">
            <h2 className="text-yellow">Keep in touch with us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vitae eros eget tellus tristique bibendum. Donec rutrum sed sem
              quis venenatis.
            </p>
          </div>
          <form className="contact">
            <input
              type="mail"
              name="mail"
              placeholder="Enter your email to update"
            />
            <button type="submit">Submit</button>
          </form>
          <div className="social-midia">
            <a href="https://facebook.com" target="_blank">
              <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
            </a>
            <a href="https://google.com" target="_blank">
              <FontAwesomeIcon className="icon" icon={faGooglePlusSquare} />
            </a>
            <a href="https://br.pinterest.com" target="_blank">
              <FontAwesomeIcon className="icon" icon={faPinterestSquare} />
            </a>
          </div>
          <footer>
            <div className="addres">
              <p>HALOVIETNAM LTD</p>
              <p>66, Dang Van ngu, Dong Da</p>
              <p>Hanoi, Vietnam</p>
              <p>contact@halovietnam.com</p>
              <p>+844 35149182</p>
            </div>
            <div className="box-menu-footer">
              <ul>
                <li>
                  <a href="#">Examples</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">License</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Download</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Documents</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Media</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Forums</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
