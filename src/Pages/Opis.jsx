import { Helmet } from "react-helmet-async";
import OpisGrid from "../components/OpisGrid";
import { useLocation } from "react-router-dom";
import metadata from "../data/metaData";

export function Loader() {}

const Opis = () => {
	const location = useLocation();
	const meta = metadata[location.pathname];

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
			<OpisGrid />
		</>
	);
};

export default Opis;
