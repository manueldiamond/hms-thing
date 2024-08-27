"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    sponsor: yup.string().required("*"),
    healthplan: yup.string().required("*"),
    insurance: yup.string().required("*"),
    sponsortype: yup.string().required("*"),
    policyno: yup.string().required("*"),
    companyid: yup.string().required("*"),
    limit: yup.string().required("*"),
    deductible: yup.string().required("*"),
    hplimit: yup.string().required("*"),
    authnumber: yup.string().required("*"),
  });

  export default function Sponsorship (){
    const {
      register,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

    return(
        <>

  <div className="w-full flex">
     <h3 className="text-left font-Inter mb-8 border-none px-6 py-4 bg-gray-100 w-full">
       Corporate Health Sponsor Details
     </h3>
     <h3 className="font-Inter mb-8 border-none px-6 py-4 bg-gray-100 w-3/4 text-right text-[#075D24]">
       + Request new sponsor
     </h3>
   </div>
   <div className="flex gap-4 w-full">
     <div className="flex flex-col flex-1">
       <label className="text-left font-medium" htmlFor="sponsor">
         Primary Sponsor:
         <span className="error text-[#A8200D]">
           {errors.sponsor?.message}
         </span>
      </label>
       <select
        className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
        id="sponsor"
        name="sponsor"
        {...register("sponsor")}
      >
        <option value="">Please Select</option>
        <option value="hmo">HMO</option>
        <option value="cor">Corporate</option>
      </select>
    </div>

    <div className="flex flex-col flex-1">
      <label className="text-left font-medium" htmlFor="healthplan">
        Health Plan Type:
        <span className="error text-[#A8200D]">
          {errors.healthplan?.message}
        </span>
      </label>
      <select
        className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
        id="healthplan"
        name="healthplan"
        {...register("healthplan")}
      >
        <option value="">Please Select</option>
        <option value="fam">HMO Family</option>
        <option value="ind">HMO Individual</option>
      </select>
    </div>
  </div>
  <div className="flex gap-4 w-full">
    <div className="flex flex-col flex-1">
      <label className="text-left font-medium" htmlFor="insurance">
        Insurance Company:
        <span className="error text-[#A8200D]">
          {errors.insurance?.message}
        </span>
      </label>
      <select
        className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
        id="insurance"
        name="insurance"
        {...register("insurance")}
      >
        <option value="">Please Select</option>
        <option value="rel">Reliance HMO</option>
        <option value="hal">Hallmark HMO</option>
      </select>
    </div>

    <div className="flex flex-col flex-1">
      <label className="text-left font-medium" htmlFor="sponsortype">
        Health Plan Sponsor Type:
        <span className="error text-[#A8200D]">
          {errors.sponsortype?.message}
        </span>
      </label>
      <select
        className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
        id="sponsortype"
        name="sponsortype"
        {...register("sponsortype")}
      >
        <option value="">Please Select</option>
        <option value="Pre">HMO Premium</option>
        <option value="Gol">HMO Gold</option>
      </select>
    </div>
  </div>

  <div className="flex gap-4 w-full">
    <div className="flex flex-col w-1/2">
      <label className="text-left font-medium" htmlFor="policyno">
        Policy No:
        <span className="error text-[#A8200D]">
          {errors.policyno?.message}
        </span>
      </label>
      <input
        className="text-left  w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
        type="text"
        id="policyno"
        name="policyno"
        placeholder="Enter your Policy Number"
        {...register("policyno")}
      />
    </div>
    <div className="flex flex-col flex-1">
      <label className="text-left font-medium" htmlFor="companyid">
        Company ID:
        <span className="error text-[#A8200D]">
          {errors.companyid?.message}
        </span>
      </label>
      <input
        className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
        type="text"
        id="companyid"
        name="companyid"
        placeholder="Enter your Company ID"
        {...register("companyid")}
      />
    </div>
  </div>

  <div className="flex gap-4 w-full">
    <div className="flex flex-col flex-1">
      <label className="text-left font-medium" htmlFor="limit">
        Visit Sponsor Monthly Limit:
        <span className="error text-[#A8200D]">
          {errors.limit?.message}
        </span>
      </label>
      <input
        className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
        type="text"
        id="limit"
        name="limit"
        {...register("limit")}
      />
    </div>

    <div className="flex flex-col flex-1">
      <label className="text-left font-medium" htmlFor="deductible">
        Visit Deductible Amount:
        <span className="error text-[#A8200D]">
          {errors.deductible?.message}
        </span>
      </label>
      <input
        className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
        type="text"
        id="deductible"
        name="deductible"
        {...register("deductible")}
      />
    </div>
  </div>

  <div className="flex gap-4 w-full">
    <div className="flex flex-col flex-1">
      <label className="text-left font-medium" htmlFor="hplimit">
        Health Plan Limit:
        <span className="error text-[#A8200D]">
          {errors.hplimit?.message}
        </span>
      </label>
      <select
        className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
        id="hplimit"
        name="hplimit"
        {...register("hplimit")}
      >
        <option value="">Please Select</option>
        <option value="mr">Once-a-month</option>
        <option value="mrs">Twice-a-month</option>
        <option value="miss">Thrice-a-month</option>
      </select>
    </div>
    <div className="flex flex-col flex-1">
      <label className="text-left font-medium" htmlFor="authnumber">
        Authorization Number:
        <span className="error text-[#A8200D]">
          {errors.authnumber?.message}
        </span>
      </label>
      <input
        className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
        type="text"
        id="authnumber"
        name="authnumber"
        placeholder="Enter Authorization Number"
        {...register("authnumber")}
      />
    </div>
  </div>
        </>
    )}
         