function signUp() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && password) {
        localStorage.setItem("fitnessUser", username);
        localStorage.setItem("fitnessPass", password);
        alert("Sign Up successful! You can now Sign In.");
    } else {
        alert("Please fill in all fields.");
    }
}

function signIn() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const storedUser = localStorage.getItem("fitnessUser");
    const storedPass = localStorage.getItem("fitnessPass");

    if (username === storedUser && password === storedPass) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials. Please try again or Sign Up.");
    }
}
