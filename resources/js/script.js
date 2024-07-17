document.addEventListener('DOMContentLoaded', function() {
    const modeToggleBtn = document.getElementById('mode-toggle');
    const modeIcon = document.getElementById('mode-icon');

    modeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            modeIcon.src = 'resources/images/change_mode/dark-mode.svg';
            modeIcon.alt = 'Dark Mode';
        } else {
            modeIcon.src = 'resources/images/change_mode/light-mode.svg';
            modeIcon.alt = 'Light Mode';
        }
    });
});
