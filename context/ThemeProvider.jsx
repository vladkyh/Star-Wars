import React, { useState } from "react";
import { useContext } from "react";
import { changeCssVariables } from "@services/changeCssVariables";

export const THEME_LIGHT ='light';
export const THEME_DARK ='dark';
export const THEME_NEUTRAL ='neutral';

const ThemeContext = React.createContext() ;

export const ThemeProvider = ({ children, ...props }) => {
    const [theme, settheme] = useState(null)

    const change = (name) => {
        settheme(name); 
        changeCssVariables(name);
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