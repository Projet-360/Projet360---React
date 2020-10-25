$(document).ready(function () {

  var ImagePage = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#apropos'
    })
    .setClassToggle("#image-apropos--box---header----box", "fade-in")
    .addTo(ImagePage);

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#services'
    })
    .setClassToggle("#image-main--page---right----services-----box", "fade-in")
    .addTo(ImagePage);

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#contact'
    })
    .setClassToggle("#image-contact--titre", "fade-in")
    .addTo(ImagePage);

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#contact'
    })
    .setClassToggle("#Image-formulaire--left", "fade-in")
    .addTo(ImagePage);

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#contact'
    })
    .setClassToggle("#Image-formulaire--right", "fade-in")
    .addTo(ImagePage);

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#contact'
    })
    .setClassToggle("#Image-formulaire--boutton", "fade-in")
    .addTo(ImagePage);
   

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#contact',
    triggerHook:1,
  })
  .setClassToggle("#menu-second--pills---img", "fade-in")
  .addTo(ImagePage);

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#competences'
    })
    .setClassToggle("#image-competences--box", "fade-in")
    .addTo(ImagePage);



  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#services-1'
    })
    .setClassToggle("#image-services--item---text-services-1", "fade-in")
    .addTo(ImagePage);

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#services-2'
    })
    .setClassToggle("#image-services--item---text-services-2", "fade-in")
    .addTo(ImagePage);

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#services-3'
    })
    .setClassToggle("#image-services--item---text-services-3", "fade-in")
    .addTo(ImagePage);

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#services-4'
    })
    .setClassToggle("#image-services--item---text-services-4", "fade-in")
    .addTo(ImagePage);

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#services-5'
    })
    .setClassToggle("#image-services--item---text-services-5", "fade-in")
    .addTo(ImagePage);

  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#services-6'
    })
    .setClassToggle("#image-services--item---text-services-6", "fade-in")
    .addTo(ImagePage);

          //Appartition de la page
  new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    reverse: false
  })
  .setClassToggle(".body-image", "fade-in")
  .addTo(ImagePage)

});