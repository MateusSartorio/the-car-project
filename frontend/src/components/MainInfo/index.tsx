import React from 'react'

import { FiArrowUpRight } from 'react-icons/fi';

import styles from './index.module.css';
import '../../constants.css';

export const MainInfo = () => {
    return (
        <div className={styles.main_info}>
            <h1>Muscle Mustang</h1>
            <p>Since 1903, Ford Moto Company has put the world on wheels.</p>
            <a className={`${styles.discover} button`}>DISCOVER <FiArrowUpRight/></a>
        </div>
    );
}
