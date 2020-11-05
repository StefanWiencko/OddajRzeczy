import React, { useState, useEffect } from "react";
import HomePagePaginateSectionElement from "../HomePagePaginateSectionElement/HomePagePaginateSectionElement";
import ReactPaginate from "react-paginate";

function HomePagePaginateSection() {
  useEffect(() => {
    fetchData();
  }, []);

  // const url =
  //   "https://us-central1-oddajrzeczy-86a03.cloudfunctions.net/helloWorld";

  // const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const fetchData = () => {
    fetch(
      "https://us-central1-oddajrzeczy-86a03.cloudfunctions.net/helloWorld",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        },
        mode: "no-cors",
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const paginateData = [
    {
      foundation: '"Dbam o zdrowie"',
      purpose: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    {
      foundation: '"Dla dzieci"',
      purpose: "Pomoc dzieciom z ubogich rodzin.",
      items: "ubrania, meble, zabawki",
    },
    {
      foundation: '"Bez domu"',
      purpose: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
      items: "ubrania, jedzenie, ciepłe koce",
    },
    {
      foundation: '"Dla dzieci"',
      purpose: "Pomoc dzieciom z ubogich rodzin.",
      items: "ubrania, meble, zabawki",
    },
    {
      foundation: '"Dbam o zdrowie"',
      purpose: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    {
      foundation: '"Bez domu"',
      purpose: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
      items: "ubrania, jedzenie, ciepłe koce",
    },
    {
      foundation: '"Bez domu"',
      purpose: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
      items: "ubrania, jedzenie, ciepłe koce",
    },
    {
      foundation: '"Dbam o zdrowie"',
      purpose: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    {
      foundation: '"Dla dzieci"',
      purpose: "Pomoc dzieciom z ubogich rodzin.",
      items: "ubrania, meble, zabawki",
    },
  ];

  const [elementsOnPage, setElementsOnPage] = useState([
    paginateData[0],
    paginateData[1],
    paginateData[2],
  ]);

  const pageCount = 3;

  const handlePageClick = (event) => {
    const selected = event.selected;
    const elements = selected * pageCount;
    const currPaginateElements = [];
    for (let i = elements; i < elements + pageCount; i++) {
      currPaginateElements.push(paginateData[i]);
    }
    setElementsOnPage(currPaginateElements);
  };

  return (
    <section className="homePagePaginateSection">
      {elementsOnPage.map(({ foundation, purpose, items }, i) => (
        <HomePagePaginateSectionElement
          key={i}
          foundation={foundation}
          purpose={purpose}
          items={items}
        />
      ))}
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"paginationLink"}
        nextLinkClassName={"paginationLink"}
        activeClassName={"paginationLinkActive"}
      />
    </section>
  );
}

export default HomePagePaginateSection;
