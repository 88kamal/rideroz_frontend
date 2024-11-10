// // // // // // /* eslint-disable no-undef */
// // // // // // /* eslint-disable no-restricted-globals */

// // // // // // // public/firebase-messaging-sw.js
// // // // // // importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
// // // // // // importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

// // // // // // const firebaseConfig = {
// // // // // //     apiKey: "AIzaSyDd0jGtJzmsy7JmBnkXqCEtBGr9amfLdoM",
// // // // // //     authDomain: "rideroznotification.firebaseapp.com",
// // // // // //     projectId: "rideroznotification",
// // // // // //     storageBucket: "rideroznotification.firebasestorage.app",
// // // // // //     messagingSenderId: "887589620626",
// // // // // //     appId: "1:887589620626:web:7cd8c0f4bc1101d26f0f4b"
// // // // // // };

// // // // // // // Initialize Firebase
// // // // // // firebase.initializeApp(firebaseConfig);

// // // // // // const messaging = firebase.messaging();

// // // // // // // Background notification handler
// // // // // // messaging.onBackgroundMessage((payload) => {
// // // // // //   console.log('Received background message ', payload);
// // // // // //   const notificationTitle = payload.notification.title;
// // // // // //   const notificationOptions = {
// // // // // //     body: payload.notification.body,
// // // // // //   };

// // // // // //   self.registration.showNotification(notificationTitle, notificationOptions);
// // // // // // });

// // // // // // Import Firebase libraries for service workers
// // // // // importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
// // // // // importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');

// // // // // // Firebase configuration (must match your project settings)
// // // // // firebase.initializeApp({
// // // // //   apiKey: "AIzaSyDd0jGtJzmsy7JmBnkXqCEtBGr9amfLdoM",
// // // // //   authDomain: "rideroznotification.firebaseapp.com",
// // // // //   projectId: "rideroznotification",
// // // // //   storageBucket: "rideroznotification.appspot.com",
// // // // //   messagingSenderId: "887589620626",
// // // // //   appId: "1:887589620626:web:7cd8c0f4bc1101d26f0f4b",
// // // // // });

// // // // // // Initialize Firebase Messaging
// // // // // const messaging = firebase.messaging();

// // // // // // Background notification handler
// // // // // messaging.onBackgroundMessage((payload) => {
// // // // //   console.log('Received background message: ', payload);
// // // // //   const notificationTitle = payload.notification.title;
// // // // //   const notificationOptions = {
// // // // //     body: payload.notification.body,
// // // // //     icon: '/firebase-logo.png', // Replace with your logo URL
// // // // //   };

// // // // //   self.registration.showNotification(notificationTitle, notificationOptions);
// // // // // });

// // // // // Import Firebase scripts
// // // // importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
// // // // importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');

// // // // // Initialize Firebase in the service worker
// // // // firebase.initializeApp({
// // //     // apiKey: "AIzaSyDd0jGtJzmsy7JmBnkXqCEtBGr9amfLdoM",
// // //     // authDomain: "rideroznotification.firebaseapp.com",
// // //     // projectId: "rideroznotification",
// // //     // storageBucket: "rideroznotification.appspot.com",
// // //     // messagingSenderId: "887589620626",
// // //     // appId: "1:887589620626:web:7cd8c0f4bc1101d26f0f4b",
// // // // });

// // // // const messaging = firebase.messaging();

// // // // // Handle background messages
// // // // messaging.onBackgroundMessage((payload) => {
// // // //   console.log('[firebase-messaging-sw.js] Received background message:', payload);
// // // //   const notificationTitle = payload.notification.title;
// // // //   const notificationOptions = {
// // // //     body: payload.notification.body,
// // // //     icon: payload.notification.icon,
// // // //   };

// // // //   self.registration.showNotification(notificationTitle, notificationOptions);
// // // // });


// // // importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
// // // importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

// // // firebase.initializeApp({
// //     // apiKey: "AIzaSyDd0jGtJzmsy7JmBnkXqCEtBGr9amfLdoM",
// //     // authDomain: "rideroznotification.firebaseapp.com",
// //     // projectId: "rideroznotification",
// //     // storageBucket: "rideroznotification.appspot.com",
// //     // messagingSenderId: "887589620626",
// //     // appId: "1:887589620626:web:7cd8c0f4bc1101d26f0f4b",
// // // });

// // // const messaging = firebase.messaging();

// // // messaging.onBackgroundMessage((payload) => {
// // //   console.log("[firebase-messaging-sw.js] Received background message:", payload);

// // //   const notificationTitle = payload.notification.title;
// // //   const notificationOptions = {
// // //     body: payload.notification.body,
// // //     icon: payload.notification.icon,
// // //   };

// // //   self.registration.showNotification(notificationTitle, notificationOptions);
// // // });


// // importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js');
// // importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js');

// // // Initialize Firebase
// // firebase.initializeApp({
// //     apiKey: "AIzaSyDd0jGtJzmsy7JmBnkXqCEtBGr9amfLdoM",
// //     authDomain: "rideroznotification.firebaseapp.com",
// //     projectId: "rideroznotification",
// //     storageBucket: "rideroznotification.appspot.com",
// //     messagingSenderId: "887589620626",
// //     appId: "1:887589620626:web:7cd8c0f4bc1101d26f0f4b",
// // });

// // const messaging = firebase.messaging();

// // // Handle background messages
// // messaging.onBackgroundMessage((payload) => {
// //     console.log('[firebase-messaging-sw.js] Received background message ', payload);

// //     const notificationTitle = payload.notification.title;
// //     const notificationOptions = {
// //         body: payload.notification.body,
// //         icon: '/logo/icon.png' // Optional icon
// //     };

// //     self.registration.showNotification(notificationTitle, notificationOptions);
// // });

// importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js');

// // Initialize Firebase
// firebase.initializeApp({
//     apiKey: "AIzaSyDd0jGtJzmsy7JmBnkXqCEtBGr9amfLdoM",
//     authDomain: "rideroznotification.firebaseapp.com",
//     projectId: "rideroznotification",
//     storageBucket: "rideroznotification.appspot.com",
//     messagingSenderId: "887589620626",
//     appId: "1:887589620626:web:7cd8c0f4bc1101d26f0f4b",
// });

// const messaging = firebase.messaging();

// // Handle background messages
// messaging.onBackgroundMessage((payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);

//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//         icon: '/logo/icon.png', // Optional icon
//         data: { url: 'https://www.rideroz.com' } // Add the URL you want to open
//     };

//     self.registration.showNotification(notificationTitle, notificationOptions);
// });

// // Handle notification click
// self.addEventListener('notificationclick', (event) => {
//     event.notification.close(); // Close the notification

//     const url = event.notification.data.url;
//     event.waitUntil(
//         clients.matchAll({ type: 'window' }).then((clientList) => {
//             // If the URL is already open, focus on it
//             for (let i = 0; i < clientList.length; i++) {
//                 const client = clientList[i];
//                 if (client.url === url && 'focus' in client) {
//                     return client.focus();
//                 }
//             }
//             // If not open, open a new window/tab with the URL
//             if (clients.openWindow) {
//                 return clients.openWindow(url);
//             }
//         })
//     );
// });

importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js');

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDd0jGtJzmsy7JmBnkXqCEtBGr9amfLdoM",
    authDomain: "rideroznotification.firebaseapp.com",
    projectId: "rideroznotification",
    storageBucket: "rideroznotification.appspot.com",
    messagingSenderId: "887589620626",
    appId: "1:887589620626:web:7cd8c0f4bc1101d26f0f4b",
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    // Display notification only if the app is not in the foreground
    if (self.registration.visibilityState === 'visible') {
        console.log("App is in the foreground, not displaying notification.");
        return;
    }

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/logo/icon.png', // Optional icon
        data: { url: 'https://www.rideroz.com' }, // URL to open when the notification is clicked
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
    event.notification.close(); // Close the notification

    const url = event.notification.data.url;
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then((clientList) => {
            // If the URL is already open, focus on it
            for (let i = 0; i < clientList.length; i++) {
                const client = clientList[i];
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not open, open a new window/tab with the URL
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});
