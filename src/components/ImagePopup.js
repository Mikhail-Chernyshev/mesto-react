function ImagePopup(props) {

    return (
        <div className={`popup popup-bigpic ${props.card ? 'popup_opened' : ''}`}>
        <div class="popup-bigpic__content">
          {/* <!-- <div class="popup-bigpic__image"> --> */}
          <img alt='' src={props.card ? props.card.link : ''} class="popup-bigpic__pic" />
          <p class="popup-bigpic__title"></p>
          <button
            class="popup-bigpic__close popup__close"
            type="button"
            onClick={props.onClose}
          ></button>
          {/* <!-- </div> --> */}
        </div>
      </div>
    )    
}
export default ImagePopup