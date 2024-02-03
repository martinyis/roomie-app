"use client";
import ImageUpload from "@/app/componentes/ImageUpload";
import MainButton from "@/app/componentes/ui/MainButton";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const handleUpload = (file: File) => {
    // Handle the file upload logic here
    console.log("Uploaded file:", file);
  };

  return (
    <div className="max-w-[1440px] mx-auto ">
      <h1 className="text-[48px] text-center mt-[100px]">
        Add your profile pictures!
      </h1>
      <div className="max-w-[1000px] grid grid-cols-3 mx-auto gap-[20px] mt-[40px]">
        <ImageUpload />
        <ImageUpload />
        <ImageUpload />
        <ImageUpload />
        <ImageUpload />
        <ImageUpload />
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
            window.location.href = "/languages";
          }}
        >
          Next
        </MainButton>
      </div>
    </div>
  );
};

export default page;
