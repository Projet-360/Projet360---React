
var AccueilMagicScroll = new ScrollMagic.Controller();
var AccueilTimelineMax = new TimelineMax();

// TRANSPORT DU TITRE
AccueilTimelineMax.add([
  TweenMax.from(".jsandco-accueil-js", 1, {
    scale: 1,
   }),  
  TweenMax.to(".jsandco-accueil-js", 1, {    
    scale: 160,
    ease:Linear.easeNone,
   })
]);

var AccueilTimelineMax = new ScrollMagic.Scene({
    duration: '300%'
  })
  .setTween(AccueilTimelineMax)
  .setPin(".jsandco-accueil-js")
  .addTo(AccueilMagicScroll);
// FIN DU TRANSPORT DU TITRE

// CHANGEMENT DE LA COULEUR DU BODY
var ourScene = new ScrollMagic.Scene({
    triggerElement: '.jsandco-apropos',
    triggerHook: .7,
})
.setClassToggle(".body-jsandco", "active")
.addTo(AccueilMagicScroll);
// FIN DU CHANGEMENT DE LA COULEUR DU BODY



var AproposMagicScroll = new ScrollMagic.Controller();
var AproposTimelineMax = new TimelineMax();

// TRANSPORT DU TITRE
AproposTimelineMax.add([
  TweenMax.from(".jsandco-apropos-js", 5, {
    scale: 0,
    y:-1000,
   }),  
  TweenMax.to(".jsandco-apropos-js", 5, {    
    scale: 350,
    y:-1000,
    ease:Linear.easeNone,
   })
]);

var AproposTimelineMax = new ScrollMagic.Scene({
    duration: '10000%'
  })
  .setTween(AproposTimelineMax)
  .setPin(".jsandco-apropos-js")
  .addTo(AproposMagicScroll);
// FIN DU TRANSPORT DU TITRE






