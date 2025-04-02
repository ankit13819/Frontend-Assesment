const WorkCard = ({ image, title, containerWidth, imageWidth, margin }) => {
  return (
    <div className="group cursor-pointer w-full sm:w-auto">
      <div className="bg-[var(--bg-primary)] p-4 rounded-2xl group-hover:bg-amber-500">
        <img
          src={image}
          className={`w-full ${imageWidth} h-auto object-cover`}
          alt={title}
        />
      </div>

      <div
        className={`bg-[var(--bg-primary)] flex items-center justify-center h-[80px] rounded-b-3xl group-hover:bg-amber-500 group-hover:text-white ${containerWidth} ${margin}`}>
        <p className="text-lg md:text-2xl font-semibold text-center px-4">
          {title}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
