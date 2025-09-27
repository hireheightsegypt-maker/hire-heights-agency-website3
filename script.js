// Functionality for Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for user's preference in localStorage or system
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme)) {
        body.classList.add('dark-mode');
        // Update the icon to sun
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; 
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Update localStorage
        let theme = 'light';
        if (body.classList.contains('dark-mode')) {
            theme = 'dark';
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        localStorage.setItem('theme', theme);
    });

    // Set the current year in the footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    // Placeholder for Language Toggle (Functionality to be added later)
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', () => {
        alert('Language toggle functionality coming soon!');
        // Implementation for loading Arabic content would go here
    });
});