import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root/Root.jsx";
import Home from "./pages/home/Home.jsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			/**
			 * @todo Add more routes here
			 *
			 * @example
			 * {
			 * 	path: "/about",
			 * 	element: <div>About</div>,
			 * },
			 */
		],
	},
	{
		path: "*",
		element: <div>Not found</div>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
