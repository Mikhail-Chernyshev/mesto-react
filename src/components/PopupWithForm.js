function PopupWithForm(props) {
  return (
    <div
      className={`popup popup-${props.name} ${
        props.isOpen && "popup_opened"
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
            {props.buttonText || 'Сохранить'}
          </button>
        </form>
      </div>
    </div>
  );
}
  
export default PopupWithForm;
