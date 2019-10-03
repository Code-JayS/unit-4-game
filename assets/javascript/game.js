// global game variables 
var wins = 0;
var losses = 0;
var targetScore = 0;
var currentScore = 0;
//array for values of each crystal loaded during new round function
var crystals = [];
// position of index in crystals array for ease of reference in coding 
const ruby = 0;
const emerald = 1;
const sapphire = 2;
const gold = 3;
const dark = 0;
// audio files for each crystal
var rubyNoise = new Audio("./assets/audio/OOT_SilverRupee1.wav");
var sapphireNoise = new Audio("./assets/audio/TP_Get_Rupee_Blue.wav");
var emeraldNoise = new Audio("./assets/audio/TP_Rupee_Land.wav");
var goldNoise = new Audio("./assets/audio/OOT_SilverRupee4.wav");
var darkCrystalNoise = new Audio("./assets/audio/01 - Trip Like I Do.mp3");
var isEven = true;

function crystalValues() {
    //used to test logic for changing value if all array values are even. commented out as no longer needed.
    // for( let i=0; i < 4; i++) {
    //     let value = i*2;
    //     crystals[i]= value;
    //     console.log(crystals)
    // }

    //creates random number for crystal values
    for (let i = 0; i < 4; i++) {
        let value = (Math.floor(Math.random() * 11) + 1);
        crystals[i] = value;
        console.log(crystals)
    }

    //checks if all number in array are even
    isEven = true;
    crystals.every(function (j) {
        if (j % 2 !== 0) {
            isEven = false;
        }

    });
    //changes value of index 0 in crytals array if all are even to ensure playabilty on odd target score. 
    if (isEven === true) {
        crystals[0] += 1
        console.log(crystals)
    }
    console.log(crystals)
}

// add array value to the current score when  button is clicked by user 
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
//if user wins the first three times displays functional easter egg crystal.
function eaterEgg() {
    if (wins === 3 && losses === 0) {
        var egg = $('<button class = "btn btn-default"><img src="./assets/images/darkCrystal.png" width="70" height="120" /></button>').click(function () {
            addValues(crystals[dark] + 10);
            darkCrystalNoise.play();
        });
        $("#crystalContainer").append('<div></div>').find("div:last").prepend(egg);

    };
   
}

// sets value of the target score
function targetValue() {
    targetScore = (Math.floor(Math.random() * 101) + 19);
    console.log(targetScore);
}

// fires at first run and on win/loss conditions to revalue all crystals and target score updates dom and checks if easterEgg conditions are met. 
function newRound() {
    crystals = [];
    currentScore = 0;
    crystalValues();
    targetValue();
    eaterEgg();
    $("#wins").text("WINS   " + wins);
    $("#losses").text("LOSSES " + losses);
    $("#targetScore").text("Collect this Many " + targetScore);

}

// allows user to interact with buttons on page and plays sound when button is clicked
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
// commented out due to dynamic creation of this crystal and code no longer needed
// $("#darkCrystal").on("click", function () {
//     addValues(crystals[dark]);
//     darkCrystalNoise.play();
// });

newRound();
