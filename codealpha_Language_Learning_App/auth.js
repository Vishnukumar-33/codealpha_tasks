function signUp() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && password) {
        localStorage.setItem("languageUser", username);
        localStorage.setItem("languagePass", password);
        alert("Sign Up successful! You can now Sign In.");
    } else {
        alert("Please fill in all fields.");
    }
}

function signIn() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const storedUser = localStorage.getItem("languageUser");
    const storedPass = localStorage.getItem("languagePass");

    if (username === storedUser && password === storedPass) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials. Please try again or Sign Up.");
    }
}
