import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }
  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({ name, rank: description });
  }
  return (
    <PopupWithForm
      onClose={props.onClose}
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <div className="popup__container">
        <input
          type="text"
          id="name-input"
          minLength="2 "
          maxLength="40 "
          name="name"
          className="popup__input popup__input_data_name"
          required
          value={name || ''}
          onChange={handleChangeName}
          placeholder="Имя"
        />
        <span className="popup__input-error name-input-error"></span>
      </div>
      <div className="popup__container">
        <input
          type="text"
          id="rank-input"
          minLength="2"
          maxLength="200 "
          name="rank"
          className="popup__input popup__input_data_rank"
          required="required "
          value={description || ''}
          onChange={handleChangeDescription}
          placeholder="О себе "
        />
        <span className="popup__input-error rank-input-error"></span>
      </div>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
