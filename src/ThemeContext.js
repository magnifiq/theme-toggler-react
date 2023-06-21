import React, {useContext, useState} from "react";


/// 1st step: createContext 
const ThemeContext=React.createContext(undefined);
const ThemeUpdateContext=React.createContext(undefined);


//2nd step: useContext
export function useTheme(){
    return useContext(ThemeContext);
}

export function useThemeUpdate(){
    return useContext(ThemeUpdateContext);
}



//3rd step: ThemeProvider
export function ThemeProvider({children}){
    const [darkTheme, setDarkTheme]=useState(true);

    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

