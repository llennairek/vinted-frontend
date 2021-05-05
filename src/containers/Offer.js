import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import OfferDetails from "../components/Main/OfferDetails";

function Offer() {
  const { id } = useParams();
  const [dataOffer, setDataOffer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setDataOffer(response.data);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Header />
      <OfferDetails data={dataOffer} />
    </>
  );
}

export default Offer;
