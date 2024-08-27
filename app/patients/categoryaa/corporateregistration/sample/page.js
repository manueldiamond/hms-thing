"use client";

import Sidebar from "@/app/components/Sidebar";
import Contact_information from "@/app/components/contact_information/Contact_information";
import Basic_information from "@/app/components/patient_basic_information/Basic_information";
import capturePhoto from "@/app/components/capture_patient/CapturePhoto";
import React, { useState } from "react";

export default function Sample() {
  const [activeItem, setActiveItem] = useState("");
  function handleChange(currentItem) {
    setActiveItem(currentItem);
  }
  
  return (
    <div className="w-full flex">
      <div className="text-left ml-8 mt-[200px] w-1/4">
        <Sidebar activeItem={activeItem} />
      </div>
      <div className="flex flex-col w-3/4 mr-5">
        <div>
          <Basic_information
            handleChange={handleChange}
            activeItem={activeItem}
          />
        </div>
        <div>
          <Contact_information
            handleChange={handleChange}
            activeItem={activeItem}
          />
        </div>
        <div >
          <capturePhoto />
        </div>
      </div>
    </div>
  );
}
