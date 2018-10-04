$(document).ready(function () {
    var timer = 30;
    var questionCount = 0;
    var incorrect = 0;
    var questionScreen;
    var timerId;
    var userAnswer;
    var correct = 0;
    //Start screen displays name of trivia and start button to start game
    function startScreen() {
        var startButton = '<button type="button" class="btn btn-primary startButton">Start Game</button>';
        $(".gameArea").html(startButton);
    }

    //When start button is clicked page with question brought up
    function loadQuestion() {
        questionScreen = '<p class="lead">Time Remaining: <span class="lead timer">30</span></p><p class="lead question">' + questions[questionCount].question + '</p><button type="button" class="btn btn-primary btn-lg btn-block answers">' + questions[questionCount].answers[0] + '</button><button type="button" class="btn btn-primary btn-lg btn-block answers">' + questions[questionCount].answers[1] + '</button><button type="button" class="btn btn-primary btn-lg btn-block answers">' + questions[questionCount].answers[2] + '</button><button type="button" class="btn btn-primary btn-lg btn-block answers">' + questions[questionCount].answers[3] + '</button><div class="score"><p class="wins">Wins: ' + correct + '</p><p class="losses">Losses: ' + incorrect + '</p></div>';
        $(".gameArea").html(questionScreen);
    }

    function win() {
        correct++;
        questionScreen = '<p class="lead">Time Remaining: <span class="lead timer">' + timer + '</span></p><p class="lead question">You guessed correctly! The correct answer most certainly is ' + questions[questionCount].correctAnswer + '</p><div class="score"><p class="correct">Correct: ' + correct + '</p><p class="incorrect">Incorrect: ' + incorrect + '</p></div>';
        $(".gameArea").html(questionScreen);
        questionCount++;
        setTimeout(gamePause, 5000);
    }

    function loss() {
        incorrect++;
        questionScreen = '<p class="lead">Time Remaining: <span class="lead timer">' + timer + '</span></p><p class="lead question">Sorry, you picked the wrong answer. The correct answer is ' + questions[questionCount].correctAnswer + '</p><div class="score"><p class="correct">Correct: ' + correct + '</p><p class="incorrect">Incorrect: ' + incorrect + '</p></div>';
        $(".gameArea").html(questionScreen);
        questionCount++;
        setTimeout(gamePause, 5000);

    }

    $("body").on("click", ".answers", function (event) {
        userAnswer = $(this).text();
        console.log(userAnswer);
        if (userAnswer === questions[questionCount].correctAnswer) {
            clearInterval(timerId);
            win();
        } else {
            clearInterval(timerId);
            loss();
        }
    });

    function gameOver() {
        questionScreen = '<p class="lead">Time Remaining: <span class="lead timer">' + timer + '</span></p><p>Game Over! Here is how you did!</p><div class="score"><p class="correct">Correct: ' + correct + '</p><p class="incorrect">Incorrect: ' + incorrect + '</p></div>';
        $(".gameArea").html(questionScreen);
    }

    function timesUpLoss() {
        lossCount++;
        questionScreen = '<p class="lead">Time Remaining: <span class="lead timer">' + timer + '</span></p><p class="lead question">Time is up! The correct answer was ' + questions[questionCount].correctAnswer + '</p>';
        $(".gameArea").html(questionScreen);
        questionCount++;
    }


    function setTimer() {
        timerId = setInterval(seconds, 1000);
        function seconds() {
            if (timer === 0) {
                clearInterval(timerId);
                timesUpLoss();
            }
            if (timer > 0) {
                timer--;
            }
            $(".timer").html(timer);
        }
    }

    function gamePause() {
        if (questionCount === 5) {
            gameOver();
        } else {
            loadQuestion();
            setTimer();
        }

    }



    var questions = [
        {
            question: "What is the latin phrase for, 'In the year of the Cubs?'",
            answers: [
                "A: Eamus Catuli",
                "B: Anno Catulorum",  //correct
                "C: Pig latin dicta",
                "D: Lacus est optimus"
            ],
            correctAnswer: "B: Anno Catulorum"
        },
        {
            question: "How many home runs did Kris Bryant hit in the 2017 season?",
            answers: [
                "A: 20",
                "B: 23",
                "C: 27",
                "D: 29" //correct
            ],
            correctAnswer: "D: 29"
        },
        {
            question: "What is Javier Baez's nickname?",
            answers: [
                "A: El Mago", //correct
                "B: El Rey",
                "C: El Jefe",
                "D: El Hombre"
            ],
            correctAnswer: "A: El Mago"
        },
        {
            question: "In what year did Joe Maddon become manager of the Chicago Cubs?",
            answers: [
                "A: 2012",
                "B: 2013",
                "C: 2014",
                "D: 2015" //correct
            ],
            correctAnswer: "D: 2015"
        },
        {
            question: "Who was the winning pitcher of game 5 in 1908 World Series?",
            answers: [
                "A: Bill Donovan",
                "B: Frank Chance",
                "C: Orval Overall", //correct
                "D: Jon Lester"
            ],
            correctAnswer: "C: Orval Overall"
        }
    ];

    startScreen();
    $(".startButton").on("click", function () {
        loadQuestion();
        setTimer();
    });
}); 