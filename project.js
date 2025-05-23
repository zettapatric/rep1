// projects.js

document.addEventListener('DOMContentLoaded', function() {
    // Filter projects functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Project hover effects for touch devices
    function handleTouchHover() {
      if ('ontouchstart' in window) {
        projectItems.forEach(item => {
          item.addEventListener('touchstart', function() {
            this.classList.add('hover-effect');
          });
          
          document.addEventListener('touchstart', function(e) {
            if (!e.target.closest('.project-item')) {
              projectItems.forEach(item => {
                item.classList.remove('hover-effect');
              });
            }
          });
        });
      }
    }
    
    handleTouchHover();
  });
  