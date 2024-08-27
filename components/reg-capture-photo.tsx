import React from "react";

export default function RegcapturePhoto() {
  return (
    <>
      <div className="w-full flex">
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
            Capture Patient Photo
          </h3>
        </div>

        <div className="h-[13.4375rem] w-[38.75rem]">
            <p>Capture patient photo</p>
            <div className="h-[11.6875rem] border-dotted border-[#DCDCDC]">
                Add a picture
            </div>
        </div>
      </div>
    </>
  );
}
