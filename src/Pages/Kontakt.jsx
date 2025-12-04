import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import metadata from "../data/metaData";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { Toaster, toast } from "sonner";

const Kontakt = () => {
	const location = useLocation();
	const meta = metadata[location.pathname];
	const [lokacija, setLokacija] = useState(true);

	const initialValues = {
		user: "",
		email: "",
		location: "",
		message: "",
		botfield: "",
	};

	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [formValues, setFormValues] = useState(initialValues);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			setLoading(true);
			const res = await fetch("/.netlify/functions/sendEmail", {
				method: "POST",
				cache: "no-cache",
				body: JSON.stringify({
					formValues,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (!res.ok) {
				if (res.status === 400) {
					const data = await res.json();
					const stringErr = data.error
						.flat()
						.map((err) => `• ${err}`)
						.join("<br>");
					throw new Error(stringErr);
				}

				throw new Error("Pogreška prilikom slanja zahtjeva!");
			}

			const result = await res.json();
			console.log("data", result);

			setFormValues({ user: "", email: "", location: "", message: "" });
			setSuccess(true);
			setLoading(false);
			toast.success(result.message);
		} catch (err) {
			if (err instanceof Error) {
				setSuccess(false);
				setLoading(false);
				toast.error(<div dangerouslySetInnerHTML={{ __html: err.message }} />);
			}
		}
	};

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
			<Toaster
				toastOptions={{
					style: {
						color: success ? "#22c55e" : "#ef4444",
						border: success ? "2px solid #22c55e" : "2px solid #ef4444",
					},
				}}
			/>
			<section id="kontakt">
				<h1 className="text-6xl font-oswald text-center mb-[8rem] sm:mb-[5rem] mt-[5rem]">
					Kontakt
				</h1>
				<div className="flex flex-col justify-between items-center  sm:gap-0 sm:flex-row w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[70vh] sm:h-fit  m-auto mb-[7rem] px-10 sm:px-0">
					<div className="flex flex-col gap-3 w-full  items-center justify-start border-b-2 sm:border-b-0  sm:border-r-2 border-slate-500 h-[10rem] basis-[33.3%] pb-5 sm:pb-0">
						<BsFillTelephoneFill />
						<h3 className="text-3xl sm:text-2xl md:text-3xl font-oswald">
							Telefon
						</h3>
						<p className="text-xl sm:text-base md:text-xl font-oswald mt-auto">
							Tel: +385 95 906 4240
						</p>
					</div>
					<div className="flex flex-col gap-3 w-full  items-center justify-center border-b-2  sm:border-b-0 sm:border-r-2 border-slate-500  h-[10rem] basis-[33.3%] py-5 sm:py-0">
						<FaLocationDot />
						<p className="text-3xl sm:text-2xl md:text-3xl font-oswald">
							Adresa
						</p>
						<div className="mt-auto flex flex-col gap-2">
							<p className="text-xl sm:text-base md:text-xl font-oswald">
								Splitska ulica 3, Zadar
							</p>
							<p className="text-xl sm:text-base md:text-xl font-oswald m-auto">
								Bukovačka 15, BnM
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-3 w-full items-center justify-center h-[10rem] basis-[33.3%] pt-10 sm:pt-0">
						<MdEmail />
						<p className="text-3xl sm:text-2xl md:text-3xl font-oswald">
							E-mail
						</p>
						<p className="text-xl sm:text-base md:text-xl font-oswald mt-auto">
							nikola.lukic.993@gmail.com
						</p>
					</div>
				</div>

				<div className="custom_grid px-10 py-5 mb-10">
					<div className="py-5 px-4 flex flex-col justify-center items-start">
						<h3 className="text-3xl font-oswald mb-3 font-bold">
							Potražite nas na mapi
						</h3>
						<div className="mb-5">
							<h4 className="text-2xl font-oswald mb-3">Lokacija br. 1:</h4>
							<p className="text-xl mb-5">
								Nalazimo se na Zatvorenom bazenskom plivalištu u Zadru, na
								adresi <FaArrowRight className="inline mx-2" />
								<strong
									className="font-bold underline cursor-pointer text-blue-600 hover:text-blue-400 hover:transition-all hover:duration-300 inline"
									onClick={() => setLokacija(true)}
								>
									Splitska ulica 3
								</strong>
							</p>
						</div>
						<div className="mb-5">
							<h4 className="text-2xl font-oswald mb-3">Lokacija br. 2:</h4>
							<p className="text-xl mb-5">
								Nalazimo se na Zatvorenom bazenskom plivalištu u Zadru, na
								adresi <FaArrowRight className="inline mx-2" />
								<strong
									className="font-bold underline cursor-pointer text-blue-600 hover:text-blue-400 hover:transition-all hover:duration-300 inline"
									onClick={() => setLokacija(false)}
								>
									Bukovačka 15, BnM
								</strong>
							</p>
						</div>
					</div>
					<div className="my-auto">
						{lokacija ? (
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.8328217605076!2d15.242970576714763!3d44.11955357108381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761fa7e16fc9e65%3A0xbb1632ed4f13abff!2sSplitska%20ul.%203%2C%2023000%2C%20Zadar!5e1!3m2!1shr!2shr!4v1720116102308!5m2!1shr!2shr"
								style={{ border: 0, width: "100%", height: "20rem" }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						) : (
							<iframe
								className="rounded"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4944485561277!2d15.454846076707327!3d43.951095671089725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761df789b15a309%3A0x459b8099f8ebd0ef!2sBukova%C4%8Dka%2015%2C%2023210%2C%20Biograd%20na%20Moru!5e1!3m2!1shr!2shr!4v1720116049751!5m2!1shr!2shr"
								style={{ border: 0, width: "100%", height: "20rem" }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						)}
					</div>
				</div>

				<div className="w-full mt-12 flex flex-col-reverse sm:flex-row items-center justify-center gap-20 bg-slate-300 pt-10 pb-10  px-10">
					<div className="w-[100%] sm:w-[40%] lg:hidden flex flex-col gap-5 rounded-xl overflow-hidden">
						<img
							src="/images/akcije/besplatni pregled za djecu.jpg"
							className="rounded-xl"
							alt="letak prehab screening"
							width="559"
							height="559"
						/>
						<img
							src="/images/akcije/grupe za vježbanje.jpg"
							className="rounded-xl"
							alt="letak prehab grupe za vježbanje"
							width="559"
							height="559"
						/>
					</div>
					<div className="w-[100%] sm:w-[40%] hidden lg:flex lg:flex-col lg:flex-1 gap-5 rounded-xl overflow-hidden">
						<div className="flex justify-between max-w-[850px]">
							<img
								src="/images/akcije/besplatni pregled za djecu.jpg"
								className="rounded-xl max-w-[47%] aspect-square"
								alt="letak prehab screening"
							/>
							<img
								src="/images/akcije/grupe za vježbanje.jpg"
								className="rounded-xl max-w-[47%] aspect-square"
								alt="letak prehab grupe za vježbanje"
							/>
						</div>
						<div>
							<img
								src="/images/zadar/letak 1png.png"
								className="rounded-xl"
								alt="letak prehab"
								width="851"
								height="315"
							/>
						</div>
					</div>
					<div className="w-[100%] sm:w-[55%] md:w-[40%]">
						<form
							className="flex flex-col gap-7"
							name="contact"
							data-netlify="true"
							data-netlify-honeypot="botfield"
							onSubmit={handleSubmit}
						>
							<h6 className="text-3xl font-oswald mb-3 underline text-red_preh font-bold text-center">
								Ispunite formu
							</h6>
							<input type="hidden" name="form-name" value="contact" />

							<input
								type="text"
								name="botfield"
								style={{ display: "none" }}
								tabIndex="-1"
								autoComplete="off"
								onChange={handleChange}
							/>

							<div className="flex flex-col gap-2">
								<label htmlFor="user" className="font-oswald text-xl">
									Ime i prezime
								</label>
								<input
									type="text"
									name="user"
									id="user"
									placeholder="Ime i prezime"
									className="rounded-lg py-2 px-5 text-lg outline-none"
									value={formValues.user}
									onChange={handleChange}
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="email" className="font-oswald text-xl">
									E-mail
								</label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Vaš e-mail"
									className="rounded-lg py-2 px-5 text-lg outline-none"
									value={formValues.email}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="location" className="font-oswald text-xl">
									Vaše prebivalište
								</label>
								<input
									type="text"
									name="location"
									id="location"
									placeholder="Mjesto stanovanja"
									className="rounded-lg py-2 px-5 text-lg outline-none"
									value={formValues.location}
									onChange={handleChange}
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="message" className="font-oswald text-xl">
									Vaš zahtjev
								</label>
								<textarea
									name="message"
									id="message"
									rows={6}
									className="rounded-lg py-2 px-5 text-lg outline-none"
									value={formValues.message}
									onChange={handleChange}
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full mx-auto py-2 px-5 bg-red_preh rounded-xl text-xl font-oswald border-2 font-bold text-white hover:text-red_preh hover:bg-slate-100 hover:border-red_preh hover:border-2 transition-all duration-500 group flex items-center justify-center"
							>
								{loading ? (
									<svg
										className="size-6 animate-spin text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
								) : (
									"Pošalji"
								)}
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Kontakt;
