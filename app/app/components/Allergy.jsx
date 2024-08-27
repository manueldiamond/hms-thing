import React from "react";
import Button from "./button/Button";

export default function Allergy() {
  return (
    <>
      <div>
        <form className="flex flex-col w-full p-[1.25rem] mt-[10rem] rounded-3xl items-center justify-center m-auto">
          <h1 className="text-left font-medium font-Inter text-xl mb-2">
            Add allergy
          </h1>
          <h3 className="text-left font-Inter text-[.875rem] mb-12">
            Detailed information about certain allergies the patient has
          </h3>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col mb-4">
              <div>
                <div className=" w-full flex">
                  <label
                    htmlFor="allergyType"
                    className="block text-left mb-1 font-medium leading-6 text-[#424242]"
                  >
                    Allergy Type
                  </label>
                </div>
                <div className="relative mb-4 rounded-xl">
                  <select
                    name="type"
                    id="type"
                    className="block w-full rounded-xl border-gray-300 border px-6 py-4 text-gray-900"
                  >
                    <option></option>
                  </select>
                </div>
              </div>
              <div>
                <div className=" w-full flex">
                  <label
                    htmlFor="allergy"
                    className="block text-left mb-1 font-medium leading-6 text-[#424242]"
                  >
                    Allergy
                  </label>
                </div>
                <div className="relative mb-4 rounded-xl">
                  <select
                    name="allergy"
                    id="allergy"
                    className="block w-full rounded-xl border-gray-300 border px-6 py-4 text-gray-900"
                  >
                    <option></option>
                  </select>
                </div>
              </div>
              <div className="mb-2 border-none px-2 py-[.375rem] w-full flex bg-[#fafafa]">
                <p className="w-full text-[#878787] text-center items-center justify-center ">
                  Input the allergy of the patient
                </p>
              </div>

              <div>
                <div className=" w-full flex">
                  <label
                    htmlFor="severity"
                    className="block text-left mb-1 font-medium leading-6 text-[#424242]"
                  >
                    Severity
                  </label>
                </div>
                <div className="relative mb-4 rounded-xl">
                  <select
                    name="severity"
                    id="severity"
                    className="block w-full rounded-xl border-gray-300 border px-6 py-4 text-gray-900"
                  >
                    <option className="pr-2"></option>
                  </select>
                </div>
              </div>

              <div>
                <div className=" w-full flex">
                  <label
                    htmlFor="status"
                    className="block text-left mb-1 font-medium leading-6 text-[#424242]"
                  >
                    Status
                  </label>
                </div>
                <div className="relative mb-4 rounded-xl">
                  <select
                    name="status"
                    id="status"
                    className="block w-full rounded-xl border-gray-300 border px-6 py-4 text-gray-900"
                  >
                    <option></option>
                  </select>
                </div>
              </div>

              <div>
            <div className=" w-full flex">
                <label
                  htmlFor="onset"
                  className="w-1/2 block text-left mb-1 font-medium leading-6 text-[#424242]"
                >
                  Onset
                </label>

                <span className="underline w-1/2 text-[#424242] font-medium text-right">
                  Add comment
                </span>
              </div>
              <div className="relative mb-4 rounded-xl">
                <input
                  type="text"
                  name="onset"
                  id="onset"
                  className="block w-full rounded-xl border-gray-300 border px-6 py-4 text-gray-900"
                  placeholder=""
                />
              </div>
            </div>

            <div>
            <div className=" w-full flex">
                <label
                  htmlFor="reaction"
                  className="w-1/2 block text-left mb-1 font-medium leading-6 text-[#424242]"
                >
                  Reactions
                </label>

                <span className="underline w-1/2 text-[#424242] font-medium text-right">
                  Add comment
                </span>
              </div>
              <div className="relative mb-4 rounded-xl">
                <input
                  type="text"
                  name="relations"
                  id="relations"
                  className="block w-full rounded-xl border-gray-300 border px-6 py-4 text-gray-900"
                  placeholder=""
                />
              </div>
            </div>

            </div>
          </div>

          <Button
            className="button-secondary w-full"
            buttonText={"Save"}
            type="submit"
          />
        </form>
      </div>
    </>
  );
}
