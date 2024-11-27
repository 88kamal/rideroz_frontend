// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// import { ThemeProvider } from "@material-tailwind/react";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Assuming you have this
// import {   BrowserRouter as Router,
// } from "react-router-dom";


// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//       navigator.serviceWorker
//           .register('/service-worker.js')
//           .then((registration) => {
//               console.log('Service Worker registered:', registration);
//           })
//           .catch((error) => {
//               console.error('Service Worker registration failed:', error);
//           });
//   });
// }


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <ThemeProvider>
//         <Router>
//         <App />
//         </Router>
//       </ThemeProvider>
//     </Provider>
//   </React.StrictMode>
// );

// // Register the service worker
// serviceWorkerRegistration.register(); // This registers your firebase-messaging-sw.js


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-tailwind/react";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration"; // Firebase Messaging SW
import App from "./App";
import store from "./redux/store";
import "./index.css";

// Register the Service Worker
// serviceWorkerRegistration.register();

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
