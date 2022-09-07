import trashup from "../images/Vectortrashup.png";
import trashdown from "../images/Vectortrashdown.png";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
// import DeleteConfirmPopup from "./DeleteConfirmPopup";
function Card({ card, onCardClick, onCardLike, onCardDelete, onDeleteClick }) {
  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick(evt) {
    evt.preventDefault();
    onDeleteClick(card._id)
  }
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `element__trash ${
    isOwn ? "element__trash_active" : "element__trash"
  }`;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : "element__like"
  }`;
  return (
    <div className="element" key={card._id}>
      <button
        class={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      >
        <img
          src={trashup}
          alt="кнопка удаления верх"
          class="element__trasher-up"
        />
        <img
          src={trashdown}
          alt="кнопка удаления низ"
          class="element__trasher-down"
        />
      </button>
      <img
        alt={card.name}
        class="element__image"
        src={card.link}
        onClick={handleClick}
      />
      <div class="element__atribute">
        <h3 class="element__title">{card.name}</h3>
        <div class="element__like-container">
          <button
            type="button"
            class={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p class="element__score">{card.likes.length}</p>
        </div>
      </div>
      {/* <DeleteConfirmPopup
          onClose={onClose}
          onClick={onDeleteClick}
          isOpen={isDeleteConfirmPopupOpen}
         /> */}
    </div>
  );
}

export default Card;
