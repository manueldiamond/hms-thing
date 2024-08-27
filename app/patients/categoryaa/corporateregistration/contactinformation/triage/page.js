import React from 'react';
import Triage from '@/app/components/triage';
import Allergy from '@/app/components/Allergy';
export default function triageFunction() {
    return(
        <div className="h-full w-full flex">
        <div className='ml-8 w-3/4 '>
            <Triage />
            <Allergy />
        </div>
    </div>
    )
}