var problem = {
    problemQuestion : 'If you want to start a new line in a certain place within a paragraph, you need to use which tag?',
    answerOne : '<p>',
    answerTwo : '<pb>',
    answerThree : '<br>',
    answerFour : '</p>'
};

function newGame() {
    $('.panel-title').text(problem.problemQuestion);
    $('.answer1').text(problem.answerOne);
    $('.answer2').text(problem.answerTwo);
    $('.answer3').text(problem.answerThree);
    $('.answer4').text(problem.answerFour);
}

$(document).ready(function () {
    newGame();
    console.log(problem)
});