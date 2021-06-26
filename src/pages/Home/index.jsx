import React from "react";
import "./style.css";
import Logo from "../../components/Header/logo";
import Menu from "../../components/Header/menu";
import ContentRight from "../../components/Main/contentRigth";
import ContentLeft from "../../components/Main/contentLeft";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => {
  return (
    <>
      <div className="container yellow-gradient">
        <div className="content">
          <div className="home-content">
            <header className="home-header">
              <Logo />
              <div className="menu">
                <Menu />
              </div>
            </header>

            <Carousel showArrows={false} showStatus={false} showThumbs={false}>
              
              <div className="carousel-item">
                <div className="content-left">
                  <ContentLeft />
                </div>

                <div className="content-rigth">
                  <ContentRight />
                </div>
              </div>
              <div className="carousel-item">
                <div className="content-left">
                  <ContentLeft />
                </div>

                <div className="content-rigth">
                  <ContentRight />
                </div>
              </div>
            </Carousel>

        
          </div>
        </div>
      </div>
    </>
  );
};
