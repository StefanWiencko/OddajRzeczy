import React from "react";
import HomePageInfoSectionAchivElement from "../HomePageInfoSectionAchivElement/HomePageInfoSectionAchivElement";

function HomePageInfoSectionAchiv() {
  return (
    <div className="homePageInfoSectionAchiv">
      <HomePageInfoSectionAchivElement
        h2="10"
        h3="ODDANYCH WORKÓW"
        p="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
      />
      <HomePageInfoSectionAchivElement
        h2="5"
        h3="WSPARTYCH ORGANIZACJI"
        p="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
      />
      <HomePageInfoSectionAchivElement
        h2="7"
        h3="ZORGANIZOWANYCH ZBIÓREK"
        p="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
      />
    </div>
  );
}

export default HomePageInfoSectionAchiv;
