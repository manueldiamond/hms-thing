import { InputProps } from '@/types'
import { z, ZodSchema } from 'zod';

export const baseRegURL='/patients/registration/'
export const regsections =  [
    { text: 'Patient Case', link: 'patient-case', displayHeading: 'Patient can be seen as' },
    { text: 'Patient Basic Information', link: 'patient-basic-information', displayHeading: '' },
    { text: 'Contact Information', link: 'contact-information', displayHeading: '' },
    { text: 'Visiting Information', link: 'visiting-information', displayHeading: '' },
    { text: 'Capture Photo', link: 'capture-photo', displayHeading: 'Capture Patient Photo' },
    { text: 'Confirmation', link: 'confirmation', displayHeading: '' }
  ] as const

  export type RegSection=typeof regsections[number]['text']
  export type RegSectionLink=typeof regsections[number]['link']
  export const getRegSectionHeading=(searchlLink:RegSectionLink)=>{
    const section = regsections.find(({link})=>link===searchlLink)
    return section?.displayHeading?section.displayHeading:section?.text
}

const transformToBoolean = (val: any): boolean => {
  if (typeof val === 'string') {
    return val.toLowerCase() === 'yes';
  }
  return Boolean(val);
};

export const RegSchemas: Partial<Record<RegSectionLink, ZodSchema<any>>> = {
  "patient-case": z.object({
    case: z.string({message:"required" }),
    case2: z.string( { message: 'Also required' }),
  }),
  'patient-basic-information': z.object({
    title: z.string( { message: 'Title is required' }),
    vipPatient: z.string({ required_error: 'VIP Patient status is required' }),
    firstName: z.string( { message: 'First name is required' }),
    middleName: z.string().optional(), // Optional field
    lastName: z.string( { message: 'Last name is required' }),
    mobileNumber: z.string( { message: 'Mobile number is required' }),
    additionalMobileNumber: z.string().optional(), // Optional field
    emailAddress: z.string({ message: 'Email address is required' }).email({ message: 'Invalid email address' }),
    dateOfBirth: z.string({ message: 'Date of birth is required' }),
    maritalStatus: z.string( { message: 'Marital status is required' }),
    gender: z.string( { message: 'Gender is required' }),
    bloodGroup: z.string( { message: 'Blood group is required' }),
    genotype: z.string( { message: 'Genotype is required' }),
    modeOfCommunication: z.string( { message: 'Mode of communication is required' }),
    sendMobileAccessCreation: z.string({ message: 'Send Mobile Access Creation status is required' }),
  }),
  'contact-information':z.object({
    homeAddress: z.string(  { message: 'Home address is required' }),
    city: z.string(  { message: 'City is required' }),
    state: z.string(  { message: 'State is required' }),
    nationality: z.string(  { message: 'Nationality is required' }),
    religion: z.string(  { message: 'Religion is required' }),
    nextOfKinName: z.string(  { message: 'Next of Kin Name is required' }),
    nextOfKinAddress: z.string(  { message: 'Next of Kin Address is required' }),
    nextOfKinRelation: z.string(  { message: 'Next of Kin Relation is required' }),
    nextOfKinPhoneNo: z.string(  { message: 'Next of Kin Phone Number is required' }),
    nextOfKinOccupation: z.string(  { message: 'Next of Kin Occupation is required' }),
  }),
  'capture-photo': z.object({}),
  'visiting-information': z.object({})
};

export const RegInputs:Partial<Record<RegSectionLink,InputProps[]>>={
  "patient-case":[
    {
      type:'radio',
      placeholder:"Normal Registration",
      options:[
        'Medical Legal case',
        "Normal Registration",
        'Emergency patient',
      ],
      name:'case',
      label:''
    },
    {
      label:'Select registration',
      type:'option',
      placeholder:"Normal Registration",
      options:[
        'Medical Legal case',
        "Normal Registration",
        'Emergency patient',
      ],
      name:'case2'
    }
  ],
  'patient-basic-information':[
      {
        label: "Title",
        type: "option",
        name: "title",
        options: ["Mr.", "Mrs.", "Miss"],
        placeholder: "Please Select",
      },
      {
        label: "VIP Patient",
        type: "radio",
        name: "vipPatient",
        options: ["Yes", "No"],
      },
      {
        label: "First Name",
        type: "text",
        name: "firstName",
        placeholder: "Enter your first name",
      },
      {
        label: "Middle Name (Optional)",
        type: "text",
        name: "middleName",
        placeholder: "Enter your middle name",
      },
      {
        label: "Last Name",
        type: "text",
        name: "lastName",
        placeholder: "Enter your last name",
      },
      {
        label: "Mobile Number",
        type: "tel",
        name: "mobileNumber",
        placeholder: "+234",
      },
      {
        label: "Additional Mobile Number",
        type: "tel",
        name: "additionalMobileNumber",
        placeholder: "+234",
      },
      {
        label: "Email Address",
        type: "email",
        name: "emailAddress",
        placeholder: "Enter your Email Address",
      },
      {
        label: "Date of Birth",
        type: "date",
        name: "dateOfBirth",
        placeholder: "DD-MM-YYYY",
      },
      {
        label: "Marital Status",
        type: "option",
        name: "maritalStatus",
        options: ["Single", "Married", "Divorced", "Widowed"],
        placeholder: "Please Select",
      },
      {
        label: "Gender",
        type: "option",
        name: "gender",
        options: ["Male", "Female"],
        placeholder: "Please Select",
      },
      {
        label: "Blood Group",
        type: "option",
        name: "bloodGroup",
        options: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
        placeholder: "Please Select",
      },
      {
        label: "Genotype",
        type: "option",
        name: "genotype",
        options: ["AA", "AS", "SS",],
        placeholder: "Please Select",
      },
      {
        label: "Mode of Communication",
        type: "option",
        name: "modeOfCommunication",
        options: ["SMS", "Email", "Call"],
        placeholder: "Please Select",
      },
      {
        label: "Send Mobile Access Creation",
        type: "radio",
        name: "sendMobileAccessCreation",
        options: ["Yes", "No"],
      },
  ],
  'contact-information': [
    {
      name: "homeAddress",
      label: "Home Address",
      placeholder: "04, Bode-Thomas Street",
      type: "text",
    },
    {
      name: "city",
      label: "City",
      placeholder: "Enter your City",
      type: "text",
    },
    // {
    //   name: "country",
    //   label: "Country",
    //   type: "option",
    //   options: [
    //     { value: "NG", label: "Nigeria" },
    //     { value: "USA", label: "United States of America" },
    //   ],
    // },
    {
      name: "state",
      label: "State",
      type: "option",
      options: [ "Lagos","Abuja" ],
      
    },
    {
      name: "nationality",
      label: "Nationality",
      type: "option",
      options: [
        { value: "", label: "Please Select" },
        { value: "NG", label: "Nigerian" },
        { value: "USA", label: "American" },
      ],
    },
    {
      name: "religion",
      label: "Religion",
      type: "option",
      options: ["Christian","Muslim"],
    },
    {
      name: "nextOfKinName",
      label: "Next of Kin Name",
      placeholder: "Enter full name",
      type: "text",
    },
    {
      name: "nextOfKinAddress",
      label: "Next of Kin Address",
      placeholder: "Enter full address",
      type: "text",
    },
    {
      name: "nextOfKinRelation",
      label: "Next of Kin Relation",
      placeholder: "Enter relationship",
      type: "text",
    },
    {
      name: "nextOfKinPhoneNo",
      label: "Next of Kin Phone Number",
      placeholder: "Enter Phone Number",
      type: "tel",
    },
    {
      name: "nextOfKinOccupation",
      label: "Next of Kin Occupation",
      placeholder: "Enter Occupation",
      type: "text",
    },
  ],
  'visiting-information': [
    {
      name: "visitingId",
      label: "Visiting ID",
      placeholder: "Enter Visiting ID",
      type: "text",
    },
    {
      name: "department",
      label: "Department",
      placeholder: "Enter Department",
      type: "text",
    },
    {
      name: "consultationType",
      label: "Consultation Type",
      placeholder: "Enter Consultation Type",
      type: "text",
    },
    {
      name: "referredBy",
      label: "Referred by",
      type: "option",
      options: [
        { value: "", label: "Select referred doctor" },
        // Add other doctor options here if needed
      ],
    },
    {
      name: "visitingType",
      label: "Visiting Type",
      type: "option",
      options: [
        { value: "", label: "Please Select" },
        { value: "firstTime", label: "First time visit" },
      ],
    },
    {
      name: "transferredFrom",
      label: "Transferred from",
      placeholder: "Enter previous hospital",
      type: "text",
    },
    {
      name: "consultationDate",
      label: "Consultation Date",
      placeholder: "MM/DD/YYYY",
      type: "date",
    },
    {
      name: "consultationFee",
      label: "Consultation Fee",
      placeholder: "Enter Fee",
      type: "text",
    },
    {
      name: "consultationTime",
      label: "Consultation Time",
      placeholder: "Enter Time",
      type: "time",
    },
    {
      name: "consultationComplaints",
      label: "Consultation Complaints",
      placeholder: "Enter Complaints",
      type: "text",
    },
  ],
}
