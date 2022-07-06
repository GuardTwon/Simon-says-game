import React, { useContext } from "react";
import { Context } from "../../context/Context";

export const Board = () => {
  const{score,}=useContext(Context)

  return (
    <div className="  grid justify-items-end">
      <div className=" m-4 w-28 border-2 border-gray-800 rounded-md text-center   ">
        <table className="w-full justify-items-end">
          <thead className="bg-gray-700 text-white ">
            <tr>
            <th>Current Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>
             {score}
            </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
