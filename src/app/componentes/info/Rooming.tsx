import React from "react";
import Item from "./Item";
import MainButton from "../ui/MainButton";
type Props = {};
const sleep = [
  {
    sleep: "6 hours",
  },
  {
    sleep: "7 hours",
  },
  {
    sleep: "8 hours",
  },
  {
    sleep: "9 hours",
  },
  {
    sleep: "Early Bird",
  },
  {
    sleep: "Morning Slowpoke",
  },
  {
    sleep: "Night Owl",
  },
  {
    sleep: "Dusk Dreamer",
  },
];
const conditions = [
  {
    condition: "Hot",
  },
  {
    condition: "Warm",
  },
  {
    condition: "Average",
  },
  {
    condition: "Cooler",
  },
  {
    condition: "Cold",
  },
  {
    condition: "Heavy Sleeper",
  },
  {
    condition: "Light Sleeper",
  },
  {
    condition: "Dark Room",
  },
  {
    condition: "Nightlight Style",
  },
  {
    condition: "Silent",
  },
  {
    condition: "Quiet",
  },
  {
    condition: "Disturbances",
  },
];

const routine = [
  {
    routine: "Everyday",
  },
  {
    routine: "Once a week",
  },
  {
    routine: "Once a month",
  },
  {
    routine: "Whenever needed",
  },
  {
    routine: "Neat Room",
  },
  {
    routine: "Occasionally Disorganized",
  },
  {
    routine: "Messy",
  },
  {
    routine: "Minimalistic",
  },
];
const priorities = [
  {
    priority: "Cleanliness",
  },
  {
    priority: "Comfort",
  },
  {
    priority: "Convenience",
  },
  {
    priority: "Cost",
  },
  {
    priority: "Location",
  },
  {
    priority: "Safety",
  },
  {
    priority: "Amenities",
  },
  {
    priority: "Privacy",
  },
  {
    priority: "Social",
  },
];

function Rooming({}: Props) {
  return (
    <div className="mt-[100px] mb-[100px] max-w-[1100px] mx-auto">
      <h2 className="text-[28px]">
        1. Mix and match which best describe your sleep routine:
      </h2>
      <div className="flex gap-[20px] flex-wrap max-h-[600px] mt-[20px]">
        {sleep.map((sleep) => {
          return <Item key={sleep.sleep}>{sleep.sleep}</Item>;
        })}
      </div>
      <h2 className="text-[28px] mt-[20px]">
        2. Mix and match your sleep style preferences:
      </h2>
      <div className="flex gap-[20px] flex-wrap max-h-[600px] mt-[20px]">
        {conditions.map((condition) => {
          return <Item key={condition.condition}>{condition.condition}</Item>;
        })}
      </div>
      <h2 className="text-[28px] mt-[20px]">
        3. Mix and match you cleaning schedule and cleanliness preferences
      </h2>
      <div className="flex gap-[20px] flex-wrap max-h-[600px] mt-[20px]">
        {routine.map((routine) => {
          return <Item key={routine.routine}>{routine.routine}</Item>;
        })}
      </div>
      <h2 className="text-[28px] mt-[20px]">
        4. Choose the following that best describes your priorities (most to
        least):
      </h2>
      <div className="flex gap-[20px] flex-wrap max-h-[600px] mt-[20px]">
        {priorities.map((priority) => {
          return <Item key={priority.priority}>{priority.priority}</Item>;
        })}
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
            window.location.href = "/matches";
          }}
        >
          Next
        </MainButton>
      </div>
    </div>
  );
}

export default Rooming;
