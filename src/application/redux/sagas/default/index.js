import { takeEvery } from "@redux-saga/core/effects";
import { ACTIONS } from "application/constants";
import { handleError } from "../handle_error";

function* defaultSaga(action) {
    try {
        
    } catch (e) {
        yield handleError(e, action)
    }
}

export function* defaultWatcher() {
    yield takeEvery(ACTIONS.DEFAULT, defaultSaga)
}