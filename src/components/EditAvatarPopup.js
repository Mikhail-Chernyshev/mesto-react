import React from "react";
import PopupWithForm from "./PopupWithForm.js";
// import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
function EditAvatarPopup(props) {
  // const currentUser = React.useContext(CurrentUserContext);
  const myRef = React.useRef();
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
        link: myRef.current.value,
    });
  }
  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      name="avatar"
      title="Обновить аватар"
      buttonText={props.isLoading ? 'Сохранение...' : 'Обновить'}
    >
      <div className="popup__container popup-avatar__container">
        <input
          ref={myRef}
          type="url"
          id="avatar-name-input"
          minLength="2 "
          maxLength="200"
          name="link"
          className="popup__input popup-avatar__input popup-avatar__input_data_name"
          required="required"
          placeholder="Введите ссылку"
        />
        <span className="popup__input-error avatar-name-input-error"></span>
      </div>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
