const initialState = {
    username: '',
    id: 0,
    profile_pic: ''
}

const UPDATE_USER = 'UPDATE_USER'

export default function reducer(state=initialState, action){
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, {
                id: action.payload.id,
                username: action.payload.username,
                profile_pic: action.payload.profile_pic
            })
        default:
            return state
    }
}

export function updateUser(id, username, profile_pic){
    return{
        type: UPDATE_USER,
        payload: {
            id: id,
            username: username,
            profile_pic: profile_pic
        }
    }

}