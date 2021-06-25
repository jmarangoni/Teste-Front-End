import React from "react";
import "./style.css";
import Logo from "../../components/Header/logo";
import Menu from "../../components/Header/menu";
import ContentRight from "../../components/Main/contentRigth";
import ContentLeft from "../../components/Main/contentLeft";

export default () => {
  return (
    <>
      <div className="container">
        <header>
          <div className="logo">
            <Logo />
          </div>
          <div className="menu">
            <Menu />
          </div>
        </header>

        <div className="content-left">
          <ContentLeft />
        </div>

        <div className="content-rigth">
          <ContentRight />
        </div>

        <footer>
          <div>MEU RODAPE</div>
        </footer>
      </div>
    </>
  );
};
