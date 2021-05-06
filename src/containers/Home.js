import React from "react";
import Hero from "../components/Main/Hero";
import OfferList from "../components/Main/OfferList";

function Home() {
  return (
    <div className="app-wrapper">
      <Hero />
      <OfferList />
    </div>
  );
}

export default Home;
