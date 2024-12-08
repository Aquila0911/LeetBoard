import React from "react";
import PointsTable from "./PointsTable";

const MainPage = ({ finalString }) => {
  return (
    <>
      <div className="flex flex-col">
        <header className="flex justify-center p-4 shadow-md">
          <h1 className="text-3xl font-default">{finalString}</h1>
        </header>

        {/* Main Content */}
        <main className="p-8">
          <PointsTable />
        </main>
      </div>
    </>
  );
};

export default MainPage;
