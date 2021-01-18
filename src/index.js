// These must be the first lines in src/index.js
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";

// Implement Redux
//import { Provider } from 'react-redux';
//import { store, persistor } from './redux/root.store';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  //<Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //<Provider />
  rootElement
);
