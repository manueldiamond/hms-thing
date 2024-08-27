'use client'
import { baseRegURL, RegSection, RegSectionLink, regsections } from "@/data/regdata"
import { useRegContext } from "@/context/registrationContext";
import Link from "next/link"
import { usePathname } from "next/navigation";


export function RegistrationSidebar(){
    const path = usePathname()
    const regdata = useRegContext()?.data
    const isCurrent=(link:string)=>path.includes(link)
    const seen = (section:RegSectionLink)=>regdata&&Object.keys(regdata).includes(section)
    return(
        <nav className="flex flex-col ">
            <h6 className="font-medium text-sm pb-6 text-grey">ADDING NEW PATIENT</h6>
            {regsections.map(({link,text})=>
                <Link href={`${baseRegURL}${link}`} className={`px-3 py-2 ${seen(link)?'pointer-events-auto hover:bg-light rounded-lg font-medium':'pointer-events-none'} ${isCurrent(link)?'font-bold text-head'
                    :'text-para font-normal'
                }`} key={link}>{text}</Link>
            )}
        </nav>
    )
}