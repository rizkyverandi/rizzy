import { createContext, useState, useEffect, useContext } from "react";
import { ThemeContextInterface } from "@/types/theme";
import { UserAgentContextInterface } from "@/types/useragent";

// #region Create Context
const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);

const UserAgentContext = createContext<UserAgentContextInterface | undefined>(undefined);
// #endregion

// #region Providers
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark" | "">("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
    document.body.classList.add("overflow-y-hidden");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme && theme !== null) {
      document.body.classList.add(theme);
    } else {
      document.body.classList.add("light"); // Use a default theme
    }

    return () => {
      document.body.classList.remove(theme || "light"); // Clean up old theme
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const UserAgentProvider = ({ children }: { children: React.ReactNode }) => {
  const [userAgent, setUserAgent] = useState<string | "">("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // This code will only run on the client (browser)
      setUserAgent(navigator.userAgent);
    }
  }, []);

  //const isMobile = /Mobi|Android/i.test(userAgent);
  return (
    <UserAgentContext.Provider value={{ userAgent }}>
      {children}
    </UserAgentContext.Provider>
  );
};

// #endregion

// #region  Context Custom Hooks
export const useTheme = (): ThemeContextInterface => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const useUserAgent = (): UserAgentContextInterface => {
  const context = useContext(UserAgentContext);
  if (context === undefined) {
    throw new Error("useUserAgentmust be used within a UserAgentProvider");
  }
  return context;
};
//#endregion

// #region Global Provider
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <UserAgentProvider>{children}</UserAgentProvider>
    </ThemeProvider>
  );
};

//#endregion
