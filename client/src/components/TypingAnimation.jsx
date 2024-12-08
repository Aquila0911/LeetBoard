import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypingAnimation() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <TypeAnimation
          sequence={[
            "Leet",
            1000,
            "LeetCode",
            500,
            "Leet",
            1000,
            "LeetBoard",
            500,
            "LeetBoard <3",
            1000
          ]}
          wrapper="div"
          speed={200}
          deletionSpeed={100}
          repeat={0}
          // cursor={true}
          preRenderFirstString={true}
          className="text-4xl font-default"
        />
      </div>
    </>
  );
}
