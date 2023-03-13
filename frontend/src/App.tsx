import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainInfo } from "./components/MainInfo";
import { Header } from './components/Header';

import styles from "./App.module.css";
import { Footer } from './components/Footer';
import { Background } from './components/Background';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainInfo/>
    },
    {
        path: "/nice",
        element: <h2>Run you fools</h2>
    }
]);

export const App = () => {
  return (
    <div className={styles.app}>
        <Background/>
        <Header/>
        <RouterProvider router={router}/>
        <Footer/>
    </div>
  );
}
