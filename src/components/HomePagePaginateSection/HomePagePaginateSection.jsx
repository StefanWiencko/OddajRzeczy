import React from "react";
import HomePagePaginateSectionElement from "../HomePagePaginateSectionElement/HomePagePaginateSectionElement";
import ReactPaginate from "react-paginate";

function HomePagePaginateSection() {
  return (
    <section className="homePagePaginateSection">
      <HomePagePaginateSectionElement
        foundation='"Dbam o zdrowie"'
        purpose="Pomoc osobom znajdującym się w trudnej sytuacji życiowej."
        items="ubrania, jedzenie, sprzęt AGD, meble, zabawki"
      />
      <HomePagePaginateSectionElement
        foundation='"Dla dzieci"'
        purpose="Pomoc dzieciom z ubogich rodzin."
        items="ubrania, meble, zabawki"
      />
      <HomePagePaginateSectionElement
        foundation='"Bez domu"'
        purpose="Pomoc dla osób nie posiadających miejsca zamieszkania."
        items="ubrania, jedzenie, ciepłe koce"
      />
      <ReactPaginate
        pageCount={3}
        // onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"paginationLink"}
        nextLinkClassName={"paginationLink"}
        // disabledClassName={"pagination__link--disabled"}
        activeClassName={"paginationLinkActive"}
      />
    </section>
  );
}

export default HomePagePaginateSection;
