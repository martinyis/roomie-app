"use client";
import React from "react";
import Item from "./Item";
import MainButton from "../ui/MainButton";
type Props = {
  onClick: (e: React.MouseEvent) => void;
};

const hob = [
  {
    hobby: "3D printing",
  },
  {
    hobby: "amateur radio",
  },
  {
    hobby: "Scrapbook",
  },
  {
    hobby: "Amateur radio",
  },
  {
    hobby: "Acting",
  },
  {
    hobby: "Baton twirling",
  },
  {
    hobby: "Board games",
  },
  {
    hobby: "Book restoration",
  },
  {
    hobby: "Cabaret",
  },
  {
    hobby: "Calligraphy",
  },
  {
    hobby: "Candle making",
  },
  {
    hobby: "Computer programming",
  },
  {
    hobby: "Coffee roasting",
  },
  {
    hobby: "Cooking",
  },
  {
    hobby: "Coloring",
  },
  {
    hobby: "Cosplaying",
  },
  {
    hobby: "Couponing",
  },
  {
    hobby: "Creative writing",
  },
  {
    hobby: "Crocheting",
  },
  {
    hobby: "Cryptography",
  },
  {
    hobby: "Dance",
  },
  {
    hobby: "Digital arts",
  },
  {
    hobby: "Drama",
  },
  {
    hobby: "Drawing",
  },
  {
    hobby: "Do it yourself",
  },
  {
    hobby: "Electronics",
  },
  {
    hobby: "Embroidery",
  },
  {
    hobby: "Fashion",
  },
  {
    hobby: "Flower arranging",
  },
  {
    hobby: "Foreign language learning",
  },
  {
    hobby: "Gaming",
  },
  {
    hobby: "tabletop games",
  },
  {
    hobby: "role-playing games",
  },
  {
    hobby: "Gambling",
  },
  {
    hobby: "Genealogy",
  },
  {
    hobby: "Glassblowing",
  },
  {
    hobby: "Gunsmithing",
  },
  {
    hobby: "Homebrewing",
  },
  {
    hobby: "Ice skating",
  },
  {
    hobby: "Jewelry making",
  },
  {
    hobby: "Jigsaw puzzles",
  },
  {
    hobby: "Juggling",
  },
  {
    hobby: "Knapping",
  },
  {
    hobby: "Knitting",
  },
  {
    hobby: "Kabaddi",
  },
  {
    hobby: "Knife making",
  },
  {
    hobby: "Lacemaking",
  },
  {
    hobby: "Lapidary",
  },
  {
    hobby: "Leather crafting",
  },
  {
    hobby: "Lego building",
  },
  {
    hobby: "Lockpicking",
  },
  {
    hobby: "Machining",
  },
  {
    hobby: "Macrame",
  },
  {
    hobby: "Metalworking",
  },
  {
    hobby: "Magic",
  },
  {
    hobby: "Model building",
  },
  {
    hobby: "Listening to music",
  },
  {
    hobby: "Origami",
  },
  {
    hobby: "Painting",
  },
  {
    hobby: "Playing musical instruments",
  },
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
