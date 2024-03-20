import { createBrowserRouter, Navigate } from "react-router-dom";
import { loadButtonPages, Signin } from "../../3.pages/pages";

export async function loadPagesRouter() {
	const Pages = await loadButtonPages();

	return createBrowserRouter([
		{
			path: "/",
			element: <Navigate replace to="/Signin" />,
		},
		{
			path: "/Signin",
			element: <Signin />,
		},
		...Object.entries(Pages).map(([name, TargetPage]: [string, any]) => {
			return {
				path: `/${name}`,
				element: <TargetPage />,
				errorElement: <Navigate replace to="/Signin" />,
				children: [],
			};
		}),
	]);
}
