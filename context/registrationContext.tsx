'use client'
import { RegSectionLink } from "@/data/regdata";
import { useObjectState, useRegSectionPage } from "@/hooks";
import { ReactChildren } from "@/types";
import { createContext, useContext } from "react";

const regContext=createContext<null|{
    data:Record<RegSectionLink,Record<string,any>>,
    setSectionData:(key:RegSectionLink,value:any)=>any
}>(null);

export const RegistrationProvider=({children}:ReactChildren)=>{
    const [data,setData] = useObjectState<string,Record<RegSectionLink,any>>({})
    const setSectionData=(key:string,value:any)=>setData({[key]:value})
    return(
        <regContext.Provider value={{data,setSectionData}}>
            {children}
        </regContext.Provider>
    )
}

export const useRegContext=()=>useContext(regContext)
export const useRegistrationData=()=>useRegContext()?.data
export const useRegistrationSectionData=(section:RegSectionLink)=>{
    const regContext = useRegContext()
    const setSectionData=regContext?.setSectionData
    const sectionData = regContext?.data[section] 
    
    return {
        setData:(value:any)=>setSectionData!(section,value),
        sectionData
    }
}