import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import useForm from "../hooks/useForm";

function DeleteConfirmPopup ({onClose, isOpen, isLoading, onSubmit, cardId}) {
  const { isFormValid} = useForm();

function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(cardId);
}
return (
    <PopupWithForm
    isFormValid={!isFormValid}
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