import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


let mapStateTpProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
    }
}

export default compose(
    connect(mapStateTpProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)
