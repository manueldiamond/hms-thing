import Avatar from '@/components/avatar'
import Link from 'next/link'
import React from 'react'

const searchIcon=(
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none"  stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M25 25L17 17M19.6667 10.3333C19.6667 11.559 19.4253 12.7727 18.9562 13.905C18.4872 15.0374 17.7997 16.0663 16.933 16.933C16.0663 17.7997 15.0374 18.4872 13.905 18.9562C12.7727 19.4253 11.559 19.6667 10.3333 19.6667C9.10766 19.6667 7.89399 19.4253 6.76162 18.9562C5.62925 18.4872 4.60035 17.7997 3.73367 16.933C2.86699 16.0663 2.1795 15.0374 1.71046 13.905C1.24141 12.7727 1 11.559 1 10.3333C1 7.85798 1.98333 5.48401 3.73367 3.73367C5.48401 1.98333 7.85798 1 10.3333 1C12.8087 1 15.1827 1.98333 16.933 3.73367C18.6833 5.48401 19.6667 7.85798 19.6667 10.3333Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" />
  </svg>
)
const profilePlusIcon=(
  <svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 5.5C4 4.04131 4.57946 2.64236 5.61091 1.61091C6.64236 0.579463 8.04131 0 9.5 0C10.9587 0 12.3576 0.579463 13.3891 1.61091C14.4205 2.64236 15 4.04131 15 5.5C15 6.95869 14.4205 8.35764 13.3891 9.38909C12.3576 10.4205 10.9587 11 9.5 11C8.04131 11 6.64236 10.4205 5.61091 9.38909C4.57946 8.35764 4 6.95869 4 5.5ZM0 22.5C0 19.9804 1.00089 17.5641 2.78249 15.7825C4.56408 14.0009 6.98044 13 9.5 13C12.0196 13 14.4359 14.0009 16.2175 15.7825C17.9991 17.5641 19 19.9804 19 22.5V22.504L18.9987 22.6627C18.9958 22.8322 18.9499 22.9983 18.8653 23.1452C18.7806 23.2922 18.66 23.4152 18.5147 23.5027C15.7936 25.1413 12.6764 26.0049 9.5 26C6.204 26 3.11867 25.088 0.486667 23.5027C0.341135 23.4153 0.220223 23.2924 0.135316 23.1455C0.0504085 22.9985 0.00430029 22.8324 0.00133324 22.6627L0 22.5ZM22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6C20.7348 6 20.4804 6.10536 20.2929 6.29289C20.1054 6.48043 20 6.73478 20 7V10H17C16.7348 10 16.4804 10.1054 16.2929 10.2929C16.1054 10.4804 16 10.7348 16 11C16 11.2652 16.1054 11.5196 16.2929 11.7071C16.4804 11.8946 16.7348 12 17 12H20V15C20 15.2652 20.1054 15.5196 20.2929 15.7071C20.4804 15.8946 20.7348 16 21 16C21.2652 16 21.5196 15.8946 21.7071 15.7071C21.8946 15.5196 22 15.2652 22 15V12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H22V7Z"/>
  </svg>
)
const familyIcon=(
  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
  <path fillRule="evenodd" clipRule="evenodd" d="M11 9C11 7.67392 11.5268 6.40215 12.4645 5.46447C13.4021 4.52678 14.6739 4 16 4C17.3261 4 18.5979 4.52678 19.5355 5.46447C20.4732 6.40215 21 7.67392 21 9C21 10.3261 20.4732 11.5979 19.5355 12.5355C18.5979 13.4732 17.3261 14 16 14C14.6739 14 13.4021 13.4732 12.4645 12.5355C11.5268 11.5979 11 10.3261 11 9ZM21 13C21 11.9391 21.4214 10.9217 22.1716 10.1716C22.9217 9.42143 23.9391 9 25 9C26.0609 9 27.0783 9.42143 27.8284 10.1716C28.5786 10.9217 29 11.9391 29 13C29 14.0609 28.5786 15.0783 27.8284 15.8284C27.0783 16.5786 26.0609 17 25 17C23.9391 17 22.9217 16.5786 22.1716 15.8284C21.4214 15.0783 21 14.0609 21 13ZM3 13C3 11.9391 3.42143 10.9217 4.17157 10.1716C4.92172 9.42143 5.93913 9 7 9C8.06087 9 9.07828 9.42143 9.82843 10.1716C10.5786 10.9217 11 11.9391 11 13C11 14.0609 10.5786 15.0783 9.82843 15.8284C9.07828 16.5786 8.06087 17 7 17C5.93913 17 4.92172 16.5786 4.17157 15.8284C3.42143 15.0783 3 14.0609 3 13ZM8.41333 20.156C9.2266 18.8814 10.3481 17.8323 11.6742 17.1059C13.0002 16.3795 14.488 15.9991 16 16C17.2664 15.9988 18.5188 16.2652 19.6752 16.7815C20.8316 17.2979 21.8658 18.0527 22.7103 18.9965C23.5548 19.9403 24.1904 21.0518 24.5755 22.2582C24.9607 23.4646 25.0867 24.7388 24.9453 25.9973C24.928 26.1537 24.8741 26.3038 24.7879 26.4353C24.7018 26.5669 24.5857 26.6763 24.4493 26.7547C21.8781 28.23 18.9645 29.0043 16 29C12.9267 29 10.04 28.184 7.55067 26.7547C7.41425 26.6763 7.29824 26.5669 7.21206 26.4353C7.12587 26.3038 7.07195 26.1537 7.05467 25.9973C6.83074 23.9528 7.30995 21.893 8.41333 20.1573V20.156Z" />
  <path d="M6.77611 19.0059C5.46111 21.0357 4.84845 23.4409 5.03211 25.8525C4.23145 25.7311 3.44398 25.5347 2.68011 25.2659L2.52677 25.2125C2.38997 25.164 2.27018 25.0768 2.18191 24.9615C2.09364 24.8463 2.04068 24.7079 2.02944 24.5632L2.01611 24.4019C1.96225 23.7325 2.04378 23.0591 2.25585 22.4219C2.46791 21.7847 2.80616 21.1968 3.25041 20.6932C3.69465 20.1896 4.2358 19.7806 4.84155 19.4907C5.44729 19.2008 6.10523 19.0359 6.77611 19.0059ZM26.9681 25.8525C27.1518 23.4409 26.5391 21.0357 25.2241 19.0059C25.895 19.0359 26.5529 19.2008 27.1587 19.4907C27.7644 19.7806 28.3056 20.1896 28.7498 20.6932C29.1941 21.1968 29.5323 21.7847 29.7444 22.4219C29.9564 23.0591 30.038 23.7325 29.9841 24.4019L29.9708 24.5632C29.9593 24.7077 29.9062 24.8458 29.818 24.9608C29.7297 25.0758 29.61 25.1627 29.4734 25.2112L29.3201 25.2645C28.5641 25.5312 27.7788 25.7299 26.9681 25.8525Z" />
  </svg>
)
const profileIcon=(
  <svg width="22" height="28" viewBox="0 0 22 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
      
  <path fillRule="evenodd" clipRule="evenodd" d="M4.99883 6C4.99883 4.4087 5.63097 2.88258 6.75619 1.75736C7.8814 0.632141 9.40753 0 10.9988 0C12.5901 0 14.1162 0.632141 15.2415 1.75736C16.3667 2.88258 16.9988 4.4087 16.9988 6C16.9988 7.5913 16.3667 9.11742 15.2415 10.2426C14.1162 11.3679 12.5901 12 10.9988 12C9.40753 12 7.8814 11.3679 6.75619 10.2426C5.63097 9.11742 4.99883 7.5913 4.99883 6ZM0.000159205 24.8067C0.0451196 21.9193 1.22368 19.1654 3.28144 17.1394C5.3392 15.1135 8.11111 13.9779 10.9988 13.9779C13.8865 13.9779 16.6585 15.1135 18.7162 17.1394C20.774 19.1654 21.9525 21.9193 21.9975 24.8067C22.001 25.001 21.9477 25.1922 21.8442 25.3568C21.7407 25.5214 21.5915 25.6522 21.4148 25.7333C18.147 27.2316 14.5937 28.0049 10.9988 28C7.28416 28 3.75483 27.1893 0.582826 25.7333C0.40614 25.6522 0.256926 25.5214 0.153442 25.3568C0.0499577 25.1922 -0.00330911 25.001 0.000159205 24.8067Z" />
  
  </svg>
)
const CurrentProfile=()=>{
  const name='Erewharighe Oghenekevwe Ezra', avatarImg='', id='MR068443'
  //get above data from api/context later
  return(
    <div className='text-head centered flex-col font-medium gap-1'>
      <Avatar size='xl' img={avatarImg}/>
      <p className='text-[16px]'>{name}</p>
      <p className='text-sm'>{id}</p>
    </div>
  )
}



type optionsProps = {link:string,desc:string,title:string,icon:React.JSX.Element}

const views=['new','manage'] as const

const regOpts:optionsProps[]=[
  {
    link: '/patients/category',
    desc: 'Do a seamless health care service from our system and get a percent.',
    title: 'Search for an existing Patient',
    icon: searchIcon
  },
  {
    link: '/patients/new',
    desc: 'Grab the opportunity to use office HMO, NHIS, Youth service',
    title: 'Add New Patient',
    icon: profilePlusIcon
  },
]
const newOptions:optionsProps[]=[
  {
    link:'/dashboard/registration/corportate',
    desc:'Grab the opportunity to use office HMO, NHIS, Youth service',
    title:'Corporate',
    icon:profilePlusIcon
  },
  {
    link: '/dashboard/registration/corportate',
    desc: 'Get the family account details to use the service with less offer',
    title: 'Family',
    icon: familyIcon
  },
  {
    link:'/patients/registration/',
    title:'Private',
    desc:'Do a seamless health care service from our system and get a percent.',
    icon:profileIcon
  },
  {
    link:'/patients/registration/',
    title:'Non Patient',
    desc:'Patient that need not to see the hospital doctors but essential to other departments',
    icon:profileIcon
  },
]

const data:Record<
  typeof views[number],
  {heading:string,subtext:string,options:optionsProps[]}
>={
  manage:{
    heading: 'What are your options for the patient today?',
    subtext: 'Tell us the category the patient falls into to continue registration',
    options:regOpts
  },
  new:{
    heading:'What’s the patient category',
    subtext:'Tell us the category the patient falls into to continue registration',
    options:newOptions
  },
  
}
const Option=({link,desc,title,icon}:optionsProps)=>(
  <Link href={link} className='w-[340px] max-w-[340px] rounded-[12px] flex flex-col gap-2 pt-[120px] px-5 pb-[48px] group hover:text-white hover:bg-base bg-light items-center transition-colors text-head'>
      <span className='flex size-12 w-min'>{icon}</span>
      <h3 className="text-xl font-medium ">{title}</h3> 
      <p className="text-sm font-normal group-hover:text-white text-center transition-colors text-para">{desc}</p>
  </Link>
)

export default function LandingPage ({params:{view}}:{params:{view:typeof views[number]}}) {
  let {options,heading,subtext}=data[view]
  return (
    <main className='mx-auto relative  mt-[60px] h container w-full centered'>
      <button className='left-0 top-0 absolute size-12 rounded-full centered bg-[#F3F3F1] text-black'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </button>
      <div>
        <div className='flex flex-col m-auto items-center justify-center p-5 w-full'>
            {/* {view==='register'&&<CurrentProfile />} */}
            <h1 className="w-max text-[28px] font-bold">{heading}</h1>
            <p className="text-sm text-grey">{subtext}</p>
            {/* {view==='category'&&<div className='py-5'>
              <CurrentProfile />
            </div>} */}

        </div>
        <div className="h-full w-full flex items-center justify-center gap-4 flex-wrap">
           {options.map(opt=><Option key={opt.title} {...opt}/>)}
        </div>
      </div>

    </main>
  )
}

export async function generateStaticParams() {
  return views.map(view =>({view}))
}
 

