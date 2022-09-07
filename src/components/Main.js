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
    <main class="main">
      <section class="profile">
        <img src={currentUser.avatar} alt="аватар" class="profile__avatar" />
        <div class="profile__button-edit" onClick={onEditAvatar}></div>
        <h1 class="profile__name">{currentUser.name}</h1>
        <p class="profile__rank">{currentUser.about}</p>

        <button
          type="button"
          name="edit"
          class="profile__button-ed-self"
          onClick={onEditProfile}
        >
          <img
            src={buttonEditImage}
            alt="кнопка"
            class="profile__button-ed-pic"
          />
        </button>
        <button
          type="button"
          name="add"
          class="profile__button-add-self"
          onClick={onAddPlace}
        >
          <img
            src={buttonAddImage}
            alt="кнопка"
            class="profile__button-add-pic"
          />
        </button>
      </section>
      <section class="elements">
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
