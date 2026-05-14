const Quote = () => {
  return (
    <section className="bg-black_preh py-8 md:px-10 lg:px-16">
      <div className="font-oswald mx-auto flex flex-col items-center justify-center gap-4 text-3xl sm:flex-row">
        <img
          src="/images/logo/ikona.png"
          alt="logo"
          className="w-20 rounded sm:w-14 lg:w-20"
        />
        <h3 className="font-oswald flex items-center justify-center gap-3 py-10 text-wrap">
          <em className="quote bg-clip-text pr-5 text-center text-2xl text-transparent md:text-3xl lg:text-4xl">
            "Započnite svoj put prema ozdravljenju sa prehabom"
          </em>
        </h3>
        <img
          src="/images/logo/ikona.png"
          alt="logo"
          className="w-20 rounded sm:w-14 lg:w-20"
        />
      </div>
    </section>
  );
};

export default Quote;
