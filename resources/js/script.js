document.addEventListener('DOMContentLoaded', function() {
    const modeToggleBtn = document.getElementById('mode-toggle');
    const modeIcon = document.getElementById('mode-icon');

    modeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        const isDarkMode = document.body.classList.contains('dark-mode');
        modeIcon.src = `resources/images/change_mode/${isDarkMode ? 'dark' : 'light'}-mode.svg`;
        modeIcon.alt = `${isDarkMode ? 'Dark' : 'Light'} Mode`;
    });
    // humerbuger icon
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

   // Close the menu when clicking outside of it
    document.addEventListener("click", (event) => {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger) {
            navMenu.classList.remove("active");
        }
    }); 
    
});
