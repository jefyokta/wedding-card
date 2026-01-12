import React, { createContext, useContext, useState, type PropsWithChildren } from "react"

const HoverContext = createContext<{ hoveringElement: string | null ,setHoveringElement:React.Dispatch<React.SetStateAction<string>>}>({ hoveringElement: null ,setHoveringElement:()=>{}})


export const HoverProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [hoveringElement, setHoveringElement] = useState('')


    return <HoverContext.Provider value={{ hoveringElement,setHoveringElement }}>
        {children}

    </HoverContext.Provider>
}
export const useHover = () => {


    return useContext(HoverContext)
}