import React from "react";
import styles from './Post.module.css';
import heart from '../../../../assets//img/heart.png';
import userPhoto from '../../../../assets/img/userPhoto.png';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src={userPhoto} alt="" />
      <div>
        <div className={styles.name}>NAME</div>
        <div>{props.message}</div>
        <div className={styles.likes}>
          <p className={styles.likesCount}>{props.likescount}</p>
          <button className={styles.likesBtn}>
            <img src={heart} alt="" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Post