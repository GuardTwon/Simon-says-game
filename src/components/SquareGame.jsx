import React from "react";
import { square } from "../data/square";
import { SquareButton } from "./SquareButton";

export const SquareGame = () => {

  return (
    <>
      {square.map(({ color, value }, idx) => (
        <SquareButton color={color} value={value} key={`squareButton${idx}`}/>
      ))}
    </>
  );
};
