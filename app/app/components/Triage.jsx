import React from "react";
import Button from "./button/Button";


export default function Triage() {
   
  return (
    <>
      <div>
        <form className="flex flex-col w-full p-[1.25rem] mt-[10rem] rounded-3xl items-center justify-center m-auto">
          <h1 className="text-left font-medium font-Inter text-xl mb-2">
            Add vital readings
          </h1>
          <h3 className="text-left font-Inter text-[.875rem] mb-2">
            Detailed information about the patient vitals for the day
          </h3>
          <div className="relative mb-12 border-none px-6 py-4 w-full flex bg-[#fafafa]">
            <p className="text-left ">Show reference range</p>
            <svg
              width="41"
              height="20"
              viewBox="0 0 41 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-[.75rem]"
               >
              <rect x="0.5" width="40" height="20" rx="10" fill="#4C3DFF" />
              <path
                d="M23.5 10C23.5 6.13401 26.634 3 30.5 3C34.366 3 37.5 6.13401 37.5 10C37.5 13.866 34.366 17 30.5 17C26.634 17 23.5 13.866 23.5 10Z"
                fill="white"
              />
            </svg>
          </div>
          {/* <div className="w-full">
            <h3 className="text-left font-Inter mb-8 border px-6 py-4 bg-gray-100 w-full">
              Patient Vitals
            </h3>
          </div> */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col mb-4">
              <div>
              <div className=" w-full flex">
                <label
                  htmlFor="pulse"
                  className="block text-left mb-1 font-medium leading-6 text-[#424242]"
                >
                  Pulse(bpm)
                </label>

                <span className="w-full text-[#424242] font-medium text-right">
                  Add comment
                </span>
              </div>
                <div className="relative mb-4 rounded-xl">
                  <input
                    type="text"
                    name="pulse"
                    id="pulse"
                    className="block w-full rounded-xl border-gray-300 border px-6 py-4 text-gray-900"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>
            <div>
            <div className=" w-full flex">
                <label
                  htmlFor="bp"
                  className="w-1/2 block text-left mb-1 font-medium leading-6 text-[#424242]"
                >
                  Systolic BP(mm hg)
                </label>

                <span className="w-1/2 text-[#424242] font-medium text-right">
                  Add comment
                </span>
              </div>
              <div className="relative mb-4 rounded-xl">
                <input
                  type="text"
                  name="bloodPressure"
                  id="bloodPressure"
                  className="block w-full rounded-xl border-gray-300 border px-6 py-4 text-gray-900"
                  placeholder="0/0"
                />
              </div>
            </div>
            <div>
            <div className=" w-full flex">
                <label
                  htmlFor="bp"
                  className="w-1/2 block text-left mb-1 font-medium leading-6 text-[#424242]"
                >
                  Diastolic BP(mm hg)
                </label>

                <span className="w-1/2 text-[#424242] font-medium text-right">
                  Add comment
                </span>
              </div>
              <div className="relative mb-4 rounded-xl">
                <input
                  type="text"
                  name="bloodPressure"
                  id="bloodPressure"
                  className="block w-full rounded-xl border-gray-300 border px-6 py-4 text-gray-900"
                  placeholder="0"
                />
              </div>
            </div>
            <div>
            <div className=" w-full flex">
                <label
                  htmlFor="temp"
                  className="block text-left mb-1 font-medium leading-6 text-[#424242]"
                >
                  Temperature(Fahrenheit)
                </label>

                <span className="w-full text-[#424242] font-medium text-right">
                  Add comment
                </span>
              </div>
              <div className="relative mb-4 rounded-xl">
                <input
                  type="text"
                  name="temperature"
                  id="temperature"
                  className="block w-full rounded-xl border-gray-300 border px-6 py-4 text-gray-900"
                  placeholder="0"
                />
              </div>
            </div>
            <div>
            <div className=" w-full flex">
                <label
                  htmlFor="height"
                  className="block text-left mb-1 font-medium leading-6 text-[#424242]"
                >
                  Height(cms)
                </label>

                <span className="w-full text-[#424242] font-medium text-right">
                  Add comment
                </span>
              </div>
              <div className="relative mb-4 rounded-xl">
                <input
                  type="text"
                  name="height"
                  id="height"
                  className="block w-full rounded-xl border-gray-300 border px-6 py-4 text-gray-900"
                  placeholder="0"
                />
              </div>
            </div>
            <div>
            <div className=" w-full flex">
                <label
                  htmlFor="weight"
                  className="w-1/2 block text-left mb-1 font-medium leading-6 text-[#424242]"
                >
                  Weight(kgs)
                </label>

                <span className="w-1/2 text-[#424242] font-medium text-right">
                  Add comment
                </span>
              </div>
              <div className="relative mb-4 rounded-xl">
                <input
                  type="text"
                  name="weight"
                  id="weight"
                  className="block w-full rounded-xl border-gray-300 border px-6 py-4 text-gray-900"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className=" w-full flex">
                <label
                  htmlFor="bmi"
                  className="w-1/2 block text-left mb-1 font-medium leading-6 text-[#424242]"
                >
                  BMI(mm hg)
                </label>

                <span className="w-1/2 text-[#424242] font-medium text-right">
                  Add comment
                </span>
              </div>
              <div className="relative mb-4 rounded-xl">
                <input
                  type="text"
                  name="bmi"
                  id="bmi"
                  className="block w-full rounded-xl border-gray-300 border px-6 py-4 text-gray-900"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="w-full">
            <div className="w-full flex">
                <label
                  htmlFor="heading"
                  className="w-1/2 block text-left mb-1 font-medium leading-6 text-[#424242]"
                >
                  Heading circumference(cms)
                </label>

                <span className="w-1/2 text-[#424242] font-medium text-right">
                  Add comment
                </span>
              </div>
              <div className="relative mb-4 rounded-xl">
                <input
                  type="text"
                  name="heading"
                  id="heading"
                  className="block w-full rounded-xl border-gray-300 border px-6 py-4 text-gray-900"
                  placeholder="0"
                />
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
