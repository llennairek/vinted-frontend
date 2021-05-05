import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Hero from "../components/Main/Hero";
import OfferList from "../components/Main/OfferList";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <OfferList />
    </>
  );
}

export default Home;
