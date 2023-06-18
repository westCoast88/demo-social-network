import React from "react";
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import grad from '../../../assets/img/grad.png';
import userPhoto from '../../../assets/img/userPhoto.png'

const ProfileInfo = ({profile, status, updateStatus, ...props}) => {
console.log(profile)
  if(!profile){
    return(
      <Preloader/>
    )
  } else {
    return (
      <div>
        <div className={styles.imgShell}>
          <img className={styles.profileImg} alt="" src={grad}></img>
        </div>
  
        <div className={styles.textContent}>
          {profile.photos.large ? <img src={profile.photos.large} className={styles.userPhoto} alt=""/> : <img src={userPhoto} className={styles.userPhoto} alt=""/>}
          <h3 className={styles.name}>{profile.fullName}</h3>
          {profile.aboutMe && <p>{profile.aboutMe}</p>}
          <ProfileStatusWithHooks status={status} 
                                  updateStatus={updateStatus}/>
        </div>
      </div>
    )
  }
  
}

export default ProfileInfo