const HomeProfile = () => {
  return (
    <section className="relative z-20 px-6 pt-16 md:px-10 lg:px-16">
      <div className="grid grid-cols-1 gap-4 p-10 max-md:p-0 max-md:pt-10 min-[750px]:grid-cols-2 xl:grid-cols-3">
        <div className="border-red_preh_t shadow-black_preh/40 flex h-[12rem] items-center justify-between gap-4 rounded-lg border-2 bg-slate-100/80 px-5 py-3 shadow-xl">
          <div className="aspect-square h-full w-full basis-1/2 overflow-hidden">
            <img
              src="/images/Nikola/O_nikoli_2.jpg"
              alt="Nikola Lukić slika"
              className="rounded-custom_radius h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="flex basis-[45%] flex-col items-start gap-2 sm:basis-[50%]">
            <h3 className="font-oswald text-red_preh text-3xl font-semibold">
              Nikola Lukić
            </h3>
            <p className="font-oswald text-xl font-medium">bacc. Physioth.</p>
          </div>
        </div>
        <div className="border-red_preh_t shadow-black_preh/40 flex h-[12rem] items-center justify-between gap-4 rounded-lg border-2 bg-slate-100/80 px-5 py-3 shadow-xl">
          <div className="rounded-custom_radius aspect-square h-full w-full basis-1/2 overflow-hidden">
            <img
              src="/images/Nikola/masažni_stol_1.jpg"
              alt="masažni stol prehab"
              className="rounded-custom_radius h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="flex basis-[45%] flex-col items-start gap-2 sm:basis-[50%]">
            <h3 className="font-oswald text-red_preh text-3xl font-semibold">
              Radno vrijeme:
            </h3>
            <p className="font-oswald text-xl font-medium">pon-pet: 08-16 h</p>
            <em className="text-sm">*po dogovoru</em>
          </div>
        </div>

        <div className="border-red_preh_t shadow-black_preh/40 flex h-[12rem] items-center justify-between gap-4 rounded-lg border-2 bg-slate-100/80 px-5 py-3 shadow-xl min-[750px]:last:col-span-2 min-[750px]:last:mx-auto min-[750px]:last:w-1/2 xl:last:col-span-1 xl:last:w-full">
          <div className="rounded-custom_radius aspect-square h-full w-full basis-1/2 overflow-hidden">
            <img
              src="/images/Nikola/višnjik_1.jpg"
              alt="zadar višnjik"
              className="rounded-custom_radius h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex basis-[45%] flex-col items-start gap-2 sm:basis-[50%]">
            <h3 className="font-oswald text-red_preh text-3xl font-semibold">
              Lokacije:
            </h3>
            <p className="font-oswald text-xl font-medium">Splitska ulica 3</p>
            <p className="font-oswald text-xl font-medium">Bukovačka 15</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProfile;
