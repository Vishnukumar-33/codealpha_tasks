// Prevent access if not logged in
if (!localStorage.getItem("fitnessUser")) {
    window.location.href = "index.html";
}

window.onload = () => {
    updateSummary();
};

function addFitnessData() {
    const steps = parseInt(document.getElementById('steps').value) || 0;
    const workout = parseInt(document.getElementById('workout').value) || 0;
    const calories = parseInt(document.getElementById('calories').value) || 0;

    let fitnessData = JSON.parse(localStorage.getItem('fitnessData')) || {
        steps: 0,
        workout: 0,
        calories: 0
    };

    fitnessData.steps += steps;
    fitnessData.workout += workout;
    fitnessData.calories += calories;

    localStorage.setItem('fitnessData', JSON.stringify(fitnessData));

    document.getElementById('steps').value = '';
    document.getElementById('workout').value = '';
    document.getElementById('calories').value = '';

    updateSummary();
}

function updateSummary() {
    const fitnessData = JSON.parse(localStorage.getItem('fitnessData')) || {
        steps: 0,
        workout: 0,
        calories: 0
    };

    document.getElementById('totalSteps').innerText = fitnessData.steps;
    document.getElementById('totalWorkout').innerText = fitnessData.workout;
    document.getElementById('totalCalories').innerText = fitnessData.calories;

    updateProgressBar(fitnessData);
}

function updateProgressBar(data) {
    const weeklyGoal = 50000; 
    const percent = Math.min(Math.round((data.steps / weeklyGoal) * 100), 100);

    document.getElementById('progressBar').style.width = percent + '%';
    document.getElementById('progressPercent').innerText = percent + '%';
}

function signOut() {
    localStorage.removeItem("fitnessUser");
    localStorage.removeItem("fitnessPass");
    localStorage.removeItem("fitnessData");
    window.location.href = "index.html";
}
