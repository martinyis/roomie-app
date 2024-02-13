"use client";
import React, { useState } from "react";
import { languages } from "./languages.js";
import MainButton from "@/app/componentes/ui/MainButton";
type Props = {};

function Page({}: Props) {
  // State to manage the selected language
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [isInternationalStudent, setIsInternationalStudent] =
    useState<boolean>();
  // Function to handle language selection
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="mx-auto text-center text-[48px] mt-[100px]">
        Do you speak any other languages?
      </h1>
      {/* Form with selection of languages */}
      <form action="">
        <div className="text-center mt-8">
          <label htmlFor="language" className="text-[18px]">
            Please specify:
          </label>
          <select
            id="language"
            name="language"
            value={selectedLanguage || ""}
            onChange={handleLanguageChange}
            className="ml-2 px-2 py-1 border rounded-md"
          >
            <option value="" disabled>
              Select a language
            </option>
            {languages.map((language) => {
              return (
                <option key={language.name} value={language.name}>
                  {language.name}
                </option>
              );
            })}
            {/* Add more language options as needed */}
          </select>
        </div>
      </form>
      <div className="max-w-[1000px] mx-auto mt-[100px] flex justify-between items-center">
        <h2 className="text-[32px]">Are you an international student?</h2>
        <div className="flex gap-[20px]">
          <button
            className={`w-[139px] h-[63px] ${
              isInternationalStudent ? "bg-[#FFD7B1]" : "bg-[#D9D9D9]"
            } rounded-[20px]`}
            onClick={() => setIsInternationalStudent(true)}
          >
            Yes
          </button>
          <button
            className={`w-[139px] h-[63px] ${
              isInternationalStudent ? "bg-[#D9D9D9]" : "bg-[#FFD7B1]"
            } rounded-[20px]`}
            onClick={() => setIsInternationalStudent(false)}
          >
            No
          </button>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto gap-[20px] flex justify-between items-center mt-[50px]">
        <MainButton
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
          }}
        >
          Back
        </MainButton>
        <MainButton
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            window.location.href = "/info";
          }}
        >
          Next
        </MainButton>
      </div>
    </div>
  );
}

export default Page;
