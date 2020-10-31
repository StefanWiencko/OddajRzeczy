import React from "react";

export default function HomePageSupportSectionCarousel() {
  const carouselButtons = [
    "Fundacjom",
    "Organizacjom pozarządowym",
    "Lokalnym zbiórkom",
  ];
  return (
    <>
      <div className="homePageSupportSectionCarousel">
        {carouselButtons.map((element, i) => (
          <button className="button" key={i} id={i}>
            {element}
          </button>
        ))}
      </div>
      <p>
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
    </>
  );
}
