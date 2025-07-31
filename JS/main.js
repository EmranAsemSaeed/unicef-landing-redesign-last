    const fabButton = document.getElementById('mainButton');
    const options = document.querySelectorAll('.fab-option');

    fabButton.addEventListener('click', () => {
      options.forEach(option => option.classList.toggle('show'));
      fabButton.textContent = fabButton.textContent === '🔗' ? '✖' : '🔗';
    });

// Dark Mode
const toggleBtn = document.getElementById('theme-toggle');
const darkModeClass = 'dark-mode';

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add(darkModeClass);
    toggleBtn.textContent = '☀️'; // أ
  } else {
    toggleBtn.textContent = '🌙'; // 
  }
});

toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle(darkModeClass);

  if (isDark) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = '🌙';
  }
});

//search
const searchIcon = document.querySelector('.search-icon');
      searchIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        const searchBox = this.querySelector('.search-box');
        searchBox.style.display = searchBox.style.display === 'block' ? 'f' : 'block';
    });

// move to work page
      //  document.getElementsByClassName('Explor-btn').addEventListener('click', function() {
      //       window.location.href = 'work.html';
      //   });
// //////////////