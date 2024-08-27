import { useClickOut } from "@/hooks"
import { InputProps } from "@/types"
import { useState, useMemo, useEffect } from "react"
import DropDiv from "./drop-div"

const solidCheckSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
    </svg>
  
  )
  
export const RadioInputs=({name,options,placeholder,hook,customOption,defaultValue}:any)=>{
    const [selected,setSelected]=useState<string|null>(defaultValue?defaultValue:placeholder?placeholder:null)
    return(
      <div className="flex gap-1">
          {options?.map((option:any)=>{
            const value=typeof option==='string'?option:option.value
            const displayLabel=typeof option==='string'?option:option.label??value
            const thisSelected=selected===value
            return(
            <label onClick={
              ()=>setSelected(value)}
               key={value} htmlFor={value+name} className={` font-normal cursor-pointer border-[1px]  transition-colors px-4 py-3 border-solid w-max centered gap-2 rounded-lg ${thisSelected?' border-inactive ':'hover:border-base/40 border-transparent'}`}>
              <input
                className={`${!thisSelected&&'opacity-50'} scale-[1.25] ` }
                id={value+name} 
                checked={thisSelected}
                name={name} 
                type="radio" 
                value={value} 
                 
                {...hook}
              />
              {customOption?customOption(option):displayLabel}
            </label>
            )}
          )}
        </div>
    )
  }
  export  const SelectInput=({name,options,placeholder,customOption,defaultValue,onChange}:any)=>{
    const [selected,setSelected]=useState<string|null>(defaultValue?defaultValue:placeholder?placeholder:null)
    const [opened,setOpen]=useState(false)
  
    const open=()=>setOpen(true)
    const close=()=>setOpen(false)
    
    const ref = useClickOut(close,opened)
    const optionValuesObject=useMemo(()=>(options as any[]|undefined)?.map((option:any) =>{
      const value = typeof option==='string'?option:option.value as string
      const displayLabel=typeof option==='string'?option:option.label??value as string
      // const isSelected = selected===value
  
      return({value,displayLabel,data:option as any})
    }),[])
    useEffect(()=>{
      if(selected===placeholder)
        if(!optionValuesObject?.find(({value})=>value===selected))
          return;
      onChange(selected)
      close();
    },[selected])
    return(
      <div onClick={open}   className={` ${!selected?'text-black/50':'text-head'} w-auto border hover:border-base/40 border-inactive p-4 rounded-lg cursor-pointer relative `}>
        <div className="flex justify-between w-full ">
          <span className={` flex-1 text-left`}>{selected??'Select'}</span> 
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <DropDiv ref={ref} className=" bg-white absolute top-[calc(100%+1rem)] z-50 left-0 w-full shadow-[0px_20px_66px_0px_#22304933] flex flex-col gap-1 p-3 rounded-xl " opened={opened}>
          {optionValuesObject?.map(({value,data,displayLabel}) =>
            <div 
              onClick={()=>setSelected(value)} 
                className={`${selected!==value&&'hover:pl-6 transition-all'} hover:bg-light rounded-lg px-4 py-2 ${selected?'text-head':'text-para'}  centered gap-2 options`} 
                key={value}
            >
                {value===selected&&<span className="text-base centered size-5">{solidCheckSVG}</span>}
                <span className="text-left flex-1">
                  {customOption?customOption(data):displayLabel}
                </span>
            </div>
            
          )}
        </DropDiv>
      </div>
  
    )
  }
 export const Input=({name,type,label,options,custom,placeholder,error,hook,defaultValue,onChange}:InputProps&{onChange?:any,error?:any,hook?:any,custom?:any,defaultValue?:any})=>{
    return(
      <div className="flex flex-col ">
        <label className="text-left flex flex-col font-normal text-para" htmlFor={name}>
          {label}
          <span className="error text-error">
            {error?.message}
          </span>
        </label>
       {type === "radio"?(
          <RadioInputs customOption={custom} name={name} options={options} placeholder={placeholder} defaultValue={defaultValue} hook={hook}/>
       ):type === "option" ? (
          <SelectInput customOption={custom} name={name} options={options} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange}/>
        ) : (
          <input
            className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
            type={type}
            id={name}
            placeholder={placeholder?placeholder:`Enter your ${name.toLowerCase()}`}
            {...hook}
            defaultValue={defaultValue}
          />
        )}
      </div>
    )
  }