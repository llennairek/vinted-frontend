import React, { useEffect, useState } from "react";
import axios from "axios";
import OfferItem from "./OfferItem";
import "./OfferList.css";

function OfferList() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error({ error: error.message });
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement</div>
  ) : (
    <main className="container">
      {data &&
        data.offers.map((item) => {
          return (
            <OfferItem
              key={item._id}
              _id={item._id}
              owner={item.owner}
              product_image={item.product_image}
              product_price={item.product_price}
              product_details={item.product_details}
            />
          );
        })}
    </main>
  );
}

export default OfferList;
