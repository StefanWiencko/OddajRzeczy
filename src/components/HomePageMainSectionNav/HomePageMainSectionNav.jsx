import React from "react";
import MainButton from "../MainButton/MainButton";
import LinkButton from "../LinkButton/LinkButton";

function HomePageMainSectionNav() {
  return (
    <nav className="homePageMainSectionNav">
      <div className='login'>
        <MainButton text="Zaloguj" to='/'/>
        <MainButton text="Załóż konto" to='/'/>
      </div>
      <div className='navBar'>
        <LinkButton text="Start" to='/'/>
        <LinkButton text="O co chodzi?" to='/'/>
        <LinkButton text="O nas" to='/'/>
        <LinkButton text="Fundacja i organizacje" to='/'/>
        <LinkButton text="Kontakt" to='/'/>
      </div>
    </nav>
  );
}

export default HomePageMainSectionNav;
