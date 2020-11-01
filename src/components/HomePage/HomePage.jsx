import React from "react";
import HomePageMainSection from "../HomePageMainSection/HomePageMainSection";
import HomePageInfoSection from "../HomePageInfoSection/HomePageInfoSection";
import MainButton from "../MainButton/MainButton";
import HomePageAboutSection from "../HomePageAboutSection/HomePageAboutSection";
import HomePageSupportSection from "../HomePageSupportSection/HomePageSupportSection";
import HomePagePaginateSectionElement from "../HomePagePaginateSection/HomePagePaginateSection";
import HomePageFormSection from "../HomePageFormSection/HomePageFormSection";

function HomePage() {
  return (
    <div className="homePage">
      <HomePageMainSection />
      <HomePageInfoSection />
      <MainButton to="/login" text="ODDAJ RZECZY" />
      <HomePageAboutSection />
      <HomePageSupportSection />
      <HomePagePaginateSectionElement/>
      <HomePageFormSection name="HomePageFormSection" />
    </div>
  );
}

export default HomePage;
