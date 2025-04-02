import React, { useState } from "react";
import StoriesCard from "./StoriesCard";
import { storiesData } from "../data.js";

const Stories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="max-w-[458px] max-h-[672px]">
        <h1 className="lg:text-[64px] font-medium text-[var(--secondary)] mb-6">
          Stories Of Change
        </h1>
        <p className="text-2xl font-normal leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu
        </p>
      </div>
      {storiesData.map((story, index) => (
        <StoriesCard
          key={index}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          defaultSize="max-w-[300px] max-h-[400px]"
          hoverSize="max-w-[350px] max-h-[450px]"
          {...story}
        />
      ))}
    </div>
  );
};

export default Stories;
