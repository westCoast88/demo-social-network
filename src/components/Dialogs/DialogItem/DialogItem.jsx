import React from "react";
import styles from './DialogItem.module.css';
import { NavLink } from "react-router-dom";
import userPhoto from '../../../assets/img/userPhoto.png';

const DialogItem = (props) => {
    return (
        <div className={styles.item}>
            <img src={userPhoto} alt="" />
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem