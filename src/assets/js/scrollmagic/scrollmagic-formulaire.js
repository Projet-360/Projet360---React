$(document).ready(function() {

  var formulaire = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#contact'
    })
    .setClassToggle("#contact--titre", "fade-in")

    .addTo(formulaire);

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#contact'
    })
    .setClassToggle("#formulaire--left", "fade-in")

    .addTo(formulaire);

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#contact'
    })
    .setClassToggle("#formulaire--right", "fade-in")

    .addTo(formulaire);

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#contact'
    })
    .setClassToggle("#formulaire--boutton", "fade-in")

    .addTo(formulaire);

});
