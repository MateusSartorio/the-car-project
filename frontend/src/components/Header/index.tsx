import React from 'react';

import styles from "./index.module.css";
import '../../constants.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left_portion}>
                <h1>The Car Project</h1>
                <nav className={styles.nav}>
                    <a>CARS</a>
                    <a>HISTORY</a>
                    <a>TECHNOLOGY</a>
                    <a>PRODUCTION</a>
                </nav>
            </div>
            <a className={`${styles.right_portion} button`}>CONTACT US</a>
        </header>
    )
}
