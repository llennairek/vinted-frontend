import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div className="app-wrapper">
      <Header />
      <OfferDetails data={dataOffer} />
    </div>
  );
}

export default Offer;
