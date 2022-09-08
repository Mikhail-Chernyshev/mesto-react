import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import { useEffect, useState } from "react";
import React from "react";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import DeleteConfirmPopup from "./DeleteConfirmPopup";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] =
    useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (!isLiked) {
      api
        .setLikeCard(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      api
        .removeLikeCard(card._id, isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  function handleCardDelete(card) {
    api
      .deleteCard(card)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleUpdateUser(user) {
    api
      .editUserInfo(user)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleUpdateAvatar(user) {
    api
      .editAvatar(user)
      .then((updateAvatar) => {
        setCurrentUser(updateAvatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleAddPlaceSubmit(place) {
    api
      .addCard(place)
      .then((addedPlace) => {
        setCards([addedPlace, ...cards]);
        // setCards(cards)
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteConfirmClick}
          onClose={closeAllPopups}
          onDeleteClick={handleCardDelete}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
          onAddPlace={handleAddPlaceSubmit}
        />
        {/* <DeleteConfirmPopup
          onClose={closeAllPopups}
          isOpen={isDeleteConfirmPopupOpen}
          onSubmit={handleCardDelete}
         /> */}
        <PopupWithForm
          onClose={closeAllPopups}
          onSubmit={handleCardDelete}
          name="delete"
          title="Вы уверены?"
          isOpen={isDeleteConfirmPopupOpen}
          buttonText="Удалить"
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
      {/* <!-- <script type="module" src="./pages/index.js "></script> --> */}
    </CurrentUserContext.Provider>
  );
}

export default App;
