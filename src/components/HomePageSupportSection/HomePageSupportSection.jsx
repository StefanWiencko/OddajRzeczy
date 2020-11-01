import React from "react";
import MainOrnament from "../MainOrnament/MainOrnament";
import HomePageSupportSectionCarousel from "../HomePageSupportSectionCarousel/HomePageSupportSectionCarousel";

function HomePageSupportSection() {
  return (
    <section className="homePageSupportSection" id="homePageSupportSection">
      <MainOrnament text="Komu pomagamy?" />
      <HomePageSupportSectionCarousel />
    </section>
  );
}

export default HomePageSupportSection;
