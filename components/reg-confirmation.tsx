'use client'

import { useRegistrationData } from "@/context/registrationContext"
import BorderedContainer from "./bordered-container"
import Button from "./button"
import { baseRegURL, getRegSectionHeading, RegSectionLink } from "@/data/regdata"
import Link from "next/link"
import { useRegSectionPage } from "@/hooks"
import Avatar from "./avatar"

const Section=({heading,link,data}:any)=>{
    return(
        <div>
            <div className="flex w-full justify-between items-center pb-3">
                <h6 className="text-sm font-normal  ">{heading}</h6>
                <Link href={baseRegURL+link}>
                    <Button rounded size="md" icons={(
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5799 7.27963L12.4733 6.33296C13.4199 5.33296 13.8466 4.19296 12.3733 2.79963C10.8999 1.41296 9.78661 1.89963 8.83994 2.89963L3.36661 8.69296C3.15994 8.91296 2.95994 9.34629 2.91994 9.64629L2.67328 11.8063C2.58661 12.5863 3.14661 13.1196 3.91994 12.9863L6.06661 12.6196C6.36661 12.5663 6.78661 12.3463 6.99327 12.1196L9.62661 9.33296" stroke="#424242" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.92664 3.86621C8.2133 5.70621 9.70664 7.11288 11.56 7.29954" stroke="#424242" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 15.167H9.33333" stroke="#424242" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 15.167H14" stroke="#424242" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    )} type="ghost" rightIcon>Edit Record</Button>
                </Link>
             </div>
             <BorderedContainer className="!p-0 !w-full !px-5 !py-4 flex-col flex gap-4">
                {Object.keys(data).map(key=>(
                    <div className=" centered !justify-between">
                        <p className="text-para text-sm">{key}</p>
                        <p className="font-medium text-head">{
                            (key)==='image'?
                                <Avatar size='3xl' img={data[key]}/>
                            :
                                data[key]
                            }</p>
                    </div>
                ) )}
             </BorderedContainer>
        </div>
    )
}

export default function RegistrationConfirmationSection() {
    const data=useRegistrationData()
    useRegSectionPage('confirmation')
    return(
        <div className="flex flex-col gap-8">
            {data&&Object.keys(data).map((key)=>
                <Section 
                    heading={getRegSectionHeading(key as RegSectionLink)} 
                    data={data[key as RegSectionLink]} 
                    link={key} 
                />
            )}
            <Button rounded size="xl" type="primary">
                <span className="mx-auto">Register</span>
            </Button>
        </div>
    )
}