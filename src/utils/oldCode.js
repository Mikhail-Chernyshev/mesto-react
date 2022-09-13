 {/* <div class="popup popup-profile">
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
            <button type="submit " class="popup__delivery">
              Сохранить
            </button>
          </form>
        </div>
      </div> */}
          {/* <div class="popup popup-post">
        <div class="popup__content popup-post__content">
          <button
            class="popup-post__close popup__close"
            type="button "
          ></button>
          <h2 class="popup-post__title popup__title">Новое место</h2>
          <form
            action="#"
            novalidate
            class="popup__data popup-post__data"
            name="formpopup "
          >
            <div class="popup__container">
              <input
                type="text "
                id="post-name-input"
                minlength="2 "
                maxlength="30 "
                name="name"
                class="popup__input popup-post__input popup-post__input_data_name"
                required="required "
                placeholder="Название "
              />
              <span class="popup__input-error post-name-input-error"></span>
            </div>
            <div class="popup__container">
              <input
                type="url"
                id="post-url-input"
                name="link"
                class="popup-post__input popup__input popup-post__input_data_link"
                required="required "
                placeholder="Ссылка на картинку "
              />
              <span class="popup__input-error post-url-input-error"></span>
            </div>
            <button
              type="submit "
              class="popup-post__delivery popup__delivery"
              disabled
            >
              Создать
            </button>
          </form>
        </div>
      </div> */}
      // <div class="popup popup-delete">
      // <div class="popup__content popup-delete__content">
      //   <button
      //     class="popup__close popup-delete__close"
      //     type="button"
    //     ></button>
    //       <h2 class="popup__title popup-delete__title">Вы уверены?</h2>
    //     <form
    //       action="#"
    //       novalidate
    //       class="popup__data popup-post__data"
    //       name="formpopup "
    //     >
    //     <button type="button" class="popup__delivery popup-delete__delivery">
    //       Да
    //     </button>
    //     </form>
    //   </div>
    // </div>
    //       <div class="popup popup-avatar">
    //       <div class="popup__content popup-avatar__content">
    //         <button
    //           class="popup__close popup-avatar__close"
    //           type="button"
    //         ></button>
    //         <h2 class="popup__title popup-avatar__title">Обновить аватар</h2>
    //         <form
    //           action="#"
    //           novalidate
    //           class="popup__data popup-avatar__data"
    //           name="formpopup "
    //         >

      // const [name, setName] = React.useState("");
  // const [link, setLink] = React.useState("");
  //эффект для очистки инпутов
//   React.useEffect(() => {
//     setName('');
//     setLink('');
// }, [props.isOpen]);

  // function handleNameChange(evt) {
  //   setName(evt.target.value);
  // }

  // function handleLinkChange(evt) {
  //   setLink(evt.target.value);
  // }
  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   props.onAddPlace({ name: name, link: link });
  // }