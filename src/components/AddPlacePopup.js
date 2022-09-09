import React from "react";
import PopupWithForm from "./PopupWithForm.js";
// import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function AddPlacePopup(props) {
  // const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");
  //эффект для очистки инпутов
  React.useEffect(() => {
    setName('');
    setLink('');
}, [props.isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({ name: name, link: link });
  }
  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      name="post"
      title="Новое место"
      buttonText={props.isLoading ? 'Сохранение...' : 'Добавить'}
    >
      {" "}
      <div className="popup__container">
        <input
          type="text "
          id="post-name-input"
          minLength="2 "
          maxLength="30 "
          name="name"
          onChange={handleNameChange}
          value={name}
          className="popup__input popup-post__input popup-post__input_data_name"
          required="required "
          placeholder="Название "
        />
        <span className="popup__input-error post-name-input-error"></span>
      </div>
      <div className="popup__container">
        <input
          type="url"
          id="post-url-input"
          name="link"
          onChange={handleLinkChange}
          value={link}
          className="popup-post__input popup__input popup-post__input_data_link"
          required="required "
          placeholder="Ссылка на картинку "
        />
        <span className="popup__input-error post-url-input-error"></span>
      </div>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
