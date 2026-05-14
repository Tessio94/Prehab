import Link from "next/link";
import { ReactNode } from "react";

const Button = ({
  children,
  type,
  href,
  header,
}: {
  children: ReactNode;
  type: string;
  href: string;
  header: string;
}) => {
  const base =
    "flex gap-1 items-center justify-center text-stone-50 px-4 py-2 rounded-lg text-lg  border-2 font-medium shadow-lg tracking-wide transition-colors duration-300  focus:ring  focus:ring-offset-2 disabled:cursor-not-allowed  outline-none hover:border-2 hover:shadow-lg  w-fit";

  if (type === "red" && href && header === "header") {
    return (
      <Link
        className={
          base +
          " " +
          "group bg-red_preh hover:border-red_preh hover:text-red_preh focus:ring-red_preh !w-[190px] hover:bg-stone-50 hover:shadow-red-300 focus:ring"
        }
        href={href}
      >
        {children}
      </Link>
    );
  }

  if (type === "red" && href) {
    return (
      <Link
        className={
          base +
          " " +
          "group bg-red_preh hover:border-red_preh hover:text-red_preh focus:ring-red_preh hover:bg-stone-50 hover:shadow-red-300 focus:ring"
        }
        href={href}
      >
        {children}
      </Link>
    );
  }

  if (type === "red") {
    return (
      <button
        className={
          base +
          " " +
          " bg-red_preh group hover:border-red_preh hover:text-red_preh focus:ring-red_preh hover:bg-stone-50 hover:shadow-red-300 focus:ring"
        }
      >
        {children}
      </button>
    );
  }

  if (type === "blue" && href && header === "header") {
    return (
      <Link
        className={
          base +
          " " +
          "cursor bg-black_preh hover:border-black_preh hover:text-black_preh focus:ring-black_preh !w-[190px] hover:bg-stone-50 hover:shadow-blue-300"
        }
        href={href}
      >
        {children}
      </Link>
    );
  }

  if (type === "blue") {
    return (
      <Link
        className={
          base +
          " " +
          "cursor bg-black_preh hover:border-black_preh hover:text-black_preh focus:ring-black_preh hover:bg-stone-50 hover:shadow-blue-300"
        }
        href={href}
      >
        {children}
      </Link>
    );
  }

  return <button>{children}</button>;
};

export default Button;
