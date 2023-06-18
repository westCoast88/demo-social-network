import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { reduxForm } from "redux-form";
import { FormControl } from "../common/FormsControls/FormControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { createField } from "../common/FormsControls/FormControls";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    const addNewMessage = (values) =>{
        console.log(values)
        props.sendMessage(values.newMessageBody)
    }

    const dialogsElements = state.dialogs.map((el) => <DialogItem name={el.name} id={el.id} key={el.id} />);
    const messagesElement = state.messages.map((el) => <Message message={el.message} key={el.id} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>

            <div className={styles.messages}>
                <div className={styles.messagesContainer}>
                    {messagesElement}
                </div>

                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
export default Dialogs

const AddMessageForm = (props) => {

    const maxLength50 =  maxLengthCreator(50)
    return <div>
        <form action="" onSubmit={props.handleSubmit} className={styles.newMessageForm}>
            {createField("Enter your message", "newMessageBody", [required, maxLength50], FormControl, "textarea")}
            <div>
                <button className={styles.btnSubmit}>Send</button>
            </div>
        </form>
    </div>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)