import { combineReducers } from 'redux'
import { common } from './common'
import { cryptoReducer } from './crypto'

const reducers = combineReducers({
    crypto: cryptoReducer,
    common: common
})

const appReducer = (state, action) => {
    return reducers(state, action)
}

export default appReducer
