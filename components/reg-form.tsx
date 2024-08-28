'use client'
import { baseRegURL, RegInputs, RegSchemas, RegSection, RegSectionLink, regsections } from "@/data/regdata"
import { useRegistrationData, useRegistrationSectionData } from "@/context/registrationContext"
import { InputProps } from "@/types"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useMemo, useRef, useState } from "react"
import { useClickOut, useRegSectionPage } from "@/hooks"
import Button from "./button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Input } from "./inputs"


const RegForm=({section}:{section:RegSectionLink})=>{
    const schema = RegSchemas[section]
    const inputs = RegInputs[section]
    const [loading,setLoading] = useState()
    const {prevPage,nextPage}=useRegSectionPage(section)

    if(!schema||!inputs) throw new Error()

    const {sectionData,setData}=useRegistrationSectionData(section)
    
    const {
      register,
      setValue,
      handleSubmit,
      formState: { errors },
      watch,
    } = useForm<any>({
      resolver: zodResolver(schema!),
    });

    const router=useRouter()
    const onSubmit=(data:any)=>{
        setData(data);
        nextPage&&router.push(nextPage)
        console.log(data)
    }
    return(
      <form className="flex flex-col w-full gap-6" onSubmit={handleSubmit(onSubmit)}>
      {  
        inputs?.map(input=>(
          <Input hook={{...register(input.name)}} error={errors&&errors[input.name]} {...input} key={input.name} 
            defaultValue={sectionData&&sectionData[input.name]}
            onChange={(value:any)=>{
              setValue(input.name,value)
            }}
            custom={
              input.name===''?undefined:undefined//special input options cases 
            }/>
        ))
      }
        <div className="flex gap-2 justify-end w-full">
          {prevPage&&<Link href={prevPage}>
            <Button type="ghost">Previous</Button>
          </Link>}
          <Button rightIcon icons={'check'}>Next</Button>
        </div>
      </form>
    )
  }
export default RegForm

