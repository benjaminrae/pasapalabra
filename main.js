import allQuestionLists from "./modules/questions.js";

// Variables

let questionList;

const pasapalabraResponses = [
    "🤨 Okay, we'll leave that one for later.",
    "🤔 Oh no, too difficult for you?",
    "😒 Another one that you didn't know?",
    "😫 You know that you're meant to answer these questions, right?",
    "😤 Next time, try an easier game.",
    "😡 This is getting boring now, give me an answer!",
];

const answerResponses = {
    correct: "👍 Well done!",
    incorrect: "👎 Oops, that wasn't right",
    pasapalabra: pasapalabraResponses,
};

const highScoreArray = [];
let seconds = 120; // Change this to change the time allowed
let pasapalabraCounter = 0; // Used to create different responses for various pasapalabras in a row
// Could create similar answers for correct and incorrect
// could add to answerResponses object

let displayMode = 0;
let currentQuestionIndex;
let intervalTimer; // This variable is for the setInterval in startTimer()
let currentPlayerName;

// DOM Elements

const startGameButton = document.getElementById("start-game");
const submitAnswerButton = document.getElementById("submit-answer");
const passAnswerButton = document.getElementById("pass-answer");
const playAgainButton = document.getElementById("play-again");
const currentQuestionEl = document.getElementById("current-question");
const introductionContainerEl = document.getElementById(
    "introduction-container"
);
const questionsContainerEl = document.getElementById("questions-container");
const endContainerEl = document.getElementById("end-container");
const userAnswerEl = document.getElementById("answer");
const timerEl = document.getElementById("countdown-timer");
const selectQuestionListEl = document.getElementById("question-list");
const playerNameEl = document.getElementById("name");
const highScoresEl = document.getElementById("high-scores");
const currentScoreEl = document.getElementById("current-score");
const highScoresTableEl = document.getElementById("high-scores-table");
const feedbackContainerEl = document.getElementById(
    "questions-container__feedback-container"
);

// Classes

class HighScore {
    constructor(name, score, incorrectAnswers, passedAnswers) {
        this._name = name;
        this._score = score;
        this._incorrectAnswers = incorrectAnswers;
        this._passedAnswers = passedAnswers;
    }
    get name() {
        return this._name;
    }
    get score() {
        return this._score;
    }
    get incorrectAnswers() {
        return this._incorrectAnswers;
    }
    get passedAnswers() {
        return this._passedAnswers;
    }
}

// pasapalabra();

// Functions

const startGame = () => {
    currentPlayerName = playerNameEl.value;
    questionList = selectQuestionList();
    toggleDisplay();
    userAnswerEl.focus();
    currentQuestionIndex = nextQuestionIndex();
    currentQuestionEl.innerHTML = getNextQuestion(currentQuestionIndex);
    startTimer();
};

const submitAnswer = () => {
    const userAnswer = userAnswerEl.value;
    let currentLetter;
    let currentLetterEl;
    switch (userAnswer.toLowerCase()) {
        case questionList[currentQuestionIndex].answer: // correct
            questionList[currentQuestionIndex].status = 1;
            currentLetter = `letter-${questionList[currentQuestionIndex].letter}`;
            currentLetterEl = document.getElementById(currentLetter);
            currentLetterEl.classList.add("correct");
            pasapalabraCounter = 0;
            feedbackContainerEl.innerHTML = answerResponses.correct;
            feedbackContainerEl.classList.remove("hidden");
            break;
        case "pasapalabra":
            questionList[currentQuestionIndex].status = 3;
            if (pasapalabraCounter < answerResponses.pasapalabra.length) {
                pasapalabraCounter++;
            }
            feedbackContainerEl.innerHTML =
                answerResponses.pasapalabra[pasapalabraCounter];
            feedbackContainerEl.classList.remove("hidden");

            break;
        case "end":
            pasapalabraCounter = 0;
            return endGame();
        default:
            // incorrect
            questionList[currentQuestionIndex].status = 2;
            currentLetter = `letter-${questionList[currentQuestionIndex].letter}`;
            currentLetterEl = document.getElementById(currentLetter);
            currentLetterEl.classList.add("incorrect");
            pasapalabraCounter = 0;
            feedbackContainerEl.innerHTML = answerResponses.incorrect;
            feedbackContainerEl.classList.remove("hidden");
            break;
    }
    userAnswerEl.value = "";
    currentQuestionIndex = nextQuestionIndex();
    currentQuestionEl.innerHTML = getNextQuestion(currentQuestionIndex);
};

const passAnswer = () => {
    questionList[currentQuestionIndex].status = 3;
    if (pasapalabraCounter < answerResponses.pasapalabra.length - 1) {
        pasapalabraCounter++;
    }
    userAnswerEl.value = "";
    feedbackContainerEl.innerHTML =
        answerResponses.pasapalabra[pasapalabraCounter];
    feedbackContainerEl.classList.remove("hidden");
    currentQuestionIndex = nextQuestionIndex();
    currentQuestionEl.innerHTML = getNextQuestion(currentQuestionIndex);
};

const startTimer = () => {
    const startTime = new Date().getTime();
    const endTime = startTime + seconds * 1000;
    intervalTimer = setInterval(updateTimer, 1000, endTime);
    updateTimer(endTime);
};

const updateTimer = (endTime) => {
    const millisecondsLeft = endTime - Date.now();
    const secondsLeft = Math.round(millisecondsLeft / 1000);
    if (millisecondsLeft >= 0) {
        timerEl.innerHTML = secondsLeft;
    } else {
        timerEl.innerHTML = "0";
        clearInterval(intervalTimer);
        endGame();
    }
};

const playAgain = () => {
    toggleDisplay();
    resetLetterWheel();
    feedbackContainerEl.classList.add("hidden");
};

const resetLetterWheel = () => {
    for (const question of questionList) {
        const currentLetter = `letter-${question.letter}`;
        const currentLetterEl = document.getElementById(currentLetter);
        currentLetterEl.classList.remove("correct", "incorrect");
    }
    timerEl.innerHTML = "120";
};

const updateHighScoreTable = () => {
    const sortedHighScores = orderHighScores();
    const tableHeader = `
    <tr>
        <th colspan="4">High Scores</th>
    </tr>
    <tr>
        <th>Player</th>
        <th>Correct</th>
        <th>Incorrect</th>
        <th>Passed</th>
    </tr>`;
    let tableRows = "";
    sortedHighScores.forEach((highScore) => {
        tableRows += `<tr> 
            <td>${highScore.name}</td> 
            <td>${highScore.score}</td> 
            <td>${highScore.incorrectAnswers}</td> 
            <td>${highScore.passedAnswers}</td> 
        </tr>`;
    });
    const fullTable = tableHeader + tableRows;
    highScoresTableEl.innerHTML = fullTable;
};

const selectQuestionList = () => {
    let userSelection = Number(selectQuestionListEl.value);
    if (userSelection === 0) {
        userSelection = Math.floor(Math.random() * allQuestionLists.length) + 1;
    }
    return allQuestionLists[userSelection - 1];
};

const orderHighScores = () => {
    return highScoreArray.sort((a, b) => b.score - a.score);
};

const resetQuestionStatuses = () => {
    questionList.forEach((question) => {
        question.status = 0;
    });
};

const getScores = () => {
    // count the number of correct answers - status 1
    const statusArray = createQuestionStatusArray(questionList);
    const correct = statusArray.filter((status) => status === 1).length;
    const incorrect = statusArray.filter((status) => status === 2).length;
    const passed = statusArray.filter((status) => status === 3).length;
    return [correct, incorrect, passed];
};

const getUserName = () => {
    let input = prompt("What's your name?");
    if (input !== null && input !== undefined) {
        let userName = input;
        return userName;
    } else {
        return getUserName();
    }
};

const createQuestionStatusArray = (questionList) => {
    const statusArray = [];
    for (const question of questionList) {
        statusArray.push(question.status);
    }
    return statusArray;
};

const questionStatusArray = () => {
    let statusArray = [];
    questionList.forEach((question) => {
        statusArray.push(question.status);
    });
    return statusArray;
};

const nextQuestionIndex = () => {
    let statusArray = questionStatusArray();
    if (statusArray.indexOf(0) === -1 && statusArray.indexOf(3) === -1) {
        questionsAnsweredEndGame();
    } else if (statusArray.indexOf(0) === -1) {
        return statusArray.indexOf(
            3,
            currentQuestionIndex < statusArray.length - 1 &&
                currentQuestionIndex + 1
        );
    } else {
        return statusArray.indexOf(0);
    }
};

const getNextQuestion = (questionIndex) => {
    return questionList[questionIndex].question;
};

const endGame = () => {
    const scores = getScores();
    highScoreArray.push(
        new HighScore(currentPlayerName, scores[0], scores[1], scores[2])
    );
    currentScoreEl.innerHTML = `Well done, you got ${scores[0]} correct answers, ${scores[1]} incorrect answers, and you passed ${scores[2]} questions.`;
    updateHighScoreTable();
    resetQuestionStatuses();
    toggleDisplay();
};

const questionsAnsweredEndGame = () => {
    clearInterval(intervalTimer);
    endGame();
};

const toggleDisplay = () => {
    // display mode 0 = introduction
    // display mode 1 = questions
    // display mode 2 = end game
    switch (displayMode) {
        case 0:
            introductionContainerEl.classList.add("hidden");
            questionsContainerEl.classList.remove("hidden");
            displayMode = 1;
            break;
        case 1:
            questionsContainerEl.classList.add("hidden");
            endContainerEl.classList.remove("hidden");
            displayMode = 2;
            break;
        case 2:
            endContainerEl.classList.add("hidden");
            introductionContainerEl.classList.remove("hidden");
            displayMode = 0;
            break;
        default:
            break;
    }
};

// Event Listeners / Keyboard inputs

startGameButton.addEventListener("click", (event) => {
    startGame();
});
submitAnswerButton.addEventListener("click", (event) => {
    submitAnswer();
});
passAnswerButton.addEventListener("click", (event) => {
    passAnswer();
});
playAgainButton.addEventListener("click", (event) => {
    playAgain();
});
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "Enter":
            if (
                questionsContainerEl.classList.contains("hidden") &&
                endContainerEl.classList.contains("hidden")
            ) {
                // on introduction screen
                startGame();
            } else if (
                introductionContainerEl.classList.contains("hidden") &&
                endContainerEl.classList.contains("hidden")
            ) {
                // on questions screen
                submitAnswer();
            } else {
                // on end game screen
                playAgain();
            }
            break;
        case "Tab":
            event.preventDefault();
            passAnswer();
            break;
        default:
            break;
    }
});
