(function () {
  var SUPPORTED = ['en', 'ru', 'uk'];
  var STORAGE_KEY = 'hermes-lang';

  function detectLang() {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;

    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    nav = nav.toLowerCase();
    if (nav.indexOf('uk') === 0) return 'uk';
    if (nav.indexOf('ru') === 0) return 'ru';
    return 'en';
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'en';
    document.documentElement.setAttribute('lang', lang);

    var blocks = document.querySelectorAll('[data-lang-block]');
    for (var i = 0; i < blocks.length; i++) {
      var el = blocks[i];
      el.hidden = el.getAttribute('data-lang-block') !== lang;
    }

    var buttons = document.querySelectorAll('.lang-btn');
    for (var j = 0; j < buttons.length; j++) {
      var btn = buttons[j];
      var isActive = btn.getAttribute('data-set-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(detectLang());

    var buttons = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        applyLang(this.getAttribute('data-set-lang'));
      });
    }
  });
})();
