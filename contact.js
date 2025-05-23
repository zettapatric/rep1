document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                    contactForm.style.display = 'block';
                }, 5000);
            }, 1000);
        });
    }

    // Floating label enhancement
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        
        if (input) {
            // Check if input has value on page load
            if (input.value) {
                const label = group.querySelector('label');
                label.style.top = '-10px';
                label.style.left = '10px';
                label.style.fontSize = '0.8rem';
                label.style.background = 'white';
                label.style.padding = '0 5px';
                label.style.color = '#3498db';
            }
            
            input.addEventListener('blur', function() {
                const label = group.querySelector('label');
                if (!this.value) {
                    label.style.top = '15px';
                    label.style.left = '15px';
                    label.style.fontSize = '1rem';
                    label.style.background = 'transparent';
                    label.style.padding = '0';
                    label.style.color = '#7f8c8d';
                }
            });
        }
    });
});
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}