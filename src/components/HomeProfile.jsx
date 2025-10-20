import { useEffect, useRef } from "react";
import sr from "../library/ScrollReveal";

const HomeProfile = () => {
	const grid1 = useRef(null);
	const grid2 = useRef(null);
	const grid3 = useRef(null);

	useEffect(() => {
		sr.reveal([grid1.current, grid2.current, grid3.current], {
			duration: 1000,
			delay: 50,
			distance: "100px",
			easing: "ease-in-out",
			origin: "bottom",
			reset: false,
		});
	}, []);

	return (
		<section className="bg-slate-100 mb-10">
			<div className="custom_grid gap-4 py-3 m-auto w-[90%] sm:w-[80%]">
				<div
					className="flex gap-4 items-center justify-between bg-slate-400 px-5 py-3 rounded-lg h-[12rem]"
					ref={grid1}
				>
					<div className="overflow-hidden w-full h-full aspect-square basis-1/2">
						<img
							src="/images/Nikola/O_nikoli_2.jpg"
							alt="Nikola Lukić slika"
							className="h-full w-full object-cover rounded-custom_radius object-center"
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col gap-2 items-start sm:basis-[50%] basis-[45%]">
						<h3 className="text-3xl font-oswald">Nikola Lukić</h3>
						<p className="text-xl">bacc. Physioth.</p>
					</div>
				</div>
				<div
					className="flex gap-4 items-center justify-between bg-slate-400 px-5 py-3 rounded-lg h-[12rem]"
					ref={grid2}
				>
					<div className="overflow-hidden w-full h-full aspect-square rounded-custom_radius basis-1/2">
						<img
							src="/images/Nikola/masažni_stol_1.jpg"
							alt="masažni stol prehab"
							className="h-full w-full  rounded-custom_radius object-cover object-center"
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col gap-2 items-start sm:basis-[50%] basis-[45%]">
						<h3 className="text-3xl font-oswald">Radno vrijeme:</h3>
						<p className="text-md">pon-pet: 08-16 h</p>
						<em className="text-sm">*po dogovoru</em>
					</div>
				</div>

				<div
					className="flex gap-4 items-center justify-between bg-slate-400 px-5 py-3 rounded-lg h-[12rem]"
					ref={grid3}
				>
					<div className="overflow-hidden w-full h-full aspect-square rounded-custom_radius basis-1/2">
						<img
							src="/images/Nikola/višnjik_1.jpg"
							alt="zadar višnjik"
							className="h-full w-full object-cover rounded-custom_radius"
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col gap-2 items-start sm:basis-[50%] basis-[45%]">
						<h3 className="text-3xl font-oswald">Lokacije:</h3>
						<p className="text-md">Splitska ulica 3</p>
						<p className="text-md">Bukovačka 15</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeProfile;

/*
1) naslovnica, staviti na prvi grid prijelaz after elementa sa tipa pogledaj više o meni itd.
2) Drugo na naslovnici sa velikom slikom ide teskt o prehabu
3) onda idu usluge (potencijalno grid icon sa ikonama i tekstom)
3.1) ubaciti u usluge grid di se preko dvije kolumen nalaze plakati
4) ubaciti hyperplexed slider te dodatno link sa više
** neam hrvoja, dovrštii stranici na poslu
*/
