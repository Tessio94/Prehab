"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Naslovnica" },
  { href: "/o-nama", label: "O nama" },
  { href: "/zdravlje", label: "Zdravlje" },
  { href: "/fotogalerija", label: "Fotogalerija" },
  { href: "/kontakt", label: "Kontakt" },
];

const Header = () => {
  const [hambActive, setHambActive] = useState(false);

  const pathname = usePathname();

  const dropdown = useRef<HTMLUListElement>(null);
  const navbar = useRef<HTMLDivElement>(null);

  // Handle navbar scroll behavior
  useEffect(() => {
    if (window.innerWidth < 640) return;

    const handleScroll = () => {
      if (!navbar.current) return;

      if (window.scrollY > 0 && window.scrollY < 900) {
        navbar.current.classList.remove("relative");
        navbar.current.classList.add("fixed");

        navbar.current.classList.toggle("opacity-0", window.scrollY > 700);
      } else {
        navbar.current.classList.remove("opacity-0");
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      navbar.current?.classList.remove("fixed");
      navbar.current?.classList.add("relative");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setHambActive(false);
  }, [pathname]);

  return (
    // <header className={cn(pathname !== "/" ? "relative h-[7.5rem] w-full" : "absolute")}>
    <header className="relative h-[7.5rem] w-full">
      <div
        className="relative z-50 flex w-full items-center justify-between bg-black px-10 py-5 transition-all duration-500 md:px-10 lg:px-16"
        ref={navbar}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4 text-stone-100">
          <Image
            src="/images/logo/ikona.png"
            alt="logo"
            width={80}
            height={80}
            priority
            className="border-red_preh_t h-20 w-20 rounded-xl border-[2px] shadow-2xl"
          />

          <h1 className="font-oswald text-2xl font-bold lg:text-3xl">Prehab</h1>
        </Link>

        {/* NAVIGATION */}
        {/* <nav> */}
        {/* HAMBURGER */}
        {/* <button
            aria-label="Toggle navigation"
            onClick={() => setHambActive((prev) => !prev)}
            id="nav-icon1"
            className="relative z-50 cursor-pointer text-3xl text-stone-100 sm:hidden"
          >
            <span className={hambActive ? "open" : ""}></span>
            <span className={hambActive ? "open" : ""}></span>
            <span className={hambActive ? "open" : ""}></span>
          </button> */}

        {/* MENU */}
        {/* <ul
            ref={dropdown}
            className={`font-oswald xsm:left-[50%] fixed top-0 left-[50%] z-10 flex h-[100vh] flex-col items-start justify-start gap-10 rounded-bl-xl bg-slate-400 px-10 pt-36 pb-5 text-2xl transition-all duration-500 sm:relative sm:top-0 sm:left-0 sm:h-fit sm:translate-x-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:bg-transparent sm:p-0 sm:text-base md:text-lg lg:text-xl xl:gap-6 ${
              hambActive ? "translate-x-0" : "translate-x-[100%]"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative transition-all duration-500 before:absolute before:bottom-[-0.2rem] before:left-0 before:h-0.5 before:w-0 before:bg-stone-300 before:transition-all before:duration-500 hover:text-stone-400 hover:before:w-full ${
                      isActive ? "text-red-500" : "text-stone-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav> */}

        {/* CONTACT + SOCIAL */}
        <div className="hidden flex-col items-center justify-center gap-3 md:flex">
          <div className="text-md text-stone-100">
            <a
              href="tel:+0959064240"
              className="flex items-center gap-2 text-stone-100"
            >
              <BsTelephone />
              +095 906 4240
            </a>
          </div>

          <ul className="text-md flex gap-3 text-stone-100">
            <li className="cursor-pointer text-xl transition-all duration-500 hover:scale-125 hover:text-stone-400">
              <a
                href="https://www.facebook.com/prehabilitationtherapycenter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>

            <li className="cursor-pointer text-xl transition-all duration-500 hover:scale-125 hover:text-stone-400">
              <a
                href="https://www.instagram.com/prehabcentar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
