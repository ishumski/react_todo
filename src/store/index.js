import { createStore } from "redux";
import reducers from './reducers.js';

export function configureStore(initialStore) {
    const store = createStore(reducers, initialStore);
    return store;
}


