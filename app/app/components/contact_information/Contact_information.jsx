"use client";

import React from "react";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Sidebar from "../Sidebar";

export default function Contact_information() {
  const activeItem = "contact_information";
  const router = useRouter();

  const schema = yup.object().shape({
    homeAddress: yup.string().required("*"),
    city: yup.string().nullable().optional(),
    country: yup.string().required("*"),
    state: yup.string().required("*"),
    nationality: yup.string().required("*"),
    religion: yup.string().optional(),
    nextOfKinName: yup.string().required("*"),
    nextOfKinAddress: yup.string().required("*"),
    nextOfKinRelation: yup.string().required("*"),
    nextOfKinPhoneNo: yup.string().required("*"),
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
    console.log("function is working");
    console.log(data);
    try {
      const response = await axios.post(
        `http://192.168.2.24:8080/health-service/api/contact/add-contact/20`,
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
          "/landingpage/category/corporateregistration/contactinformation/sponsordetails"
        );
      } else {
        console.log(response);
      }
      console.log("Data sent successfully:", responseData);
    } catch (error) {
      console.error("Error sending data:", error);
    } finally {
      reset();
    }
  };

  return (
    <>
      <div className="w-full flex">
          <Sidebar activeItem={activeItem}/>
        <div className="w-4/5">
          <form
            className="flex flex-col w-full p-[1.25rem] rounded-3xl items-center justify-center m-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-left font-bold font-Inter text-xl ml-4 mb-8">
              Private Registration KYC
            </h1>
            <div className="w-full h-[2.375rem] mb-8">
            <h3 className="text-left font-Inter text-[#05050F] border pl-2 py-[.5625rem] bg-gray-100 w-full flex items-center gap-2  ">
              <div className="align-middle block">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  padding="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.25024 4C3.25024 3.00544 3.64533 2.05161 4.34859 1.34835C5.05185 0.645088 6.00568 0.25 7.00024 0.25C7.99481 0.25 8.94863 0.645088 9.65189 1.34835C10.3552 2.05161 10.7502 3.00544 10.7502 4C10.7502 4.99456 10.3552 5.94839 9.65189 6.65165C8.94863 7.35491 7.99481 7.75 7.00024 7.75C6.00568 7.75 5.05185 7.35491 4.34859 6.65165C3.64533 5.94839 3.25024 4.99456 3.25024 4ZM0.126076 15.7542C0.154176 13.9496 0.890777 12.2284 2.17688 10.9622C3.46298 9.69592 5.19542 8.98621 7.00024 8.98621C8.80507 8.98621 10.5375 9.69592 11.8236 10.9622C13.1097 12.2284 13.8463 13.9496 13.8744 15.7542C13.8766 15.8757 13.8433 15.9951 13.7786 16.098C13.7139 16.2009 13.6207 16.2826 13.5102 16.3333C11.4679 17.2698 9.24704 17.753 7.00024 17.75C4.67858 17.75 2.47274 17.2433 0.490243 16.3333C0.379814 16.2826 0.286555 16.2009 0.221878 16.098C0.1572 15.9951 0.123908 15.8757 0.126076 15.7542Z"
                    fill="#232323"
                  />
                </svg>
              </div>
              Contact Information
            </h3>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="homeAddress">
                  Home Address
                  <span className="error text-[#A8200D]">
                    {errors.homeAddress?.message}
                  </span>
                </label>
                <input
                  className="text-left  w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                  type="text"
                  id="homeAddress"
                  name="homeAddress"
                  placeholder="Enter your home address"
                  {...register("homeAddress")}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="city">
                  City
                  <span className="error text-[#A8200D]">
                    {errors.city?.message}
                  </span>
                </label>
                <input
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter your City"
                  {...register("city")}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="country">
                  Country
                  <span className="error text-[#A8200D]">
                    {errors.country?.message}
                  </span>
                </label>
                <select
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                  type="text"
                  id="country"
                  name="country"
                  {...register("country")}
                >
                  <option value="">Please Select</option>
                  <option value="NG">Nigeria</option>
                  <option value="USA">United States of America</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="state">
                  State
                  <span className="error text-[#A8200D]">
                    {errors.state?.message}
                  </span>
                </label>
                <select
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
                  id="state"
                  name="state"
                  {...register("state")}
                >
                  <option value="">Please Select</option>
                  <option value="lag">Lagos</option>
                  <option value="abj">Abuja</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="nationality">
                  Nationality
                  <span className="error text-[#A8200D]">
                    {errors.nationality?.message}
                  </span>
                </label>
                <select
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
                  id="nationality"
                  name="nationality"
                  {...register("nationality")}
                >
                  <option value="">Please Select</option>
                  <option value="USA">American</option>
                  <option value="NG">Nigerian</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-left font-medium" htmlFor="religion">
                  Religion
                  <span className="error text-[#A8200D]">
                    {errors.religion?.message}
                  </span>
                </label>
                <select
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base appearance-none bg-[url('/nav.svg')] bg-no-repeat bg-right bg-pr-2.5"
                  id="religion"
                  name="religion"
                  {...register("religion")}
                >
                  <option value="">Please Select</option>
                  <option value="Chr">Christian</option>
                  <option value="Isl">Muslim</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  className="text-left font-medium"
                  htmlFor="nextOfKinName"
                >
                  Next of Kin Name
                  <span className="error text-[#A8200D]">
                    {errors.nextOfKinName?.message}
                  </span>
                </label>
                <input
                  className="text-left  w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                  id="nextOfKinName"
                  name="nextOfKinName"
                  placeholder="Enter full name"
                  {...register("nextOfKinName")}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-left font-medium"
                  htmlFor="nextOfKinAddress"
                >
                  Next of Kin Address
                  <span className="error text-[#A8200D]">
                    {errors.nextOfKinAddress?.message}
                  </span>
                </label>
                <input
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                  id="nextOfKinAddress"
                  name="nextOfKinAddress"
                  placeholder="Enter full address"
                  {...register("nextOfKinAddress")}
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="text-left font-medium"
                  htmlFor="nextOfKinRelation"
                >
                  Next of Kin Relation
                  <span className="error text-[#A8200D]">
                    {errors.nextOfKinRelation?.message}
                  </span>
                </label>
                <input
                  className="text-left  w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                  id="nextOfKinRelation"
                  name="nextOfKinRelation"
                  placeholder="Enter relationship"
                  {...register("nextOfKinRelation")}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-left font-medium"
                  htmlFor="nextOfKinPhoneNo"
                >
                  Next of Kin Phone Number
                  <span className="error text-[#A8200D]">
                    {errors.nextOfKinPhoneNo?.message}
                  </span>
                </label>
                <input
                  className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem] text-base"
                  type="tel"
                  id="nextOfKinPhoneNo"
                  name="nextOfKinPhoneNo"
                  placeholder="Enter Phone Number"
                  {...register("nextOfKinPhoneNo")}
                />
              </div>
            </div>
            <Button
              className="button-secondary w-full"
              buttonText={"Continue"}
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}
