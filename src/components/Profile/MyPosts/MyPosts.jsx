import React, { memo } from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import { reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { FormControl } from "../../common/FormsControls/FormControls";
import { createField } from "../../common/FormsControls/FormControls";

const MyPosts = memo(props => {
  const postsElements = props.posts.map((el) => <Post message={el.message} likescount={el.likescount} key={el.id} />)

  const onAddPost = (value) => {
    props.addPost(value.newPostText)
  }

  return (
    <div className={styles.textContent}>
      <div className={styles.formContainer}>
        <h3 className={styles.title}>My posts</h3>
        <div>
          <ReduxFormContainer {...props} onSubmit={onAddPost} />
        </div>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  )
})

export default MyPosts

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return <form action="" onSubmit={props.handleSubmit}>
    <div className={styles.textInputContainer}>
      {createField("New post text", 'newPostText', [required, maxLength10], FormControl, "textarea")}
    </div>
    <button className={styles.BtnSubmit} type="submit">Add</button>
  </form>
}

const ReduxFormContainer = reduxForm({ form: 'profileSddNewPostForm' })(AddNewPostForm);