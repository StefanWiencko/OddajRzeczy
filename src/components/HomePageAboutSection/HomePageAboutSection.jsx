import React from "react";
import MainOrnament from "../MainOrnament/MainOrnament";

function HomePageAboutSection() {
  return (
    <section className="homePageAboutSection" id="homePageAboutSection" >
      <div className="content">
        <div>
          <MainOrnament text="O nas" />
          <p>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <div className="signature"></div>
        </div>
      </div>
      <div className="bg"></div>
    </section>
  );
}

export default HomePageAboutSection;
