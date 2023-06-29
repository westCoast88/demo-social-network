import { usersAPI } from "../api/api";
import { profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

// action creator'ы
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });


const initialState = {
    posts: [
        { id: 1, message: '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed autem nesciunt repellendus voluptatum tempora mollitia beatae velit molestias dolore rerum, dolorum nisi! Similique labore dignissimos eius cupiditate perferendis vero tempora?', likescount: 12 },
        { id: 2, message: '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed autem nesciunt repellendus voluptatum tempora mollitia beatae velit molestias dolore rerum, dolorum nisi! Similique labore dignissimos eius cupiditate perferendis vero tempora?', likescount: 2 },
        { id: 3, message: '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed autem nesciunt repellendus voluptatum tempora mollitia beatae velit molestias dolore rerum, dolorum nisi! Similique labore dignissimos eius cupiditate perferendis vero tempora?', likescount: 23 },
    ],
    profile: null,
    status: '',
}

// reducer будет обрабатываться dispatch
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likescount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }


        default:
            return state;
    }
}

export default profileReducer


// thunk'и
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

