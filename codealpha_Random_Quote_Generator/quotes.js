const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = `"${quotes[randomIndex].text}"`;
    document.getElementById('author').innerText = `- ${quotes[randomIndex].author}`;
}

function signOut() {
    window.location.href = "index.html";
}

window.onload = generateQuote;
