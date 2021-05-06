import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OfferDetails from "../components/Main/OfferDetails";

function Offer() {
  const { id } = useParams();
  const [dataOffer, setDataOffer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setDataOffer(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <div className="app-wrapper">
      {isLoading ? (
        <div>En cours de chargement</div>
      ) : (
        <OfferDetails data={dataOffer} />
      )}
    </div>
  );
}

export default Offer;
