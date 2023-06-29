import React from "react";
import styles from './User.module.css';
import userPhoto from '../../assets/img/userPhoto.png';
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={styles.container}>
            <div className={styles.profilePrev}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.icon} alt="" />
                    </NavLink>
                </div>

                    {user.followed
                        ? <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}
                            className={styles.followBtn}>
                            Unfollow</button>

                        : <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}
                            className={styles.followBtn}>
                            Follow</button>}

            </div>
            <div className={styles.profileInfo}>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>

                <div>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                </div>
            </div>
        </div>
    )
}
export default User