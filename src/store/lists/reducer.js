import * as types from "./types";

const initialState = {
    lists: [],
    tasks: [],
};

export default function lists(state = initialState, action) {
    switch (action.type) {
        case types.ADD_LIST: {
            return { ...state, lists: [...state.lists, action.payload] }
        }
        case types.DELETE_LIST: {
            return { ...state, lists: [...state.lists.filter(), action.payload] }
        }
        default: {
            return state;
        }
    }
}