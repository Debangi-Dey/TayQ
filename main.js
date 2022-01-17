let questions = [{
        question: "Time won't fly, it's like I'm paralyzed by it. I'd like to be my old self again, But I'm still trying to find it",
        options: [
            "Begin Again (Taylor's Version)",
            "Messeage in a Bottle (Taylor's Version)(From the Vault)",
            "AllToo Well (Taylor's Version)",
            "Nothing New(Taylor's Version)(From The Vault"
        ],
        answer: 2
    },
    {
        question: "I'd be just like Leo In Saint-Tropez",
        options: [
            "The Man",
            "Lover",
            "The Archer"
        ],
        answer: 0
    },
    {
        question: "Your touch brought forth an incandescent glow, Tarnished but so grand",
        options: [
        "The Lakes", 
        "Ivy",
        "Evermore"],
        answer: 1
    },
    {
        question: "Never be so polite, You forget your power. Never wield such power, You forget to be polite",
        options: [
        "Dorothea",
        "Tolerate It",
        "Coney Island",
        "Marjorie"],
        answer: 3
    },
    {
        question: "Your little eyelids flutter cause you're dreaming. So I tuck you in, turn on your favorite night light",
        options: [
        "Never Grow Up",
        "Speak Now",
        "Back To December",
        "Sparks Fly"],
        answer: 0
    },
    {
        question: "I'm perfectly fine, I live on my own. I made up on my mind, I'm better off bein' alone",
        options: [
        "So It Goes...",
        "Getaway Car",
        "King Of My Heart"],
        answer: 2
    }
];
/* ======== End ======== */

/* ==== True code ==== */
const progressBar = document.querySelector(".progress--bar");
const questionArea = document.querySelector(".questionArea");
const scoreArea = document.querySelector(".scoreArea");
const scoreText1 = document.querySelector(".scoreText1");
const scorePct = document.querySelector(".scorePct");

//initial data
let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

//reset event
document.querySelector(".scoreArea button").addEventListener("click", () => {
    currentQuestion = 0;
    correctAnswers = 0;
    showQuestion();
});

//Functions
function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let progress = Math.floor((currentQuestion / questions.length) * 100);
        progressBar.style.width = `${progress}%`;

        scoreArea.style.display = "none";
        questionArea.style.display = "block";

        document.querySelector(".question").innerHTML = q.question;

        let optionsHtml = "";

        for (let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span> ${
          parseInt(i) + 1
        }</span> ${q.options[i]}</div>`;
        }

        document.querySelector(".options").innerHTML = optionsHtml;

        document.querySelectorAll(".options .option").forEach((item) => {
            item.addEventListener("click", optionsClickEvent);
        });
    } else {
        finishQuiz();
    }
}

function optionsClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute("data-op"));

    if (questions[currentQuestion].answer === clickedOption) {
        correctAnswers++;
    }

    currentQuestion++;
    showQuestion();
}

function finishQuiz() {
    let points = Math.floor((correctAnswers / questions.length) * 100);

    if (points <= 30) {
        scoreText1.innerHTML = "oops, needs to improve";
        scorePct.style.color = "#f00000";
    } else if (points > 30 && points < 70) {
        scoreText1.innerHTML = "Good job";
        scorePct.style.color = "#ffc900";
    } else if (points > 30 && points >= 70) {
        scoreText1.innerHTML = "Ohh very good, congratulations!";
        scorePct.style.color = "#0d630d";
    }

    scorePct.innerHTML = `${points}% Correct`;
    document.querySelector(
        ".scoreText2"
    ).innerHTML = `Out of ${questions.length} you got it ${correctAnswers}`;

    scoreArea.style.display = "block";
    questionArea.style.display = "none";
    progressBar.style.width = "100%";
}