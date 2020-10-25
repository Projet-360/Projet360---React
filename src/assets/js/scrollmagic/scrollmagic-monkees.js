$(document).ready(function () {

    var Monkees = new ScrollMagic.Controller();

  //Appartition de la page
  new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    reverse: false
  })
  .setClassToggle(".monkees-body", "fade-in")
  .addTo(Monkees)

  new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    reverse: false
  })
  .setClassToggle(".monkees-main-article-accueil-text-img", "fade-in")
  .addTo(Monkees)

  new ScrollMagic.Scene({
    triggerElement: '#accueil', 
  })
  .setClassToggle("#monkees-main-article-accueil-text", "fade-in")
  .addTo(Monkees)

  new ScrollMagic.Scene({
    triggerElement: '#Apropos', 
  })
  .setClassToggle("#monkees-main-article-apropos-box", "fade-in")
  .addTo(Monkees)

  new ScrollMagic.Scene({
    triggerElement: '#frontend', 
  })
  .setClassToggle("#monkees-main-article-frontend-box", "fade-in")
  .addTo(Monkees)

  new ScrollMagic.Scene({
    triggerElement: '#backend', 
  })
  .setClassToggle("#monkees-main-article-backend-box", "fade-in")
  .addTo(Monkees)

  new ScrollMagic.Scene({
    triggerElement: '#experience', 
  })
  .setClassToggle("#monkees-main-article-end-box", "fade-in")
  .addTo(Monkees)

});
