import React, { useState } from "react";
const carouselObj = [
  {
    name: "Fundacjom",
    content:
      "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
    id: 1,
  },
  { name: "Organizacjom pozarządowym", content: "content2", id: 2 },
  { name: "Lokalnym zbiórkom", content: "content3", id: 3 },
];

export default function HomePageSupportSectionCarousel() {
  const [carouselData, setCarouselData] = useState(carouselObj[0].content);
  const clickHandler = (event) => {
    if(event.target.tagName === 'DIV'){
      return
    }


    event.target.classList.add("active");
    carouselObj.forEach((element) => {
      if (element.id === parseInt(event.target.id)) {
        setCarouselData(element.content);
      }
    });
  };
  return (
    <>
      <div className="homePageSupportSectionCarousel" onClick={clickHandler}>
        {carouselObj.map((element) => (
          <button
            className="button carouselButton"
            key={element.id}
            id={element.id}
          >
            {element.name}
          </button>
        ))}
      </div>
      <p>{carouselData}</p>
    </>
  );
}
