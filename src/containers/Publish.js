import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Publish.css";
import axios from "axios";

function Publish({ userToken }) {
  //INPUT STATES
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const history = useHistory();

  //HANDLE FORM
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      picture &&
      title &&
      description &&
      brand &&
      size &&
      color &&
      condition &&
      city &&
      price
    ) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
          formData,
          {
            headers: {
              authorization: `Bearer ${userToken}`,
            },
          }
        );
        console.log(response);
        console.log(response.data);
        history.push(`/offer/${response.data._id}`);
      } catch (error) {
        console.error(error.message);
      }
    } else {
      alert("Merci de remplir tous les champs");
    }
  };
  return (
    <div className="sell-main">
      <div className="container">
        <h1>Vends ton article</h1>
        <form onSubmit={handleSubmit} className="sell-wrapper">
          <div className="sell-files-wrapper sell-container">
            <label htmlFor="files-upload">
              Ajoute une photo de l'article
              <input
                type="file"
                name="files-upload"
                id="files-upload"
                className="sell button-green"
                onChange={(event) => {
                  setPicture(event.target.files[0]);
                }}
              />
              <div className="button-green button-big">
                <span>Ajouter</span>
              </div>
            </label>
          </div>
          <div className="sell-desctitle sell-container">
            <label htmlFor="sell-title">
              Titre
              <input
                type="text"
                name="sell-title"
                id="sell-title"
                placeholder="ex: Chemise verte"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </label>
            <label htmlFor="sell-description">
              Décris ton article
              <textarea
                rows="5"
                cols="33"
                name="sell-description"
                id="sell-description"
                placeholder="ex: portée quelquefois, taille correctement"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="sell-details sell-container">
            <label htmlFor="sell-brand">
              Marque
              <input
                type="text"
                name="sell-brand"
                id="sell-brand"
                placeholder="ex: Zara"
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </label>
            <label htmlFor="sell-size">
              Taille
              <input
                type="text"
                name="sell-size"
                id="sell-size"
                placeholder="ex: L/40/12"
                value={size}
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </label>
            <label htmlFor="sell-color">
              Couleur
              <input
                type="text"
                name="sell-color"
                id="sell-color"
                placeholder="ex: Fuschia"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </label>
            <label htmlFor="sell-state">
              Etat
              <input
                type="text"
                name="sell-state"
                id="sell-state"
                placeholder="ex: Neuf avec étiquette"
                value={condition}
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </label>
            <label htmlFor="sell-location">
              Lieu
              <input
                type="text"
                name="sell-location"
                id="sell-location"
                placeholder="ex:Paris"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="sell-price sell-container">
            <label htmlFor="sell-price">
              Prix
              <input
                type="number"
                name="sell-price"
                id="sell-price"
                step="0.01"
                placeholder="ex: 0.00"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </label>
          </div>
          <input
            type="submit"
            value="Ajouter"
            id="submit-form"
            className="button-green button-big"
          />
        </form>
      </div>
    </div>
  );
}

export default Publish;
