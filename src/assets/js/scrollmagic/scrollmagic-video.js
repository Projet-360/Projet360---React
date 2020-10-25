$(document).ready(function() {

  var videopage = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#apropos'
  })
  .setClassToggle("#video-apropos--box---header----box", "fade-in")
  .addTo(videopage);

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#services'
  })
  .setClassToggle("#video-main--page---right----services-----box", "fade-in")
  .addTo(videopage);

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#contact'
  })
  .setClassToggle("#video-formulaire--left", "fade-in")
  .addTo(videopage);

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#contact'
  })
  .setClassToggle("#video-contact--titre", "fade-in")
  .addTo(videopage);

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#contact'
  })
  .setClassToggle("#video-formulaire--right", "fade-in")
  .addTo(videopage);
  
  //Appartition de la page
  new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    reverse: false
  })
  .setClassToggle(".body-video", "fade-in")
  .addTo(videopage)


});
