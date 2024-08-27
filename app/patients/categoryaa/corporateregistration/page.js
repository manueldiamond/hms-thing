"use client"

import Basic_information from '@/app/components/patient_basic_information/Basic_information'
import React from 'react'


export default function CorporateRegistration() {
  return (
    <div className="h-full w-full flex">
        <div className='mx-8 w-full lg:w-3/4'>
        <Basic_information/>
        </div>
    </div>
  )
}


