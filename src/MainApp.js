import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import reduxThunk from "redux-thunk";

const store = createStore(rootReducers, applyMiddleware(reduxThunk));

const MainApp = prop => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};

export default MainApp;