import { RefObject, useEffect, useMemo, useRef, useState } from "react"

export const useObjectState=<k extends string,v>(obj:Record<k,v>)=>{
    type T = Record<k,v>
    const [state,setState]=useState(obj)
    const editState=useMemo(()=>
        (changes:Partial<T>|((current:T)=>Partial<T>))=>
            setState(prevState=>({
                    ...prevState,
                    ...(typeof changes==='function'?(changes as (current:T)=>T)(prevState):changes)
                })
            )
    ,[setState])
    
    // Example: Updating state with a new value
    // editState({ name: 'Updated Name' });
    
    return [state, editState] as [T,typeof editState]
}

export const useClickOut=(onOutClickFunction:Function,deps:any[]|boolean,ref?:RefObject<any>)=>{
    const maindiv = ref??useRef<any>(null)
    const handleClickOutside = (event: any) => {
        if (maindiv.current && !maindiv.current.contains(event.target))
            onOutClickFunction();
        // console.log('CLICK from,', maindiv.current)
    };

    useEffect(() => {
        if (( typeof deps==='boolean'&&!deps)||!maindiv.current)
            return document.removeEventListener("mousedown", handleClickOutside);

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, typeof deps==='boolean'?[deps]:deps);

    return maindiv
}