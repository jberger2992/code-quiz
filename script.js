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
var headerScore = document.querySelector("#score-h3")

var secondsLeft = 1000;
var quizActive = false;
var qOneActive = false;
var countdownTimer = setInterval(function(){},1000);
headerScore.textContent = "";
scoreP.textContent = "";

function buttonReset(){
    buttonA.textContent = "";
    buttonB.textContent = "";
    buttonC.textContent = "";
    buttonD.textContent = "";
}
// function clickRemove(){
//     buttonA.removeEventListener('click', clickA);
//     buttonB.removeEventListener('click', clickB);
//     buttonC.removeEventListener('click', clickC);
//     buttonD.removeEventListener('click', clickD);
// }

//TODO:Create general timer
                //    var countdownTimer = setInterval(function(){
                //             if(quizActive = true){
                //             secondsLeft--;
                //             scoreP.textContent = secondsLeft;
                //             }
                //         },1000);
//TODO:Create questions and answers
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

function questionThree(){
    function clickRemove(){
        buttonA.removeEventListener('click', clickA);
        buttonB.removeEventListener('click', clickB);
        buttonC.removeEventListener('click', clickC);
        buttonD.removeEventListener('click', clickD);
    }
    questionH2.textContent = "What can NOT be used to create a string in JavaScript?";
    buttonA.textContent = "'Single Quotes'";
    buttonB.textContent = '"Double Quotes"';
    buttonC.textContent = "[Brackets]";
    buttonD.textContent = "`Back Ticks`";
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
        liA.textContent = "Cascading Style Sheets";
        buttonReset();
        clearInterval(countdownTimer);
        setTimeout(() => {
            liA.textContent = "";
            footerH3.textContent = "";
            clickRemove();
            quizActive = false;
        }, 1000);
    }
    document.querySelector("#button-b").addEventListener("click", clickB);
    function clickB(){
        footerH3.textContent = ("INCORRECT");
        liA.textContent = "Cascading Style Sheets";
        secondsLeft = secondsLeft -10;
        buttonReset();
        clearInterval(countdownTimer);
        setTimeout(() => {
            liA.textContent = "";
            footerH3.textContent = "";
            clickRemove();
            quizActive = false;
        }, 1000);
    }
    document.querySelector("#button-c").addEventListener("click", clickC);
    function clickC(){
        footerH3.textContent = ("INCORRECT");
        liA.textContent = "Cascading Style Sheets";
        secondsLeft = secondsLeft -10;
        buttonReset();
        clearInterval(countdownTimer);
        setTimeout(() => {
            liA.textContent = "";
            footerH3.textContent = "";
            clickRemove();
            quizActive = false;
        }, 1000);
    }
    document.querySelector("#button-d").addEventListener("click", clickD);
    function clickD(){
        footerH3.textContent = ("CORRECT");
        liA.textContent = "Cascading Style Sheets";
        buttonReset();
        clearInterval(countdownTimer);
        setTimeout(() => {
            liA.textContent = "";
            footerH3.textContent = "";
            clickRemove();
            quizActive = false;
        }, 1000);
    }
}

//TODO:When start button is clicked, start quiz with timer
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
//TODO:When question answered correctly, next question
//TODO:Reduce time when question is answered incorrectly
//TODO:hiscore nonsense