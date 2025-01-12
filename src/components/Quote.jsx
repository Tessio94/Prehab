const Quote = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center text-3xl font-oswald  mb-[5rem] mt-[5rem] gap-4 w-[90%] mx-auto">
      <img
        src="/images/logo/ikona.png"
        alt="logo"
        className="w-20 sm:w-14 lg:w-20  rounded"
      />
      <h3 className="font-oswald py-10 flex justify-center items-center gap-3 text-wrap">
        <em className="text-2xl md:text-3xl lg:text-4xl text-center quote  text-transparent bg-clip-text pr-5">
          "Započmite svoj put prema ozdravljenju sa prehabom"
        </em>
      </h3>
      <img
        src="/images/logo/ikona.png"
        alt="logo"
        className="w-20 sm:w-14 lg:w-20 rounded"
      />
    </div>
  );
};

export default Quote;
