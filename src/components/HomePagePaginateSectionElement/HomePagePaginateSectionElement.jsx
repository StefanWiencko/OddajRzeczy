import React from "react";

function HomePagePaginateSectionElement({ foundation, purpose, items }) {
  return (
    <div className="homePagePaginateSectionElement">
      <div>
        <h2>Fundacj {foundation}</h2>
        <h3>Cel i misja: {purpose}</h3>
      </div>
      <span>{items}</span>
    </div>
  );
}

export default HomePagePaginateSectionElement;
