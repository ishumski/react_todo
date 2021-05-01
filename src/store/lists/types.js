/* ЗАПРОС/УСПЕХ/ОШИБКА - АСИНЗРОННЫЕ ОПЕРАЦИИ
когда работаем с сервером, то для каждой команды
(именно при запросе на сервер)  ADD/ DELETE/ GET
*/

export const ADD_LIST = 'ADD_LIST';
export const ADD_LIST_REQUEST = 'ADD_LIST/pending';
export const ADD_LIST_SUCCESS = 'ADD_LIST/fulfilled';
export const ADD_LIST_FAILURE = 'ADD_LIST/rejected';

export const DELETE_LIST = 'DELETE_LIST';
export const DELETE_LIST_REQUEST = 'DELETE_LIST/pending';
export const DELETE_LIST_SUCCESS = 'DELETE_LIST/fulfilled';
export const DELETE_LIST_FAILURE = 'DELETE_LIST/rejected';

export const GET_LISTS = 'GET_LISTS';
export const GET_LISTS_REQUEST = 'GET_LISTS/pending';
export const GET_LISTS_SUCCESS = 'GET_LISTS/fulfilled';
export const GET_LISTS_FAILURE = 'GET_LISTS/rejected';
