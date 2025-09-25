import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";

import { preloadImages } from "../utils/preload";
import LoadingSpinner from "../components/LoadingSpinner";

const AppLayout = () => {
	const location = useLocation();
	const navigation = useNavigation();
	// console.log("navigation", navigation);

	const usluge = useRef(null);
	const suradnje = useRef(null);

	useEffect(() => {
		if (location.pathname !== "/") return;

		const scrollTo = () => {
			if (location.hash === "#usluge") {
				window.scrollTo({
					top: usluge.current.offsetTop - 100,
					behavior: "smooth",
				});
			} else if (location.hash === "#suradnje") {
				window.scrollTo({
					top: suradnje.current.offsetTop - 100,
					behavior: "smooth",
				});
			}
		};
		scrollTo();
	}, [location, location.hash]);

	useEffect(() => {
		preloadImages();

		const handleResize = () => preloadImages();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize); // Cleanup
		};
	}, []);

	return (
		<>
			<LoadingSpinner />
			<div
				className={
					location.pathname === "/"
						? "relative h-screen bg-auto bg-fixed bg-no-repeat bg-left_top bg-Nikola1 xsm:bg-Nikolaxsm  sm:bg-Nikolasm md:bg-Nikolamd lg:bg-Nikolalg xl:bg-Nikolaxl xxl:bg-Nikola shadow-2xl after:linear_shadow2 after:sm:linear_shadow after:bg-gradient-to-r from-black  after:absolute after:top-[7.5rem] after:left-0 after:w-[70%]  after:bg-opacity-50  after:z-0 overflow-x-clip"
						: ""
				}
			>
				<Header />
				<Outlet context={{ usluge, suradnje }} />
				<Footer />
			</div>
		</>
	);
};

export default AppLayout;
