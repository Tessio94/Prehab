import sr from "../library/ScrollReveal";
import { FaArrowRight } from "react-icons/fa";
import Button from "../shared/Button";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import metadata from "../data/metaData";

const Zdravlje = () => {
	const location = useLocation();
	const meta = metadata[location.pathname];

	const grid1 = useRef(null);
	const grid2 = useRef(null);
	const grid7 = useRef(null);

	useEffect(() => {
		sr.reveal([grid1.current, grid2.current, grid7.current], {
			duration: 1000,
			delay: 50,
			distance: "100px",
			easing: "ease-in-out",
			origin: "bottom",
			reset: false,
		});
	});

	return (
		<>
			<Helmet>
				<title>{meta.title || "Prehab Zadar"}</title>
				<meta
					property="og:image"
					content="https://prehabilitationtherapycenter.hr/images/Nikola/prehab nikola.jpg"
				></meta>
				<meta
					name="description"
					content={
						meta.description ||
						"Dobrodošli u fizioterapeutsku kliniku Prehab Zadar."
					}
				/>
				<script type="application/ld+json">
					{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Prehabilitation Therapy Center Zadar",
          "alternateName": "Prehab Zadar",
          "url": "https://prehabilitationtherapycenter.hr/",
          "logo": "https://prehabilitationtherapycenter.hr/images/logo/ikona.png",
          "image": "https://prehabilitationtherapycenter.hr/images/Nikola/prehab nikola.jpg"
        }
        `}
				</script>
			</Helmet>
			<section className="bg-stone-100 pb-[60px]">
				<h1 className="text-5xl font-oswald py-[5rem] text-center preh-background">
					Zdravlje
				</h1>
				<div className="custom_grid md:px-10 py-5 bg-slate-200 mb-10">
					<div
						className="py-5 px-4 flex flex-col justify-center items-start"
						ref={grid7}
					>
						<h2 className="text-2xl lg:text-3xl mb-5 font-oswald text-red_preh font-bold underline">
							Pročitajte naše savjete
						</h2>
						<p className="text-xl lg:text-2xl mb-5 font-oswald text-justify">
							U ovom kutku stranice dijelim{" "}
							<strong className="text-red_preh">stručne uvide</strong>, savjete
							i inspiraciju vezanu uz zdravlje, pokret i prevenciju. Cilj mi je
							potaknuti vas na{" "}
							<strong className="text-red_preh">
								aktivniji i kvalitetniji život
							</strong>{" "}
							kroz znanje, edukaciju i vlastite projekte poput budućih kampova i
							radionica.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 w-[80%] m-auto auto-rows-auto md:auto-rows-[25rem] py-10 gap-y-10 md:gap-x-10">
					<div className="col-span-2 md:col-span-1 md:py-5 md:px-4 flex flex-col justify-center md:justify-center">
						<h1 className="text-2xl  font-bold font-oswald text-red_preh mb-5">
							Skolioza kamp u Biogradu na Moru
						</h1>
						<p
							className="text-2xl md:text-xl lg:text-2xl mb-5 font-oswald text-justify"
							ref={grid1}
						>
							Transformacijski 7-dnevni program za Skolioze u Biogradu na Moru -{" "}
							<span className="text-red_preh">Scoliosis Kamp</span>. Iskoristite
							snagu modernih manualnih metoda i korektivnih vježbi. Pridružite
							nam se na jedinstvenom iskustvu posvećenom svima koji žele raditi
							na svom zdravlju i podržati zajednicu osoba sa skoliozom!
							<br />
							<span className="text-red_preh">
								Ne čekaj! Rezerviraj svoje mjesto već danas!
							</span>
						</p>
						<Button type="blue" href="/zdravlje/skolioza-kamp">
							Pročitaj više <FaArrowRight />
						</Button>
					</div>
					<div
						className="rounded-xl overflow-hidden hover:scale-105 transition-all duration-1000"
						ref={grid2}
					>
						<img
							src="/images/novosti/skolioza_naslov.jpg"
							alt="masažni stol Prehab"
							className="w-full h-full object-cover object-bottom hover:scale-110 transition-all duration-1000"
							width="748"
							height="400"
							loading="lazy"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Zdravlje;
