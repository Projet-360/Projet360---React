$(document).ready(function () {
  $(function () {
    var Home = new ScrollMagic.Controller;

    //Appartition du carré en mouvement et opacity WEB
    new ScrollMagic.Scene({
        triggerHook: 'onEnter',
        reverse: false
      })
      .setClassToggle("#home-web", "fade-in")
      .addTo(Home)

    //Appartition du carré en mouvement et opacity AUDIO
    new ScrollMagic.Scene({
        triggerHook: 'onEnter',
        reverse: false
      })
      .setClassToggle("#home-audio", "fade-in")
      .addTo(Home)

    //Appartition du carré en mouvement et opacity IMAGE
    new ScrollMagic.Scene({
        triggerHook: 'onEnter',
        reverse: false
      })
      .setClassToggle("#home-image", "fade-in")
      .addTo(Home)

    //Appartition du carré en mouvement et opacity VIDEO
    new ScrollMagic.Scene({
        triggerHook: 'onEnter',
        reverse: false
      })
      .setClassToggle("#home-video", "fade-in")
      .addTo(Home)

    //Appartition de la page
    new ScrollMagic.Scene({
        triggerHook: 'onEnter',
        reverse: false
      })
      .setClassToggle(".body-home", "fade-in")
      .addTo(Home)
  });
});