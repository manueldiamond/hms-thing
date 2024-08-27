import Image from "next/image";

const CloseButton=()=>{
    return(
        <div className="bg-[#F5F5F5] text-head rounded-full size-[48px]  flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
    )
}
export default function Header(){
    return(
        <div className="border-solid  border-b-black/5 border-b w-full">
            <div className="mx-auto container flex justify-between h-[75px] items-center">
                <Image className=" logo object-contain h-[40px]" src='/logo.svg' width={200} height={40} alt="HMS logo"/>
                <div className="right-side">
                    <CloseButton/>
                </div>
            </div>    
        </div>
    )
}