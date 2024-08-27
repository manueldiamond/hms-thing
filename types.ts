import { title } from "process";
import React, { HTMLInputTypeAttribute } from "react";

export type Priorities='Mild' | 'Severe' | 'Normal';


export type ReactChildren={
    children?:React.ReactNode;
}


export type AvatarSizes = 'xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export const avatarSizeMap: Record<AvatarSizes,number> = {
  xs: 20,
  sm: 24,
  md: 36,
  lg: 40,
  xl: 48,
  '2xl': 56,
  '3xl': 72,
  '4xl': 80,
};
export type AvatarProps={

  /**
   * * xs: 20px,
   * * sm: 24px,
   * * md: 36px,
   * * lg: 40px,
   * * xl: 48px,
   * * 2xl: 56px,
   * * 3xl: 72px,
   * * 4xl: 80px,
   */
    size:AvatarSizes
    
    /** path to the avatar image */
    img?:string;
}


type Categories='Adult'|'Children'
export  type TableRowProps = {
    patientName: string;
    patientImg:string;
    department: string;
    EMRcode:`MR${number}`;
    bill: string;
    outstanding: number;
    condition: Priorities
    Category: Categories;
  };
  
export type BillingTableProps = {
    rows:TableRowProps[]
};

/**correspond to css classess .btn.xs,.btn.sm ... and the like**/
type Sizes=|'xs'|'sm'|'md'|'lg'|'xl'

export type ButtonProps = {
  children?: React.ReactNode;

  /**
   * Function to be called when the button is clicked.
   */
  onClick?: (e?: any) => any;

  /**
   * Can be 'plus', 'check'
   * * OR: a custom element;icon={<div ./>..}
   */
  icons?: 'plus' | 'check' | React.JSX.Element;

  /**
   * If true, show the left icon
   */
  leftIcon?: boolean;

  /**
   * If true, show the right icon
   */
  rightIcon?: boolean;

  /**
   * removes all icons
   */
  noIcon?: boolean;

  /**
   * If true, both left and right icons will be displayed
   */
  both?: boolean;

  /**
   * The style type of the button, 'primary' or 'ghost'.
   */
  type?: 'primary' | 'ghost';

  /**
   * Size of the button, defined in the Sizes type.
   */
  size?: Sizes;
};


export type Roles = |'Doctor'|'Nurse'
export const Titles:Record<Roles,string>= {
  'Doctor':'MBBS',
  'Nurse':'NS'
}

export type NotificationType={
  text:string;
  priority:Priorities;
}
export type GreetingsSectionProps=
{
  name:string,
  image:string,
  role:Roles,
  notification:NotificationType;
}
export type StatsProps={
  icon?:string|React.JSX.Element;
  title:string
  amt:number|string,
  percent:number,
}

export type OptionType=
  |string
  |Record<'value'|'label'|string,any>
export type InputProps={
  options?:OptionType[],
  type:HTMLInputTypeAttribute
  name:string
  placeholder?:any
  label?:string;
}
