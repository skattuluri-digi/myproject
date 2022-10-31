import axios from "axios"

export const getData = () => async (dispatch) => {
    const data = await axios.get("http://localhost:3000/posts")
    dispatch({type: "GET_ALL_DATA", payload: data.data})
}

export const retrieveData = (id) => async (dispatch) => {
    const data = await axios.get(`http://localhost:3000/posts/${id}`)
    dispatch({type: "RETRIEVE_DATA", payload:data})
}

export const deleteData = (id) => async (dispatch) => {
    await axios.delete(`http://localhost:3000/posts/${id}`)
    dispatch({type: "DELETE_DATA", payload:id})
}

export const addData = (id, name) => async (dispatch) => {
    const data = await axios.post("http://localhost:3000/posts", {id:id, title: name})
    dispatch({type: "ADD_DATA", payload: data.data})
}

export const updateData = (id, name) => async (dispatch) => {
    const data = await axios.put(`http://localhost:3000/posts/${id}`, {id:id, title: name});
    dispatch({type: "UPDATE_DATA", payload: {data:data.data, id}})
}