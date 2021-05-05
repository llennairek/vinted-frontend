import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Main/Hero";
import OfferList from "../components/Main/OfferList";

function Home() {
  return (
    <div className="app-wrapper">
      <Header />
      <Hero />
      <OfferList />
    </div>
  );
}

export default Home;
