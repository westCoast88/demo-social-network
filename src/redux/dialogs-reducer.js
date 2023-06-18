
const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

const initialState = {
    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
    ],

    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hello' },
        { id: 3, message: 'how are you' },
    ],  
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 9, message: body }],
            };

        default:
            return state;
    }


}

export default dialogsReducer