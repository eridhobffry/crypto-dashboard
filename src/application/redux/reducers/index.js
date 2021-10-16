import { combineReducers } from 'redux'
import { DefaultReducer } from './default'

const reducers = combineReducers({
    default: DefaultReducer
})

const appReducer = (state, action) => {
    return reducers(state, action)
}

export default appReducer
