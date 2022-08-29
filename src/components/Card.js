import trashup from "../images/Vectortrashup.png";
import trashdown from "../images/Vectortrashdown.png";
function Card({
  card,
  onCardClick,
  onDeleteConfirmPopup,
  isDeleteConfirmPopupOpen,
}) {
  function handleClick() {
    // console.log(card)
    onCardClick(card);
  }
  return (
    <div className="element" key={card._id}>
      <button
        class="element__trash"
        type="button"
        onClick={onDeleteConfirmPopup}
      >
        <img
          // src="<%=require('/images/Vectortrashup.png')%>"
          src={trashup}
          alt="кнопка удаления верх"
          class="element__trasher-up"
        />
        <img
          // src="<%=require('/images/Vectortrashdown.png')%>"
          src={trashdown}
          alt="кнопка удаления низ"
          class="element__trasher-down"
        />
      </button>
      <img
        alt={card.name}
        class="element__image"
        src={card.link}
        onClick={handleClick}
      />
      <div class="element__atribute">
        <h3 class="element__title">{card.name}</h3>
        <div class="element__like-container">
          <button type="button" class="element__like"></button>
          <p class="element__score">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
