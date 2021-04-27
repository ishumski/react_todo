import * as types from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../services/api-service";

export const addList = createAsyncThunk(types.ADD_LIST, async (list) => {
    const response = await apiService.post("lists", list);

    return response;
});

export const deleteList = (id) => ({
    type: types.DELETE_LIST,
    payload: id,
});

// export const getListsRequest = () => ({
//     type: types.GET_LISTS_REQUEST,
// });


// export const getListsSuccess = (lists) => ({
//     type: types.GET_LISTS_SUCCESS,
//     payload: lists,
// });

// export const getListsFailure = (error) => ({
//     type: types.GET_LISTS_FAILURE,
//     payload: error,
// });


export const getLists = createAsyncThunk(types.GET_LISTS, async () => {
    const response = await apiService.get("lists");

    return response;
});