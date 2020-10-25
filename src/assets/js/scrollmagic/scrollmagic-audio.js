$(document).ready(function() {

  var AudioPage = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerHook: '#accueil'
    })
    .setClassToggle(".audio-main--accueil---titre----anim-----h2", "fade-in")
    .addTo(AudioPage);

    new ScrollMagic.Scene({
      triggerHook: 'onEnter'
    })
    .setClassToggle("#audio-main--accueil---titre----anim-----h1", "fade-in")
    .addTo(AudioPage);

    new ScrollMagic.Scene({
      triggerElement: '#apropos'
    })
    .setClassToggle("#audio-apropos--box---header----box-----bloc", "fade-in")
    .addTo(AudioPage);

    new ScrollMagic.Scene({
      triggerElement: '#services'
    })
    .setClassToggle("#audio-main--page---right----services-----box", "fade-in")
    .addTo(AudioPage);
    
		new ScrollMagic.Scene({
			triggerElement: '#audio-main--page---right----services-----box'
		})
		.setClassToggle("#services-image-plan", "fade-in")
    .addTo(AudioPage);

    new ScrollMagic.Scene({
      triggerElement: '#audio-main',
      triggerHook: .7
    })
    .setClassToggle("#audio-services--box", "fade-in")
    .addTo(AudioPage),

    new ScrollMagic.Scene({
      triggerElement: '#competences'
    })
    .setClassToggle("#audio-competences--titre", "fade-in")
    .addTo(AudioPage);

    new ScrollMagic.Scene({ 
      triggerElement: '#competences'
    })
    .setClassToggle("#carousel-inner", "fade-in")
    .addTo(AudioPage);

      //Appartition de la page
  new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    reverse: false
  })
  .setClassToggle(".body-audio", "fade-in")
  .addTo(AudioPage)
});
