document.addEventListener('DOMContentLoaded', function() {
    
    // --- Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Load saved preference or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        // Optional: Update the icon to reflect the current state (moon if dark, sun if light)
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // --- Current Year in Footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});