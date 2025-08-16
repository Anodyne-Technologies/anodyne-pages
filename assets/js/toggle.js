(function () {
  const toggle = document.querySelector('[data-toggle="sidebar"]');
  const sidebar = document.getElementById('sidebar');
  if (!toggle || !sidebar) return;

  const key = 'anodyne-sidebar';
  if (localStorage.getItem(key) === 'open') {
    sidebar.classList.add('open');
  }

  toggle.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    const state = sidebar.classList.contains('open') ? 'open' : 'closed';
    localStorage.setItem(key, state);
  });
})();
