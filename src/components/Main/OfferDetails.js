import React from "react";
import "./OfferDetails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function OfferDetails({ data }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  console.log(data);

  return (
    data && (
      <div className="offer-details-wrapper">
        <div className="offer-details-container container">
          <div className="offer-img-container">
            <Carousel
              containerClass="carousel-container"
              responsive={responsive}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {data.product_pictures.map((item) => {
                return (
                  <img key={item.secure_url} src={item.secure_url} alt="" />
                );
              })}
              <img src={data.product_pictures[0].secure_url} alt="" />
            </Carousel>
          </div>
          <div className="offer-infos">
            <div className="offer-infos-price">
              {data.product_price.toFixed(2)} €
            </div>
            <div className="offer-infos-details">
              {data.product_details.map((item, index) => {
                return (
                  <div key={index} className="offer-infos-details-item">
                    <span>{Object.keys(item)[0]}</span>
                    <span>{Object.values(item)[0]}</span>
                  </div>
                );
              })}
            </div>
            <div className="offer-infos-description">
              <p>{data.product_name}</p>
              <p>{data.product_description}</p>
            </div>
            <div className="offer-infos-owner">
              <img
                src={data.owner.account.avatar.secure_url}
                alt="avatar"
                width="32px"
                height="32px"
              />
              <span>{data.owner.account.username}</span>
            </div>
            <button className="button-green">Acheter</button>
          </div>
        </div>
      </div>
    )
  );
}

export default OfferDetails;
