import React from "react";
import MainButton from "../MainButton/MainButton";
import LinkButton from "../LinkButton/LinkButton";

function HomePageMainSectionNav() {
  return (
    <nav className="homePageMainSectionNav">
      <div className="login">
        <MainButton text="Zaloguj" to="/login" />
        <MainButton text="Załóż konto" to="/login" />
      </div>
      <div className="navBar">
        <MainButton text="Start" to="/" />
        <LinkButton text="O co chodzi?" to="homePageInfoSectionAchiv" />
        <LinkButton text="O nas" to="homePageAboutSection" />
        <LinkButton text="Fundacja i organizacje" to="homePageSupportSection" />
        <LinkButton text="Kontakt" to="homePageFormSection" />
      </div>
    </nav>
  );
}

export default HomePageMainSectionNav;
