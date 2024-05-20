"use client";
import React, { useState } from "react";
import { languages } from "./languages.js";
import MainButton from "@/app/componentes/ui/MainButton";

type Props = {};

function Page({}: Props) {
  // State to manage the selected languages
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [isInternationalStudent, setIsInternationalStudent] =
    useState<boolean>();

  // Function to handle language selection
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLanguage = event.target.value;

    // Check if the language is not already selected
    if (!selectedLanguages.includes(newLanguage)) {
      setSelectedLanguages((prevLanguages) => [...prevLanguages, newLanguage]);
    }

    setSelectedLanguage(newLanguage);
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
          </select>
        </div>
        {/* Display selected languages as a list below the dropdown */}
        {selectedLanguages.length > 0 && (
          <div className="text-center mt-4 max-w-[500px] mx-auto">
            <ul className="flex gap-[10px]">
              {selectedLanguages.map((lang, index) => (
                <li
                  className="px-[10px] py-[5px] rounded-[5px] bg-[#C4C4C4]"
                  key={index}
                >
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
      {/* Rest of your code remains unchanged */}
      {/* ... */}

      {/* Next and Back buttons */}
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
