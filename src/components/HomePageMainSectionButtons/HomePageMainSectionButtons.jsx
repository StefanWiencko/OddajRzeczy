import React from "react";
import MainButton from "../MainButton/MainButton";

function HomePageMainSectionButtons() {
  return (
    <div className="homePageMainSectionButtons">
      <MainButton to="/login" text="ODDAJ RZECZY" />
      <MainButton to="/login" text="ZORGANIZUJ ZBIÓRKĘ" />
    </div>
  );
}

export default HomePageMainSectionButtons;
