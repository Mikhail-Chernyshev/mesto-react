function PopupWithForm({
  name,
  isOpen,
  title,
  onSubmit,
  children,
  onClose,
  buttonText,
  isLoading,
}) {
  return (
    <div className={`popup popup-${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__content">
        <button
          className={`popup__close popup-${name}__close `}
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          action="#"
          className={`popup__data popup-${name}__data`}
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          <button type="submit " className="popup__delivery">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
