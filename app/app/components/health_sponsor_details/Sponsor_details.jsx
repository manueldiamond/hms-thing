"use client";
import React from "react";
import Button from "../button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Sponsor_details() {
  const router = useRouter();

  const schema = yup.object().shape({
    primarySponsor: yup.string().required("*"),
    insuranceCompany: yup.string().nullable().optional(),
    healthPlanType: yup.string().required("*"),
    healthPlanSponsorType: yup.string().required("*"),
    hmoNumber: yup.string().required("*"),
    companyId: yup.string().required("*"),
    visitSponsorMonthlyLimit: yup.number().required("*"),
    visitDeductibleAmount: yup.number().required("*"),
    healthPlanLimit: yup.string().required("*"),
    authorizationNumber: yup.number().required("*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log("function is working");
    console.log(data);
    try {
      const response = await axios.post(
        "http://192.168.2.24:8080/health-service/api/sponsorInformation/add-sponsor/1",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.data;
      if (response.data.status === 200) {
        router.push(
          "/landingpage/category/corporateregistration/contactinformation/triage"
        );
      } else {
        console.log(response);
      }
      console.log("Data sent successfully:", responseData);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <>
      <div>
        <form
          className="flex flex-col w-full p-[1.25rem] rounded-3xl items-center justify-center m-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-left font-Inter text-3xl mb-8">
            Sponsor Information
          </h1>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col">
              <label className="text-left font-medium" htmlFor="primarySponsor">
                Primary Sponsor:
                <span className="error text-[#A8200D]">
                  {errors.primarySponsor?.message}
                </span>
              </label>
              <select
                className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
                id="primarySponsor"
                name="primarySponsor"
                {...register("primarySponsor")}
              >
                <option value="">Please Select</option>
                <option value="hmo">HMO</option>
                <option value="corporate">Corporate</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                className="text-left font-medium"
                htmlFor="insuranceCompany"
              >
                Insurance Company:
                <span className="error text-[#A8200D]">
                  {errors.insuranceCompany?.message}
                </span>
              </label>
              <select
                className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
                id="insuranceCompany"
                name="insuranceCompany"
                {...register("insuranceCompany")}
              >
                <option value="">Please Select</option>
                <option value="alliance">Alliance</option>
                <option value="reliance">Reliance</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-left font-medium" htmlFor="healthPlanType">
                Health Plan Type:
                <span className="error text-[#A8200D]">
                  {errors.healthPlanType?.message}
                </span>
              </label>
              <select
                className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
                id="healthPlanType"
                name="healthPlanType"
                {...register("healthPlanType")}
              >
                <option value="">Please Select</option>
                <option value="family">HMO Family</option>
                <option value="individual">HMO Individual</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                className="text-left font-medium"
                htmlFor="healthPlanSponsorType"
              >
                Health Plan Sponsor Type:
                <span className="error text-[#A8200D]">
                  {errors.healthPlanSponsorType?.message}
                </span>
              </label>
              <select
                className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
                id="healthPlanSponsorType"
                name="healthPlanSponsorType"
                {...register("healthPlanSponsorType")}
              >
                <option value="">Please Select</option>
                <option value="Premium">HMO Premium</option>
                <option value="Gold">HMO Gold</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-left font-medium" htmlFor="hmoNumber">
                Policy No:
                <span className="error text-[#A8200D]">
                  {errors.hmoNumber?.message}
                </span>
              </label>
              <input
                className="text-left  w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                type="text"
                id="hmoNumber"
                name="hmoNumber"
                placeholder="Enter your Policy Number"
                {...register("hmoNumber")}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left font-medium" htmlFor="companyId">
                Company ID:
                <span className="error text-[#A8200D]">
                  {errors.companyId?.message}
                </span>
              </label>
              <input
                className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                type="text"
                id="companyId"
                name="companyId"
                placeholder="Enter your Company ID"
                {...register("companyId")}
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-left font-medium"
                htmlFor="visitSponsorMonthlyLimit"
              >
                Visit Sponsor Monthly Limit:
                <span className="error text-[#A8200D]">
                  {errors.visitSponsorMonthlyLimit?.message}
                </span>
              </label>
              <input
                className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                type="text"
                id="visitSponsorMonthlyLimit"
                name="visitSponsorMonthlyLimit"
                {...register("visitSponsorMonthlyLimit")}
              />
            </div>

            <div className="flex flex-col">
              <label
                className="text-left font-medium"
                htmlFor="visitDeductibleAmount"
              >
                Visit Deductible Amount:
                <span className="error text-[#A8200D]">
                  {errors.visitDeductibleAmount?.message}
                </span>
              </label>
              <input
                className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                type="text"
                id="visitDeductibleAmount"
                name="visitDeductibleAmount"
                {...register("visitDeductibleAmount")}
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-left font-medium"
                htmlFor="healthPlanLimit"
              >
                Health Plan Limit:
                <span className="error text-[#A8200D]">
                  {errors.healthPlanLimit?.message}
                </span>
              </label>
              <select
                className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
                id="healthPlanLimit"
                name="healthPlanLimit"
                {...register("healthPlanLimit")}
              >
                <option value="">Please Select</option>
                <option value={"1"}>Once-a-month</option>
                <option value={"2"}>Twice-a-month</option>
                <option value={"3"}>Thrice-a-month</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                className="text-left font-medium"
                htmlFor="authorizationNumber"
              >
                Authorization Number:
                <span className="error text-[#A8200D]">
                  {errors.authorizationNumber?.message}
                </span>
              </label>
              <input
                className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                type="text"
                id="authorizationNumber"
                name="authorizationNumber"
                placeholder="Enter Authorization Number"
                {...register("authorizationNumber")}
              />
            </div>
          </div>
          <Button
            className="button-secondary w-full"
            buttonText={"Submit"}
            type="submit"
          />
        </form>
      </div>
    </>
  );
}
