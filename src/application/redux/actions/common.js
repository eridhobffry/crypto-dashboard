import { ACTIONS } from "application/constants";

export const setNumberDataToShow = (numberToShow) => ({
    type: ACTIONS.COMMON_SET_SHOW_DATA,
    numberToShow
})

export const setCurrentPageStore = (page) => ({
    type: ACTIONS.COMMON_SET_CURRENT_PAGE_TABLE,
    page
})