import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import styles from './index.module.css';

import App from './App';
import { Header } from './components/Header';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: "/nice",
        element: <h2>Run you fools</h2>
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <div>
            <Header/>
            <div className={styles.main_content}>
                <RouterProvider router={router}/>
            </div>
        </div>
    </React.StrictMode>
);
