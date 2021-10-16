import { ACTIONS } from "application/constants";
import { DefaultStore } from "../default_store";

export const cryptoReducer = (state = DefaultStore.crypto, action) => {
    switch (action.type) {
        case ACTIONS.CRYPTO_GET_LISTING_REQUEST:
            return {
                ...state,
                request: true,
            }
        case ACTIONS.CRYPTO_GET_LISTING_FAILED:
            return {
                ...state,
                request: false,
                failed: true
            }
        case ACTIONS.CRYPTO_GET_LISTING_SUCCEED:
            return {
                ...state,
                request: false,
                succeed: true
            }
        case ACTIONS.CRYPTO_POPULATE_LISTING_DATA:
            return {
                ...state,
                payload: action.payload
            }
        default:
            return state
    }
}