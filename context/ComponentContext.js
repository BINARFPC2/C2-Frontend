"use client"

import { createContext, useState } from "react";

export const ComponentContext = createContext("")

export const CompProvider = ({ children }) => {
    const [showReturn, setShowReturn] = useState(false)
    const [isDoubleClick, setIsDoubleClick] = useState(false);

    const handleToggle = () => {
        if (isDoubleClick) {
            setShowReturn(!showReturn);
            setIsDoubleClick(false);
        } else {
            setIsDoubleClick(true);
            setTimeout(() => {
                setIsDoubleClick(false);
            }, 300); // 
        }

        console.log(showReturn);
        return (
            <ComponentContext.Provider value={{ handleToggle, showReturn }}>
                {children}
            </ComponentContext.Provider>
        )
    }
}