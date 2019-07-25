import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { helloSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

let composed;
if (window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined) {
  composed = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  composed = applyMiddleware(...middleware);
}

const store = createStore(rootReducer, {}, composed);
sagaMiddleware.run(helloSaga);

export const action = type => store.dispatch({ type });
export default store;
