const toggleBtn = document.getElementById('toggle-btn');
const enContent = document.getElementById('en');
const jaContent = document.getElementById('ja');
const htmlTag = document.documentElement; // <html> tag

let currentLang = 'en'; // Start with English

toggleBtn.addEventListener('click', () => {
  if (currentLang === 'en') {
    enContent.classList.remove('active');
    jaContent.classList.add('active');

    toggleBtn.textContent = 'English';
    htmlTag.setAttribute('lang', 'ja');
    currentLang = 'ja';
  } else {
    jaContent.classList.remove('active');
    enContent.classList.add('active');

    toggleBtn.textContent = '日本語';
    htmlTag.setAttribute('lang', 'en');
    currentLang = 'en';
  }
});
