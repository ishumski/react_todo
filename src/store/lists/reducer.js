import * as types from "./types";

const initialState = {
    lists: [],
};

export default function lists(state = initialState, action) {
    switch (action.type) {
        case types.ADD_LIST: {
            return { ...state, lists: [...state.lists, action.payload] }
        }
        default: {
            return state;
        }
    }
}