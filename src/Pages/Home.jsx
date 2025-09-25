import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useOutletContext } from "react-router-dom";
import metadata from "../data/metaData";
import Main from "../components/Main";
import Quote from "../components/Quote";
import HomeProfile from "../components/HomeProfile";
import Intro from "../components/Intro";
import Usluge from "../components/Usluge";
import Cjenik from "../components/Cjenik";
import Trening from "../components/Trening";
import Suradnje from "../components/Suradnje";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
	const [showScrollToTop, setShowScrollToTop] = useState(false);

	const { usluge, suradnje } = useOutletContext();

	const location = useLocation();

	const meta = metadata[location.pathname];

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 2000) {
				setShowScrollToTop(true);
			} else {
				setShowScrollToTop(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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

			{showScrollToTop && (
				<div
					onClick={scrollToTop}
					className="fixed bottom-5 right-2 h-[3rem] w-[3rem] bg-red_preh bg-opacity-35 p-3 flex items-center justify-center cursor-pointer rounded-xl z-50"
				>
					<FaArrowUp className="text-5xl text-red_preh" />
				</div>
			)}
			<Main />
			<Quote />
			<HomeProfile />
			<Intro />
			<Usluge usluge={usluge} />
			<Cjenik />
			<Trening />
			<Suradnje suradnje={suradnje} />
		</>
	);
};

export default Home;
