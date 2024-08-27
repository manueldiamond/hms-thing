"use client";

import React, { useState } from "react";
import Button2 from "../button/Button";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Sidebar from "../Sidebar";

export default function Basic_information(handleChange) {
  const activeItem = 'Patient Basic Information';
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const schema = yup.object().shape({
    firstName: yup.string().required("*"),
    middleName: yup.string().nullable().optional(),
    lastName: yup.string().required("*"),
    title: yup.string().required("*"),
    dateOfBirth: yup.string().required("*"),
    gender: yup.string().required("*"),
    bloodGroup: yup.string().required("*"),
    genotype: yup.string().required("*"),
    mobileNumber: yup.string().required("*"),
    additionalNumber: yup.string().required("*"),
    email: yup.string().required("*").email("Invalid Email Format"),
    maritalStatus: yup.string().required("*"),
    occupation: yup.string().required("*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);

    console.log(data);
    try {
      const response = await axios.post(
        "http://192.168.2.24:8080/health-service/api/patient/add-patient",
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
          "/landingpage/category/corporateregistration/contactinformation"
        );
      } else {
        console.log(response);
        setLoading(false);
      }

      console.log("Data sent successfully:", responseData);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <>
      <div className="w-full flex">
        <div className="mt-[200px] mr-5 w-1/3 max-sm:hidden">
          <Sidebar activeItem={activeItem}/>
        </div>
        <div className="w-2/3 max-sm:w-full">
          <form
            className="flex flex-col w-full p-[1.25rem] rounded-3xl m-auto max-sm:ml-0 max-md:ml-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-left font-bold font-Inter text-xl text-[#05050F] ml-4 mb-8">
              Private Registration KYC
            </h1>
            <div className="w-full h-[2.375rem] mb-8">
              <h3 className="text-left font-Inter text-[#05050F] border pl-2 py-[.5625rem] bg-gray-100 w-full flex items-center gap-2 ">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="align-middle block"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.25024 4C3.25024 3.00544 3.64533 2.05161 4.34859 1.34835C5.05185 0.645088 6.00568 0.25 7.00024 0.25C7.99481 0.25 8.94863 0.645088 9.65189 1.34835C10.3552 2.05161 10.7502 3.00544 10.7502 4C10.7502 4.99456 10.3552 5.94839 9.65189 6.65165C8.94863 7.35491 7.99481 7.75 7.00024 7.75C6.00568 7.75 5.05185 7.35491 4.34859 6.65165C3.64533 5.94839 3.25024 4.99456 3.25024 4ZM0.126076 15.7542C0.154176 13.9496 0.890777 12.2284 2.17688 10.9622C3.46298 9.69592 5.19542 8.98621 7.00024 8.98621C8.80507 8.98621 10.5375 9.69592 11.8236 10.9622C13.1097 12.2284 13.8463 13.9496 13.8744 15.7542C13.8766 15.8757 13.8433 15.9951 13.7786 16.098C13.7139 16.2009 13.6207 16.2826 13.5102 16.3333C11.4679 17.2698 9.24704 17.753 7.00024 17.75C4.67858 17.75 2.47274 17.2433 0.490243 16.3333C0.379814 16.2826 0.286555 16.2009 0.221878 16.098C0.1572 15.9951 0.123908 15.8757 0.126076 15.7542Z"
                    fill="#232323"
                  />
                </svg>
                Patient Basic Information
              </h3>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="title">
                  Title
                  <span className="error text-[#A8200D]">
                    {errors.title?.message}
                  </span>
                </label>
                <select
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
                  id="title"
                  name="title"
                  {...register("title")}
                >
                  <option value="">Please Select</option>
                  <option value="mr">Mr.</option>
                  <option value="mrs">Mrs.</option>
                  <option value="miss">Miss</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="firstName">
                  First Name
                  <span className="error text-[#A8200D]">
                    {errors.firstName?.message}
                  </span>
                </label>
                <input
                  className="text-left  w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                  type="text"
                  id="firstName"
                  name="fname"
                  placeholder="Enter your first name"
                  {...register("firstName")}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="mname">
                  Middle Name(optional)
                </label>
                <input
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                  type="text"
                  id="mname"
                  name="name"
                  placeholder="Enter your middle name"
                  {...register("middleName")}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="lastName">
                  Last Name
                  <span className="error text-[#A8200D]">
                    {errors.lastName?.message}
                  </span>
                </label>
                <input
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  {...register("lastName")}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="gender">
                  Gender
                  <span className="error text-[#A8200D]">
                    {errors.gender?.message}
                  </span>
                </label>
                <select
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
                  id="gender"
                  name="gender"
                  {...register("gender")}
                >
                  <option value="">Please Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="dateOfBirth">
                  Date of Birth
                  <span className="error text-[#A8200D]">
                    {errors.dateOfBirth?.message}
                  </span>
                </label>
                <input
                  className="text-left px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                  type="text"
                  id="dateOfBirth"
                  name="date"
                  placeholder="DD-MM-YYYY"
                  {...register("dateOfBirth")}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="bloodGroup">
                  Blood Group
                  <span className="error text-[#A8200D]">
                    {errors.bloodGroup?.message}
                  </span>
                </label>
                <select
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
                  id="bloodGroup"
                  name="bloodGroup"
                  {...register("bloodGroup")}
                >
                  <option value="">Please Select</option>
                  <option value="o+">O+</option>
                  <option value="o-">O-</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="genotype">
                  Genotype
                  <span className="error text-[#A8200D]">
                    {errors.genotype?.message}
                  </span>
                </label>
                <select
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
                  id="genotype"
                  name="genotype"
                  {...register("genotype")}
                >
                  <option value="">Please Select</option>
                  <option value="aa">AA</option>
                  <option value="as">AS</option>
                </select>
              </div>
              <div className="flex flex-col ">
                <label className="text-left font-medium" htmlFor="mobileNumber">
                  Phone Number:
                  <span className="error text-[#A8200D]">
                    {errors.mobileNumber?.message}
                  </span>
                </label>
                <input
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="+234"
                  {...register("mobileNumber")}
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="text-left font-medium"
                  htmlFor="additionalNumber"
                >
                  Additional Phone Number:
                  <span className="error text-[#A8200D]">
                    {errors.additionalNumber?.message}
                  </span>
                </label>
                <input
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                  type="tel"
                  id="additionalNumber"
                  name="additionalNumber"
                  placeholder="+234"
                  {...register("additionalNumber")}
                />
                <div className="flex flex-col">
                  <label
                    className="text-left font-medium"
                    htmlFor="maritalStatus"
                  >
                    Marital Status:
                    <span className="error text-[#A8200D]">
                      {errors.maritalStatus?.message}
                    </span>
                  </label>
                  <select
                    className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
                    id="maritalStatus"
                    name="maritalStatus"
                    {...register("maritalStatus")}
                  >
                    <option value="">Please Select</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-left font-medium" htmlFor="email">
                    Email Address:
                    <span className="error text-[#A8200D]">
                      {errors.email?.message}
                    </span>
                  </label>
                  <input
                    className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email Address"
                    {...register("email")}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="occupation">
                  Occupation:
                  <span className="error text-[#A8200D]">
                    {errors.occupation?.message}
                  </span>
                </label>
                <input
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                  type="text"
                  id="occupation"
                  name="occupation"
                  {...register("occupation")}
                />
              </div>
            </div>

            {loading === true ? (
              <Button />
            ) : (
              <Button2
                className="button-secondary w-full"
                buttonText={"Continue"}
                type="submit"
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
}
