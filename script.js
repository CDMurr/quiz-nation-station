var questions = [
    {questionText: "is JavaScript Fun?", answer: true},
    {questionText: "JavaScript is needed", answer: true}
]
var questionIndex = 0;
var answered = false
var answer = false
var downloadTimer

document.getElementById("quiz").addEventListener("click", function () {
    var timeleft = 60;

    var questionsEl = document.getElementById("questions")
    var timerEl = document.getElementById("timer")
    questionsEl.className = ""
     downloadTimer = setInterval(function () {
        timerEl.innerHTML = timeleft +
            " " + "seconds remaining";

        timeleft -= 1;
        if (timeleft <= -1) {
            clearInterval(downloadTimer);
            timerEl.innerHTML = "GAME OVER!"
        }
    }, 1000);
    setQuestion()
    console.log(timer);
});

document.getElementById("true").addEventListener("click", function (){
    if (!answered){
        answered = true
        answer = true 
        if (questions[questionIndex].answer === answer){
            alert("you are correct")
        } else { alert("wrong answer")}}   
})
document.getElementById("false").addEventListener("click", function (){
    if (!answered){
        answered = true
        answer = false
        if (questions[questionIndex].answer === answer){
            alert("you are correct")
        } else { alert("wrong answer")}}
})
function setQuestion(){
    var questionEl = document.getElementById("question")
    questionEl.innerText = questions[questionIndex].questionText
    if (questionIndex >= questions.length -1){
        
        return;
    } 
    questionIndex++
} 

document.getElementById("next").addEventListener("click", nextQuestion)
function nextQuestion(){
    if (answered){
        // check if answer was correct 
        answered = false
        setQuestion()
    } else {
        alert("not answered please choose an answer")
    }
}
// once start quiz is selcected update with question
// make questions load at random 
// update true & false buttons with if else statements
// if else statements should result in correct or incorrect
// change button color to prompt based on correct or incorrect answer
// correct answers should add points to total points
// incorrect answers result in lost of 3 seconds time 
