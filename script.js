// 1. Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') themeToggle.textContent = '☀️ Light Mode';
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ Light Mode';
    }
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedback = document.getElementById('formFeedback');

    if (name === "" || email === "" || message === "") {
        feedback.innerHTML = '<div class="alert alert-danger">Please fill all fields!</div>';
        return false;
    }
    feedback.innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
    return false; 
}