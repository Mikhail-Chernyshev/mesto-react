import buttonEditImage from "../images/Vector.svg";
import buttonAddImage from "../images/Vectorrrbutton.svg";
import api from "../utils/Api.js";
import React from "react";
import Card from "./Card.js";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onDeleteConfirmPopup,
  isDeleteConfirmPopupOpen,
  cards,
  onCardLike,
  onCardDelete,
  onClose,
  onDeleteClick,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <main className="main">
      <section className="profile">
        <img src={currentUser.avatar} alt="аватар" className="profile__avatar" />
        <div className="profile__button-edit" onClick={onEditAvatar}></div>
        <h1 className="profile__name">{currentUser.name}</h1>
        <p className="profile__rank">{currentUser.about}</p>

        <button
          type="button"
          name="edit"
          className="profile__button-ed-self"
          onClick={onEditProfile}
        >
          <img
            src={buttonEditImage}
            alt="кнопка"
            className="profile__button-ed-pic"
          />
        </button>
        <button
          type="button"
          name="add"
          className="profile__button-add-self"
          onClick={onAddPlace}
        >
          <img
            src={buttonAddImage}
            alt="кнопка"
            className="profile__button-add-pic"
          />
        </button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              onDeleteClick={onDeleteClick}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
