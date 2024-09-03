"use client"
import React, { useState } from "react";
import BorderedContainer from "./bordered-container";
import Image from "next/image";
import { AnimatePresence,motion } from "framer-motion";
import Button from "./button";
import { useRegistrationSectionData } from "@/context/registrationContext";
import { useRegSectionPage } from "@/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Avatar from "./avatar";
const cameraSVG=(
  <svg width="24" height="25" viewBox="0 0 24 25" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.77017 18.75C2.89017 20.81 4.00017 22.5 6.76017 22.5H17.2402C20.0002 22.5 21.1002 20.81 21.2302 18.75L21.7502 10.49C21.8902 8.33 20.1702 6.5 18.0002 6.5C17.3902 6.5 16.8302 6.15 16.5502 5.61L15.8302 4.16C15.3702 3.25 14.1702 2.5 13.1502 2.5H10.8602C9.83017 2.5 8.63017 3.25 8.17017 4.16L7.45017 5.61C7.17017 6.15 6.61017 6.5 6.00017 6.5C3.83017 6.5 2.11017 8.33 2.25017 10.49L2.51017 14.56"   stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5002 8.5H13.5002"   strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12.0002 18.5C13.7902 18.5 15.2502 17.04 15.2502 15.25C15.2502 13.46 13.7902 12 12.0002 12C10.2102 12 8.75017 13.46 8.75017 15.25C8.75017 17.04 10.2102 18.5 12.0002 18.5Z"   stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

const documentUploadSVG=(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 13.65V11L11 13" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 17V16" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 11L7 13" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 9C2 4 4 2 9 2H14" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V12.98" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18 10C15 10 14 9 14 6V2L22 10" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)
const ContainedSection = ({icon=<></>,heading='',text='',subtext='',imgURL}:any) =>{
  return(
    <div className="">
      <h6 className="text-sm text-para font-normal pb-2">{heading}</h6>
      <BorderedContainer className="!w-full centered flex gap-1 text-center  flex-col h-[187px] ">
        <span className="flex size-6 pb-2">{icon}</span>
        <p className="font-medium text-head">{text}</p>
        <p className="text-sm text-grey ">{subtext}</p>
      </BorderedContainer>
    </div>
  )
}
export default function RegistrationCapturePhoto() {
  const presetImages =  [
    '0.png', 
    '1.png', 
    '2.png', 
    '3.png', 
    '4.png', 
    '5.png', 
    '6.png', 
    '7.png', 
    '8.png', 
    '9.png',
  ]//PS: yes this can be simplified in one line with an array, but this accounts for different names(not followind the `${index}.png` format). --cheers Manuel

  const {sectionData,setData} = useRegistrationSectionData('capture-photo')

  const [selectedImage, setSelectedImage] = useState(sectionData?.image??'')

  const clearImage=(imgsrc:string)=>setSelectedImage('')
  const {nextPage,prevPage} = useRegSectionPage('capture-photo')
  
  const router = useRouter()

  const acceptImage=()=>{
    setData({image:selectedImage})
    nextPage&&router.push(nextPage)
  }

  return (
    <div className="">
    <AnimatePresence mode="popLayout"  presenceAffectsLayout>
      <div className="overflow-hidden ">
      {selectedImage?
      <motion.div 
        exit={{x:'100%'}} 
        initial={{x:'100%'}} 
        animate={{x:'0%'}} 
        key='confirm-img centered'
      >
        <BorderedContainer className="centered !rounded-3xl w-[400px] mx-auto aspect-square overflow-hidden !p-0">
          <Image src={selectedImage} width={500} height={500} alt='profile img preview' className="w-full h-full"/>
        </BorderedContainer>
        
        <p className="w-full text-center pt-5 pb-2">Use as patient photo?</p>

        <div className="gap-5 w-full centered">
          <Button onClick={clearImage} icons='check' type="ghost">Cancel</Button>
          <Button onClick={acceptImage} icons='check' rightIcon>Yes, Continue</Button>
        </div>
      </motion.div>
      :
      <motion.div 
        initial={{x:'-100%'}} 
        animate={{x:'0%'}} 
        exit={{x:'-100%'}} 
        key='select-image-div' 
        className="flex flex-col w-full gap-6"
      >
        <ContainedSection 
          icon={cameraSVG} 
          heading='Capture camera' 
          text='Capture patient photo' 
          subtext='Photo can be captured if the patient face is stable to the camera' 
        />
        <hr className="w-full"/>
        <ContainedSection 
          icon={documentUploadSVG} 
          heading='Upload patient image' 
          text='Click or drag and drop to upload your file' 
          subtext='PNG, JPEG, JPG, PDF, SVG (Max. 5mb)' 
        />
        <h6 className="text-sm font-normal pb-2 ">Choose from preset photos</h6>
        <BorderedContainer className="!p-0 !w-full">
          <div className=" flex gap-3 justify-between px-[10px] py-3 w-full overscroll-x-auto">
            {presetImages.map((src)=>
              <button key={src} onClick={()=>setSelectedImage('/presetProfiles/'+src)} className="w-12 h-12 rounded-full aspect-square centered overflow-hidden">
                <Avatar img={'/presetProfiles/'+src} key={src} size='xl'/>
              </button>
            )} 
          </div>
        </BorderedContainer>
        <div className="flex gap-2 justify-end w-full">
            {prevPage&&<Link href={prevPage}>
              <Button type="ghost">Previous</Button>
            </Link>}
            
            <Button disabled rightIcon icons={'check'}>Next</Button>
        </div>
      </motion.div>
    }
    </div>
    </AnimatePresence>
    </div>
    
  );
}
