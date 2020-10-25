$(document).ready(function() {
    var navigation = new ScrollMagic.Controller({
    });
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#accueil',
        duration: '100%' 
    })
    .setClassToggle(".link-nav-accueil", "active")
    .addTo(navigation);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#apropos',
        duration: '100%' 
    })
    .setClassToggle(".link-nav-apropos", "active")
    .addTo(navigation);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#services',
        duration: '600%' 
    })
    .setClassToggle(".link-nav-services", "active")
    .addTo(navigation);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#competences',
        duration: '100%' 
    })
    .setClassToggle(".link-nav-competences", "active")
    .addTo(navigation);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#contact',
        duration: '100%' 
    })
    .setClassToggle(".link-nav-contact", "active")
    .addTo(navigation);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#accueil', 
    })
    .setClassToggle(".pre-nav", "active")
    .addTo(navigation);

    
});