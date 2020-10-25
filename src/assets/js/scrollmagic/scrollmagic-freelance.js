$(document).ready(function() {

    var Accueil = new ScrollMagic.Controller();
    var Web = new ScrollMagic.Controller();
  
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-accueil'
      })
      .setClassToggle("#freelance-main-article-accueil-left-text-h1", "enter")
      .addTo(Accueil);

      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-accueil'
      })
      .setClassToggle("#freelance-main-article-accueil-left-text-h2", "enter")
      .addTo(Accueil);

      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-accueil'
      })
      .setClassToggle("#freelance-main-article-accueil-left-text-h3", "enter")
      .addTo(Accueil);

      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-accueil'
      })
      .setClassToggle("#freelance-main-article-accueil-right", "enter")
      .addTo(Accueil);

      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-accueil'
      })
      .setClassToggle("#freelance-main-article-accueil-left-text-link", "enter")
      .addTo(Accueil);

      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-accueil'
      })
      .setClassToggle("#freelance-main-article-accueil-left-text-link", "enter")
      .addTo(Accueil);








      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-web',
        triggerHook:0.8
      })
      .setClassToggle("#freelance-main-article-web-text-h1", "enter")
      .addTo(Web);
      
      
      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-web',
        triggerHook:0.8
      })
      .setClassToggle("#card1", "enter")
      .addTo(Web);
      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-web',
        triggerHook:0.8
      })
      .setClassToggle("#card2", "enter")
      .addTo(Web);
      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-web',
        triggerHook:0.8
      })
      .setClassToggle("#card3", "enter")
      .addTo(Web);

      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-web-text',
        triggerHook:0.8
      })
      .setClassToggle("#freelance-main-article-web-text", "enter")
      .addTo(Web);

      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-web-text',
        triggerHook:0.8
      })
      .setClassToggle("#freelance-main-article-web-text-h2", "enter")
      .addTo(Web);

      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-web-text',
        triggerHook:0.8
      })
      .setClassToggle("#freelance-main-article-web-text-p", "enter")
      .addTo(Web);
      
      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-web-text',
        triggerHook:0.8
      })
      .setClassToggle("#freelance-main-article-web-text-img", "enter")
      .addTo(Web);


      var ourScene = new ScrollMagic.Scene({
        triggerElement: '#freelance-main-article-web-text',
        triggerHook:0.8
      })
      .setClassToggle(".progress svg:nth-child(2) path", "enter")
      .addTo(Web);

      
      
  });
