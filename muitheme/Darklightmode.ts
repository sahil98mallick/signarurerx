import { PaletteMode, createTheme } from "@mui/material";
import React from "react";
import { getDesignTokens } from "./palette";

export const useColorTheme = () => {
    const [mode, setMode] = React.useState<PaletteMode>("light");

    const toggleColorMode = () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

    const modifiedTheme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );
    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    };
};



// const LOCAL_STORAGE_KEY = "color-theme-mode";

// export const useColorTheme = () => {
//     const [mode, setMode] = React.useState<PaletteMode>(() => {
//         if (typeof window !== 'undefined') {
//             const savedMode = localStorage.getItem(LOCAL_STORAGE_KEY);
//             return savedMode ? (savedMode as PaletteMode) : "light";
//         }
//         return "light"; 
//     });

//     React.useEffect(() => {
//         if (typeof window !== 'undefined') {
//             localStorage.setItem(LOCAL_STORAGE_KEY, mode);
//         }
//     }, [mode]);

//     const toggleColorMode = () => {
//         const newMode = mode === "light" ? "dark" : "light";
//         setMode(newMode);
//     };

//     const modifiedTheme = React.useMemo(
//         () => createTheme(getDesignTokens(mode)),
//         [mode]
//     );

//     return {
//         theme: modifiedTheme,
//         mode,
//         toggleColorMode,
//     };
// };
