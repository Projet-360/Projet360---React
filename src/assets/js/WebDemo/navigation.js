

// DISPARITION DES FLECHE A LEUR SELECTION ET REAPARITION
$("li.up").click(function () {
    $(this).css({
        opacity: '0',
    });
    $("li.down, li.left, li.right, li.return").click(function () {
        $("li.up").css({
            opacity: '1',
        });
    });
});
$("li.down").click(function () {
    $(this).css({
        opacity: '0',
    });
    $("li.up, li.left, li.right, li.return").click(function () {
        $("li.down").css({
            opacity: '1',
        });
    });
});
$("li.left").click(function () {
    $(this).css({
        opacity: '0',
    });
    $("li.up, li.down, li.right, li.return").click(function () {
        $("li.left").css({
            opacity: '1',
        });
    });
});
$("li.right").click(function () {
    $(this).css({
        opacity: '0',
    });
    $("li.up, li.down, li.left, li.return").click(function () {
        $("li.right").css({
            opacity: '1',
        });
    });
});
// FIN DISPARITION DES FLECHE A LEUR SELECTION ET REAPARITION




//CHANGEMENTS DES COULEURS POUR SECTIONS
$("li.up").click(function () {
    $(".html-webdemo").css({
        backgroundColor: '#BF7C41',
    });
});
$("li.down").click(function () {
    $(".html-webdemo").css({
        backgroundColor: ' #5F8C4A',
    });
});
$("li.left").click(function () {
    $(".html-webdemo").css({
        backgroundColor: '#413F73',
    });
});
$("li.right").click(function () {
    $(".html-webdemo").css({
        backgroundColor: '#D9B589',
    });
});
$("li.return").click(function () {
    $(".html-webdemo").css({
        backgroundColor: 'rgb(169, 169, 169)',
    });
});
// FIN CHANGEMENTS DES COULEURS POUR SECTIONS


// PLACEMENT DE DEPART
$(".section-up").css({
    top: '-100vh',
    right: '0vw',
    bottom: '100vh',
    left: '0vw',
});

$(".section-down").css({
    top: '100vh',
    right: '0vw',
    bottom: '-100vh',
    left: '0vw',
});

$(".section-left").css({
    top: '0vh',
    right: '100vw',
    bottom: '0vh',
    left: '-100vw',
});

$(".section-right").css({
    top: '0vh',
    right: '-100vw',
    bottom: '0vh',
    left: '100vw',
});

$(".section-center").css({
    top: '0vh',
    right: '0vw',
    bottom: '0vh',
    left: '0vw',
});
// FIN PLACEMENT DE DEPART

// BUTTON RETURN
$("li.return").click(function () {
    $(".section-up").animate({
        top: '-100vh',
        right: '0vw',
        bottom: '100vh',
        left: '0vw',
    }, 900);
    $(".section-down").animate({
        top: '100vh',
        right: '0vw',
        bottom: '-100vh',
        left: '0vw',
    }, 900);
    $(".section-center").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $(".section-right").animate({
        top: '0vh',
        right: '-100vw',
        bottom: '0vh',
        left: '100vw',
    }, 900);
    $(".section-left").animate({
        top: '0vh',
        right: '100vw',
        bottom: '0vh',
        left: '-100vw',
    }, 900);
    $("li.return").animate({
        opacity: '0',
    }, 500);
});

// BUTTON HAUT
$("li.up").click(function () {
    $(".section-up").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $(".section-down").animate({
        top: '200vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $(".section-center").animate({
        top: '100vh',
        right: '0vw',
        bottom: '-100vh',
        left: '0vw',
    }, 900);
    $(".section-right").animate({
        top: '100vh',
        right: '100vw',
        bottom: '0vh',
        left: '100vw',
    }, 900);
    $(".section-left").animate({
        top: '100vh',
        bottom: '-100vh',
        right: '100vw',
        left: '-100vw',
    }, 900);
    $("li.return").animate({
        opacity: '1',
    }, 500);
});

// BUTTON BAS
$("li.down").click(function () {
    $(".section-up").animate({
        top: '-300vh',
        right: '0vw',
        bottom: '200vh',
        left: '0vw',
    }, 900);
    $(".section-down").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $(".section-center").animate({
        top: '-100vh',
        right: '0vw',
        bottom: '100vh',
        left: '0vw',
    }, 900);
    $(".section-right").animate({
        top: '-100vh',
        right: '-100vw',
        bottom: '100vh',
        left: '100vw',
    }, 900);
    $(".section-left").animate({
        top: '-100vh',
        bottom: '100vh',
        right: '100vw',
        left: '-100vw',
    }, 900);
    $("li.return").animate({
        opacity: '1',
    }, 500);
});

// BUTTON DROIT
$("li.right").click(function () {
    $(".section-up").animate({
        top: '-100vh',
        right: '100vw',
        bottom: '100vh',
        left: '-100vw',
    }, 900);
    $(".section-down").animate({
        top: '100vh',
        right: '100vw',
        bottom: '-100vh',
        left: '-100vw',
    }, 900);
    $(".section-center").animate({
        top: '0vh',
        right: '100vw',
        bottom: '0vh',
        left: '-100vw',
    }, 900);
    $(".section-right").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $(".section-left").animate({
        top: '0vh',
        bottom: '0vh',
        right: '200vw',
        left: '-300vw',
    }, 900);
    $("li.return").animate({
        opacity: '1',
    }, 500);
});

// BUTTON GAUCHE
$("li.left").click(function () {
    $(".section-up").animate({
        top: '-100vh',
        right: '-100vw',
        bottom: '100vh',
        left: '100vw',
    }, 900);
    $(".section-down").animate({
        top: '100vh',
        right: '-100vw',
        bottom: '-100vh',
        left: '100vw',
    }, 900);
    $(".section-center").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '100vw',
    }, 900);
    $(".section-right").animate({
        top: '0vh',
        right: '300vw',
        bottom: '0vh',
        left: '200vw',
    }, 900);
    $(".section-left").animate({
        top: '0vh',
        right: '0vw',
        bottom: '0vh',
        left: '0vw',
    }, 900);
    $("li.return").animate({
        opacity: '1',
    }, 500);
}); 







