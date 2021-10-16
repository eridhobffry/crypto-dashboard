import { all } from 'redux-saga/effects'
import { cryptoListingWatcher } from './crypto'

export default function* rootSaga() {
    yield all([
        cryptoListingWatcher()
    ])
}