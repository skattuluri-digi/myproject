import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { reducers } from './Reducers'

const middleWare = [thunk]
const store = createStore(
    reducers,
    applyMiddleware(...middleWare)
)

export default store