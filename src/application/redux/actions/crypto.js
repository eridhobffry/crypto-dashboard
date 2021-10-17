import { ACTIONS } from "application/constants";

export const getCryptoListingRequest = (metaData = {
    start: 1,
    limit: 100,
}) => ({
    type: ACTIONS.CRYPTO_GET_LISTING_REQUEST,
    metaData
})
export const getCryptoListingFailed = () => ({
    type: ACTIONS.CRYPTO_GET_LISTING_FAILED,
})
export const getCryptoListingSucceed = () => ({
    type: ACTIONS.CRYPTO_GET_LISTING_SUCCEED,
})
export const populateCryptoListingData = (payload) => ({
    type: ACTIONS.CRYPTO_POPULATE_LISTING_DATA,
    payload
})