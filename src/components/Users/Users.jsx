import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from './Users.module.css';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return (
        <div className={styles.container}>

            <div>
                {
                    users.map( u => <User key={u.id}
                                            user={u} 
                                            followingInProgress={props.followingInProgress} 
                                            unfollow={props.unfollow} 
                                            follow={props.follow}/> )
                }
            </div>

            <Paginator currentPage={currentPage}
                        onPageChanged={onPageChanged}
                        totalItemsCount={totalUsersCount}
                        pageSize={pageSize}
                        portionSize={10} />
        </div>
    )
}
export default Users