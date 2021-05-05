import React, { useEffect, useState } from "react";
import axios from "axios";
import OfferItem from "./OfferItem";
import "./OfferList.css";

function OfferList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error({ error: error.message });
      }
    };

    fetchData();
  }, []);

  return (
    <main className="container">
      {data &&
        data.offers.map((item) => {
          return (
            <OfferItem
              key={item._id}
              _id={item._id}
              owner={item.owner}
              product_image={item.product_image}
              product_name={item.product_name}
              product_price={item.product_price}
              product_details={item.product_details}
            />
          );
        })}
    </main>
  );
}

export default OfferList;
