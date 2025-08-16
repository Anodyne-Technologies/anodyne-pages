(function () {
  const input = document.querySelector('input[type="search"]');
  if (!input) return;

  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== input) {
      e.preventDefault();
      input.focus();
    }
  });
})();
