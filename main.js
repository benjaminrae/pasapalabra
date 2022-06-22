// Variables

const preIntermediateQuestionSetOne = [
    {
        letter: "a",
        answer: "apple",
        status: 0,
        question: "With A, which fruit is small and usually red or green?",
    },
    {
        letter: "b",
        answer: "ball",
        status: 0,
        question: "With B, what is round and used in many sports?",
    },
    {
        letter: "c",
        answer: "cat",
        status: 0,
        question: "With C, what animal is small and makes a meow sound?",
    },
    {
        letter: "d",
        answer: "dice",
        status: 0,
        question: "With D, what do people throw when they play a board game?",
    },
    {
        letter: "e",
        answer: "eggs",
        status: 0,
        question: "With E, what food do we get from Chickens? (plural)",
    },
    {
        letter: "f",
        answer: "fish",
        status: 0,
        question: "With F, what animal swims in water?",
    },
    {
        letter: "g",
        answer: "go",
        status: 0,
        question: 'With G, what word is the opposite of "stop"?',
    },
    {
        letter: "h",
        answer: "hello",
        status: 0,
        question:
            "With H, what five letter word do people say when they meet someone?",
    },
    {
        letter: "i",
        answer: "ice cream",
        status: 0,
        question:
            "With I, what do people like to eat on a hot day? (two words)",
    },
    {
        letter: "j",
        answer: "jelly",
        status: 0,
        question: "With J, what dessert wobbles? Children like to eat it.",
    },
    {
        letter: "k",
        answer: "king",
        status: 0,
        question: "With K, the female is a queen. What is the male?",
    },
    {
        letter: "l",
        answer: "love",
        status: 0,
        question: "With L, what does a heart shape often mean?",
    },
    {
        letter: "m",
        answer: "monkey",
        status: 0,
        question: "With M, which animal swings in trees?",
    },
    {
        letter: "n",
        answer: "nine",
        status: 0,
        question: "With N, what is four plus five?",
    },
    {
        letter: "o",
        answer: "octopus",
        status: 0,
        question: "With O, which animal has eight tentacles?",
    },
    {
        letter: "p",
        answer: "piano",
        status: 0,
        question: "With P, what has black and white keys and plays music?",
    },
    {
        letter: "q",
        answer: "quiet",
        status: 0,
        question: "With Q, what word means no talking?",
    },
    {
        letter: "r",
        answer: "raining",
        status: 0,
        question: "With R, you should take an umbrella because it's ...",
    },
    {
        letter: "s",
        answer: "saturday",
        status: 0,
        question: "With S, what day comes after Friday?",
    },
    {
        letter: "t",
        answer: "trees",
        status: 0,
        question: "With T, what has leaves and grows outside? (plural)",
    },
    {
        letter: "u",
        answer: "ufos",
        status: 0,
        question:
            "With U, what do people sometimes see in the sky? Maybe there are aliens inside. (plural)",
    },
    {
        letter: "v",
        answer: "violin",
        status: 0,
        question: "With V, what looks like a small guitar and plays music?",
    },
    {
        letter: "w",
        answer: "watermelon",
        status: 0,
        question:
            "With W, which fruit is green on the outside, red on the inside and often very big?",
    },
    {
        letter: "x",
        answer: "xray",
        status: 0,
        question: "With X, what do doctors take to look at bones?",
    },
    {
        letter: "y",
        answer: "yellow",
        status: 0,
        question:
            'With Y, "We all live in a ... submarine, ... submarine, ... submarine."',
    },
    {
        letter: "z",
        answer: "zoo",
        status: 0,
        question: "With Z, where do people sometimes go to see animals?",
    },
];

const preIntermediateQuestionSetTwo = [
    {
        letter: "a",
        answer: "aeroplane",
        status: 0,
        question: "With A, what helps people fly in the sky?",
    },
    {
        letter: "b",
        answer: "breakfast",
        status: 0,
        question: "With B, what do people eat in the morning?",
    },
    {
        letter: "c",
        answer: "chair",
        status: 0,
        question: "With C, what do children sit on at school?",
    },
    {
        letter: "d",
        answer: "die",
        status: 0,
        question: "With D, what do all people do at the end of their life?",
    },
    {
        letter: "e",
        answer: "english",
        status: 0,
        question:
            "With E, the French are from France and the ... are from England.",
    },
    {
        letter: "f",
        answer: "fourteen",
        status: 0,
        question: "With F, what is seven plus seven?",
    },
    {
        letter: "g",
        answer: "giraffe",
        status: 0,
        question: "With G, which animal has a long neck?",
    },
    {
        letter: "h",
        answer: "happy",
        status: 0,
        question: "With H, if someone is smiling, how are they feeling?",
    },
    {
        letter: "i",
        answer: "ice skating",
        status: 0,
        question: "With I, what do you do at an ice rink? (two words)",
    },
    {
        letter: "j",
        answer: "jam",
        status: 0,
        question: "With J, what do people sometimes put on bread or toast?",
    },
    {
        letter: "k",
        answer: "kangaroo",
        status: 0,
        question: "With K, which animal hops and lives in Australia?",
    },
    {
        letter: "l",
        answer: "leg",
        status: 0,
        question: "With L, which body parts do you put in your jeans? (plural)",
    },
    {
        letter: "m",
        answer: "menu",
        status: 0,
        question: "With M, what shows the food and drinks in a restaurant?",
    },
    {
        letter: "n",
        answer: "no",
        status: 0,
        question: "With N, what do you say when you disagree?",
    },
    {
        letter: "o",
        answer: "orange",
        status: 0,
        question: "With O, which colour can people eat?",
    },
    {
        letter: "p",
        answer: "ping pong",
        status: 0,
        question:
            "With P, which has a small white ball and is played on a table? (2 words)",
    },
    {
        letter: "q",
        answer: "queen",
        status: 0,
        question: "With Q, the male is a king. What is the female?",
    },
    {
        letter: "r",
        answer: "rainbow",
        status: 0,
        question: "With R, what has seven colours and is sometimes in the sky?",
    },
    {
        letter: "s",
        answer: "school",
        status: 0,
        question: "With S, where do children go every morning?",
    },
    {
        letter: "t",
        answer: "television",
        status: 0,
        question:
            "With T, what do people watch in the living room? (use the full word)",
    },
    {
        letter: "u",
        answer: "umbrella",
        status: 0,
        question: "With U, what do people use when it's raining?",
    },
    {
        letter: "v",
        answer: "vase",
        status: 0,
        question: "With V, where do many people put flowers?",
    },
    {
        letter: "w",
        answer: "winter",
        status: 0,
        question: "With W, which season comes before spring?",
    },
    {
        letter: "x",
        answer: "xox",
        status: 0,
        question:
            "With X, what would you write if you wanted to end a text message with KISS-CUDDLE-KISS?",
    },
    {
        letter: "y",
        answer: "year",
        status: 0,
        question: "With Y, there are 29 days in February in a leap ...?",
    },
    {
        letter: "z",
        answer: "zero",
        status: 0,
        question: "With Z, which number is smaller than one?",
    },
];

const preIntermediateQuestionSetThree = [
    {
        letter: "a",
        answer: "alligator",
        status: 0,
        question: "With A, which animal is long and looks like a crocodile?",
    },
    {
        letter: "b",
        answer: "bicycle",
        status: 0,
        question:
            "With B, what has two wheels and can be used to go to school?",
    },
    {
        letter: "c",
        answer: "christmas day",
        status: 0,
        question: "With C, what do people call December 25th? (two words)",
    },
    {
        letter: "d",
        answer: "dentist",
        status: 0,
        question: "With D, what is the name of a tooth doctor?",
    },
    {
        letter: "e",
        answer: "eighteen",
        status: 0,
        question: "With E, what is nine plus nine?",
    },
    {
        letter: "f",
        answer: "fat",
        status: 0,
        question:
            "With F, what do you call the yellow part on the outside of your steak?",
    },
    {
        letter: "g",
        answer: "grandfather",
        status: 0,
        question: "With G, what can you call your father's father?",
    },
    {
        letter: "h",
        answer: "hot",
        status: 0,
        question: "With H, how is the weather in the summer?",
    },
    {
        letter: "i",
        answer: "in",
        status: 0,
        question: "With I, what is the opposite word to out?",
    },
    {
        letter: "j",
        answer: "jeans",
        status: 0,
        question:
            "With J, what do people sometimes wear on their legs? They are often blue.",
    },
    {
        letter: "k",
        answer: "kick",
        status: 0,
        question: "With K, what do football players do with a ball?",
    },
    {
        letter: "l",
        answer: "library",
        status: 0,
        question: "With L, where can you find lots of books?",
    },
    {
        letter: "m",
        answer: "moon",
        status: 0,
        question: "With M, what is in the sky at night?",
    },
    {
        letter: "n",
        answer: "nose",
        status: 0,
        question: "With N, what body part is in the middle of your face?",
    },
    {
        letter: "o",
        answer: "old",
        status: 0,
        question: "With O, a baby is young. What is a grandmother?",
    },
    {
        letter: "p",
        answer: "presents",
        status: 0,
        question:
            "With P, what do people give friends on their birthdays? (plural)",
    },
    {
        letter: "q",
        answer: "quiz",
        status: 0,
        question:
            "With Q, what has many questions? Sometimes you can find it in a book or on television.",
    },
    {
        letter: "r",
        answer: "rabbit",
        status: 0,
        question: "With R, which animal has long, floppy ears?",
    },
    {
        letter: "s",
        answer: "ship",
        status: 0,
        question: "With S, what is a big boat called?",
    },
    {
        letter: "t",
        answer: "talk",
        status: 0,
        question: "With T, what do people do on the telephone?",
    },
    {
        letter: "u",
        answer: "up",
        status: 0,
        question: "With U, what is the opposite word to down?",
    },
    {
        letter: "v",
        answer: "vegetables",
        status: 0,
        question:
            "With V, parents get angry when children don't eat their ... (plural)",
    },
    {
        letter: "w",
        answer: "watch",
        status: 0,
        question:
            "With W, what can you wear on your wrist to help you tell the time?",
    },
    {
        letter: "x",
        answer: "xylophone",
        status: 0,
        question: "With X, this is a musical instrument made of wood.",
    },
    {
        letter: "y",
        answer: "yesterday",
        status: 0,
        question:
            "With Y, the next day is tomorrow. What is the day before today?",
    },
    {
        letter: "z",
        answer: "zebra",
        status: 0,
        question:
            "With Z, what is the name of a black and white striped animal?",
    },
];
// Status 0 - unanswered
// Status 1 - answered correct
// Status 2 - answered incorrect
// Status 3 - passed

let questionList;

const pasapalabraResponses = [
    "Okay, we'll leave that one for later.",
    "Oh no, too difficult for you?",
    "Another one that you didn't know?",
    "You know that you're meant to answer these questions, right?",
    "Next time, try an easier game.",
    "This is getting boring now, give me an answer!",
];

const answerResponses = {
    correct: "Well done!",
    incorrect: "Oops, that wasn't right",
    pasapalabra: pasapalabraResponses,
};

const highScoreArray = [];
let seconds = 20; // Change this to change the time allowed
let pasapalabraCounter = 0; // Used to create different responses for various pasapalabras in a row
// Could create similar answers for correct and incorrect
// could add to answerResponses object

let displayMode = 0;
let currentQuestionIndex;
let intervalTimer; // This variable is for the setInterval in startTimer()
let currentPlayerName;

// DOM Elements

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

function startGame() {
    currentPlayerName = playerNameEl.value;
    questionList = selectQuestionList();
    introductionContainerEl.classList.add("hidden");
    questionsContainerEl.classList.remove("hidden");
    currentQuestionIndex = nextQuestionIndex();
    currentQuestionEl.innerHTML = getNextQuestion(currentQuestionIndex);
    startTimer();
}

function submitAnswer() {
    const userAnswer = userAnswerEl.value;
    let currentLetter;
    let currentLetterEl;
    switch (userAnswer.toLowerCase()) {
        case questionList[currentQuestionIndex].answer: // correct
            questionList[currentQuestionIndex].status = 1;
            currentLetter = `letter-${questionList[currentQuestionIndex].letter}`;
            currentLetterEl = document.getElementById(currentLetter);
            currentLetterEl.classList.add("correct");
            console.log(answerResponses.correct);
            pasapalabraCounter = 0;
            break;
        case "pasapalabra":
            questionList[currentQuestionIndex].status = 3;
            console.log(answerResponses.pasapalabra[pasapalabraCounter]);
            if (pasapalabraCounter < answerResponses.pasapalabra.length) {
                pasapalabraCounter++;
            }
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
            console.log(answerResponses.incorrect);
            pasapalabraCounter = 0;
            break;
    }
    userAnswerEl.value = "";
    currentQuestionIndex = nextQuestionIndex();
    currentQuestionEl.innerHTML = getNextQuestion(currentQuestionIndex);
}

function passAnswer() {
    questionList[currentQuestionIndex].status = 3;
    console.log(answerResponses.pasapalabra[pasapalabraCounter]);
    if (pasapalabraCounter < answerResponses.pasapalabra.length) {
        pasapalabraCounter++;
    }
    userAnswerEl.value = "";
    currentQuestionIndex = nextQuestionIndex();
    currentQuestionEl.innerHTML = getNextQuestion(currentQuestionIndex);
}

function startTimer() {
    const startTime = new Date().getTime();
    let currentTime = Date.now();
    const endTime = startTime + seconds * 1000;
    intervalTimer = setInterval(updateTimer, 1000, endTime);
    updateTimer(endTime);
}

function updateTimer(endTime) {
    const millisecondsLeft = endTime - Date.now();
    const secondsLeft = Math.round(millisecondsLeft / 1000);
    if (millisecondsLeft >= 0) {
        timerEl.innerHTML = secondsLeft;
    } else {
        timerEl.innerHTML = "0";
        clearInterval(intervalTimer);
        const scores = getScores();
        highScoreArray.push(
            new HighScore(currentPlayerName, scores[0], scores[1], scores[2])
        );
        currentScoreEl.innerHTML = `Well done, you got ${scores[0]} correct answers, ${scores[1]} incorrect answers, and you passed ${scores[2]} questions.`;
        updateHighScoreTable();
        resetQuestionStatuses();
        questionsContainerEl.classList.add("hidden");
        endContainerEl.classList.remove("hidden");
    }
}

function playAgain() {
    introductionContainerEl.classList.remove("hidden");
    endContainerEl.classList.add("hidden");
    resetLetterWheel();
}

function resetLetterWheel() {
    for (const question of questionList) {
        console.log(question);
        const currentLetter = `letter-${question.letter}`;
        const currentLetterEl = document.getElementById(currentLetter);
        currentLetterEl.classList.remove("correct", "incorrect");
    }
}

function updateHighScoreTable() {
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
    highScoreArray.forEach((highScore) => {
        tableRows += `<tr> 
            <td>${highScore.name}</td> 
            <td>${highScore.score}</td> 
            <td>${highScore.incorrectAnswers}</td> 
            <td>${highScore.passedAnswers}</td> 
        </tr>`;
    });
    const fullTable = tableHeader + tableRows;
    highScoresTableEl.innerHTML = fullTable;
}

function selectQuestionList() {
    let userSelection = selectQuestionListEl.value;
    if (userSelection === "") {
        userSelection = Math.floor(Math.random() * 3) + 1;
    }
    switch (Number(userSelection)) {
        case 1:
            return preIntermediateQuestionSetOne;
        case 2:
            return preIntermediateQuestionSetTwo;
        case 3:
            return preIntermediateQuestionSetThree;
        default:
            return preIntermediateQuestionSetOne;
    }
}

// This is the main function
function pasapalabra() {
    const userName = getUserName();
    questionList = selectQuestionList();
    gameIntroduction(userName);
    const startTime = new Date().getTime();
    let currentTime = Date.now();
    const endTime = startTime + seconds * 1000;
    // Use Date() to control time because while loop was causing setTimeout callback not to trigger due to busy event loop
    while (Date.now() <= endTime) {
        if (checkQuestionStatuses(questionList)) {
            askNextQuestion();
        }
    }
    timeOverEndGame(userName);
    checkPlayAgain();
}

function checkPlayAgain() {
    if (confirm("Do you want to play again?")) {
        return startAgain();
    } else {
        console.log(
            "Thanks for playing! Here are this sessions's high scores:"
        );
        displayHighScores(orderHighScores());
    }
}
function orderHighScores() {
    return highScoreArray.sort((a, b) => b.score - a.score);
}

function resetQuestionStatuses() {
    questionList.forEach((question) => {
        question.status = 0;
    });
}

function startAgain() {
    resetQuestionStatuses();
    return pasapalabra();
}

function displayHighScores(sortedHighScoreArray) {
    sortedHighScoreArray.forEach((highScore) => {
        console.log(`
        Name: ${highScore.name}
        Correct: ${highScore.score}
        Incorrect: ${highScore.incorrectAnswers}
        Passed: ${highScore.passedAnswers}
        `);
    });
}

function getScores() {
    // count the number of correct answers - status 1
    const statusArray = createQuestionStatusArray(questionList);
    const correct = statusArray.filter((status) => status === 1).length;
    const incorrect = statusArray.filter((status) => status === 2).length;
    const passed = statusArray.filter((status) => status === 3).length;
    return [correct, incorrect, passed];
}

function getUserName() {
    let input = prompt("What's your name?");
    if (input !== null && input !== undefined) {
        let userName = input;
        return userName;
    } else {
        return getUserName();
    }
}

function gameIntroduction(userName) {
    console.log(`Hey ${userName}, welcome to Pasapalabra! You will have ${seconds} seconds to answer as many questions as possible. Remember, you can write "pasapalabra" if you want to skip that question for now. At any time you can write "END" to end the game. However, if you do, your score won't be added to the high scores.
    Are you ready?
    Time starts now!`);
}

function getUserAnswer() {
    const userAnswer = prompt("What's the answer?");
    if (userAnswer !== null) {
        return userAnswer;
    } else {
        console.log("You need to write an answer!");
        return getUserAnswer();
    }
}

// doesn't work because it tries to loop all questions before updating timer using setTimeout
function loopQuestions() {
    for (const question of questionList) {
        if (question.status === 0 || question.status === 3) {
            console.log(question.question);
            const userAnswer = getUserAnswer();
            if (userAnswer.toLowerCase() === question.answer) {
                question.status = 1;
            } else if (userAnswer.toLowerCase() === "pasapalabra") {
                question.status = 3;
            } else if (userAnswer.toLowerCase() === "end") {
                return endGame();
            } else {
                question.status = 2;
            }
        }
    }
}

function createQuestionStatusArray(questionList) {
    const statusArray = [];
    for (const question of questionList) {
        statusArray.push(question.status);
    }
    return statusArray;
}

// returns TRUE if there are unanswered questions, else FALSE
function checkQuestionStatuses(questionList) {
    const statusArray = createQuestionStatusArray(questionList);
    if (statusArray.includes(0) || statusArray.includes(3)) {
        return true;
    } else {
        return false;
    }
}

function questionStatusArray() {
    let statusArray = [];
    questionList.forEach((question) => {
        statusArray.push(question.status);
    });
    return statusArray;
}

// Finds first unsanswered question
function nextQuestionIndex() {
    let statusArray = questionStatusArray();
    if (statusArray.indexOf(0) === -1 && statusArray.indexOf(3) === -1) {
        return questionsAnsweredEndGame();
    } else if (statusArray.indexOf(0) === -1) {
        return statusArray.indexOf(3);
    } else {
        return statusArray.indexOf(0);
    }
}

function getNextQuestion(questionIndex) {
    return questionList[questionIndex].question;
}
function askNextQuestion() {
    let questionIndex = nextQuestionIndex();
    console.log(questionList[questionIndex].question);
    const userAnswer = getUserAnswer();
    switch (userAnswer.toLowerCase()) {
        case questionList[questionIndex].answer: // correct
            questionList[questionIndex].status = 1;
            console.log(answerResponses.correct);
            pasapalabraCounter = 0;
            break;
        case "pasapalabra":
            questionList[questionIndex].status = 3;
            console.log(answerResponses.pasapalabra[pasapalabraCounter]);
            if (pasapalabraCounter < answerResponses.pasapalabra.length) {
                pasapalabraCounter++;
            }
            break;
        case "end":
            pasapalabraCounter = 0;
            return endGame();
        default:
            // incorrect
            questionList[questionIndex].status = 2;
            console.log(answerResponses.incorrect);
            pasapalabraCounter = 0;
            break;
    }
}

// Ends current game and prints scores, doesn't push them to highScoreArray
function endGame() {
    console.log("You have ended the game!");
    const scores = getScores();
    console.log(
        `Well done, you got ${scores[0]} correct answers, ${scores[1]} incorrect answers, and you passed ${scores[2]} questions but because you ended the game early, your scores won't be added to the high scores.`
    );
    return startAgain();
}

// When the timer ends, logs "Time's up!" to the console and pushes scores to highScoreArray
function timeOverEndGame(userName) {
    console.log("Time's up!");
    const scores = getScores();
    highScoreArray.push(
        new HighScore(userName, scores[0], scores[1], scores[2])
    );
    console.log(
        `Well done, ${userName}, you got ${scores[0]} correct answers, ${scores[1]} incorrect answers, and you passed ${scores[2]} questions.`
    );
}

// Ends the current game when all questions answered before the timer ends
function questionsAnsweredEndGame() {
    console.log("That was quick! The timer hasn't even finished yet!");
    const scores = getScores();
    highScoreArray.push(
        new HighScore(userName, scores[0], scores[1], scores[2])
    );
    console.log(
        `Well done, ${userName}, you got ${scores[0]} correct answers, ${scores[1]} incorrect answers, and you passed ${scores[2]} questions.`
    );
    return checkPlayAgain();
}

function toggleDisplay() {
    // display mode 0 = introduction
    // display mode 1 = questions
    // display mode 2 = end game
    switch (displayMode) {
        case 0:
            introductionContainerEl.classList.remove("hidden");
            questionsContainerEl.classList.add("hidden");
            displayMode = 1;
            break;
        case 1:
            questionsContainerEl.classList.remove("hidden");
            endContainerEl.classList.add("hidden");
            displayMode = 2;
            break;
        case 2:
            endContainerEl.classList.remove("hidden");
            introductionContainerEl.classList.add("hidden");
            displayMode = 0;
            break;
        default:
            break;
    }
}

// Keyboard inputs

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
            // needed focus not lost on answer input when using tab button
            event.preventDefault();
            passAnswer();
            break;
        default:
            break;
    }
});
