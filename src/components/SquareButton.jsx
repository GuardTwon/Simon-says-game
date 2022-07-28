import React, { useContext } from "react";
import { Context } from "../context/Context";

export const SquareButton = ({ color, value }) => {
  
 const {eventComparison} = useContext(Context)

  return (
    <button
      value={value}
      id={value}
      onClick={()=>eventComparison(event)}
      className={`${color} m-px border-2 border-black rounded-md opacity-50`}
    ></button>
  );
};
