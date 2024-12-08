import React, { useState } from "react";
import axios from "axios";
import UpdateButton from "./UpdateButton";

export default function PointsTable() {
  const [tableData, setTableData] = useState([
    ["", "Lava", "Aru", "Saea", "Aqui"],
    ["Easy", 0, 0, 0, 0],
    ["Medium", 0, 0, 0, 0],
    ["Hard", 0, 0, 0, 0],
    ["Points", 0, 0, 0, 0],
  ]);

  const handleSave = () => {
    // Send data for each user column
    for (let colIndex = 1; colIndex < tableData[0].length; colIndex++) {
      const userData = {
        user: tableData[0][colIndex],
        easy: tableData[1][colIndex],
        medium: tableData[2][colIndex],
        hard: tableData[3][colIndex],
        total: tableData[4][colIndex],
      };

      axios
        .post("/api/points", userData)
        .then((response) => console.log("Saved:", response.data))
        .catch((error) => console.error("Error:", error));
    }
  };

  const handleCellChange = (rowIndex, colIndex, value) => {
    setTableData((prevData) => {
      const updatedData = [...prevData];
      updatedData[rowIndex][colIndex] = parseInt(value, 10);
      updatePoints(updatedData);

      return updatedData;
    });
  };

  const updatePoints = (data) => {
    const pointsRow = data[4];
    for (let colIndex = 1; colIndex < data[0].length; colIndex++) {
      const easyPoints = data[1][colIndex] * 1;
      const mediumPoints = data[2][colIndex] * 3;
      const hardPoints = data[3][colIndex] * 5;
      pointsRow[colIndex] = easyPoints + mediumPoints + hardPoints;
    }
    setTableData([...data]);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <table className="border-collapse border border-gray-400 w-auto text-center">
        <thead>
          <tr>
            {tableData[0].map((header, colIndex) => (
              <th key={colIndex} className="border border-gray-400 px-4 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border border-gray-400 px-4 py-2">
                  {/* Header row and Points row are non-editable */}
                  {colIndex === 0 || rowIndex === 3 ? (
                    <span className={rowIndex === 3 ? "font-bold" : ""}>
                      {cell}
                    </span>
                  ) : (
                    <input
                      type="number"
                      value={cell !== null ? cell : ""}
                      onChange={(e) =>
                        handleCellChange(rowIndex + 1, colIndex, e.target.value)
                      }
                      className="w-full text-center border-none outline-none text-black"
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <UpdateButton onClick={handleSave}/>
      </div>
    </div>
  );
}
