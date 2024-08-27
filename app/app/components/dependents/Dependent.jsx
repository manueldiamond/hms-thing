"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    principal: yup.string().required("*"),
    dependent1: yup.string().required("*"),
    dependent2: yup.string().required("*"),
    dependent3: yup.string().nullable().optional(),
  });

export default function Dependent() {
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
                Family Information
                </h3>
                <h3 className="font-Inter mb-8 border-none px-6 py-4 bg-gray-100 w-3/4 text-right text-[#075D24]">
                + Add New Dependent
                </h3>
            </div>
            <div className="flex gap-4 w-full">
                <div className="flex flex-col flex-1">
                <label className="text-left font-medium" htmlFor="principal">
                    Principal:
                    <span className="error text-[#A8200D]">
                    {errors.principal?.message}
                    </span>
                </label>
                <input
                    className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem]"
                    id="principal"
                    name="principal"
                    {...register("principal")}
                />
                </div>

                <div className="flex flex-col flex-1">
                <label className="text-left font-medium" htmlFor="dependent1">
                    Dependent(Spouse):
                    <span className="error text-[#A8200D]">
                    {errors.dependent1?.message}
                    </span>
                </label>
                <input
                    className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem]"
                    id="dependent1"
                    name="dependent1"
                    {...register("dependent1")}
                />
                </div>
                </div>
                <div className="flex gap-4 w-full">
                <div className="flex flex-col flex-1">
                    <label className="text-left font-medium" htmlFor="dependent2">
                        Dependent(Child):
                        <span className="error text-[#A8200D]">
                        {errors.dependent2?.message}
                        </span>
                    </label>
                    <input
                        className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem]"
                        id="dependent2"
                        name="dependent2"
                        {...register("dependent2")}
                    />
                    </div>
                    <div className="flex flex-col flex-1">
                    <label className="text-left font-medium" htmlFor="dependent3">
                        Dependent(Child):
                        <span className="error text-[#A8200D]">
                        {errors.dependent3?.message}
                        </span>
                    </label>
                    <input
                        className="text-left w-auto px-6 py-4 border border-gray-300 p-4 rounded-xl mb-[.9375rem]"
                        id="dependent3"
                        name="dependent3"
                        {...register("dependent3")}
                    />
                </div>
                </div>
        </>
    )}