$(document).ready(function () {

  var WebPage = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
      duration: 100,
      triggerHook: 1,
      reverse: true
    })
    .setClassToggle("#web-accueil--anim---titre", "fade-in")
    .addTo(WebPage);

  var ourScene = new ScrollMagic.Scene({
      duration: 800,
      triggerElement: '#apropos',
      reverse: true
    })
    .setClassToggle("#web-apropos--anim---titre", "fade-in")
    .addTo(WebPage);  


  var ourScene = new ScrollMagic.Scene({
      duration: 100,
      triggerHook: 1,
      reverse: true
    })
    .setClassToggle("#web-accueil--anim---texte", "fade-in")
    .addTo(WebPage);


  var ourScene = new ScrollMagic.Scene({
      reverse: true,
      duration: 800,
      triggerElement: '#web-apropos--anim---texte'

    })
    .setClassToggle("#web-apropos--anim---texte", "fade-in")
    .addTo(WebPage);

  var ourScene = new ScrollMagic.Scene({
      reverse: true,
      duration: 800,
      triggerElement: '#web-apropos--anim---texte'
    })
    .setClassToggle("#web-apropos--anim---texte p", "fade-in")
    .addTo(WebPage);


  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#services'
    })
    .setClassToggle("#web-services--anim---texte", "fade-in")
    .addTo(WebPage);


  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#competences'
    })
    .setClassToggle("#carousel-inner", "fade-in")
    .addTo(WebPage);


  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#contact'
    })
    .setClassToggle("#web-contact--titre", "fade-in")
    .addTo(WebPage);

  //Appartition de la page
  new ScrollMagic.Scene({
      triggerHook: 'onEnter',
      reverse: false
    })
    .setClassToggle(".body-web", "fade-in")
    .addTo(WebPage)

});