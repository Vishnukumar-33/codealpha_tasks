if (!localStorage.getItem("languageUser")) {
    window.location.href = "index.html";
}

function showVocabulary() {
    const container = document.getElementById("lessonContent");
    container.innerHTML = "<h3>Vocabulary</h3>";
    vocabulary.forEach(item => {
        container.innerHTML += `<p><b>${item.word}</b> - ${item.translation}</p>`;
    });
}

function showGrammar() {
    const container = document.getElementById("lessonContent");
    container.innerHTML = "<h3>Grammar Tips</h3>";
    grammarTips.forEach(tip => {
        container.innerHTML += `<p>• ${tip}</p>`;
    });
}

function showQuiz() {
    const container = document.getElementById("lessonContent");
    container.innerHTML = "<h3>Quiz</h3>";
    
    quizQuestions.forEach((q, index) => {
        container.innerHTML += `<p><b>${q.question}</b></p>`;
        q.options.forEach(opt => {
            container.innerHTML += `<button onclick="checkAnswer(${index}, '${opt}')">${opt}</button>`;
        });
    });
}

function checkAnswer(qIndex, selected) {
    const correct = quizQuestions[qIndex].answer;
    if (selected === correct) {
        alert("Correct!");
    } else {
        alert(`Incorrect! The correct answer is: ${correct}`);
    }
}

function signOut() {
    localStorage.removeItem("languageUser");
    localStorage.removeItem("languagePass");
    window.location.href = "index.html";
}
