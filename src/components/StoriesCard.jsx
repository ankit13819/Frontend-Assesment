import React from "react";
import { motion } from "framer-motion";

const StoriesCard = ({
  image,
  title,
  description,
  maxHeight,
  maxWidth,
  textSize,
  buttonSize,
  marginVertical,
  hoveredIndex,
  setHoveredIndex,
  index,
  defaultSize,
  hoverSize,
}) => {
  const isHovered = hoveredIndex === index;
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl cursor-pointer bg-[var(--color-green)] flex flex-col items-center justify-center ${marginVertical} hover:bg-[#c0eb34]`}
      initial={{
        scale: 1,
        width: maxWidth,
        height: maxHeight,
      }}
      animate={{
        width: isHovered ? hoverSize.width : defaultSize.width,
        height: isHovered ? hoverSize.height : defaultSize.height,
      }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}>
      <motion.div
        className="w-full h-full overflow-hidden rounded-2xl"
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}>
        <motion.img
          src={image}
          className="w-full h-full object-cover"
          alt={title}
        />
      </motion.div>
      <div className="px-4">
        <h1 className="text-[19px] font-semibold text-[var(--secondary)] mt-3">
          {title}
        </h1>
        <p className={`${textSize} font-normal mt-2`}>{description}</p>
        <button
          className={`${buttonSize} font-semibold leading-7 text-amber-500 py-4`}>
          Read More
        </button>
      </div>
    </motion.div>
  );
};

export default StoriesCard;
