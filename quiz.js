let start = document.getElementById("start");
let novice = document.getElementById("novice");
let advanced = document.getElementById("advanced");
let noviceButton = document.getElementById("noviceButton");
let advancedButton = document.getElementById("advancedButton");
let novQuiz = document.getElementById("novQuiz");
let advQuiz = document.getElementById("advQuiz");
let timer = document.getElementById("timer");
import * as questions from "./questions.js";
let questionCount;
let novDiv = document.getElementById("novDiv");
let correctCount = 0;
let quesAns0 = false;
let quesAns1 = false;
let quesAns2 = false;
let quesAns3 = false;
let scoreDisplay = document.getElementById("scoreDislay");
let score = document.getElementById("score");
let deleteScore = document.getElementById("deleteScore");

console.log(questions.nov)

window.addEventListener("load", displayTimer);

noviceButton.addEventListener("click", function() {
    console.log("Novice selected");
    novice.style.visibility = "visible";
    start.style.visibility = "hidden";
    advanced.style.visibility = "hidden";
    submit.style.visibility = "visible";
    questionCount = 0;
    getQuestion();
});
advancedButton.addEventListener("click", function() {
    console.log("Advanced slected");
    advanced.style.visibility = "visible";
    start.style.visibility = "hidden";
    novice.style.visibility = "hidden";
    submit.style.visibility = "visible";
    questionCount = 0;
    getQuestion();
});

let submit = document.createElement("input");
advanced.appendChild(submit);
novice.appendChild(submit);
submit.type = "button";
submit.value = "Submit";

let newQuiz = document.createElement("input");
advanced.appendChild(newQuiz);
novice.appendChild(newQuiz);
newQuiz.type = "button";
newQuiz.value = "New Quiz";
questionCount = 0;

start.style.visibility = "visible";
novice.style.visibility = "hidden";
advanced.style.visibilty = "hidden";
submit.style.visibility = "hidden";
newQuiz.style.visibility = "hidden";

submit.addEventListener("click", function() {
    submit.style.visibility = "hidden";
    newQuiz.style.visibility = "visible";

    document.getElementById("a0").disabled = true;
    document.getElementById("b0").disabled = true;
    document.getElementById("c0").disabled = true;
    document.getElementById("d0").disabled = true;

    document.getElementById("a1").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("c1").disabled = true;
    document.getElementById("d1").disabled = true;

    document.getElementById("a2").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("c2").disabled = true;
    document.getElementById("d2").disabled = true;

    document.getElementById("a3").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("c3").disabled = true;
    document.getElementById("d3").disabled = true;

    display();
});
newQuiz.addEventListener("click", function() {
    start.style.visibility = "visible";
    novice.style.visibility = "hidden";
    advanced.style.visibilty = "hidden";
    submit.style.visibility = "hidden";
    newQuiz.style.visibility = "hidden";
    novDiv.innerHTML = "";
    quesAns0 = false;
    quesAns1 = false;
    quesAns2 = false;
    quesAns3 = false;
});

class question {
    constructor(quesNum, image) {
        this.quesNum = quesNum;
        this.image = image;
        this.answered = false;
    }
}
class mc extends question {
    constructor(a, b, c, d) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
}
class sa extends question {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
}

function getQuestion() {
    questionCount = 0;
    for (let i = 0; i <= questionCount; i++) {
        questionCount = 3;
        let newQues = document.createElement("p");
        let newQuesAns;
        let quesDiv = document.createElement("div");
        correctCount = 0;
        if (quesAns0 === false) {

            quesAns0 = true;
            newQuesAns = new mc(true, false, false, false);            
            quesDiv.appendChild(newQues);
            newQues.id = i;
            newQues.textContent = "Question 1";
            console.log(newQues);
            quesDiv.id = "div" + i;
            novDiv.appendChild(quesDiv);
            newQuesAns.answered = true;
            
            let questA = document.createElement("input");
            questA.type = "radio";
            questA.id = "a" + i;
            questA.name = "question" + i;
            questA.value = questions.nov[0][0];
            let labelA = document.createElement("label");
            labelA.id = "l" + i;
            labelA.setAttribute("for", questA.id);
            labelA.innerHTML = questions.nov[0][0];
            labelA.appendChild(questA);
            quesDiv.appendChild(questA);
            console.log(questA);
            console.log(labelA);
            quesDiv.insertBefore(labelA, questA);
            questA.addEventListener("click", function() {
                correctCount++;
                console.log(correctCount);
            });

            let questB = document.createElement("input");
            questB.type = "radio";
            questB.id = "b" + i;
            questB.name = "question" + i;
            questB.value = questions.nov[0][1];
            let labelB = document.createElement("label");
            labelB.id = "l" + i;
            labelB.setAttribute("for", questB.id);
            labelB.innerHTML = questions.nov[0][1];
            labelB.appendChild(questB);
            quesDiv.appendChild(questB);
            console.log(questB);
            console.log(labelB);
            quesDiv.insertBefore(labelB, questB);

            let questC = document.createElement("input");
            questC.type = "radio";
            questC.id = "c" + i;
            questC.name = "question" + i;
            questC.value = questions.nov[0][2];
            let labelC = document.createElement("label");
            labelC.id = "l" + i;
            labelC.setAttribute("for", questC.id);
            labelC.innerHTML = questions.nov[0][2];
            labelC.appendChild(questC);
            quesDiv.appendChild(questC);
            console.log(questC);
            console.log(labelC);
            quesDiv.insertBefore(labelC, questC);

            let questD = document.createElement("input");
            questD.type = "radio";
            questD.id = "d" + i;
            questD.name = "question" + i;
            questD.value = questions.nov[0][3];
            let labelD = document.createElement("label");
            labelD.id = "l" + i;
            labelD.setAttribute("for", questD.id);
            labelD.innerHTML = questions.nov[0][3];
            labelD.appendChild(questD);
            quesDiv.appendChild(questD);
            console.log(questD);
            console.log(labelD);
            quesDiv.insertBefore(labelD, questD);

        } else if (quesAns1 === false) {

            quesAns1 = true;
            newQuesAns = new mc(true, false, false, false);            
            quesDiv.appendChild(newQues);
            newQues.id = i;
            newQues.textContent = "Question 2";
            console.log(newQues);
            quesDiv.id = "div" + i;
            novDiv.appendChild(quesDiv);
            newQuesAns.answered = true;

            let questA = document.createElement("input");
            questA.type = "radio";
            questA.id = "a" + i;
            questA.name = "question" + i;
            questA.value = questions.nov[1][0];
            let labelA = document.createElement("label");
            labelA.id = "l" + i;
            labelA.setAttribute("for", questA.id);
            labelA.appendChild(questA);
            labelA.innerHTML = questions.nov[1][0];
            quesDiv.appendChild(questA);
            console.log(questA);
            console.log(labelA);
            quesDiv.insertBefore(labelA, questA);

            let questB = document.createElement("input");
            questB.type = "radio";
            questB.id = "b" + i;
            questB.name = "question" + i;
            questB.value = questions.nov[1][1];
            let labelB = document.createElement("label");
            labelB.id = "l" + i;
            labelB.setAttribute("for", questB.id);
            labelB.innerHTML = questions.nov[1][1];
            labelB.appendChild(questB);
            quesDiv.appendChild(questB);
            console.log(questB);
            console.log(labelB);
            quesDiv.insertBefore(labelB, questB);
            questB.addEventListener("click", function() {
                correctCount++;
                console.log(correctCount);
            });

            let questC = document.createElement("input");
            questC.type = "radio";
            questC.id = "c" + i;
            questC.name = "question" + i;
            questC.value = questions.nov[1][2];
            let labelC = document.createElement("label");
            labelC.id = "l" + i;
            labelC.setAttribute("for", questC.id);
            labelC.innerHTML = questions.nov[1][2];
            labelC.appendChild(questC);
            quesDiv.appendChild(questC);
            console.log(questC);
            console.log(labelC);
            quesDiv.insertBefore(labelC, questC);

            let questD = document.createElement("input");
            questD.type = "radio";
            questD.id = "d" + i;
            questD.name = "question" + i;
            questD.value = questions.nov[1][3];
            let labelD = document.createElement("label");
            labelD.id = "l" + i;
            labelD.setAttribute("for", questD.id);
            labelD.innerHTML = questions.nov[1][3];
            labelD.appendChild(questD);
            quesDiv.appendChild(questD);
            console.log(questD);
            console.log(labelD);
            quesDiv.insertBefore(labelD, questD);

        } else if (quesAns2 === false) {

            quesAns2 = true;
            newQuesAns = new mc(true, false, false, false);            
            quesDiv.appendChild(newQues);
            newQues.id = i;
            newQues.textContent = "Question 3";
            console.log(newQues);
            quesDiv.id = "div" + i;
            novDiv.appendChild(quesDiv);
            newQuesAns.answered = true;

            let questA = document.createElement("input");
            questA.type = "radio";
            questA.id = "a" + i;
            questA.name = "question" + i;
            questA.value = questions.nov[2][0];
            let labelA = document.createElement("label");
            labelA.id = "l" + i;
            labelA.setAttribute("for", questA.id);
            labelA.appendChild(questA);
            labelA.innerHTML = questions.nov[2][0];
            quesDiv.appendChild(questA);
            console.log(questA);
            console.log(labelA);
            quesDiv.insertBefore(labelA, questA);

            let questB = document.createElement("input");
            questB.type = "radio";
            questB.id = "b" + i;
            questB.name = "question" + i;
            questB.value = questions.nov[2][1];
            let labelB = document.createElement("label");
            labelB.id = "l" + i;
            labelB.setAttribute("for", questB.id);
            labelB.innerHTML = questions.nov[2][1];
            labelB.appendChild(questB);
            quesDiv.appendChild(questB);
            console.log(questB);
            console.log(labelB);
            quesDiv.insertBefore(labelB, questB);

            let questC = document.createElement("input");
            questC.type = "radio";
            questC.id = "c" + i;
            questC.name = "question" + i;
            questC.value = questions.nov[2][2];
            let labelC = document.createElement("label");
            labelC.id = "l" + i;
            labelC.setAttribute("for", questC.id);
            labelC.innerHTML = questions.nov[2][2];
            labelC.appendChild(questC);
            quesDiv.appendChild(questC);
            console.log(questC);
            console.log(labelC);
            quesDiv.insertBefore(labelC, questC);
            questC.addEventListener("click", function() {
                correctCount++;
                console.log(correctCount);
            });

            let questD = document.createElement("input");
            questD.type = "radio";
            questD.id = "d" + i;
            questD.name = "question" + i;
            questD.value = questions.nov[2][3];
            let labelD = document.createElement("label");
            labelD.id = "l" + i;
            labelD.setAttribute("for", questD.id);
            labelD.innerHTML = questions.nov[2][3];
            labelD.appendChild(questD);
            quesDiv.appendChild(questD);
            console.log(questD);
            console.log(labelD);
            quesDiv.insertBefore(labelD, questD);

        } else if (quesAns3 === false) {
            quesAns3 = true;
            newQuesAns = new mc(true, false, false, false);            
            quesDiv.appendChild(newQues);
            newQues.id = i;
            newQues.textContent = "Question 4";
            console.log(newQues);
            quesDiv.id = "div" + i;
            novDiv.appendChild(quesDiv);
            newQuesAns.answered = true;

            let questA = document.createElement("input");
            questA.type = "radio";
            questA.id = "a" + i;
            questA.name = "question" + i;
            questA.value = questions.nov[3][0];
            let labelA = document.createElement("label");
            labelA.id = "l" + i;
            labelA.setAttribute("for", questA.id);
            labelA.appendChild(questA);
            labelA.innerHTML = questions.nov[3][0];
            quesDiv.appendChild(questA);
            console.log(questA);
            console.log(labelA);
            quesDiv.insertBefore(labelA, questA);

            let questB = document.createElement("input");
            questB.type = "radio";
            questB.id = "b" + i;
            questB.name = "question" + i;
            questB.value = questions.nov[3][1];
            let labelB = document.createElement("label");
            labelB.id = "l" + i;
            labelB.setAttribute("for", questB.id);
            labelB.innerHTML = questions.nov[3][1];
            labelB.appendChild(questB);
            quesDiv.appendChild(questB);
            console.log(questB);
            console.log(labelB);
            quesDiv.insertBefore(labelB, questB);

            let questC = document.createElement("input");
            questC.type = "radio";
            questC.id = "c" + i;
            questC.name = "question" + i;
            questC.value = questions.nov[3][2];
            let labelC = document.createElement("label");
            labelC.id = "l" + i;
            labelC.setAttribute("for", questC.id);
            labelC.innerHTML = questions.nov[3][2];
            labelC.appendChild(questC);
            quesDiv.appendChild(questC);
            console.log(questC);
            console.log(labelC);
            quesDiv.insertBefore(labelC, questC);

            let questD = document.createElement("input");
            questD.type = "radio";
            questD.id = "d" + i;
            questD.name = "question" + i;
            questD.value = questions.nov[3][3];
            let labelD = document.createElement("label");
            labelD.id = "l" + i;
            labelD.setAttribute("for", questD.id);
            labelD.innerHTML = questions.nov[3][3];
            labelD.appendChild(questD);
            quesDiv.appendChild(questD);
            console.log(questD);
            console.log(labelD);
            quesDiv.insertBefore(labelD, questD);
            questD.addEventListener("click", function() {
                correctCount++;
                console.log(correctCount);
            });
        }
    }
}

function displayTimer() {
    let timering;
    let timerDisplay = document.createElement("span");
    timer.appendChild(timerDisplay);
    timerDisplay.class = "digit";
    timerDisplay.id = "timerDisplay";

    let secondsCounter = 0;
    noviceButton.addEventListener("click", function () {
        timering = true;
        stopWatch();
        console.log("Timer started");
    });
    advancedButton.addEventListener("click", function () {
        timering = true;
        stopWatch();
        console.log("Timer started");
    });
    submit.addEventListener("click", function () {
        timering = false;
        console.log("Timer stopped");
    });
    newQuiz.addEventListener("click", function () {
        timering = false;
        secondsCounter = 0;
        document.getElementById("timerDisplay").innerHTML = secondsCounter;
        console.log("Timer reset");
    });
    function stopWatch() {
        if (timering) {
            secondsCounter++;
            document.getElementById("timerDisplay").innerHTML = secondsCounter;
            setTimeout(stopWatch, 1000)
        }
    }
}

let s = 0;
display();
function display() {
    s++;
    let scoreShow = {
    score: correctCount, time: "idk"
}
    let scoreJSON = JSON.stringify(scoreShow);
    localStorage.setItem("scoreCount" + s, scoreJSON);
    let show = localStorage.getItem("scoreCount" + s);
    let anotherVar = JSON.parse(show);
    score.innerHTML += anotherVar.score + "<br>";
}

deleteScore.addEventListener("click", function() {
    localStorage.clear();
    console.log("Score Deleted");
    s = 0;
    score.innerHTML = "";
});
