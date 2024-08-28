import Avatar from "@/components/avatar";
import BillingTable, { TableRow } from "@/components/billing-table";
import Button from "@/components/button";
import Greetings from "@/components/greetings";
import PercentNotice from "@/components/percent-notice";
import Stats from "@/components/purchase-stats";
import SideBarItem from "@/components/sidebar-item";
import { TableRowProps, AvatarSizes } from "@/types";
import Container from "@/components/bordered-container";


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
  
  
  return (
    <main className="container px-2 py-40 flex flex-col gap-12 bg-slate-50">
      
      <Container >
        <TableRow {...tableData[0]}/>
      </Container>
      
      <Container>
        <BillingTable rows={tableData}/>
      </Container>
        
      <Container bordered>
        <Greetings image="" name="Toyin Jummia Tobechukwu" role="Doctor" notification={{
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
