import { combineReducers } from 'redux'
import { cryptoReducer } from './crypto'

const reducers = combineReducers({
    crypto: cryptoReducer
})

const appReducer = (state, action) => {
    return reducers(state, action)
}

export default appReducer
