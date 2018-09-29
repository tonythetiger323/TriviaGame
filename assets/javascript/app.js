$(document).ready(function () {
    //Start screen displays name of trivia and start button to start game
    function startScreen() {
        var startButton = '<button type="button" class="btn btn-primary startButton">Start Game</button>';
        $(".gameArea").html(startButton);
    }
    //When start button is clicked page with question brought up

    $(".startButton").on("click", function () {

    });

    var questions = [{
        questionOne: {
            question: "What is the latin phrase for, 'In the year of the Cubs?'",
            answers: [
                "Eamus Catuli",
                "Anno Catulorum",  //correct
                "Pig latin dicta",
                "Lacus est optimus"
            ]
        }
    }, {
        questionTwo: {
            question: "How many home runs did Kris Bryant hit in the 2017 season?",
            answers: [
                "20",
                "23",
                "29", //correct
                "27"
            ]
        }
    }, {
        questionThree: {
            question: "What is Javier Baez's nickname?",
            answers: [
                "El Mago", //correct
                "El Rey",
                "El Jefe",
                "El Hombre"
            ]
        }
    }, {
        questionFour: {
            question: "In what year did Joe Maddon become manager of the Chicago Cubs?",
            answers: [
                "2012",
                "2013",
                "2014",
                "2015" //correct
            ]
        }
    }, {
        questionFive: {
            question: "Who was the winning pitcher of game 5 in 1908 World Series?",
            answers: [
                "Bill Donovan",
                "Frank Chance",
                "Orval Overall", //correct
                "Jon Lester"
            ]
        }
    }
    ];

    startScreen();
});