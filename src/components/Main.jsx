import Button from "../shared/Button";
import { GoTriangleDown } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import sr from "../library/ScrollReveal";
import { useEffect, useRef } from "react";

const Main = () => {
	const grid1 = useRef(null);
	const grid2 = useRef(null);
	const grid3 = useRef(null);

	useEffect(() => {
		const screenWidth = window.innerWidth;

		const revealConfig = (origin, distance) => ({
			duration: 1000,
			delay: 100,
			distance: distance,
			easing: "ease-in-out",
			origin: origin,
			reset: false,
		});

		if (screenWidth < 768) {
			sr.reveal(grid1.current, revealConfig("top", "200px"));
			sr.reveal(grid2.current, revealConfig("bottom", "200px"));
			sr.reveal(grid3.current, revealConfig("top", "150px"));
		} else {
			sr.reveal(grid1.current, revealConfig("left", "300px"));
			sr.reveal(grid2.current, revealConfig("top", "250px"));
			sr.reveal(grid3.current, revealConfig("right", "200px"));
		}
	}, []);

	return (
		<section className="relative h-[calc(100vh-120px)] w-full z-10">
			<div className="absolute top-1/4 left-10  right-4 xsm:translate-x-0 xsm:left-12 sm:left-16 md:left-24  lg:left-48  flex flex-col gap-3 z-10">
				<h1
					className="text-3xl sm:text-4xl font-oswald text-stone-50 mb-3"
					ref={grid1}
				>
					Prehabilitation Therapy Center
				</h1>
				<div ref={grid2}>
					<h3 className="text-xl sm:text-2xl font-oswald text-stone-50 mb-3 flex gap-3 items-center">
						<FaLocationDot /> Zadar, Splitska ulica 3
					</h3>
					<h3 className="text-xl  sm:text-2xl font-oswald text-stone-50 mb-3 flex gap-3 items-center">
						<FaLocationDot /> Biograd na Moru, Bukovačka 15
					</h3>
				</div>
				<ul
					className="flex flex-col gap-3 text-stone-50 text-lg sm:text-xl list-disc mb-5"
					ref={grid3}
				>
					<li>Diplomirani fizioterapeut</li>
					<li>Centar za rehabilitaciju i pripremu</li>
					<li>Procjena posture, dijagnostika i tretman</li>
				</ul>
				<div className="flex gap-5 sm:flex-row flex-col sm:w-full">
					<Button type="red" href="#intro" header="header">
						Pročitajte više <GoTriangleDown />
					</Button>
					<Button type="blue" href="#cjenik" header="header">
						Pogledaj cjenik <GoTriangleDown />
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Main;
