$(document).ready(function() {
    var navigationservices = new ScrollMagic.Controller({
    });
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#services-1',
        duration: '100%' 
    })
    .setClassToggle(".services-img-1", "active")
    .addTo(navigationservices);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#services-2',
        duration: '100%' 
    })
    .setClassToggle(".services-img-2", "active")
    .addTo(navigationservices);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#services-3',
        duration: '100%' 
    })
    .setClassToggle(".services-img-3", "active")
    .addTo(navigationservices);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#services-4',
        duration: '100%' 
    })
    .setClassToggle(".services-img-4", "active")
    .addTo(navigationservices);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#services-5',
        duration: '100%' 
    })
    .setClassToggle(".services-img-5", "active")
    .addTo(navigationservices);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#services-6',
        duration: '100%' 
    })
    .setClassToggle(".services-img-6", "active")
    .addTo(navigationservices);
});