const FeaturedWork = () => {
  return (
    <div className="bg-[var(--bg-primary)] my-12 flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center rounded-3xl p-6 md:p-12">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/blind.png"
          className="w-full max-w-[633px] h-auto object-cover rounded-xl"
          alt="Helping Blind"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 mt-6 md:mt-0 px-4 md:px-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--secondary)] text-center md:text-left">
          Helping Blind & Leprosy Patients
        </h1>
        <p className="text-base md:text-lg leading-7 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-[var(--color-yellow)] rounded-full text-white py-2 px-5 text-lg mt-4 md:mt-6 cursor-pointer">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
