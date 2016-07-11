var problem = {
    problemQuestion : 'If you want to start a new line in a certain place within a paragraph, you need to use which tag?',
    answerOne : '<<p>>',
    answerTwo : '<pb>',
    answerThree : '<br>',
    AnswerFour : '</p>'
};

function newGame() {
    $('.panel-title').text(problem.problemQuestion);
    $(".radio1 > .option1").text(problem.answerOne);
}

$(document).ready(function () {
    newGame();
    console.log(problem)
});