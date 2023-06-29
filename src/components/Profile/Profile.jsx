import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  console.log(props.profile)
  return (
    <div>
      <ProfileInfo profile={props.profile}
                    status={props.status} 
                    isOwner={props.isOwner}
                    savePhoto={props.savePhoto}
                    updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile