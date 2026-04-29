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

start.style.visibility = "visible";
novice.style.visibility = "hidden";
advanced.style.visibilty = "hidden";
submit.style.visibility = "hidden";
newQuiz.style.visibility = "hidden";

submit.addEventListener("click", function() {
    submit.style.visibility = "hidden";
    newQuiz.style.visibility = "visible";
});
newQuiz.addEventListener("click", function() {
    start.style.visibility = "visible";
    novice.style.visibility = "hidden";
    advanced.style.visibilty = "hidden";
    submit.style.visibility = "hidden";
    newQuiz.style.visibility = "hidden";
});

class question {
    constructor(quesNum, image) {
        this.quesNum = quesNum;
        this.image = image;
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
        let randQues = Math.random() * 10;
        let newQues = document.createElement("p");
        let newQuesAns;
        if (randQues <= 2.5) {
            novice.appendChild(newQues);
            newQuesAns = new mc(true, false, false, false);
            newQues.id = i;
            newQues.textContent = questions.nov[0];
            console.log(newQues);
        } else if (randQues <= 5) {
            novice.appendChild(newQues.i);
            newQuesAns = new mc(false, true, false, false);
            newQues.id = i;
            newQues.textContent = questions.nov[1];
            console.log(newQues);
        } else if (randQues <= 7.5) {
            novice.appendChild(newQues.i);
            newQuesAns = new mc(false, false, true, false);
            newQues.id = i;
            newQues.textContent = questions.nov[2];
            console.log(newQues);
        } else if (randQues <= 10) {
            novice.appendChild(newQues.i);
            newQuesAns = new mc(false, false, false, true);
            newQues.id = i;
            newQues.textContent = questions.nov[3];
            console.log(newQues);
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
