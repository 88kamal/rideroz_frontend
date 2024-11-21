// import { useState, useEffect } from "react";
// import { getToken, onMessage } from "firebase/messaging";
// import { messaging } from "../firebase/firebaseConfig";
// import { useSaveDeviceTokenMutation } from "../redux/slices/deviceTokenSlice";

// const NotificationHandler = () => {
//   const [notification, setNotification] = useState(null);
//   const [notificationToken, setNotificationToken] = useState("");
//   const [saveDeviceToken] = useSaveDeviceTokenMutation();

//   const vapidKey = "BGJ4HEIgOHrkpNXZtvJTWtSH8WZZMHU-IG6FYnxwgU0Bf1OWoM3nMn5F4Rdd8-oLBAzqYQfvuwxap5hUMgNXC2w"

//   // Save the device token
//   useEffect(() => {
//     if (notificationToken) {
//       const saveToken = async () => {
//         try {
//           await saveDeviceToken(notificationToken).unwrap();
//           console.log("Token saved successfully!");
//         } catch (error) {
//           console.error("Error saving token:", error);
//         }
//       };
//       saveToken();
//     }
//   }, [notificationToken, saveDeviceToken]);

//   // Request permission and fetch the token
//   useEffect(() => {
//     const requestPermission = async () => {
//       try {
//         const permission = await Notification.requestPermission();
//         if (permission === "granted") {
//           const currentToken = await getToken(messaging, { vapidKey });
//           if (currentToken) {
//             console.log("FCM Token:", currentToken);
//             setNotificationToken(currentToken);
//           } else {
//             console.warn("No registration token available.");
//           }
//         } else {
//           console.error("Notification permission not granted.");
//         }
//       } catch (error) {
//         console.error("Error during token retrieval:", error);
//       }
//     };

//     requestPermission();

//     // Handle foreground messages
//     onMessage(messaging, (payload) => {
//       console.log("Message received in the foreground:", payload);
//       setNotification({
//         title: payload.notification?.title || "Notification",
//         body: payload.notification?.body || "You have a new message.",
//       });
//     });
//   }, [vapidKey]);

//   const handleNotificationClose = () => {
//     setNotification(null); // Hide the notification
//   };

//   return (
//     <div>
//       {notification && (
//         <div style={styles.notification}>
//           <h4>{notification.title}</h4>
//           <p>{notification.body}</p>
//           <button onClick={handleNotificationClose} style={styles.closeButton}>
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// // Inline styles for simplicity
// const styles = {
//   notification: {
//     position: "fixed",
//     bottom: "20px",
//     right: "20px",
//     backgroundColor: "#fff",
//     boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//     padding: "16px",
//     borderRadius: "8px",
//     zIndex: 1000,
//   },
//   closeButton: {
//     marginTop: "8px",
//     padding: "8px 12px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };

// export default NotificationHandler;


import { useState, useEffect, useContext } from "react";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../firebase/firebaseConfig";
import { useSaveDeviceTokenMutation } from "../redux/slices/deviceTokenSlice";
import CustomNotification from "./CustomNotification";
import myContext from "../context/myContext";

const NotificationHandler = () => {
  const [notification, setNotification] = useState(null);
  const { notificationToken, setNotificationToken} = useContext(myContext)
  const [saveDeviceToken] = useSaveDeviceTokenMutation();

  const vapidKey = "BGJ4HEIgOHrkpNXZtvJTWtSH8WZZMHU-IG6FYnxwgU0Bf1OWoM3nMn5F4Rdd8-oLBAzqYQfvuwxap5hUMgNXC2w";

  // Save the device token
  useEffect(() => {
    if (notificationToken) {
      const saveToken = async () => {
        try {
          await saveDeviceToken(notificationToken).unwrap();
          console.log("Token saved successfully!");
        } catch (error) {
          console.error("Error saving token:", error);
        }
      };
      saveToken();
    }
  }, [notificationToken, saveDeviceToken]);

  // Request permission and fetch the token
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          const currentToken = await getToken(messaging, { vapidKey });
          if (currentToken) {
            console.log("FCM Token:", currentToken);
            setNotificationToken(currentToken);
            localStorage.setItem("notificationToken", currentToken); // Save to localStorage
          } else {
            console.warn("No registration token available.");
          }
        } else {
          console.error("Notification permission not granted.");
        }
      } catch (error) {
        console.error("Error during token retrieval:", error);
      }
    };

    requestPermission();

    // Handle foreground messages
    onMessage(messaging, (payload) => {
      console.log("Message received in the foreground:", payload);
      setNotification({
        title: payload.notification?.title || "Notification",
        body: payload.notification?.body || "You have a new message.",
      });
    });
  }, [vapidKey]);

  const handleNotificationClose = () => {
    setNotification(null); // Hide the notification
  };

  return (
    <div>
      {notification && (
          <CustomNotification
            title={notification.title}
            body={notification.body}
            onClose={handleNotificationClose}
          />
        )}
    </div>
  );
};

export default NotificationHandler;
