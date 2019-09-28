$(document).ready(function () {
    var megaMan = $(".mega-man");
    var later = dothis
    var music = {
        select: "./assets/audio/01_Stage Select.mp3",
        chosen: "./assets/audio/02_Enemy Chosen.mp3",
        iceBeat: "./assets/audio/03 Ice Man.mp3",
        fireBeat: "./assets/audio/04 Fire Man.mp3",
        bombBeat: "./assets/audio/05 Bomb Man.mp3",
        gutsBeat: "./assets/audio/06 Guts Man.mp3",
        cutBeat: "./assets/audio/07 Cut Man.mp3",
        elecBeat: "./assets/audio/08 Elec Man.mp3",
        victory: "./assets/audio/10 Victory!.mp3",
        megaBeat: "./assets/audio/11 Dr. Wily's Castle.mp3",
        Beat: "./assets/audio/Epilogue.mp3",

    }

    var characters = {
        iceMan: {
            health: 28,
            weak: electric,
            noise: music.icebeat,
            attack: 2,
            weapon: [iceSlasher],
        },
        fireMan: {
            health: 28,
            weak: iceSlasher,
            noise: music.firebeat,
            attack: 2,
            weapon: [fireStorm],
        },
        bombMan: {
            health: 28,
            weak: fireStorm,
            noise: music.bombBeat,
            attack: 2,
            weapon: [hyperBomb],
        },
        gutsMan: {
            health: 28, 
            weak: hyperBomb,
            noise: music.bombBeat,
            attack: 2,
            weapon: [superArm],
        },
        cutMan: {
            health: 28,
            weak: superArm,
            noise: music.cutBeat,
            attack: 2,
            weapon: [rollingCutters],
        },
        elecMan: {
            health: 28, 
            weak: rollingCutters, 
            noise: music.elecBeat,
            attack: 2, 
            weapon: [thunderBeam],
        },
        copyMan: {
            health: 28,
            weak: fireStorm, 
            noise: music.megaBeat,
            attack: 1,
            weapon: [megaBuster],
        },

    }

    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", music.victory)



    // Theme Button
    $(".theme-button").on("click", function () {
        audioElement.play();
    });
    $(".pause-button").on("click", function () {
        audioElement.pause();
    });

    // Size Buttons
    $(".normal-button").on("click", function () {
        megaMan.animate({ height: "200px" });
    });
    $(".grow-button").on("click", function () {
        megaMan.animate({ left: 0, height: "1000px" });
    });
    $(".shrink-button").on("click", function () {
        megaMan.animate({ height: "100px" });
    });

    // Visibility Buttons
    $(".vis-button").on("click", function () {
        megaMan.animate({ opacity: "1" });
    });
    $(".invis-button").on("click", function () {
        megaMan.animate({ opacity: "0.05" });
    });

    // Move Buttons
    $(".up-button").on("click", function () {
        megaMan.animate({ top: "-=200px" }, "normal");
    });
    $(".down-button").on("click", function () {
        megaMan.animate({ top: "+=200px" }, "normal");
    });
    $(".left-button").on("click", function () {
        megaMan.animate({ left: "-=200px" }, "normal");
    });
    $(".right-button").on("click", function () {
        megaMan.animate({ left: "+=200px" }, "normal");
    });
    $(".pew-button").on("click", function () {
        megaMan.animate({ top: "50px", left: "80px" }, "fast");
    });

    // Keyboard move controls
    $(document).keyup(function (e) {
        switch (e.which) {

            // Move Buttons (Keyboard Down)
            case 40:
                megaMan.animate({ top: "+=200px" }, "normal");
                break;

            // Move Buttons (Keyboard Right)
            case 39:
                megaMan.animate({ left: "+=200px" }, "normal");
                break;

            // Move Buttons (Keyboard Up)
            case 38:
                megaMan.animate({ top: "-=200px" }, "normal");
                break;

            // Move Buttons (Keyboard Left)
            case 37:
                megaMan.animate({ left: "-=200px" }, "normal");
                break;

            default:
                break;
        }
    });
});
