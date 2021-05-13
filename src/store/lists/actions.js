import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../services/api-service';

import * as types from './types';

export const addList = createAsyncThunk(types.ADD_LIST, (list) => apiService.post('lists', list));

export const deleteList = createAsyncThunk(types.DELETE_LIST, async (id) => {
  await apiService.delete(`lists/${id}`);

  return id;
});

export const getLists = createAsyncThunk(types.GET_LISTS, (userId) => apiService.get(`lists?userId${userId}`));
