import React, { useState, useEffect } from "react";
import MainPage from "./components/MainPage";
import TypingAnimation from "./components/TypingAnimation";
import axiosInstance from "./utils/axiosInstance";
import CustomAntdStyles from "./styles/CustomAntdStyles";
import { App as AntAapp } from "antd";
// import "./styles/transitions.css"

function App() {
  // States: 'landing', 'transition', 'main'
  const [stage, setStage] = useState("landing");
  // const [backendData, setBackendData] = useState(null);
  const finalString = "LeetBoard <3";

  useEffect(() => {
    if (stage == "landing") {
      const timer = setTimeout(() => setStage("transition"), 6000);
      return () => clearTimeout(timer);
    } else if (stage == "transition") {
      const stageTimer = setTimeout(() => setStage("main"), 1000);
      return () => {
        clearTimeout(stageTimer);
      };
    }
  }, [stage]);

  // Backend test
  useEffect(() => {
    axiosInstance
      .get("/api/test")
      .then((response) => {
        // setBackendData(response.data);
        console.log("data:", response.data);
      })
      .catch((error) => {
        console.error("There was an error making the request!", error);
      });
  }, []);

  // Main page on press
  const handleClick = () => {
    if (stage !== "main") {
      setStage("main");
    }
  };

  return (
    <>
      <CustomAntdStyles>
        <AntAapp>
          <div onClick={handleClick}>
            {stage === "landing" && <TypingAnimation />}
            {stage === "transition" && (
              <div className="flex justify-center items-center h-screen">
                <h1 className="text-4xl font-default transition-all duration-1000 transform translate-y-[-calc(50vh-4rem)] text-[1.875rem] leading-[2.25rem]">
                  {finalString}
                </h1>
              </div>
            )}
          </div>

          {stage === "main" && (
            <div className="fade-in">
              <MainPage finalString={finalString} />
            </div>
          )}
        </AntAapp>
      </CustomAntdStyles>
    </>
  );
}

export default App;
