(function() {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit-btn');

    const myQuestions = [
        {
            question: "Қазақ хандығының негізін қалаған хандар?",
            answers: {
                a: "Әбілқайыр мен Барақ",
                b: "Керей мен Жәнібек",
                c: "Қасым мен Хақназар"
            },
            correctAnswer: "b"
        },
        {
            question: "Қазақ хандығы қай ғасырда құрылды?",
            answers: {
                a: "XIV ғасыр",
                b: "XV ғасыр",
                c: "XVI ғасыр"
            },
            correctAnswer: "b"
        },
        {
            question: "Мұхаммед Хайдар Дулатидің еңбегінде Қазақ хандығының құрылған жері қалай аталады?",
            answers: {
                a: "Сарайшық",
                b: "Сығанақ",
                c: "Шу бойы мен Қозыбасы"
            },
            correctAnswer: "c"
        },
        {
            question: "Қасым ханның билік еткен жылдары:",
            answers: {
                a: "1511-1521 жж.",
                b: "1480-1511 жж.",
                c: "1538-1580 жж."
            },
            correctAnswer: "a"
        },
        {
            question: "“Қасқа жол” заңдар жинағы қай ханның есімімен байланысты?",
            answers: {
                a: "Есім хан",
                b: "Тәуке хан",
                c: "Қасым хан"
            },
            correctAnswer: "c"
        },
        {
            question: "Қазақ хандығын 42 жыл билеген хан:",
            answers: {
                a: "Хақназар хан",
                b: "Тәуке хан",
                c: "Жәнібек хан"
            },
            correctAnswer: "a"
        },
        {
            question: "Ноғай Ордасының ыдырауын пайдаланып, қазақ жерлерін біріктірген хан?",
            answers: {
                a: "Қасым хан",
                b: "Хақназар хан",
                c: "Есім хан"
            },
            correctAnswer: "b"
        },
        {
            question: "“Еңсегей бойлы ер Есім” атанған хан:",
            answers: {
                a: "Тәуекел хан",
                b: "Жәңгір хан",
                c: "Есім хан"
            },
            correctAnswer: "c"
        },
        {
            question: "Есім ханның “Ескі жолы” заңы қай ғасырда қабылданды?",
            answers: {
                a: "XV ғасыр",
                b: "XVI ғасыр",
                c: "XVII ғасыр"
            },
            correctAnswer: "c"
        },
        {
            question: "Ташкентті билеген Тұрсын ханмен күрес жүргізген қазақ ханы:",
            answers: {
                a: "Хақназар",
                b: "Есім",
                c: "Тәуке"
            },
            correctAnswer: "b"
        },
        {
            question: "Қазақ хандығының “алтын ғасыры” қай ханның билігімен байланысты?",
            answers: {
                a: "Қасым хан",
                b: "Тәуке хан",
                c: "Абылай хан"
            },
            correctAnswer: "b"
        },
        {
            question: "“Жеті Жарғы” заңдар жинағын қабылдаған хан:",
            answers: {
                a: "Есім хан",
                b: "Тәуке хан",
                c: "Хақназар хан"
            },
            correctAnswer: "b"
        },
        {
            question: "Тәуке ханның билік еткен жылдары:",
            answers: {
                a: "1598-1628 жж.",
                b: "1680-1718 жж.",
                c: "1538-1580 жж."
            },
            correctAnswer: "b"
        },
        {
            question: "XVI-XVII ғасырлардағы қазақ қоғамындағы ақсүйектерге кімдер жатты?",
            answers: {
                a: "Билер мен батырлар",
                b: "Төрелер мен қожалар",
                c: "Егіншілер мен қолөнершілер"
            },
            correctAnswer: "b"
        },
        {
            question: "Қазақ хандығының негізгі шаруашылығы:",
            answers: {
                a: "Егіншілік",
                b: "Көшпелі мал шаруашылығы",
                c: "Балық аулау"
            },
            correctAnswer: "b"
        },
        {
            question: "“Қозы Көрпеш - Баян Сұлу” дастаны қай әдебиет жанрына жатады?",
            answers: {
                a: "Батырлар жыры",
                b: "Тарихи жыр",
                c: "Лиро-эпостық дастан"
            },
            correctAnswer: "c"
        },
        {
            question: "Доспамбет, Шалкиіз, Жиембет сияқты тарихи тұлғалар кімдер?",
            answers: {
                a: "Хандар",
                b: "Жыраулар",
                c: "Батырлар"
            },
            correctAnswer: "b"
        },
        {
            question: "Қазақ хандығының алғашқы астаналарының бірі:",
            answers: {
                a: "Отырар",
                b: "Сығанақ",
                c: "Тараз"
            },
            correctAnswer: "b"
        },
         {
            question: "XVI ғасырда Қазақ хандығының шекарасын батыста қай өзенге дейін жеткізген хан?",
            answers: {
                a: "Ертіс",
                b: "Еділ",
                c: "Жайық"
            },
            correctAnswer: "c"
        },
         {
            question: "XVII ғасырдағы Қазақ хандығының ішкі саяси жағдайына тән емес құбылыс:",
            answers: {
                a: "Феодалдық бытыраңқылық",
                b: "Орталықтандырылған мықты билік",
                c: "Сұлтандардың билікке таласы"
            },
            correctAnswer: "b"
        }
    ];

    function buildQuiz() {
        const output = [];
        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (const letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${questionNumber + 1}. ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        });
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;
        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'darkgreen';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });
        resultsContainer.innerHTML = `Сіз 20 сұрақтың ${numCorrect} сұрағына дұрыс жауап бердіңіз!`;
    }

    buildQuiz();
    submitButton.addEventListener('click', showResults);
})();