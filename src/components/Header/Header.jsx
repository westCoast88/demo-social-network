import React from "react";
import styles from './Header.module.css'
import { NavLink } from "react-router-dom";
import logoImg from '../../assets/img/logo.jpg';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <a href="/">
                <img alt="" src={logoImg}></img>
            </a>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div className={styles.link}>{props.login}  <button className={styles.logoutBtn} onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'} className={styles.link}>Login</NavLink>}

            </div>
        </header>)
}

export default Header