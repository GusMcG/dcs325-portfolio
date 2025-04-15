// wait for the content to be fully loaded before running
document.addEventListener('DOMContentLoaded', function() {
    // take stylized quiz-container from style.css
    const quizContainer = document.getElementById('quiz-container');
    
    // declare questions with question string and options array
    const questions = [
        { question: "What is your preferred climate?", options: ["Warm", "Cold", "Moderate"] },
        { question: "What type of city do you prefer?", options: ["Big city", "Small town", "Suburban"] },
        { question: "What is your budget?", options: ["$1,000-$2,000", "$2,000-$6,000", "$6,000,$10,000"] },
        { question: "What types of languages do you want to learn?", options: ["Romance", "Eurasian", "None"] },
        { question: "What is your preferred continent?", options: ["Europe", "Asia", "Latin America"] },
        { question: "What type of cuisine do you prefer?", options: ["Asian", "European", "American"] },
        { question: "What is your preferred activity?", options: ["Sightseeing", "Outdoor activities", "Cultural experiences"] },
        { question: "What is your preferred mode of transportation?", options: ["Public transport", "Walking", "Driving"] },
        { question: "What is your preferred accommodation?", options: ["Homestay", "House", "Apartment"] },
        { question: "What is your preferred study environment?", options: ["University", "Language school", "Online"] }
    ];

    // declare array of strings
    const locations = [
        "London", "Paris", "Berlin", "Madrid", "Rome", "Tokyo", "Seoul", "Beijing", "Sydney", "Madrid",
        "Santiago", "Panama City", "Toronto", "Vancouver", "Buenos Aires", "Rio de Janeiro", "Cape Town",
        "Dubai", "Singapore", "Hong Kong", "Bangkok", "Kuala Lumpur", "Istanbul", "Moscow", "Vienna", "Zurich",
        "Amsterdam", "Barcelona", "Lisbon", "Prague"
    ];

    // take question index to cycle through array of questions
    let currentQuestionIndex = 0;

    // stores user answers
    let answers = [];

    // displays question based on the current index
    function showQuestion(index) {
        // defers showResult until index is reached
        if (index >= questions.length) {
            showResult();
            return;
        }

        // grabs the current question and its options
        const question = questions[index];
        // creates new quiz-container with question and options
        quizContainer.innerHTML = `
            <h3>Question ${index + 1}</h3>
            <p>${question.question}</p>
            <ul>
                ${question.options.map((option, i) => `<li><input type="radio" name="q${index}" value="${i}"> ${option}</li>`).join('')}
            </ul>
            <button class = "base-text" id="next-button">Next</button>
        `;

        // add an event listener to the button to store the user's answer
        document.getElementById('next-button').addEventListener('click', function() {
            // retrieve the selected option
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            // ??
            if (selectedOption) {
                answers[index] = parseInt(selectedOption.value);
                showQuestion(index + 1);
            } else {
                // case for no option selected
                alert("Please select an option.");
            }
        });
    }

    // function to "calculate" and display the result based on user's answers
    function showResult() {
        // essentially random calculation to sum results
        const resultIndex = answers.reduce((acc, answer) => acc + answer, 0) % locations.length;
        // take item from location array based on resultIndex
        const resultLocation = locations[resultIndex];
        // displays results
        quizContainer.innerHTML = `
            <h3>Your recommended study abroad location is:</h3>
            <p>${resultLocation}</p>
        `;

    }

    // Start the quiz by showing the first question
    showQuestion(currentQuestionIndex);
});