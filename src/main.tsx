import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { CONFIG } from './config';

(async () => {
    const Routes = await Promise.all(
        CONFIG.PAGES.map(async (page) => {
            const TargetPage = await import(`./pages/${page}/${page}.tsx`).then((e) => e[page]);
            return {
                path: `/${page}`,
                element: <TargetPage />,
                errorElement: <App />,
                children: [],
            };
        })
    );
    return createBrowserRouter(Routes);
})().then((router) => {
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
});
