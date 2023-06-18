import React from "react";
import styles from './Sidebar.module.css';
import userPhoto from '../../../assets/img/userPhoto.png';

const Sidebar = () => {
    return (

        <div className={styles.container}>
            <h3 className={styles.title}>Friends</h3>
            <div className={styles.bar}>
                <div className={styles.item}>
                    <img src={userPhoto} alt="" />
                    <p>Sidebar</p>
                </div>
                <div className={styles.item}>
                    <img src={userPhoto} alt="" />
                    <p>Sidebar</p>
                </div>
                <div className={styles.item}>
                    <img src={userPhoto} alt="" />
                    <p>Sidebar</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar