/* ============================================
   THEME (DARK MODE)
   Uses data-theme="dark" on <html> + CSS custom properties.
   Checks localStorage first, then system preference.
   ============================================ */
(function () {
  const html = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) {
    html.setAttribute('data-theme', saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
  }
})();

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Theme toggle ---- */
  const html = document.documentElement;
  const themeToggleBtn = document.querySelector('.theme-toggle');

  function updateToggleIcon() {
    if (!themeToggleBtn) return;
    const isDark = html.getAttribute('data-theme') === 'dark';
    themeToggleBtn.innerHTML = isDark
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
    themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  updateToggleIcon();

  themeToggleBtn?.addEventListener('click', function () {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateToggleIcon();
  });

  /* ---- Active nav link ---- */
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#mainNav .nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (
      href === currentFile ||
      (currentFile === '' && href === 'index.html') ||
      (currentFile === 'index.html' && href === 'index.html')
    ) {
      link.classList.add('active');
    }
  });

  /* ---- Typed.js animation ---- */
  const typedEl = document.querySelector('.typed');
  if (typedEl && typeof Typed !== 'undefined') {
    const strings = typedEl
      .getAttribute('data-typed-items')
      .split(',')
      .map(function (s) { return s.trim(); });

    new Typed('.typed', {
      strings: strings,
      loop: true,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
    });
  }

  /* ---- Bootstrap navbar: collapse on mobile nav link click ---- */
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navLinks = document.querySelectorAll('#mainNav .nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
        const collapse = document.querySelector('#navbarNav');
        if (collapse && collapse.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    });
  });

});
