(() => {
  const THEME_KEY = 'swopnil-theme';
  const body = document.body;
  const toggleButtons = Array.from(document.querySelectorAll('[data-theme-toggle]'));

  const getInitialTheme = () => {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const applyTheme = (theme) => {
    body.dataset.theme = theme;

    toggleButtons.forEach((button) => {
      const nextLabel = theme === 'dark' ? 'light' : 'dark';
      button.textContent = nextLabel;
      button.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      );
    });
  };

  applyTheme(getInitialTheme());

  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const nextTheme = body.dataset.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem(THEME_KEY, nextTheme);
      applyTheme(nextTheme);
    });
  });
})();
