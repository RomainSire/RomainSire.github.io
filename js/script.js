(function() {
  const header = document.getElementById('header');
  const headerImage = document.getElementById('header__image');
  let derniere_position_de_scroll_connue = 0;
  let ticking = false;
  let scrolledDisplay = false;

  function changeHeaderDisplay(position_scroll) {
    if (position_scroll > 200 && !scrolledDisplay) {
      header.classList.add('header--scrolledDisplay');
      headerImage.classList.add('header__image--scrolledDisplay');
      scrolledDisplay = true;
    }
    if (position_scroll < 150 && scrolledDisplay) {
      header.classList.remove('header--scrolledDisplay');
      headerImage.classList.remove('header__image--scrolledDisplay');
      scrolledDisplay = false;
    }
  }

  // Temporisation de l'évènement avec requestAnimationFrame()
  // https://developer.mozilla.org/fr/docs/Web/API/Document/scroll_event
  window.addEventListener('scroll', function(e) {
    derniere_position_de_scroll_connue = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        changeHeaderDisplay(derniere_position_de_scroll_connue);
        ticking = false;
      });
    }
    ticking = true;
  });
})();
