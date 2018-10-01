$(document).ready(function () {
    var timer = 30;
    var questionCount = 0;
    //Start screen displays name of trivia and start button to start game
    function startScreen() {
        var startButton = '<button type="button" class="btn btn-primary startButton">Start Game</button>';
        $(".gameArea").html(startButton);
    }

    //When start button is clicked page with question brought up
    function loadQuestion() {
        var questionScreen = '<p class="lead">Time Remaining: <span class="lead timer">30</span></p><p class="lead question">' + questions[questionCount].question + '</p><p class="answers"> A: ' + questions[questionCount].answers[0] + '</p><p class="answers"> B: ' + questions[questionCount].answers[1] + '</p><p class="answers"> C: ' + questions[questionCount].answers[2] + '</p><p class="answers"> D: ' + questions[questionCount].answers[3] + '</p>';
        $(".gameArea").html(questionScreen);
    }

    function setTimer() {
        var timerID = setInterval(seconds, 1000);
        function seconds() {
            if (timer === 0) {
                clearInterval(timerID);
            }
            if (timer > 0) {
                timer--;
            }
            $(".timer").html(timer);
        }
    }

    var questions = [
        {
            question: "What is the latin phrase for, 'In the year of the Cubs?'",
            answers: [
                "Eamus Catuli",
                "Anno Catulorum",  //correct
                "Pig latin dicta",
                "Lacus est optimus"
            ],
            correctAnswer: "Anno Catulorum"
        },
        {
            question: "How many home runs did Kris Bryant hit in the 2017 season?",
            answers: [
                "20",
                "23",
                "29", //correct
                "27"
            ],
            correctAnswer: "29"
        },
        {
            question: "What is Javier Baez's nickname?",
            answers: [
                "El Mago", //correct
                "El Rey",
                "El Jefe",
                "El Hombre"
            ],
            correctAnswer: "El Mago"
        },
        {
            question: "In what year did Joe Maddon become manager of the Chicago Cubs?",
            answers: [
                "2012",
                "2013",
                "2014",
                "2015" //correct
            ],
            correctAnswer: "2015"
        },
        {
            question: "Who was the winning pitcher of game 5 in 1908 World Series?",
            answers: [
                "Bill Donovan",
                "Frank Chance",
                "Orval Overall", //correct
                "Jon Lester"
            ],
            correctAnswer: "Orval Overall"
        }
    ];

    startScreen();
    $(".startButton").on("click", function () {
        loadQuestion();
        setTimer();
    });
});