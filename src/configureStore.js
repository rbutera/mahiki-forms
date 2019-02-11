// Realistic use of the Redux Addon Enhancer
import { createStore, compose } from "redux";
import reducer from "./reducer";
import createMiddlewareEnhancer from "./middlewareEnhancer";
import withReduxEnhancer from "addon-redux/enhancer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

createMiddlewareEnhancer = () => {
  const middleware = [];
  if (process.env.NODE_ENV !== "production") {
    // include other middlewares as needed, like the invariant and logger middlewares
    middleware.push(logger());
  }
  return applyMiddleware(...middleware);
};

const createEnhancer = () => {
  const enhancers = [];
  enhancers.push(createMiddlewareEnhancer());
  if (process.env.NODE_ENV !== "production") {
    enhancers.push(withReduxEnhancer);
  }
  return compose(...enhancers);
};

const store = createStore(reducer, createEnhancer());

export default store;
