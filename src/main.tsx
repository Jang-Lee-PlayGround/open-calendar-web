import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { loadPagesRouter } from "./1.app/app";

loadPagesRouter().then((router) => {
	const root = ReactDOM.createRoot(
		document.getElementById("root") as HTMLElement
	);
	root.render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
});
