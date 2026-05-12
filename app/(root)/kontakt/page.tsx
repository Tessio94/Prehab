"use client";

import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import Intro from "@/components/contact/Intro";

const Page = () => {
  // const location = useLocation();
  // const meta = metadata[location.pathname];
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
        body: JSON.stringify(formValues),
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
      <Toaster
        toastOptions={{
          style: {
            color: success ? "#22c55e" : "#ef4444",
            border: success ? "2px solid #22c55e" : "2px solid #ef4444",
          },
        }}
      />
      <Intro />
      <section id="kontakt">
        <section className="py-16">
          <div className="mx-auto flex flex-col items-stretch justify-between px-10 py-10 sm:flex-row sm:gap-0 sm:px-0">
            <div className="border-red_preh_t flex h-[10rem] w-full basis-[33.3%] flex-col items-center justify-start gap-3 border-b-2 pb-5 sm:border-r-2 sm:border-b-0 sm:pb-0">
              <div className="bg-red_preh_t/80 flex flex-row items-center justify-center rounded-full p-3.5">
                <BsFillTelephoneFill className="text-red_preh h-[50] w-auto" />
              </div>
              <h3 className="font-oswald text-3xl sm:text-2xl md:text-3xl">
                Telefon
              </h3>
              <p className="font-oswald mt-auto text-xl sm:text-base md:text-xl">
                Tel: +385 95 906 4240
              </p>
            </div>
            <div className="border-red_preh_t flex h-[10rem] w-full basis-[33.3%] flex-col items-center justify-start gap-3 border-b-2 py-5 sm:border-r-2 sm:border-b-0 sm:py-0">
              <div className="bg-red_preh_t/80 flex flex-row items-center justify-center rounded-full p-3.5">
                <FaLocationDot className="text-red_preh h-[50] w-auto" />
              </div>
              <p className="font-oswald text-3xl sm:text-2xl md:text-3xl">
                Adresa
              </p>
              <div className="mt-auto flex flex-col gap-2">
                <p className="font-oswald text-xl sm:text-base md:text-xl">
                  Splitska ulica 3, Zadar
                </p>
                <p className="font-oswald m-auto text-xl sm:text-base md:text-xl">
                  Bukovačka 15, BnM
                </p>
              </div>
            </div>
            <div className="flex h-[10rem] w-full basis-[33.3%] flex-col items-center justify-start gap-3 pt-10 sm:pt-0">
              <div className="bg-red_preh_t/80 flex flex-row items-center justify-center rounded-full p-3.5">
                <MdEmail className="text-red_preh h-[50] w-auto" />
              </div>

              <p className="font-oswald text-3xl sm:text-2xl md:text-3xl">
                E-mail
              </p>
              <p className="font-oswald mt-auto text-xl sm:text-base md:text-xl">
                nikola.lukic.993@gmail.com
              </p>
            </div>
          </div>
        </section>

        <div className="custom_grid mb-10 px-10 py-5">
          <div className="flex flex-col items-start justify-center px-4 py-5">
            <h3 className="font-oswald text-red_preh mb-3 text-3xl font-bold">
              Potražite nas na mapi
            </h3>
            <div className="mb-5">
              <h4 className="font-oswald mb-3 text-2xl">Lokacija br. 1:</h4>
              <p className="mb-5 text-xl">
                Nalazimo se na Zatvorenom bazenskom plivalištu u Zadru, na
                adresi <FaArrowRight className="mx-2 inline" />
                <strong
                  className="inline cursor-pointer font-bold text-blue-600 underline hover:text-blue-400 hover:transition-all hover:duration-300"
                  onClick={() => setLokacija(true)}
                >
                  Splitska ulica 3
                </strong>
              </p>
            </div>
            <div className="mb-5">
              <h4 className="font-oswald mb-3 text-2xl">Lokacija br. 2:</h4>
              <p className="mb-5 text-xl">
                Nalazimo se na Zatvorenom bazenskom plivalištu u Zadru, na
                adresi <FaArrowRight className="mx-2 inline" />
                <strong
                  className="inline cursor-pointer font-bold text-blue-600 underline hover:text-blue-400 hover:transition-all hover:duration-300"
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

        <div className="mt-12 flex w-full flex-col-reverse items-center justify-center gap-20 bg-slate-300 px-10 pt-10 pb-10 sm:flex-row">
          <div className="flex w-[100%] flex-col gap-5 overflow-hidden rounded-xl sm:w-[40%] lg:hidden">
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
          <div className="hidden w-[100%] gap-5 overflow-hidden rounded-xl sm:w-[40%] lg:flex lg:flex-1 lg:flex-col">
            <div className="flex max-w-[850px] justify-between">
              <img
                src="/images/akcije/besplatni pregled za djecu.jpg"
                className="aspect-square max-w-[47%] rounded-xl"
                alt="letak prehab screening"
              />
              <img
                src="/images/akcije/grupe za vježbanje.jpg"
                className="aspect-square max-w-[47%] rounded-xl"
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
              <h6 className="font-oswald text-red_preh mb-3 text-center text-3xl font-bold underline">
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
                  className="rounded-lg px-5 py-2 text-lg outline-none"
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
                  className="rounded-lg px-5 py-2 text-lg outline-none"
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
                  className="rounded-lg px-5 py-2 text-lg outline-none"
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
                  className="rounded-lg px-5 py-2 text-lg outline-none"
                  value={formValues.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red_preh font-oswald hover:text-red_preh hover:border-red_preh group mx-auto flex w-full items-center justify-center rounded-xl border-2 px-5 py-2 text-xl font-bold text-white transition-all duration-500 hover:border-2 hover:bg-slate-100"
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

export default Page;
