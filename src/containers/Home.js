import React from "react";
import Hero from "../components/Main/Hero";
import OfferList from "../components/Main/OfferList";

function Home({
  filterInput,
  setFilterInput,
  sortFilter,
  setSortFilter,
  priceMinFilter,
  setPriceMinFilter,
  priceMaxFilter,
  setPriceMaxFilter,
}) {
  return (
    <div className="app-wrapper">
      <Hero />
      <OfferList
        filterInput={filterInput}
        setFilterInput={setFilterInput}
        sortFilter={sortFilter}
        setSortFilter={setSortFilter}
        priceMinFilter={priceMinFilter}
        setPriceMinFilter={setPriceMinFilter}
        priceMaxFilter={priceMaxFilter}
        setPriceMaxFilter={setPriceMaxFilter}
      />
    </div>
  );
}

export default Home;
