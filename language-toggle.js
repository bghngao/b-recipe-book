const toggleBtn = document.getElementById('toggle-btn');
const enContent = document.getElementById('en');
const jaContent = document.getElementById('ja');

let currentLang = 'en'; // Start with English

toggleBtn.addEventListener('click', () => {
  if (currentLang === 'en') {
    enContent.classList.remove('active');
    jaContent.classList.add('active');
    toggleBtn.textContent = 'Switch to English';
    currentLang = 'ja';
  } else {
    jaContent.classList.remove('active');
    enContent.classList.add('active');
    toggleBtn.textContent = '日本語に切り替え';
    currentLang = 'en';
  }
});
