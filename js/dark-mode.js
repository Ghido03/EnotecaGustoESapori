// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const body = document.body;

  // Check for saved dark mode preference in localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

  if (isDarkMode) {
    body.classList.add('dark-mode');
  }

  // Toggle dark mode on button click
  darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    // Save preference to localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});
