$(document).ready(function() {
    var problem = [
        {
            question: "Who is the only person to win an Oscar for Best Director for the only movie he ever directed?",
            answerChoices: ["Bob Fosse", "Frank Borzage", "Leo McCarey", "Jerome Robbins"],
            correctAnswer: 3
        },
        {
            question: "Which two actors directed themselves in movies and won Oscars for Best Actor?",
            answerChoices: [
                "Al Pacino and Timothy Hutton",
                "Jack Nicholson and Kevin Spacey",
                "Laurence Olivier and Roberto Benigni",
                "Tom Hanks and Paul Newman"
            ],
            correctAnswer: 2
        },
        {
            question: "Who is the most nominated actor in Academy history?",
            answerChoices: [
                "Jack Nicholson",
                "Laurence Olivier",
                "SSpencer Tracy",
                "Paul Newman"
            ],
            correctAnswer: 0
        },
        {
            question: "What was most notable about the 96-minute long movie Russian Ark (2002) from director Aleksandr Sokurov?",
            answerChoices: [
                "It had no cuts.",
                "It was shot in 3D.",
                "The opening scene had an 18-minute tracking shot.",
                "There was no talking for the first 25 minutes."
            ],
            correctAnswer: 0
        },
        {
            question: "What was the name of the American actor who starred in Sergio Leone's low-budget spaghetti westerns in the 1960s?",
            answerChoices: [
                "Clint Eastwood",
                "Gary Cooper",
                "John Wayne",
                "Robert Redford"
            ],
            correctAnswer: 0
        },
    ]

    var numberOfQuestions = problem.length;

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

    $("#question-container").on("click", "#reset", resetQuiz);
    $("ul.nav").on("click", "#reset", resetQuiz);

    function updatePercentageComplete() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == problem[onQuestion].correctAnswer) {
            amountCorrect++;
        }

        var percentComplete = (amountCorrect * (100/numberOfQuestions));
        $(".progress-bar").css("width",percentComplete + "%");
        $(".lead").text("Progress " + percentComplete.toFixed(0) + "%");
    }

    function nextQuestion() {
        if (onQuestion < numberOfQuestions) {
            $(".question").remove();
            $("#answer-container input").remove();
            $("#answer-container span").remove();
            $("#question-container").html(generateQuestionHTML(onQuestion));
        }
        else {
            $(".question").remove();
            $("#answer-container input").remove();
            $("#answer-container span").remove();
            $("#submit").css("display", "none");
            $("#retry").css("display", "inline");
            if (amountCorrect == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+amountCorrect+' question.</span>'
                $("#answer-container").html(finalScore);
            }
            else {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+amountCorrect+' problem.</span>'
                $("#answer-container").html(finalScore);
            }
        }
    }

    function resetQuiz() {
        amountCorrect = 0;
        onQuestion = 0;
        $(".progress-bar").css("width", "0%");
        $(".lead").text("Progress 0%")
        $("#question-container").html(generateQuestionHTML(onQuestion));
    }

    function getQuestionString(questionNumber){
       return "Question #" + (questionNumber + 1) +": " + problem[questionNumber].question
    }

    function generateQuestionHTML(questionNumber) {
        return  '<span class="question">' +
                    getQuestionString(questionNumber) +
                '</span>' +
                '<br>' +
                '<div id="answer-container">' +
                    '<input type="radio" name="option" class="option" value="0">' +
                        '<span class="answer">' +
                            problem[questionNumber].answerChoices[0] +
                        '</span>' +
                    '</input>' +
                    '<br>'+
                    '<input type="radio" name="option" class="option" value="1">' +
                        '<span class="answer">' +
                            problem[questionNumber].answerChoices[1]+
                        '</span>' +
                    '</input>' +
                    '<br>' +
                    '<input type="radio" name="option" class="option" value="2">' +
                        '<span class="answer">'+
                            problem[questionNumber].answerChoices[2]+
                        '</span>' +
                    '</input>' +
                    '<br>' +
                    '<input type="radio" name="option" class="option" value="3">' +
                        '<span class="answer">' +
                            problem[questionNumber].answerChoices[3] +
                        '</span>' +
                    '</input>' +
                    '<br>' +
                '</div>' +
                '<div class="panel-footer" id="button-container">' +
                    '<input type="button" id="submit" value="Submit Answer">' +
                        '<span id="hint"></span>' +
                    '</input>' +
                    '<input type="button" id="reset" value="Try Again!" />' +
                '</div>';

    }



    resetQuiz();
});
