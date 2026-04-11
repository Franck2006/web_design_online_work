document.addEventListener('DOMContentLoaded', () => {
    // Select the necessary DOM elements
    const barsIcon = document.querySelector('.bars-icon');
    const navMenu = document.querySelector('.lien-container');
    const icon = barsIcon ? barsIcon.querySelector('i') : null;

    // Check if the elements exist before adding event listeners
    if (barsIcon && navMenu && icon) {
        barsIcon.addEventListener('click', () => {
            // Toggle the 'show-menu' class to open/close the mobile nav
            navMenu.classList.toggle('show-menu');
            
            // Toggle the FontAwesome icon between hamburger (bars) and close (xmark)
            if (navMenu.classList.contains('show-menu')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }
});
