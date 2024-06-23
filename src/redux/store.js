import { configureStore  } from '@reduxjs/toolkit';
import reducers from "./reducers/index"
import { thunk } from 'redux-thunk';

const store = configureStore({
    reducer: {
        reducers: reducers,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });

export default store;