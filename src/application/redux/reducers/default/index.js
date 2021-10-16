import { ACTIONS } from "application/constants";
import { DefaultStore } from "../default_store";

export const DefaultReducer = (state = DefaultStore.default, action) => {
    switch (action.type) {
        case ACTIONS.DEFAULT:
            return {
                ...state
            }
        default:
            return state
    }
}