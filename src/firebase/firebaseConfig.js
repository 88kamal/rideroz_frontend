// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyDd0jGtJzmsy7JmBnkXqCEtBGr9amfLdoM",
    authDomain: "rideroznotification.firebaseapp.com",
    projectId: "rideroznotification",
    storageBucket: "rideroznotification.firebasestorage.app",
    messagingSenderId: "887589620626",
    appId: "1:887589620626:web:7cd8c0f4bc1101d26f0f4b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = getMessaging(firebaseApp);

export { messaging };
