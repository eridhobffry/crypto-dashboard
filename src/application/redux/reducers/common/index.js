import { ACTIONS } from "application/constants";
import { DefaultStore } from "../default_store";

export const common = (state = DefaultStore.common, action) => {
    switch (action.type) {
        case ACTIONS.COMMON_SET_SHOW_DATA:
            return {
                ...state,
                numberToShow: action.numberToShow
            }
        case ACTIONS.COMMON_SET_CURRENT_PAGE_TABLE:
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state
    }
}