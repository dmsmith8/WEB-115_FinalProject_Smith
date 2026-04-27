let start = document.getElementById("start");
let novice = document.getElementById("novice");
let advanced = document.getElementById("advanced");
let noviceButton = document.getElementById("noviceButton");
let advancedButton = document.getElementById("advancedButton");
let novQuiz = document.getElementById("novQuiz");
let advQuiz = document.getElementById("advQuiz");

start.style.visibility = "visible";
novice.style.visibility = "hidden";
advanced.style.visibilty = "hidden";

noviceButton.addEventListener("click", function() {
    console.log("Novice selected");
    novice.style.visibility = "visible";
    start.style.visibility = "hidden";
    advanced.style.visibility = "hidden";
});
advancedButton.addEventListener("click", function() {
    console.log("Advanced slected");
    advanced.style.visibility = "visible";
    start.style.visibility = "hidden";
    novice.style.visibility = "hidden";
});

class novQuestion {
    constructor(quesNum, image) {
        this.quesNum = quesNum;
        this.image = image;
    }
}
class advQuestion {
    constructor(quesNum) {
        this.quesNum = quesNum;
    }
}
class novMC extends novQuestion {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
}
class advMC extends advQuestion {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
}
