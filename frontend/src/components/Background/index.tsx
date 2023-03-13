import styles from "./index.module.css";

export const Background = () => {
    return (
        <div className={styles.background}>
            <div className={styles.white_portion}/>
            <div className={styles.lanes_portion}>
                <div className={styles.solid_yellow}/>
                <div className={styles.dashed_gray}/>
                <div className={styles.solid_yellow}/>
            </div>
            <div className={styles.black_portion}/>
        </div>
    );
}
