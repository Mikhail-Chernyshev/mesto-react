function PopupWithForm(props) {
  return (
    <div
      className={`popup popup-${props.name} ${props.isOpen && "popup_opened"}`}
    >
      <div className="popup__content">
        <button
          className={`popup__close popup-${props.name}__close `}
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          action="#"
          className={`popup__data popup-${props.name}__data`}
          name={props.name}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button type="submit " className="popup__delivery">
            {props.buttonText || "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
