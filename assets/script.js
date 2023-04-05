//link things to html
var startBtn = document.querySelector("#start-button");
var questionH2 = document.querySelector("#question");
var buttonA = document.querySelector("#button-a");
var buttonB = document.querySelector("#button-b");
var buttonC = document.querySelector("#button-c");
var buttonD = document.querySelector("#button-d");
var footerH3 = document.querySelector("#footer");
var liA = document.querySelector("#li-a");
var liB = document.querySelector("#li-b");
var liC = document.querySelector("#li-c");
var liD = document.querySelector("#li-d");
var scoreP = document.querySelector("#score");
var headerScore = document.querySelector("#score-h3");
var hiscoreH3 = document.querySelector("#hiscore");
var hiscore = document.querySelector("#hiscore-list");

//global variables
var submittedHiscore = "";
var secondsLeft = 1000;
var quizActive = false;
var countdownTimer = setInterval(function(){},1000);
headerScore.textContent = "";
scoreP.textContent = "";

function buttonReset(){
    buttonA.textContent = "";
    buttonB.textContent = "";
    buttonC.textContent = "";
    buttonD.textContent = "";
}

//When question answered correctly, next question
//Reduce time when question is answered incorrectly

function questionOne(){
    function clickRemove(){
        buttonA.removeEventListener('click', clickA);
        buttonB.removeEventListener('click', clickB);
        buttonC.removeEventListener('click', clickC);
        buttonD.removeEventListener('click', clickD);
    }
    questionH2.textContent = "Where is the css file linked in an html document?";
    buttonA.textContent = "<header>";
    buttonB.textContent = "<script>";
    buttonC.textContent = "<head>";
    buttonD.textContent = "<body>";
    document.querySelector("#button-a").addEventListener("click", clickA);
    function clickA(){
        footerH3.textContent = ("INCORRECT");
        liC.textContent = "<head>";
        secondsLeft = secondsLeft -10;
        buttonReset();
        clickRemove();
        setTimeout(() => {
            liC.textContent = "";
            footerH3.textContent = "";
            questionTwo();
            qOneActive = false;
        }, 1000);
    }
    document.querySelector("#button-b").addEventListener("click", clickB);
    function clickB(){
        footerH3.textContent = ("INCORRECT");
        liC.textContent = "<head>";
        secondsLeft = secondsLeft -10;
        buttonReset();
        clickRemove();
        setTimeout(() => {
            liC.textContent = "";
            footerH3.textContent = "";
            questionTwo();
            qOneActive = false;
        }, 1000);
    }
    document.querySelector("#button-c").addEventListener("click", clickC);
    function clickC(){
        footerH3.textContent = ("CORRECT");
        liC.textContent = "<head>";
        buttonReset();
        clickRemove();
        setTimeout(() => {
            liC.textContent = "";
            footerH3.textContent = "";
            questionTwo();
            qOneActive = false;
        }, 1000);
    }
    document.querySelector("#button-d").addEventListener("click", clickD);
    function clickD(){
        footerH3.textContent = ("INCORRECT");
        liC.textContent = "<head>";
        secondsLeft = secondsLeft -10;
        buttonReset();
        clickRemove();
        setTimeout(() => {
            liC.textContent = "";
            footerH3.textContent = "";
            questionTwo();
            qOneActive = false;
        }, 1000);
    }
}

function questionTwo(){
    function clickRemove(){
        buttonA.removeEventListener('click', clickA);
        buttonB.removeEventListener('click', clickB);
    }
    questionH2.textContent = "JavaScript is closely linked to 'Java'";
    buttonA.textContent = "True";
    buttonB.textContent = "False";
    document.querySelector("#button-a").addEventListener("click", clickA);
    function clickA(){
        footerH3.textContent = ("INCORRECT");
        liB.textContent = "False";
        secondsLeft = secondsLeft -10;
        buttonReset();
        clickRemove();
        setTimeout(() => {
            liB.textContent = "";
            footerH3.textContent = "";
            questionThree();
        }, 1000);
    }
    document.querySelector("#button-b").addEventListener("click", clickB);
    function clickB(){
        footerH3.textContent = ("CORRECT");
        liB.textContent = "False";
        buttonReset();
        clickRemove();
        setTimeout(() => {
            liB.textContent = "";
            footerH3.textContent = "";
            questionThree();
        }, 1000);
    }
}

function questionThree(){
    function clickRemove(){
        buttonA.removeEventListener('click', clickA);
        buttonB.removeEventListener('click', clickB);
        buttonC.removeEventListener('click', clickC);
        buttonD.removeEventListener('click', clickD);
    }
    questionH2.textContent = "What can NOT be used to create a string in JavaScript?";
    buttonA.textContent = "Single Quotes";
    buttonB.textContent = "Double Quotes";
    buttonC.textContent = "Brackets";
    buttonD.textContent = "Back Ticks";
    document.querySelector("#button-a").addEventListener("click", clickA);
    function clickA(){
        footerH3.textContent = ("INCORRECT");
        liC.textContent = "[Brackets]";
        secondsLeft = secondsLeft -10;
        buttonReset();
        setTimeout(() => {
            liC.textContent = "";
            footerH3.textContent = "";
            questionFour();
            clickRemove();
        }, 1000);
    }
    document.querySelector("#button-b").addEventListener("click", clickB);
    function clickB(){
        footerH3.textContent = ("INCORRECT");
        liC.textContent = "[Brackets]";
        secondsLeft = secondsLeft -10;
        buttonReset();
        setTimeout(() => {
            liC.textContent = "";
            footerH3.textContent = "";
            questionFour();
            clickRemove();
        }, 1000);
    }
    document.querySelector("#button-c").addEventListener("click", clickC);
    function clickC(){
        footerH3.textContent = ("CORRECT");
        liC.textContent = "[Brackets]";
        buttonReset();
        setTimeout(() => {
            liC.textContent = "";
            footerH3.textContent = "";
            questionFour();
            clickRemove();
        }, 1000);
    }
    document.querySelector("#button-d").addEventListener("click", clickD);
    function clickD(){
        footerH3.textContent = ("INCORRECT");
        liC.textContent = "[Brackets]";
        secondsLeft = secondsLeft -10;
        buttonReset();
        setTimeout(() => {
            liC.textContent = "";
            footerH3.textContent = "";
            questionFour();
            clickRemove();
        }, 1000);
    }
}

function questionFour(){
    function clickRemove(){
        buttonA.removeEventListener('click', clickA);
        buttonB.removeEventListener('click', clickB);
        buttonC.removeEventListener('click', clickC);
        buttonD.removeEventListener('click', clickD);
    }
    questionH2.textContent = "What does HTML stand for?";
    buttonA.textContent = "Hot Mail";
    buttonB.textContent = "Hyper Text Markdown Language";
    buttonC.textContent = "Hot To Make Lasagna";
    buttonD.textContent = "Hyper Text Markup Language";
    document.querySelector("#button-a").addEventListener("click", clickA);
    function clickA(){
        footerH3.textContent = ("INCORRECT");
        liD.textContent = "Hyper Text Markup Language";
        secondsLeft = secondsLeft -10;
        buttonReset();
        setTimeout(() => {
            liD.textContent = "";
            footerH3.textContent = "";
            questionFive();
            clickRemove();
        }, 1000);
    }
    document.querySelector("#button-b").addEventListener("click", clickB);
    function clickB(){
        footerH3.textContent = ("INCORRECT");
        liD.textContent = "Hyper Text Markup Language";
        secondsLeft = secondsLeft -10;
        buttonReset();
        setTimeout(() => {
            liD.textContent = "";
            footerH3.textContent = "";
            questionFive();
            clickRemove();
        }, 1000);
    }
    document.querySelector("#button-c").addEventListener("click", clickC);
    function clickC(){
        footerH3.textContent = ("INCORRECT");
        liD.textContent = "Hyper Text Markup Language";
        secondsLeft = secondsLeft -10;
        buttonReset();
        setTimeout(() => {
            liD.textContent = "";
            footerH3.textContent = "";
            questionFive();
            clickRemove();
        }, 1000);
    }
    document.querySelector("#button-d").addEventListener("click", clickD);
    function clickD(){
        footerH3.textContent = ("CORRECT");
        liD.textContent = "Hyper Text Markup Language";
        buttonReset();
        setTimeout(() => {
            liD.textContent = "";
            footerH3.textContent = "";
            questionFive();
            clickRemove();
        }, 1000);
    }
}

function questionFive(){
    function clickRemove(){
        buttonA.removeEventListener('click', clickA);
        buttonB.removeEventListener('click', clickB);
        buttonC.removeEventListener('click', clickC);
        buttonD.removeEventListener('click', clickD);
    }
    questionH2.textContent = "What does CSS stand for?";
    buttonA.textContent = "Cascading Style Sheets";
    buttonB.textContent = "Custom Style Sheets";
    buttonC.textContent = "Computer Style Sheets";
    buttonD.textContent = "Capital Strategic Spaghetti";
    document.querySelector("#button-a").addEventListener("click", clickA);
    function clickA(){
        footerH3.textContent = ("CORRECT");
       liDtextContent = "Cascading Style Sheets";
        buttonReset();
        clearInterval(countdownTimer);
        setTimeout(() => {
            liD.textContent = "";
            footerH3.textContent = "";
            clickRemove();
            quizActive = false;
            hiScoreBoard();
        }, 1000);
    }
    document.querySelector("#button-b").addEventListener("click", clickB);
    function clickB(){
        footerH3.textContent = ("INCORRECT");
        liD.textContent = "Cascading Style Sheets";
        secondsLeft = secondsLeft -10;
        buttonReset();
        clearInterval(countdownTimer);
        setTimeout(() => {
            liD.textContent = "";
            footerH3.textContent = "";
            clickRemove();
            quizActive = false;
            hiScoreBoard();
        }, 1000);
    }
    document.querySelector("#button-c").addEventListener("click", clickC);
    function clickC(){
        footerH3.textContent = ("INCORRECT");
        liD.textContent = "Cascading Style Sheets";
        secondsLeft = secondsLeft -10;
        buttonReset();
        clearInterval(countdownTimer);
        setTimeout(() => {
            liD.textContent = "";
            footerH3.textContent = "";
            clickRemove();
            quizActive = false;
            hiScoreBoard();
        }, 1000);
    }
    document.querySelector("#button-d").addEventListener("click", clickD);
    function clickD(){
        footerH3.textContent = ("CORRECT");
        liD.textContent = "Cascading Style Sheets";
        buttonReset();
        clearInterval(countdownTimer);
        setTimeout(() => {
            liD.textContent = "";
            footerH3.textContent = "";
            clickRemove();
            quizActive = false;
            hiScoreBoard();
        }, 1000);
    }
}
var highscoresList = ["ABC 123"];
function loadHiscores(){
  for (var i = 0; i < highscoresList.length; i++) {
    var singleScore = highscoresList[i];
    var li = document.createElement("li");
    li.textContent = singleScore;
    li.setAttribute("data-index", i);
    
    hiscore.appendChild(li);
  }
}

function hiScoreBoard(){
    questionH2.textContent = "HISCORES";
    hiscoreH3.textContent = "Your score: " + secondsLeft;
    buttonA.textContent = "Submit Hiscore";
    headerScore.textContent = "";
    scoreP.textContent = "";
    var hiscoreInitials = "";
    loadHiscores();
    document.querySelector("#button-a").addEventListener("click", submitHiscore);
    function submitHiscore(){
        var hiscorePrompt = prompt("Insert your initials.")
        hiscoreInitials = hiscorePrompt.substring(0, 3);
        submittedHiscore = hiscoreInitials.toUpperCase() + " " + secondsLeft;
        var li = document.createElement("li");
        li.textContent = submittedHiscore;
        li.setAttribute("data-index", highscoresList.length++);
        hiscore.appendChild(li);
        newScores();
        document.querySelector("#button-a").removeEventListener("click", submitHiscore);
        buttonA.textContent = "";
    }
}
function newScores(){
    highscoresList.push(submittedHiscore);
    storeHiscores()
}
//When start button is clicked, start quiz with timer
document.querySelector("#start-button").addEventListener("click", function(){
    questionOne();
    quizActive = true;
    startBtn.textContent = "";
    headerScore.textContent = "Score";
    scoreP.textContent = secondsLeft;
    countdownTimer = setInterval(function(){
        secondsLeft--;
        scoreP.textContent = secondsLeft;
    },1000);
});

//hiscore nonsense

function loadStorage() {
    var storedHiscores = JSON.parse(localStorage.getItem("highscoresList"));
    if (storedHiscores !== null) {
      highscoresList = storedHiscores;
  }
}
function storeHiscores() {
    localStorage.setItem("highscoresList", JSON.stringify(highscoresList));
}
loadStorage()