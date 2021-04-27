import * as types from "./types";

const initialState = {
    lists: [],
    status: "loading",

};

export default function lists(state = initialState, action) {
    switch (action.type) {

        case types.ADD_LIST_SUCCESS: {
            return { ...state, lists: [...state.lists, action.payload,], status: "succeed" }
        }
        case types.DELETE_LIST: {
            return { ...state, lists: state.lists.filter((list) => list.id !== action.payload) }
        }

        case types.ADD_LIST_REQUEST: {
            return {
                ...state,
                status: "loading"
            }
        }

        case types.GET_LISTS_REQUEST: {
            return {
                ...state,
                status: "loading"
            }
        }

        case types.GET_LISTS_SUCCESS: {
            return {
                ...state,
                lists: action.payload,
                status: "succeed"
            }
        }


        default: {
            return state;
        }
    }
}