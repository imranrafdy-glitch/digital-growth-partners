import { useEffect, useState } from "react";

const THEME_KEY = "sh4des-theme";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);

  const handleToggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="fixed bottom-5 right-5 z-[55] inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground shadow-md hover:bg-secondary transition-colors"
      aria-label="Toggle color mode"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
