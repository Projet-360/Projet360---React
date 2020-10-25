//Image fixes defillement Web
var controller = new ScrollMagic.Controller;
new ScrollMagic.Scene({
  triggerElement: ".web-main--page.web-apropos",
  triggerHook: "onEnter",
  duration: "100%"
})
.setPin(".web-main .web-main--page.web-accueil .web-main--page---left .web-main--page---left----box", {
  pushFollowers: !1
})

.addTo(controller), new ScrollMagic.Scene({
  triggerElement: ".web-main--page.web-apropos",
  triggerHook: "onEnter",
  duration: "200%"
})
.setPin(".web-main .web-main--page.web-apropos .web-main--page---left .web-main--page---left----box", {
  pushFollowers: !1
})

.addTo(controller), new ScrollMagic.Scene({
  triggerElement: ".web-main--page.web-services",
  triggerHook: "onEnter",
  duration: "200%"
})
.setPin(".web-main .web-main--page.web-services .web-main--page---left .web-main--page---left----box", {
  pushFollowers: !1
})

.addTo(controller), new ScrollMagic.Scene({
  triggerElement: ".web-main--page.web-competences",
  triggerHook: "onEnter",
  duration: "100%",
})
.setPin(".web-main .web-main--page.web-competences .web-main--page---left .web-main--page---left----box", {
  pushFollowers: !1
})

.addTo(controller), new ScrollMagic.Scene({
  triggerElement: ".web-main--page.web-contact",
  triggerHook: "onEnter",
  duration: "100%",
})
.setPin(".web-main .web-main--page.web-contact .web-main--page---left .web-main--page---left----box", {
  pushFollowers: !1
})



.addTo(controller);
