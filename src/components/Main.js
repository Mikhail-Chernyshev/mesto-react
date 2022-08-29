import buttonEditImage from "../images/Vector.svg";
import buttonAddImage from "../images/Vectorrrbutton.svg";
import api from "../utils/Api.js";
import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import Card from "./Card.js";
import { useEffect, useState } from "react";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onDeleteConfirmPopup,
  isDeleteConfirmPopupOpen,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([user, cards]) => {
        setUserAvatar(user.avatar);
        setUserName(user.name);
        setUserDescription(user.about);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main class="main">
      <section class="profile">
        {/* <!-- <div class="profile__container"> --> */}
        <img src={userAvatar} alt="аватар" class="profile__avatar" />
        <div class="profile__button-edit" onClick={onEditAvatar}></div>
        {/* <!-- </div> --> */}
        <h1 class="profile__name">{userName}</h1>
        <p class="profile__rank">{userDescription}</p>

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
        {cards.map((card, _id) => {
          return (
            <Card
              key={_id}
              card={card}
              onCardClick={onCardClick}
              onDeleteConfirmPopup={onDeleteConfirmPopup}
              isOpen={isDeleteConfirmPopupOpen}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
