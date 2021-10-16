import { call, put, takeEvery } from "@redux-saga/core/effects";
import { api } from "application/api";
import { ACTIONS } from "application/constants";
import { getCryptoListingFailed, getCryptoListingSucceed, populateCryptoListingData } from "application/redux/actions/crypto";
import { handleError } from "../handle_error";

function* getCryptoListingSaga(action) {
    try {
        const res = yield call(api.gateway.crypto.getListingCrytoCurrency)
        yield put(populateCryptoListingData(res))
        yield put(getCryptoListingSucceed())
    } catch (e) {
        yield handleError(e, action)
        yield put(getCryptoListingFailed())
    }
}

export function* cryptoListingWatcher() {
    yield takeEvery(ACTIONS.CRYPTO_GET_LISTING_REQUEST, getCryptoListingSaga)
}