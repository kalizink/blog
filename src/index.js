import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PothosPage from "./components/PothosPage";
import HyacinthPage from "./components/HyacinthPage";
import TulipPage from "./components/TulipPage";
import HerbPage from "./components/HerbPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},

	{
		path: "/PothosPage",
		element: <PothosPage />,
	},
	{
		path: "/HyacinthPage",
		element: <HyacinthPage />,
	},
	{
		path: "/TulipPage",
		element: <TulipPage />,
	},
	{
		path: "/HerbPage",
		element: <HerbPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
