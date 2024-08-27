"use client"

import Contact_information from '@/app/components/contact_information/Contact_information'
import React from 'react'


export default function ContactInformation() {
  return (
    <div className="h-full w-full flex">
        <div className='ml-8 w-3/4'>
        <Contact_information />
        </div>
    </div>
  )
}
