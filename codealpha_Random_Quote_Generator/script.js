function signUp() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        localStorage.setItem("user", username);
        localStorage.setItem("pass", password);
        alert("Sign Up successful! You can now Sign In.");
    } else {
        alert("Please fill in all fields.");
    }
}

function signIn() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUser = localStorage.getItem("user");
    const storedPass = localStorage.getItem("pass");

    if (username === storedUser && password === storedPass) {
        window.location.href = "quotes.html";
    } else {
        alert("Invalid credentials. Please try again or Sign Up.");
    }
}
