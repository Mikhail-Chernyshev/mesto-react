function PopupWithForm(props) {
  return (
    <div
      className={`popup popup-${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div class="popup__content">
        <button
          className={`popup__close popup-${props.name}__close `}
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 class="popup__title">{props.title}</h2>
        <form
          action="#"
          noValidate
          className={`popup__data popup-${props.name}__data`}
          name="formpopup"
        >
          {props.children}
          <button type="submit " class="popup__delivery">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
{
  /* <div class="popup popup-profile">
        <div class="popup__content">
          <button
            class="popup__close popup-profile__close"
            type="button"
          ></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form
            action="#"
            novalidate
            class="popup__data_one popup__data"
            name="formpopup"
          >
            <div class="popup__container">
              <input
                type="text"
                id="name-input"
                minlength="2 "
                maxlength="40 "
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
                minlength="2 "
                maxlength="200 "
                name="rank"
                class="popup__input popup__input_data_rank"
                required="required "
                placeholder="О себе "
              />
              <span class="popup__input-error rank-input-error"></span>
            </div>
            <button type="submit " class="popup__delivery">Сохранить</button>
          </form>
        </div>
      </div> */
}

export default PopupWithForm;
