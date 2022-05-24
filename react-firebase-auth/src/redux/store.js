// import {createStore,applyMiddleware,compose} from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

// import rootReducer from './rootReducer';

// const middleware = [thunk];

// if(process.env.NODE_ENV === "development"){
//     middleware.push(logger);
// }

// export const store = createStore(rootReducer,applyMiddleware(...middleware));
// // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// // if(process.env.NODE_ENV === "development"){
// //     middleware.push(logger);
// // }

// // export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(...middleware)));

import {createStore,applyMiddleware,compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if(process.env.NODE_ENV === "development"){
    middleware.push(logger);
}

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(...middleware)));
// export const store = createStore(rootReducer,applyMiddleware(...middleware));