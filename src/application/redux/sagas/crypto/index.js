import { call, put, takeEvery } from "@redux-saga/core/effects";
import { api } from "application/api";
import { ACTIONS } from "application/constants";
import { getCryptoListingFailed, getCryptoListingSucceed, populateCryptoListingData } from "application/redux/actions/crypto";
import { handleError } from "../handle_error";
import { responseCryptoDataMapper } from "./response_mappers";

function* getCryptoListingSaga(action) {
    try {
        const {start, limit} = action.metaData
        const res = yield call(api.gateway.crypto.getListingCrytoCurrency, start, limit)
        const minData = responseCryptoDataMapper(res.data)
        yield put(populateCryptoListingData({ fullData: res.data, minData, totalCount: res.status.total_count, status: res.status}))
        yield put(getCryptoListingSucceed())
    } catch (e) {
        yield handleError(e, action)
        yield put(getCryptoListingFailed())
    }
}

export function* cryptoListingWatcher() {
    yield takeEvery(ACTIONS.CRYPTO_GET_LISTING_REQUEST, getCryptoListingSaga)
}