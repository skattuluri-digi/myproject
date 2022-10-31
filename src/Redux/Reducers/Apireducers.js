const initialState = {
    posts: [],
    post: {},
}

function Apireducer(state = initialState, {type, payload}) {

    switch(type){
        case "GET_ALL_DATA":
            return {...state, posts: payload}
        case "RETRIEVE_DATA":
            return {...state, post: payload}
        case "DELETE_DATA":
            let updatedState = state?.posts?.filter((item) =>  item.id !== +payload)
            return {...state , posts: updatedState}
        case "ADD_DATA":
            return {...state, posts: [...state.posts, payload]}
        case "UPDATE_DATA":
            let updatedObj = state?.posts?.filter((item) =>  item.id !== +payload.id)
            return {...state, posts: [...updatedObj, payload.data]}
        default:
            return state
    }
    
}

export default Apireducer;