import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Assuming you have this
import {   BrowserRouter as Router,
} from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Router>
        <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// Register the service worker
serviceWorkerRegistration.register(); // This registers your firebase-messaging-sw.js