import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import sr from "../library/ScrollReveal";
import { useEffect, useRef } from "react";

const Usluga = ({ usluga }) => {
	const { id, name, img, description, imageDesc } = usluga;
	const [active, setActive] = useState(false);

	//   const refs = [useRef(null), useRef(null), useRef(null)];

	const grid1 = useRef(null);

	useEffect(() => {
		sr.reveal(grid1.current, {
			duration: 1000,
			delay: 50,
			distance: "400px",
			easing: "ease-in-out",
			origin: "top",
			reset: false,
		});
	}, []);

	return (
		<div className="bg-slate-300 py-5 rounded-xl">
			<div className="relative flex justify-center items-center" ref={grid1}>
				<img src={img} alt={imageDesc} className="w-40 z-0" />
			</div>
			<h3 className="text-center text-[1.2rem] font-bold font-oswald mb-3">
				{name}
			</h3>
			<div className="flex justify-center items-center">
				<button
					onClick={() => setActive(!active)}
					className={
						active
							? `px-5 py-1 bg-slate-100 text-red_preh font-oswald rounded-xl flex justify-center items-center lg:hover:text-slate-100 lg:hover:bg-red_preh border-red_preh border-2 transition-all duration-500 gap-1`
							: `px-5 py-1 bg-red_preh text-slate-100 font-oswald rounded-xl flex justify-center items-center lg:hover:text-red_preh lg:hover:bg-slate-100 border-red_preh border-2 transition-all duration-500 gap-1`
					}
				>
					{active ? "Minimiziraj" : "Pogledaj više"}
					<span>
						<GoTriangleDown />
					</span>
				</button>
			</div>
			<p
				className={`text-start hyphens-auto font-oswald text-xl transition-all duration-500 ${
					active
						? "relative translate-y-0 bg-slate-100 w-full py-3 px-5 rounded-b-xl z-10"
						: "translate-y-[-120%] translate opacity-0"
				}`}
			>
				{description}
			</p>
		</div>
	);
};

export default Usluga;
