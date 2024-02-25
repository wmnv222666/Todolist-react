import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

const store = configureStore({
    reducer:{}
    // reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(thunk)
});

export default store;


 


