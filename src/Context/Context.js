import React, { createContext, useContext, useState } from "react";

// Create a context
const VerifyContext = createContext();

// Create a provider component
const VerifyProvider = ({ children }) => {
    const [user, setUser] = useState({
        serialNum: "",
        name: "",
    });

    return (
        <VerifyContext.Provider value={{ user, setUser }}>
            {children} {/* Use `children` instead of `Children` */}
        </VerifyContext.Provider>
    );
};

// Function to access the context
const UserState = () => {
    return useContext(VerifyContext);
};

export { VerifyProvider, UserState };
