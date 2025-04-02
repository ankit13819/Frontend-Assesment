import React from "react";
import FeaturedWork from "./FeaturedWork";
import WorkCard from "./WorkCard";
import Stories from "./Stories";
const Work = () => {
  return (
    <div className="py-24 px-6 md:px-12 lg:px-16">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-center md:text-left">
        Our Works
      </h1>

      {/* Featured Work Section */}
      <FeaturedWork />

      {/* Works Section which is reusable */}
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-6 mb-8">
        <WorkCard
          image="/mask.png"
          title="Blood donation & medical camps"
          containerWidth="w-[339px]"
          imageWidth="max-w-[410px] max-h-[494px]"
          margin="mx-8"
        />
        <WorkCard
          image="/food.png"
          title="Food Distribution"
          containerWidth="w-[400px]"
          imageWidth="max-w-[679px] max-h-[494px]"
          margin="mx-36"
        />
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-6 mb-24">
        <WorkCard
          image="/mask-new.png"
          title="Old age home"
          containerWidth="w-[400px]"
          imageWidth="max-w-[679px] max-h-[494px]"
          margin="mx-36"
        />
        <WorkCard
          image="/mask-3.png"
          title="Helping  underprivilege"
          containerWidth="w-[339px]"
          imageWidth="max-w-[410px] max-h-[494px]"
          margin="mx-9"
        />
      </div>

      <Stories />
    </div>
  );
};

export default Work;
