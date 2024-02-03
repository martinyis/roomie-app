"use client";
import MainButton from "@/app/componentes/ui/MainButton";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
type Props = {};
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const page = (props: Props) => {
  const [name, setName] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());

  React.useEffect(() => {
    const accName = localStorage.getItem("name");
    setName(accName as string);
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="max-w-[545px] mx-auto mt-[100px]">
        <h2 className="text-[24px]">Oh, hey {name}</h2>
        <p className="text-[36px]">Tell us a bit about you!</p>
        <form action="" className="flex flex-col gap-[10px]">
          <select
            name=""
            id=""
            className="p-[10px]"
            aria-placeholder="Year of Study"
          >
            <option value="1">Year of Study</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
          {/* age */}
          <input type="text" placeholder="Age" className="p-[10px]" />
          {/* date of birth */}
          <DatePicker
            className="p-[10px] w-[100%]"
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
          />
        </form>
      </div>
      <div className="max-w-[1000px] mx-auto gap-[20px] flex justify-between items-center mt-[200px]">
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
            window.location.href = "/pictures";
          }}
        >
          Next
        </MainButton>
      </div>
    </div>
  );
};

export default page;
