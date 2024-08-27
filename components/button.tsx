import { ButtonProps } from "@/types"
import { ForwardedRef, forwardRef } from "react"


const Button=forwardRef(({children,onClick,icons='plus',leftIcon,rightIcon,noIcon=false, both,type='primary',size='md'}:ButtonProps,ref?:ForwardedRef<HTMLButtonElement>)=>{
    const icon=(
      icons==='plus'?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
      :icons==='check'?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
      :icons)   
  
    return(
      <button ref={ref} onClick={onClick} className={
        `flex btn ${type} ${size} items-center`
      }>
        {(both||(!noIcon&&leftIcon))&&icon}
        {children}
        {(both||(!noIcon&&rightIcon))&&icon}
      </button>
    )
  })

  export default Button