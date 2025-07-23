    const fabButton = document.getElementById('mainButton');
    const options = document.querySelectorAll('.fab-option');

    fabButton.addEventListener('click', () => {
      options.forEach(option => option.classList.toggle('show'));
      fabButton.textContent = fabButton.textContent === '🔗' ? '✖' : '🔗';
    });

// Dark Mode
const toggleBtn = document.getElementById('theme-toggle');
const darkModeClass = 'dark-mode';

// تحميل الوضع المحفوظ من localStorage عند بدء الصفحة
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add(darkModeClass);
    toggleBtn.textContent = '☀️'; // أيقونة الشمس عند الداكن
  } else {
    toggleBtn.textContent = '🌙'; // أيقونة الهلال عند الفاتح
  }
});

// عند الضغط على الزر، قم بالتبديل واحفظ الحالة
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

// //////////////