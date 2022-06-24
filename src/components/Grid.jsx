import React from "react";
import { SquareGame } from "./SquareGame";

export const Grid = () => {


  return (
    
    <div className="grid grid-cols-3 w-96 h-96 border-2 border-black mt-36 mr-auto ml-auto bg-slate-900">
      <SquareGame/>
    
    </div>
  );
};
