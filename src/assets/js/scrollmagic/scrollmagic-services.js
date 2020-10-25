$(function () {
    var Services = new ScrollMagic.Controller;
    new ScrollMagic.Scene({
        triggerElement: "#services",
        duration: "680%",
        triggerHook: .3
    })
    .setClassToggle("#services-navigation", "fade-in").addTo(Services),

    new ScrollMagic.Scene({
        triggerElement: "#services",
        triggerHook: .7
    })
    .setClassToggle("#services-navigation", "fade-in").addTo(Services)

    new ScrollMagic.Scene({
        triggerHook: 'onEnter',
    })
    .setClassToggle("#services-navigation-left", "fade-in").addTo(Services),

    new ScrollMagic.Scene({
        triggerHook: 'onEnter',
    })
    .setClassToggle("#services-navigation-left", "fade-in").addTo(Services)
    

});