import * as types from "./types";

export const addList = (list) => ({
    type: types.ADD_LIST,
    payload: list,
});

export const deleteList = (list) => ({
    type: types.DELETE_LIST,
    payload: list,
});