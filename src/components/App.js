import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import { useEffect, useState } from "react";
import React from "react";
import ImagePopup from "./ImagePopup.js";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] =
    useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setIsDeleteConfirmPopupOpen(false);
    setSelectedCard(null);
  }
  function handleDeleteConfirmClick() {
    setIsDeleteConfirmPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  return (
    <body class="body">
      <div class="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onDeleteConfirmPopup={handleDeleteConfirmClick}
          onCardClick={handleCardClick}
        />
        <PopupWithForm
          onClose={closeAllPopups}
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
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
          name="post"
          title="Новое место"
          buttonText="Добавить"
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
          onClose={closeAllPopups}
          // onClick={handleDeletePlaceClick}
          name="delete"
          title="Вы уверены?"
          isOpen={isDeleteConfirmPopupOpen}
          buttonText="Удалить"
        />
        <PopupWithForm
          onClose={closeAllPopups}
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
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
      {/* <!-- <script type="module" src="./pages/index.js "></script> --> */}
    </body>
  );
}

export default App;
