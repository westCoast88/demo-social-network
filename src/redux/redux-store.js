import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
//  импортируем Middleware
import thunkMiddleware from 'redux-thunk';

import {reducer as formReducer} from 'redux-form';

// объединили все редьюсеры для передачи
let reducers = combineReducers({
// ветка за которую отвечает - редьюссер <--- initialState
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

/*добавляем промежуточную обработку - Middleware redux-thunk (чтобы могли диспатчить функции)*/
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store