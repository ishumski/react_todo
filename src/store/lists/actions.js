import * as types from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../services/api-service";

export const addList = createAsyncThunk(types.ADD_LIST, async (list) => {
    const response = await apiService.post("lists", list);

    return response;
});

export const deleteList = createAsyncThunk(types.DELETE_LIST, async (id) => {
    const response = await apiService.delete("lists", id);

    return response;
})



// (id) => ({
//     type: types.DELETE_LIST,
//     payload: id,
// });


export const getLists = createAsyncThunk(types.GET_LISTS, async () => {
    const response = await apiService.get("lists");

    return response;
});