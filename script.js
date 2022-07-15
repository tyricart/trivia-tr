const questionSet = {
    "trivia": [
        {
            "question": "The capital of Florida is Miami.",
            "answer": false
        },
        {
            "question": "The capital of California is Sacramento.",
            "answer": true
        },
        {
            "question": "Albert Einstein is Magician",
            "answer": false
        },
        {
            "question": "The inventor of the first computer is Alan Turing.",
            "answer": true
        }, 
        {
            "question": "Apes cant laugh.",
            "answer": false
        },
        {
            "question": "The moon is just 50 percent of the mass of Earth.",
            "answer": false
        },
        {
            "question": "New York is nicknamed 'The Big Orange'",
            "answer": false
        },        {
            "question": "If you add the two numbers on the opposite sides of dice together, the answer is always 7",
            "answer": true
        },
        {
            "question": "Camels have three sets of eyelashes",
            "answer": true
        },
        {
            "question": "The letter H is between letters G and J on a keyboard",
            "answer": true
        },
    ]
}

const question = document.getElementById('question')

let playerScore = 0
let questionIndex = 0
let didReachLastQuestion = false
question.innerText = questionSet.trivia[questionIndex].question

function handleTrue() {
    const currentQuestionObject = questionSet.trivia[questionIndex]
    if (currentQuestionObject && currentQuestionObject.answer == true && didReachLastQuestion == false) {
        playerScore += 1
    }

    nextQuestion()
}

function handleFalse() {
    const currentQuestionObject = questionSet.trivia[questionIndex]
    if (currentQuestionObject && currentQuestionObject.answer == false && didReachLastQuestion == false) {
        playerScore += 1
    }

    nextQuestion()
}

function nextQuestion() {
    questionIndex += 1
    if (questionIndex >= questionSet.trivia.length) {
        didReachLastQuestion = true
        playerPercentage = (playerScore / questionSet.trivia.length) * 100
        const yourFinalScore = `Your score is ${playerScore} / ${questionSet.trivia.length}. You have a ${playerPercentage}% score.`
        question.innerText = yourFinalScore
        shouldHideAnswerButtons(true)
    } else {
        question.innerText = questionSet.trivia[questionIndex].question
    }
}

function replay() {
    shouldHideAnswerButtons(false)
    playerScore = 0
    questionIndex = 0
    didReachLastQuestion = false
    question.innerText = questionSet.trivia[questionIndex].question
}

function shouldHideAnswerButtons(flag) {
    const trueButton = document.getElementById('true-button')
    const falseButton = document.getElementById('false-button')
    const replayButton = document.getElementById('replay-button')

    if (flag == true) {
        replayButton.style.opacity = 1
        trueButton.style.opacity = 0
        falseButton.style.opacity = 0
    } else {
        replayButton.style.opacity = 0
        trueButton.style.opacity = 1
        falseButton.style.opacity = 1
    }
}