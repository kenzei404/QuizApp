let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Rick Ross",
        "right_answer": 3
    },
    {
        "question": "Was ist die Hauptfunktion von HTML?",
        "answer_1": "Datenbankverwaltung",
        "answer_2": "Textbearbeitung",
        "answer_3": "Strukturierung von Webseiten",
        "answer_4": "Grafikdesign",
        "right_answer": 3
    },
    {
        "question": "Was ist die richtige Erweiterung für eine HTML-Datei?",
        "answer_1": ".htl",
        "answer_2": ".web",
        "answer_3": ".html",
        "answer_4": ".htm",
        "right_answer": 3
    },
    {
        "question": "Was steht für CSS?",
        "answer_1": "Creative Style Sheets",
        "answer_2": "Cascading Style Sheets",
        "answer_3": "Computer Style Sheets",
        "answer_4": "Colorful Style Sheets",
        "right_answer": 2
    },
    {
        "question": "Was ist die richtige Syntax für eine CSS-Klasse?",
        "answer_1": ".myClass {color: red;}",
        "answer_2": "#myClass {color: red;}",
        "answer_3": "class.myClass {color: red;}",
        "answer_4": "myClass {color: red;}",
        "right_answer": 1
    },
    {
        "question": "Welche Methode wird verwendet, um Elemente in JavaScript zu finden?",
        "answer_1": "findElement()",
        "answer_2": "searchElement()",
        "answer_3": "selectElement()",
        "answer_4": "getElementById()",
        "right_answer": 4
    },
    {
        "question": "Was ist die richtige Syntax für eine 'for' Schleife in JavaScript?",
        "answer_1": "for (i = 0; i < 5; i++)",
        "answer_2": "for (i = 0; i <= 5; i++)",
        "answer_3": "for (i <= 5; i++)",
        "answer_4": "for (i < 5; i++)",
        "right_answer": 1
    }
];

let currentQuestion = 0;
let rights = 0;

function init() {
    document.getElementById('questionsLenght').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length ) { // 
        document.getElementById('questionBody').style = 'display: none'; 
        document.getElementById('endScreen').style = '';

        document.getElementById('sumOfQuestions').innerHTML = questions.length;
        document.getElementById('right').innerHTML = rights;
        document.getElementById('image').src = `img/win.png`;
    } else {
    let question = questions[currentQuestion];

    document.getElementById('actualQuestion').innerHTML = currentQuestion +1;

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion]
    let selectetQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question["right_answer"]}`;

    if (selectetQuestionNumber == question["right_answer"]) { // RIchtige Frage beantwortet
        console.log('Richtige Antwort!!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rights++;
    } else {
        console.log('Falsche Antwort!!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
}

function nextQuestion(){
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswer();
    showQuestion();
}

function resetAnswer(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}
