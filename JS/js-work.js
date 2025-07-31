document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const searchIcon = document.querySelector('.search-icon');
    
   
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburgerIcon.classList.toggle('active');
    });
    
   
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburgerIcon.classList.remove('active');
        });
    });
    
    
    searchIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        const searchBox = this.querySelector('.search-box');
        searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
    });
    
   
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburgerIcon.classList.remove('active');
        }
    });
});