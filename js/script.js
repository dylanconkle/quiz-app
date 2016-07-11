$(document).ready(function() {
    var problem = [{
        question: "Question #1: Who is the only person to win an Oscar for Best Director for the only movie he ever directed?",
        answerChoices: ["Bob Fosse", "Frank Borzage", "Leo McCarey", "Jerome Robbins"],
        questionNumber: 0,
        correctAnswer: 3
        },
        {
        question: "Question #2: Which two actors directed themselves in movies and won Oscars for Best Actor?",
        answerChoices: ["Al Pacino and Timothy Hutton", "Jack Nicholson and Kevin Spacey", "Laurence Olivier and Roberto Benigni", "Tom Hanks and Paul Newman"],
        questionNumber: 1,
        correctAnswer: 2
        },
        {
        question: "Question #3: Who is the most nominated actor in Academy history?",
        answerChoices: ["Jack Nicholson", "Laurence Olivier", "Spencer Tracy", "Paul Newman"],
        questionNumber: 2,
        correctAnswer: 0
        },
        {
        question: "Question #4: What was most notable about the 96-minute long movie Russian Ark (2002) from director Aleksandr Sokurov?",
        answerChoices: ["It had no cuts.", "It was shot in 3D.", "The opening scene had an 18-minute tracking shot.", "There was no talking for the first 25 minutes."],
        questionNumber: 3,
        correctAnswer: 0
        },
        {
        question: "Question #5: What was the name of the American actor who starred in Sergio Leone's low-budget spaghetti westerns in the 1960s?",
        answerChoices: ["Clint Eastwood", "Gary Cooper", "John Wayne", "Robert Redford"],
        questionNumber: 4,
        correctAnswer: 0
        }]

    var amountCorrect = 0;
    var onQuestion = 0;

    $("#question-container").on("click", "#submit", function () {
        var answer = $("input[type='radio']:checked").val();
        if (answer == 0 || answer == 1 || answer == 2 || answer == 3) {
            updatePercentageComplete();
            onQuestion++;
            nextQuestion();
        } else {
            alert("Please make a choice!");
        }

    });

    $("#question-container").on("click", "#reset", function () {
        amountCorrect = 0;
        onQuestion = 0;
        $(".progress-bar").css("width", "0%");
        $(".lead").text("Progress 0%")
        var newQuestion = '<span class="question">'+problem[onQuestion].question+'</span><br><div id="answer-container"><input type="radio" name="option" class="option" value="0"><span class="answer">'+problem[onQuestion].answerChoices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+problem[onQuestion].answerChoices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+problem[onQuestion].answerChoices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+problem[onQuestion].answerChoices[3]+'</span><br></div><div class="panel-footer" id="button-container"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="reset" value="Try Again!"></div>';
        $("#question-container").html(newQuestion);
    });
    $("ul.nav").on("click", "#reset", function () {
        amountCorrect = 0;
        onQuestion = 0;
        $(".progress-bar").css("width", "0%");
        $(".lead").text("Progress 0%")
        var newQuestion = '<span class="question">'+problem[onQuestion].question+'</span><br><div id="answer-container"><input type="radio" name="option" class="option" value="0"><span class="answer">'+problem[onQuestion].answerChoices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+problem[onQuestion].answerChoices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+problem[onQuestion].answerChoices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+problem[onQuestion].answerChoices[3]+'</span><br></div><div class="panel-footer" id="button-container"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="reset" value="Try Again!"></div>';
        $("#question-container").html(newQuestion);
    });

    function updatePercentageComplete() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == problem[onQuestion].correctAnswer) {
            amountCorrect++;
        }
        if (amountCorrect == 1) {
            $(".progress-bar").css("width", "20%")
            $(".lead").text("Progress 20%")
        }
        else if (amountCorrect == 2) {
            $(".progress-bar").css("width", "40%")
            $(".lead").text("Progress 40%")
        }
        else if (amountCorrect == 3) {
            $(".progress-bar").css("width", "60%")
            $(".lead").text("Progress 60%")
        }
        else if (amountCorrect == 4) {
            $(".progress-bar").css("width", "80%")
            $(".lead").text("Progress 80%")
        }
        else if (amountCorrect == 5) {
            $(".progress-bar").css("width", "100%")
            $(".lead").text("Progress 100%")
        }
    }

    function nextQuestion() {
        if (onQuestion < 5) {
            $(".question").remove();
            $("#answer-container input").remove();
            $("#answer-container span").remove();
            var newQuestion = '<span class="question">'+problem[onQuestion].question+'</span><br><div id="answer-container"><input type="radio" name="option" class="option" value="0"><span class="answer">'+problem[onQuestion].answerChoices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+problem[onQuestion].answerChoices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+problem[onQuestion].answerChoices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+problem[onQuestion].answerChoices[3]+'</span><br></div><div class="panel-footer" id="button-container"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="reset" value="Try Again!"></div>';
            $("#question-container").html(newQuestion);
        }
        else {
            $(".question").remove();
            $("#answer-container input").remove();
            $("#answer-container span").remove();
            $("#submit").css("display", "none");
            $("#retry").css("display", "inline");
            if (amountCorrect == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+amountCorrect+' question.'
                $("#answer-container").html(finalScore);
            }
            else {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+amountCorrect+' problem.'
                $("#answer-container").html(finalScore);
            }
        }
    }
});
