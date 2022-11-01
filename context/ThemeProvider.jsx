import React, { useState } from "react";
import { useContext } from "react";

export const THEME_LIGHT ='light';
export const THEME_DARK ='dark';
export const THEME_NEUTRAL ='neutral';

const ThemeContext = React.createContext() ;

export const ThemeProvider = ({ children, ...props }) => {
    const [theme, settheme] = useState(null)

    const change = (name) => {
        settheme(name); 
    }
    return (
        
       < ThemeContext.Provider 
       value={{
            theme,
            change
        }}
        {...props}
       >
            {children}
       
       </ ThemeContext.Provider>
    )
}
export default ThemeProvider;
export const useTheme = () => useContext(ThemeContext);