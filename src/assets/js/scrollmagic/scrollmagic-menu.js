$(function () {
    var e = new ScrollMagic.Controller;
    new ScrollMagic.Scene({
        triggerElement: "main",
        duration: "1000000%",
        triggerHook: .3
    }).setClassToggle("header", "fade-in").addTo(e), new ScrollMagic.Scene({
        triggerElement: "#main",
        triggerHook: .7
    }).setClassToggle("header", "fade-in").addTo(e)
});