const swup = new Swup({
    plugins: [
        new SwupHeadPlugin(),

        new SwupOverlayTheme({
            color: '#ffffff'
        }),
        new SwupScriptsPlugin({
            head: true,
            body: true
        }),
        new SwupScrollPlugin(),


    ],
    doScrollingRightAway: false,
    animateScroll: true,
    scrollFriction: 0.3,
    scrollAcceleration: 0.04,
});

$(window).on("load", function () {

    //____________________________________________________________________________________ ACCUEIL

    function loadhome() {
        if (document.querySelector('.body-home')) {
            $("#script").html("<script src='Compil-js/Accueil.js' type='text/javascript'></script>")
        }
    }

    loadhome()

    function unloadhome() {
        if (document.querySelector('.body-home')) {
            $('#script').empty()
        }
    }

    swup.on('contentReplaced', loadhome);
    swup.on('willReplaceContent', unloadhome);
    //____________________________________________________________________________________AUDIO
    function loadaudio() {
        if (document.querySelector('.body-audio')) {
            $("#script").html("<script src='Compil-js/Audio.js' type='text/javascript'></script>")
        }
    }

    function unloadaudio() {
        if (document.querySelector('.body-audio')) {
            $('#script').empty()
        }
    }
    loadaudio()



    swup.on('contentReplaced', loadaudio);
    swup.on('willReplaceContent', unloadaudio);

    //____________________________________________________________________________________ WEB
    function loadweb() {
        if (document.querySelector('.body-web')) {
            $("#script").html("<script src='Compil-js/Web.js' type='text/javascript'></script>")
        }
    }

    function unloadweb() {
        if (document.querySelector('.body-web')) {
            $('#script').empty()
        }
    }
        loadweb()


    swup.on('contentReplaced', loadweb);
    swup.on('willReplaceContent', unloadweb);


    //____________________________________________________________________________________ IMAGE
    function loadimage() {
        if (document.querySelector('.body-image')) {
            $("#script").html("<script src='Compil-js/Image.js' type='text/javascript'></script>")
        }
    }

    function unloadimage() {
        if (document.querySelector('.body-image')) {
            $('#script').empty()
        }
    }

    loadimage()



    swup.on('contentReplaced', loadimage);
    swup.on('willReplaceContent', unloadimage);


    //____________________________________________________________________________________ VIDEO
    function loadvideo() {
        if (document.querySelector('.body-video')) {
            $("#script").html("<script src='Compil-js/Video.js' type='text/javascript'></script>")


        }
    }

    function unloadvideo() {
        if (document.querySelector('.body-video')) {
            $('#script').empty()

        }
    }

    loadvideo()

    swup.on('contentReplaced', loadvideo);
    swup.on('willReplaceContent', unloadvideo);



    //____________________________________________________________________________________ SERVICES
    function loadservices() {
        if (document.querySelector('.body-services')) {
            $("#script").html("<script src='/Compil-js/Services.js' type='text/javascript'></script>")

        }
    }

    function unloadservices() {
        if (document.querySelector('.body-services')) {
            $('#script').empty()

        }
    }

    loadservices()

    swup.on('contentReplaced', loadservices);
    swup.on('willReplaceContent', unloadservices);

    //____________________________________________________________________________________ LOGIN
    function loadlogin() {
        if (document.querySelector('.body-login')) {
            $("#script").html("")

        }
    }

    function unloadlogin() {
        if (document.querySelector('.body-login')) {
            $('#script').empty()

        }
    }

    loadlogin()

    swup.on('contentReplaced', loadlogin);
    swup.on('willReplaceContent', unloadlogin);

    //____________________________________________________________________________________ FREELANCE
    function loadfreelance() {
        if (document.querySelector('.body-freelance')) {
            $("#script").html("<script src='Compil-js/Freelance.js' type='text/javascript'></script>")

        }
    }
    function unloadfreelance() {
        if (document.querySelector('.body-freelance')) {
            $('#script').empty()

        }
    }

    loadfreelance()

    swup.on('contentReplaced', loadfreelance);
    swup.on('willReplaceContent', unloadfreelance);


    //____________________________________________________________________________________ ADMIN
    function loadfreelance() {
        if (document.querySelector('.body-admin')) {
            $("#script").html("<script src='Compil-js/Admin.js' type='text/javascript'></script>")

        }
    }
    function unloadfreelance() {
        if (document.querySelector('.body-admin')) {
            $('#script').empty()

        }
    }

    loadfreelance()

    swup.on('contentReplaced', loadfreelance);
    swup.on('willReplaceContent', unloadfreelance);


    //____________________________________________________________________________________ Monkees
    function loadMonkees() {
        if (document.querySelector('.body-monkees')) {
            $("#script").html("<script src='Compil-js/Monkees.js' type='text/javascript'></script>")            
        }
    }
    function unloadMonkees() {
        if (document.querySelector('.body-monkees')) {
            $('#script').empty()
        }
    }

    loadMonkees()

    swup.on('contentReplaced', loadMonkees);
    swup.on('willReplaceContent', unloadMonkees);

})