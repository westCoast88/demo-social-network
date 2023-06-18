import React from "react";
import preloader from '../../../assets/img/loader.gif';
import styles from './Preloader.module.css';

let Preloader = (props) => {
    return(
        <div className={styles.container}>
            <img src={preloader} alt=""/>
        </div>
    )
}

export default Preloader