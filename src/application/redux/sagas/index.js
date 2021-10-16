import { all } from 'redux-saga/effects'
import { defaultWatcher } from './default'

export default function* rootSaga() {
    yield all([
       defaultWatcher()
    ])
}