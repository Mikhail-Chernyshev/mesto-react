function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup-bigpic ${card && "popup_opened"}`}>
      <div className="popup-bigpic__content">
        <img src={card?.link} alt={card?.name} className="popup-bigpic__pic" />
        <p className="popup-bigpic__title">{card?.name}</p>
        <button
          className="popup-bigpic__close popup__close"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
export default ImagePopup;
