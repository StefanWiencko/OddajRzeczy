import React from "react";
import HomePageInfoSectionStepsElement from "../HomePageInfoSectionStepsElement/HomePageInfoSectionSteps";

function HomePageInfoSectionSteps() {
  return (
    <div className="homePageInfoSectionSteps">
      <HomePageInfoSectionStepsElement
        h3="Wybierz rzeczy"
        h4="ubrania, zabawki, sprzęt i inne"
      />
      <HomePageInfoSectionStepsElement
        h3="Spakuj je"
        h4="skorzystaj z worków na śmieci"
      />
      <HomePageInfoSectionStepsElement
        h3="Zdecyduj komu chcesz pomóc"
        h4="wybierz zaufane miejsce"
      />
      <HomePageInfoSectionStepsElement
        h3="Zamów kuriera"
        h4="kurier przyjedzie w dogodnym terminie"
      />
    </div>
  );
}

export default HomePageInfoSectionSteps;
