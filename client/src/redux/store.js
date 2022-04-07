import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import reducers from './reducer';

const middleware = [thunk]

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(...middleware),
        // other store enhancers if any
    ),
);

export default store;
