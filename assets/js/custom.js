// Intercept nav clicks in capture phase (runs before template's main.js handlers)
// so we scroll smoothly instead of opening overlay panels.
document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href^="#"]');
  if (!link) return;

  var href = link.getAttribute('href');
  if (href === '#' || href === '') return;

  e.preventDefault();
  e.stopImmediatePropagation();

  var target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}, true); // true = capture phase, fires before bubble-phase listeners in main.js
