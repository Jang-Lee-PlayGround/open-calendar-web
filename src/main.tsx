import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { MainPage } from './pages/main-page/main-page';
import { SearchPage } from './pages/search-page/search-page';

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/MainPage', element: <MainPage />, errorElement: <App />, children: [] },
    { path: '/SearchPage', element: <SearchPage />, errorElement: <App />, children: [] },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
