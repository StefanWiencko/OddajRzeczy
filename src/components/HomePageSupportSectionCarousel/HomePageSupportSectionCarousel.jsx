import React, { useState } from "react";

const carouselObj = [
  {
    name: "Fundacjom",
    content:
      "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
    id: 1,
  },
  {
    name: "Organizacjom pozarządowym",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    id: 2,
  },
  {
    name: "Lokalnym zbiórkom",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    id: 3,
  },
];

export default function HomePageSupportSectionCarousel() {
  const [carouselData, setCarouselData] = useState(carouselObj[0].content);
  const [buttonActive, setButtonActive] = useState(1);

  const clickHandler = (event) => {
    const eventID = event.target.id;

    setButtonActive(parseInt(eventID));
    setCarouselData(carouselObj[eventID - 1].content);
  };

  return (
    <>
      <div className="homePageSupportSectionCarousel">
        {carouselObj.map((element) => (
          <button
            className={
              element.id === buttonActive
                ? "button carouselButton active"
                : "button carouselButton"
            }
            key={element.id}
            id={element.id}
            onClick={clickHandler}
          >
            {element.name}
          </button>
        ))}
      </div>
      <p>{carouselData}</p>
    </>
  );
}
