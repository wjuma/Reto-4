// Minimal i18n loader for tests
const translations = {
  en: require('../locales/en.json'),
  es: require('../locales/es.json'),
  ar: require('../locales/ar.json')
};

function applyLang(lang) {
  const t = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
}

window.applyLang = applyLang;
