// Theme toggle functionality
class ThemeToggle {
  constructor() {
    this.storageKey = "theme";
    this.darkClass = "dark-theme";
    this.toggleButton = null;

    this.init();
  }

  init() {
    // Load saved theme or default to light
    const savedTheme = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add(this.darkClass);
    }

    this.findToggleButton();
    this.updateToggleButton();
    this.attachEventListeners();
  }

  findToggleButton() {
    // Find the existing toggle button in the header
    this.toggleButton = document.querySelector(".theme-toggle");
  }

  getToggleIcon() {
    const isDark = document.documentElement.classList.contains(this.darkClass);
    return isDark
      ? '<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
      : '<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>';
  }

  updateToggleButton() {
    if (this.toggleButton) {
      this.toggleButton.innerHTML = this.getToggleIcon();
    }
  }

  toggle() {
    const isDark = document.documentElement.classList.toggle(this.darkClass);
    localStorage.setItem(this.storageKey, isDark ? "dark" : "light");
    this.updateToggleButton();
  }

  attachEventListeners() {
    if (this.toggleButton) {
      this.toggleButton.addEventListener("click", () => this.toggle());
    }

    // Listen for system theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem(this.storageKey)) {
          if (e.matches) {
            document.documentElement.classList.add(this.darkClass);
          } else {
            document.documentElement.classList.remove(this.darkClass);
          }
          this.updateToggleButton();
        }
      });
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new ThemeToggle();
});
