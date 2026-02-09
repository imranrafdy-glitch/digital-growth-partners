import { PropsWithChildren, useEffect, useMemo, useState } from "react";

const THEME_KEY = "shades-theme";

type Theme = "light" | "dark";

type ThemeState = {
  ready: boolean;
  theme: Theme | null;
};

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return null;
}

export default function ThemeGate({ children }: PropsWithChildren) {
  const [state, setState] = useState<ThemeState>({ ready: false, theme: null });

  useEffect(() => {
    const stored = getStoredTheme();
    if (stored) {
      applyTheme(stored);
      setState({ ready: true, theme: stored });
      return;
    }

    setState({ ready: false, theme: null });
  }, []);

  const showPrompt = useMemo(() => !state.ready, [state.ready]);

  const handleChoose = (theme: Theme) => {
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
    setState({ ready: true, theme });
  };

  const handleToggle = () => {
    const nextTheme: Theme = state.theme === "dark" ? "light" : "dark";
    handleChoose(nextTheme);
  };

  return (
    <>
      {children}
      {showPrompt && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 backdrop-blur-sm">
          <div className="w-[min(92vw,520px)] rounded-md border border-border bg-card p-8 text-center shadow-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">Theme</p>
            <h2 className="font-display text-2xl md:text-3xl mb-4">Choose your mode</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Pick a look to start. You can change it anytime using the toggle button.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-border text-foreground rounded-sm hover:bg-secondary transition-colors"
                onClick={() => handleChoose("light")}
              >
                Light mode
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
                onClick={() => handleChoose("dark")}
              >
                Dark mode
              </button>
            </div>
          </div>
        </div>
      )}
      {state.ready && state.theme && (
        <button
          type="button"
          onClick={handleToggle}
          className="fixed bottom-5 right-5 z-[55] inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground shadow-md hover:bg-secondary transition-colors"
          aria-label="Toggle color mode"
        >
          {state.theme === "dark" ? "Switch to light" : "Switch to dark"}
        </button>
      )}
    </>
  );
}
