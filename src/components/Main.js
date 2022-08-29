import buttonEditImage from "../images/Vector.svg";
import buttonAddImage from "../images/Vectorrrbutton.svg";
import api from "../utils/Api.js";
import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import Card from "./Card.js";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  isEditProfilePopupOpen,
  isAddPlacePopupOpen,
  isEditAvatarPopupOpen,
  onClose,
  onCardClick,
  onDeleteConfirmPopup,
  isDeleteConfirmPopupOpen,
}) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCards().then((data) => setCards(data));
  });
  React.useEffect(() => {
    api.getUserInfo().then((data) =>
      // console.log(data)
      setUserAvatar(data.avatar)
    );
  }, []);
  React.useEffect(() => {
    api.getUserInfo().then((data) =>
      // console.log(data)
      setUserName(data.name)
    );
  }, []);
  React.useEffect(() => {
    api.getUserInfo().then((data) =>
      // console.log(data)
      setUserDescription(data.about)
    );
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
        {cards.map((card, id) => {
          return (
            <Card
              key={id}
              card={card}
              onCardClick={onCardClick}
              onDeleteConfirmPopup={onDeleteConfirmPopup}
              isOpen={isDeleteConfirmPopupOpen}
            />
          );
        })}
      </section>
      <PopupWithForm
        onClose={onClose}
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
      >
        <div class="popup__container">
          <input
            type="text"
            id="name-input"
            minLength="2 "
            maxLength="40 "
            name="name"
            class="popup__input popup__input_data_name"
            required
            placeholder="Имя "
          />
          <span class="popup__input-error name-input-error"></span>
        </div>
        <div class="popup__container">
          <input
            type="text"
            id="rank-input"
            minLength="2"
            maxLength="200 "
            name="rank"
            class="popup__input popup__input_data_rank"
            required="required "
            placeholder="О себе "
          />
          <span class="popup__input-error rank-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        onClose={onClose}
        isOpen={isAddPlacePopupOpen}
        name="post"
        title="Новое место"
      >
        {" "}
        <div class="popup__container">
          <input
            type="text "
            id="post-name-input"
            minLength="2 "
            maxLength="30 "
            name="name"
            class="popup__input popup-post__input popup-post__input_data_name"
            required="required "
            placeholder="Название "
          />
          <span class="popup__input-error post-name-input-error"></span>
        </div>
        <div class="popup__container">
          <input
            type="url"
            id="post-url-input"
            name="link"
            class="popup-post__input popup__input popup-post__input_data_link"
            required="required "
            placeholder="Ссылка на картинку "
          />
          <span class="popup__input-error post-url-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        onClose={onClose}
        // onClick={handleDeletePlaceClick}
        name="delete"
        title="Вы уверены?"
        isOpen={isDeleteConfirmPopupOpen}
      />
      <PopupWithForm
        onClose={onClose}
        isOpen={isEditAvatarPopupOpen}
        name="avatar"
        title="Обновить аватар"
      >
        <div class="popup__container popup-avatar__container">
          <input
            type="url"
            id="avatar-name-input"
            minLength="2 "
            maxLength="200"
            name="link"
            class="popup__input popup-avatar__input popup-avatar__input_data_name"
            required="required"
            placeholder="Введите ссылку"
          />
          <span class="popup__input-error avatar-name-input-error"></span>
        </div>
      </PopupWithForm>
    </main>
  );
}

export default Main;
