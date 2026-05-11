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
    "flex gap-1 items-center justify-center text-stone-50 px-4 py-2 rounded-2xl text-lg  border-2 font-semibold shadow-lg  tracking-wide transition-colors duration-300  focus:ring  focus:ring-offset-2 disabled:cursor-not-allowed  outline-none hover:border-2 hover:shadow-lg  w-fit";

  if (type === "red" && href && header === "header") {
    return (
      <Link
        className={
          base +
          " " +
          "group !w-[190px] bg-red-500 hover:border-red-500 hover:bg-stone-50 hover:text-red-500 hover:shadow-red-300 focus:ring focus:ring-red-500"
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
          "group bg-red-500 hover:border-red-500 hover:bg-stone-50 hover:text-red-500 hover:shadow-red-300 focus:ring focus:ring-red-500"
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
          " bg-red-500 hover:border-red-500 hover:bg-stone-50 hover:text-red-500 hover:shadow-red-300 focus:ring focus:ring-red-500"
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
          "cursor !w-[190px] bg-blue-900 hover:border-blue-900 hover:bg-stone-50 hover:text-blue-900 hover:shadow-blue-300 focus:ring-blue-900"
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
          "cursor bg-blue-900 hover:border-blue-900 hover:bg-stone-50 hover:text-blue-900 hover:shadow-blue-300 focus:ring-blue-900"
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
