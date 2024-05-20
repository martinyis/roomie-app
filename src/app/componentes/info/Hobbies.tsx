"use client";
import React from "react";
import Item from "./Item";
import MainButton from "../ui/MainButton";
type Props = {
  onClick: (e: React.MouseEvent) => void;
};
//list of hobbies Soccer Movies Chess Football Academics Clubs Fitness Baseball Music Gaming Hiking Hockey Basketball Art Nature Reading Skiing Technology Languages  Networking Running Entrepreneurship Instruments Coffee Writing
const hob = [
  { hobby: "Soccer" },
  { hobby: "Movies" },
  { hobby: "Chess" },
  { hobby: "Football" },
  { hobby: "Academics" },
  { hobby: "Clubs" },
  { hobby: "Fitness" },
  { hobby: "Baseball" },
  { hobby: "Music" },
  { hobby: "Gaming" },
  { hobby: "Hiking" },
  { hobby: "Hockey" },
  { hobby: "Basketball" },
  { hobby: "Art" },
  { hobby: "Nature" },
  { hobby: "Reading" },
  { hobby: "Skiing" },
  { hobby: "Technology" },
  { hobby: "Languages" },
  { hobby: "Networking" },
  { hobby: "Running" },
  { hobby: "Entrepreneurship" },
  { hobby: "Instruments" },
  { hobby: "Coffee" },
  { hobby: "Writing" },
  { hobby: "3D printing" }, // I've kept the existing hobby "3D printing" from your initial array
];

function Hobbies({ onClick }: Props) {
  return (
    <div className="mt-[100px] mb-[100px]">
      <h2 className="text-center text-[28px]">
        Now, let us get familiar with your hobbies and interests
      </h2>
      <div>
        <div className="flex gap-[20px] flex-wrap max-h-[600px] mt-[100px]">
          {hob.map((hobby) => {
            return <Item key={hobby.hobby}>{hobby.hobby}</Item>;
          })}
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
            onClick(e);
          }}
        >
          Next
        </MainButton>
      </div>
    </div>
  );
}

export default Hobbies;
