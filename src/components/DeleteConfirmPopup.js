import React from "react";
import PopupWithForm from "./PopupWithForm.js";
// import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function DeleteConfirmPopup ({onClose, isOpen, isLoading, onSubmit, cardId}) {
function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(cardId);
}
return (
    <PopupWithForm
    isLoading={isLoading}
    onClose={onClose}
    onSubmit={handleSubmit}
    name="delete"
    title="Вы уверены?"
    isOpen={isOpen}
    buttonText="Удалить"
  />
)
}
export default DeleteConfirmPopup