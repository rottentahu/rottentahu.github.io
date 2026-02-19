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
      : '<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>';
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
