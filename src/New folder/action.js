import {SEARCH_FIELD_CHANGE} from '../constant';
export const setSearchField = (text)=>({
    type: SEARCH_FIELD_CHANGE,
    payLoad: text
})