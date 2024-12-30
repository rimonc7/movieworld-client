import { useState, createContext } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme);
        console.log(darkTheme);
    };

    const themeInfo = {
        toggleTheme, 
        darkTheme,   
    };

    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
