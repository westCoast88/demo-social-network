import React from "react";
import classes from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
/**
NavLink ~ a, меняет url без перезагрузки
to ~ href
lassName={( {isActive} ) => isActive ? classes.active : undefined} - добавление активного состояния
*/

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? classes.active : undefined}>profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" className={({ isActive }) => isActive ? classes.active : undefined}>messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" className={({ isActive }) => isActive ? classes.active : undefined}>users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" className={({ isActive }) => isActive ? classes.active : undefined}>news</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className={({ isActive }) => isActive ? classes.active : undefined}>music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" className={({ isActive }) => isActive ? classes.active : undefined}>settings</NavLink>
            </div>
            <div className={classes.item}>
                <Sidebar />
            </div>

        </nav>

    )
}

export default Navbar