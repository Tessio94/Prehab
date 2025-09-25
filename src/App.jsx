// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import AppLayout from "./Pages/AppLayout";
import LoadingSpinner from "./components/LoadingSpinner";
// import Home from "./Pages/Home";
// import Kontakt from "./Pages/Kontakt";
// import Fotogalerija from "./Pages/Fotogalerija";
// import Opis from "./Pages/Opis";
// import PagesNotFound from "./Pages/PagesNotFound";
// import Zdravlje from "./Pages/Zdravlje";
// import SkoliozaKamp from "./Pages/zdravlje/SkoliozaKamp";
// import LoadingSpinner from "./components/LoadingSpinner";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<AppLayout />
			</Suspense>
		),
		children: [
			{
				index: true,
				lazy: async () => {
					let { default: Home } = await import("./Pages/Home");
					return { Component: Home };
				},
			},
			{
				path: "o-nama",
				lazy: async () => {
					let { default: Opis } = await import("./Pages/Opis");
					return { Component: Opis };
				},
			},
			{
				path: "zdravlje",
				lazy: async () => {
					let { default: Zdravlje } = await import("./Pages/Zdravlje");
					return { Component: Zdravlje };
				},
			},
			{
				path: "zdravlje/skolioza-kamp",
				lazy: async () => {
					let { default: SkoliozaKamp } = await import(
						"./Pages/zdravlje/SkoliozaKamp"
					);
					return { Component: SkoliozaKamp };
				},
			},
			{
				path: "fotogalerija",
				lazy: async () => {
					let { default: Fotogalerija } = await import("./Pages/Fotogalerija");
					return { Component: Fotogalerija };
				},
			},
			{
				path: "kontakt",
				lazy: async () => {
					let { default: Kontakt } = await import("./Pages/Kontakt");
					return { Component: Kontakt };
				},
			},
			{
				path: "*",
				lazy: async () => {
					let { default: PagesNotFound } = await import(
						"./Pages/PagesNotFound"
					);
					return { Component: PagesNotFound };
				},
			},
			// { index: true, element: <Home /> },
			// { path: "o-nama", element: <Opis /> },
			// { path: "zdravlje", element: <Zdravlje /> },
			// { path: "zdravlje/skolioza-kamp", element: <SkoliozaKamp /> },
			// { path: "fotogalerija", element: <Fotogalerija /> },
			// { path: "kontakt", element: <Kontakt /> },
			// { path: "*", element: <PagesNotFound /> },
		],
	},
]);

const App = () => {
	return (
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	);
};

export default App;
