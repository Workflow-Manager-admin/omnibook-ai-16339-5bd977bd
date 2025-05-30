//
// Provides theme color values and foundation for auto theme switching.
//
// PUBLIC_INTERFACE
export const THEME = {
  dark: {
    primary: "#000000",
    secondary: "#FF6600",
    accent: "#FFA500",
    text: "#fff",
    textSecondary: "rgba(255,255,255,0.75)",
    border: "rgba(255,255,255,0.2)",
  },
  light: {
    primary: "#fff",
    secondary: "#FF6600",
    accent: "#FFA500",
    text: "#000",
    textSecondary: "rgba(0,0,0,0.7)",
    border: "rgba(0,0,0,0.1)",
  },
};

// PUBLIC_INTERFACE
export function getSystemThemeMode() {
  /** Return 'dark' or 'light' depending on system preference. */
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "dark";
}

// PUBLIC_INTERFACE
export function getThemeVariables(themeMode) {
  /**
   * Returns theme variables for selected mode (dark/light).
   * Usage: getThemeVariables(getSystemThemeMode())
   */
  return THEME[themeMode] || THEME.dark;
}
