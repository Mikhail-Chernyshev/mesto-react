function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup-bigpic ${card && "popup_opened"}`}>
      <div class="popup-bigpic__content">
        {/* <!-- <div class="popup-bigpic__image"> --> */}
        <img
          src={card?.link}
          alt={card?.name}
          class="popup-bigpic__pic"
        />
        <p class="popup-bigpic__title"></p>
        <button
          class="popup-bigpic__close popup__close"
          type="button"
          onClick={onClose}
        ></button>
        {/* <!-- </div> --> */}
      </div>
    </div>
  );
}
export default ImagePopup;
