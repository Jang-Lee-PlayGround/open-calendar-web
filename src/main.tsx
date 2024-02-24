import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './index.css';
import { CONFIG } from './config';
import { LoginPage } from './pages/LoginPage/LoginPage';

(async () => {
    const Routes = await Promise.all(
        CONFIG.PAGES.map(async (page) => {
            const TargetPage = await import(`./pages/${page}/${page}.tsx`).then((e) => e[page]);
            return {
                path: `/${page}`,
                element: <TargetPage />,
                errorElement: <Navigate replace to="/LoginPage" />,
                children: [],
            };
        })
    );
    return createBrowserRouter([
        {
            path: '/',
            element: <Navigate replace to="/LoginPage" />,
        },
        {
            path: '/LoginPage',
            element: <LoginPage />,
        },
        ...Routes,
    ]);
})().then((router) => {
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
});
