'use client'
import { AvatarProps,  avatarSizeMap,  AvatarSizes,  BillingTableProps,  ButtonProps,  GreetingsSectionProps,  NotificationType,  ReactChildren, StatsProps, TableRowProps, Titles } from "@/types";
import { ImageOptimizerCache } from "next/dist/server/image-optimizer";
import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";



const Button=forwardRef(({children,onClick,icons,leftIcon,rightIcon,noIcon=false, both,type,size}:ButtonProps,ref?:ForwardedRef<HTMLButtonElement>)=>{
  const icon=(
    icons==='plus'?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
    :icons==='check'?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
    :icons)   

  return(
    <button ref={ref} onClick={onClick} className={
      `flex btn ${type} ${size} items-center`
    }>
      {(both||(!noIcon&&leftIcon))&&icon}
      {children}
      {(both||(!noIcon&&rightIcon))&&icon}
    </button>
  )
})
const Avatar=({size,img}:AvatarProps)=>{
  const sizeValue=avatarSizeMap[size]
  return(
    <div style={{width:sizeValue+'px',height:sizeValue+'px',minWidth:sizeValue+'px',minHeight:sizeValue+'px'}} className="bg-base/40 rounded-full flex aspect-square overflow-hidden">
      <Image src={'/vercel.svg'} width={sizeValue} height={sizeValue} alt='avatar' className="top-0 left-0 abolute object-cover w-full h-full "/>
    </div>
  )
}
const PercentNotice=({percent=0, period = 'month'})=>{
  const changes=!percent?'No changes':(percent)>=0?'Increased':'decreased'
  return(
    <div className= {`text-xs flex gap-1 ${percent&&(changes==='Increased'?'text-positive':'text-error')}`} >
      <span className={`${percent&&(changes==='Increased'?'bg-positive/15':'bg-error/15')} rounded-[4px] px-[6px] py-[2x]`} >{changes==='decreased'?'-':'+'}{Math.abs(percent)}%</span>
      <span>{changes} this {period}</span>
    </div>
  )
}
const TableRow=({patientImg,patientName,EMRcode,department,bill,outstanding,condition,Category}:TableRowProps)=>{
  const columns={patient:{img:patientImg,name:patientName},department,EMRcode,bill,outstanding,condition,Category}
  return(
    <tr className="text-sm text-para font-normal border-b border-solid  h-[52px]">
      {Object.keys(columns).map(key=>{
        const columnName=key as keyof typeof columns
        const value = columns[columnName]
        return(
          
          <td className="pr-10" key={columnName}>
            <div className='flex gap-2 items-center'>
            {
              columnName==='patient'?
                <>
                  <Avatar img={columns.patient.img} size='sm'/>
                  <span>{columns.patient.name}</span>
                </>
              :columnName==='outstanding'?
                <span className={` px-[6px] py-[2px] ${value?"rounded-md bg-error/15 text-error ":''}`}>{Number(value)>0?value as number:'No'} Outstanding bill{Number(value)>1?'s':''}</span>
              :columnName==='condition'?
                <div className={`
                  status
                  flex gap-2
                 
                  ${value}
                `}>
                  <span className= 'icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                  </span>
                  <span>{value as string}</span>
                </div>
              :<span>{value as string}</span>
            }
            </div>
          </td>
        )
      })}
    </tr>
  )
}
const BillingTable=({rows}:BillingTableProps)=>{
  const headings=[
    'Patient full name',
    'Heading Department',
    'EMR Code',
    'Billing amount',
    'Previous bill notice',
    'Condition',
    'Category'
  ]

  const TableHeading='Incoming Billing Patients'

  return(
    <div className="flex flex-col w-full">
      <div className="flex gap-3">
        <h6 className="flex-1 text-dark font-medium text-base">{TableHeading}</h6>
        <Button size="md" icons='plus' leftIcon type="ghost">
          <input className="" placeholder="Search"/>
        </Button>
        <Button size="md" icons='plus' leftIcon type="ghost">
          Sort By Category
        </Button>
        <Button size="md" icons='plus' leftIcon type="ghost">
          Filter
        </Button>
      </div>
      <table>
        <tr className="text-left h-[52px] font-400 border-solid border-b items-center  text-grey ">
          {headings.map(heading=>
            <th key={heading}>{heading}</th>
            )}
        </tr>
        {rows.map(rowData=><TableRow key={rowData.EMRcode} {...rowData}/>)}
      </table>
    </div>
  )
}

const Notification=({text='',priority}:NotificationType)=>(
  <div className={`flex text-underline warning Mild text ${priority}`}>
    <span className= 'icon'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    </span>
    <p className="pl-2 underline">{text}</p>
  </div>
)
const GreetingContainer=({name,image,role,notification}:GreetingsSectionProps)=>{
  const hrs=new Date().getHours()
  
  return(
  <section className="container flex w-full items-center">

    <div className="flex flex-col flex-1">
      <p className="font-medium pb-3 text-grey text-lg">Good {hrs<12?'Morning':hrs<4?'Afternoon':'Evening'},</p>
      <div className="flex gap-[19px] pb-2 items-center">
        <Avatar img={image}  size='md'/>
        <h2 className="text-[28px] font-bold text-dark">{name}<span className="ml-1 text-xs text-grey">({Titles[role]})</span></h2>
      </div>
      <p className="text-sm font-normal text-grey">You are logged in as a <span className="font-bold text-dark">{role}</span> to oversee the registration of Out-Patients. We wish you all the best today.</p>
    </div>
    {notification&&<Notification {...notification}/>}
    </section>
    )
}
const SideBarItem=({title='',active=false,dropdown=false, icon='/Gps--Streamline-Solar.svg'})=>{
  return(<div className='group px-5 gap-4 items-center flex relative text-dark text-sm font-medium'>
    {active&&<div className="absolute left-0 h-5 w-1 bg-dark rounded-tr-sm rounded-br-sm"/>}
    <div className={`group-hover:opacity-60 ${active&&'bg-white'} rounded-md px-2 py-3 items-center flex gap-4`}>
      <span className="size-5 w-5 h-5">
        {typeof icon==='string'?
          <Image width={20} height={20} alt={title+"-icon"} src={icon}/>:icon}
      </span>
      <span className="flex-1">{title}</span>
      {dropdown&&
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg> }
    </div>
  </div>)
}

const Stats=({icon ,title ,amt,percent}:StatsProps)=>(
  <div className="border-solid border-t gap-3 pt-3 w-max pr-2">
    <div className="font-medium flex gap-1"> 
      {icon?typeof icon === 'string'?
        <Image width={14} height={14} src={icon} alt={title+' icon'}/>:
        icon:
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
        </svg>}
      <span>{title}</span>
    </div>
    <p className="font-bold text-2xl pt-4 pb-3">{amt}</p>
    <PercentNotice percent={percent}/>
  </div>
) 

export default function Home() {

  const tableData: TableRowProps[] = [
    {
      patientName: 'Abimbola Abiodun',
      patientImg: '',
      department: 'Dentistry',
      bill: '8,100',
      outstanding: 0,
      condition: 'Mild',
      Category: 'Adult',
      EMRcode: 'MR005312',
    },
    {
      patientName: 'Ebiere Aderonke',
      patientImg: '',
      department: 'Paediatrics',
      bill: '8,100',
      outstanding: 0,
      condition: 'Mild',
      Category: 'Adult',
      EMRcode: 'MR005312',
    },
    {
      patientName: 'Egbochukwu Omawunmi',
      patientImg: '',
      department: 'Gynecology',
      bill: '27,900',
      outstanding: 0,
      condition: 'Mild',
      Category: 'Adult',
      EMRcode: 'MR005312',
    },
    {
      patientName: 'Aderinsola Yusuf',
      patientImg: '',
      department: 'Dentistry',
      bill: '8,100',
      outstanding: 0,
      condition: 'Mild',
      Category: 'Adult',
      EMRcode: 'MR005312',
    },
    {
      patientName: 'Erewharighe Oghenekevwe Ezra',
      patientImg: '',
      department: 'Obstetrics and gynaecology',
      bill: '140.00',
      outstanding: 1,
      condition: 'Severe',
      Category: 'Adult',
      EMRcode: 'MR005843',
    },
    {
      patientName: 'Samuel Titi',
      patientImg: '',
      department: 'Family medicine',
      bill: '8,100',
      outstanding: 0,
      condition: 'Mild',
      Category: 'Adult',
      EMRcode: 'MR005312',
    },
    {
      patientName: 'Aligbe Jolayemi',
      patientImg: '',
      department: 'Dentistry',
      bill: '8,100',
      outstanding: 0,
      condition: 'Mild',
      Category: 'Adult',
      EMRcode: 'MR005312',
    },
    {
      patientName: 'Habeeb Fatima',
      patientImg: '',
      department: 'Family medicine',
      bill: '8,100',
      outstanding: 0,
      condition: 'Mild',
      Category: 'Adult',
      EMRcode: 'MR005312',
    },
  ];
  const avatarSizes=['xs','sm',"md",'lg','xl','2xl','3xl','4xl'] as AvatarSizes[]
  
  const Container=({children,bordered=false,className}:{className?:string, bordered?:boolean,children:React.ReactNode})=>(
    <section className={`${className} w-max container px-6 py-4 rounded-2xl border-dashed  ${bordered&&'border'} border-[#9747FF]`}>
      {children}
    </section>
  )
  return (
    <main className="container px-2 py-40 flex flex-col gap-12 bg-slate-50">
      
      <Container >
        <TableRow{...tableData[0]}/>
      </Container>
      
      <Container>
        <BillingTable rows={tableData}/>
      </Container>
        
      <Container bordered>
        <GreetingContainer image="" name="Toyin Jummia Tobechukwu" role="Doctor" notification={{
          text:'Complete your profile (54% Done)',
          priority:'Mild'
        }}/>
      </Container>

      <Container bordered className="container gap-6 flex items-center">
        {(avatarSizes).map(size=>
            <Avatar img="" key={size} size={size}/>
        )}
      </Container>
      <Container>
        <Stats title="Drugs Purchased" percent={-13} amt={3090}/>
      </Container>
      <Container bordered  className="flex gap-6">
        <PercentNotice percent={-13}/>
        <PercentNotice percent={81}/>
      </Container>
      <Container bordered>
        <SideBarItem active title="Patient Registration" dropdown/>
        <SideBarItem title="Patient Registration" dropdown/>
      </Container>
      <Container bordered className="buttons items-start flex flex-col gap-6 ">
        <Button size="xs" icons='plus' type="primary" both >Content</Button>
        <Button size="sm" icons='plus' type="primary" both >Content</Button>
        <Button size="md" icons='plus' type="primary" both >Content</Button>
        <Button size="lg" icons='check' type="primary" both >Content</Button>
        <Button size="xl" icons='check' type="primary" both >Content</Button>
        <Button size="xs" icons='plus' type="ghost" both >Content</Button>
      </Container>
    </main>
  );
}
