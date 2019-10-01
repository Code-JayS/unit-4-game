var wins = 0;
console.log(wins);
var losses = 0;
console.log(losses);
var targetScore = 0;
console.log(targetScore);
var currentScore = 0;
console.log(currentScore);
var crystals = [];
const ruby = 0;
const emerald = 1;
const sapphire = 2;
const gold = 3;
const dark = 4;

var rubyNoise = new Audio("./assets/audio/OOT_SilverRupee1.wav");
var sapphireNoise = new Audio("./assets/audio/TP_Get_Rupee_Blue.wav");
var emeraldNoise = new Audio("./assets/audio/TP_Rupee_Land.wav");
var goldNoise = new Audio("./assets/audio/OOT_SilverRupee4.wav");
var darkCrystalNoise = new Audio("./assets/audio/01 - Trip Like I Do.mp3");


function crystalValues() {
    for (let i = 0; i < 5; i++) {
        let value = (Math.floor(Math.random() * 10) + 2);
        crystals[i] = value;
    }
    console.log(crystals)
}
function addValues(clickCrystal) {
    currentScore += clickCrystal;
    $("#playerScore").text("Collected " + currentScore);
    if (currentScore === targetScore) {
        wins++;
        newRound();
    }
    else if (currentScore > targetScore) {
        losses++;
        newRound();
    }
    else {
        console.log(currentScore)
    }
}
function secret() {
    if (wins === 3 && losses == 0) {
        var test = $('<button class = "btn btn-default"><img src="./assets/images/darkCrystal.png" width="70" height="120" /></button>').click(function () {
            addValues(crystals[dark]);
            darkCrystalNoise.play();
        });
        $("#crystalContainer").append('<div></div>').find("div:last").prepend(test);

    };
    //     $selectors = $('<button/>').addClass('btn btn-default').attr('id','darkCrystal').appendTo($crystalcontainer);
    //     $("#darkCrystal").append('<img src="./assets/images/darkCrystal.png" width="100" height="150" />');

    // }
}


function targetValue() {
    targetScore = (Math.floor(Math.random() * 101) + 19);
    console.log(targetScore);
}
function newRound() {
    crystals = [];
    currentScore = 0;
    crystalValues();
    targetValue();
    secret();
    $("#wins").text("WINS   " + wins);
    $("#losses").text("LOSSES " + losses);
    $("#targetScore").text("Collect this Many " + targetScore);

}
$("#ruby").on("click", function () {
    addValues(crystals[ruby]);
    rubyNoise.play()

});
$("#emerald").on("click", function () {
    addValues(crystals[emerald]);
    emeraldNoise.play();
});
$("#sapphire").on("click", function () {
    addValues(crystals[sapphire]);
    sapphireNoise.play();
});
$("#gold").on("click", function () {
    addValues(crystals[gold]);
    goldNoise.play();
});
$("#darkCrystal").on("click", function () {
    addValues(crystals[dark]);
    darkCrystalNoise.play();
});

newRound();
