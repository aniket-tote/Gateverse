import React, { createContext, useContext } from "react";

const ColorModeContext = createContext({
    colorMode: "dark",
    toggleColorMode: () => { },
});

export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [colorMode, setColorMode] = React.useState("dark");

    const toggleColorMode = () => {
        console.log("first");
        setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    return (
        <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
            {children}
        </ColorModeContext.Provider>
    )
}
