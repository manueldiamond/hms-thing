import { redirect } from "next/navigation"
import { regsections } from "../../../data/regdata"

export default function Page(){
    redirect('/patients/registration/'+regsections[0]['link'])
    console.log('LOG')
    return(<div></div>)
}