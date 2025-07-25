import { useState } from "react";

const Button = ({ children, type, href, header }) => {
	const base =
		"flex gap-1 items-center justify-center text-stone-50 px-4 py-2 rounded-2xl text-lg  border-2 font-semibold shadow-lg  tracking-wide transition-colors duration-300  focus:ring  focus:ring-offset-2 disabled:cursor-not-allowed  outline-none hover:border-2 hover:shadow-lg  w-fit";

	if (type === "red" && href && header === "header") {
		return (
			<a
				className={
					base +
					" " +
					"bg-red-500 hover:bg-stone-50 hover:text-red-500  focus:ring focus:ring-red-500  hover:border-red-500 hover:shadow-red-300 group w-[190px]"
				}
				href={href}
			>
				{children}
			</a>
		);
	}

	if (type === "red" && href) {
		return (
			<a
				className={
					base +
					" " +
					"bg-red-500 hover:bg-stone-50 hover:text-red-500  focus:ring focus:ring-red-500  hover:border-red-500 hover:shadow-red-300 group"
				}
				href={href}
			>
				{children}
			</a>
		);
	}

	if (type === "red") {
		return (
			<button
				className={
					base +
					" " +
					"bg-red-500 hover:bg-stone-50 hover:text-red-500  focus:ring focus:ring-red-500  hover:border-red-500 hover:shadow-red-300"
				}
			>
				{children}
			</button>
		);
	}

	if (type === "blue" && href && header === "header") {
		return (
			<a
				className={
					base +
					" " +
					"bg-blue-900  hover:bg-stone-50 hover:text-blue-900   focus:ring-blue-900 hover:border-blue-900  hover:shadow-blue-300 cursor w-[190px]"
				}
				href={href}
			>
				{children}
			</a>
		);
	}

	if (type === "blue") {
		return (
			<a
				className={
					base +
					" " +
					"bg-blue-900  hover:bg-stone-50 hover:text-blue-900   focus:ring-blue-900 hover:border-blue-900  hover:shadow-blue-300 cursor"
				}
				href={href}
			>
				{children}
			</a>
		);
	}

	return <button>{children}</button>;
};

export default Button;
