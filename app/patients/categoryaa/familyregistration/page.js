import Form from '@/app/components/button/form/Form'
import Contact_information from '@/app/components/contact_information/Contact_information'
import Basic_information from '@/app/components/patient_basic_information/Basic_information'
import React from 'react'


export default function familyRegistration() {
  return (
    <div className="h-full w-full flex items-center justify-center">
        <div className='flex flex-col justify-center w-1/2'>
        <Form/>
        <Basic_information/>
        <Contact_information/>
        </div>
    </div>
  )
}

