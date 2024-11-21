import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import NoPage from "./pages/noPage/NoPage";
import toast, { Toaster } from 'react-hot-toast';
import ListShopPage from "./pages/listShop/ListShopPage";
import SuperAdminDashboard from "./pages/dashboard/super-admin/SuperAdminDashboard";
import SuperAdminHomePage from "./pages/dashboard/super-admin/pages/SuperAdminHomePage";
import SuperAdminAddRoleAndView from "./pages/dashboard/super-admin/pages/SuperAdminAddRoleAndView";
import SuperAdminViewAndAddCityPage from "./pages/dashboard/super-admin/pages/SuperAdminViewAndAddCityPage";
import SuperAdminAddAndViewEmployeePage from "./pages/dashboard/super-admin/pages/SuperAdminAddAndViewEmployeePage";
import { ProtectedRoute } from "./protectedRoutes/ProtectedRoute";
import SuperAdminViewUserAndShopOwnerPage from "./pages/dashboard/super-admin/pages/SuperAdminViewUserAndShopOwnerPage";
import UserDashboard from "./pages/dashboard/user/UserDashboard";
import ShopOwnerDashboard from "./pages/dashboard/shopOwner/ShopOwnerDashboard";
import ShopOwnerHomePage from "./pages/dashboard/shopOwner/pages/ShopOwnerHomePage";
import ScrollTop from "./components/scrollTop/scrollTop";
import ShopOwnerAddVehiclePage from "./pages/dashboard/shopOwner/pages/ShopOwnerAddVehiclePage";
import ListShopMessage from "./pages/listShop/ListShopMessage";
import ShopOwnerViewVehicle from "./pages/dashboard/shopOwner/pages/ShopOwnerViewVehicle";
import MyState from "./context/myState";
import VehicleInfoPage from "./pages/vehicleInfo/VehicleInfoPage";
import AllVehiclePage from "./pages/allVehicles/AllVehiclePage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import PaymentSuccessPage from "./pages/paymentSuccessPage/PaymentSuccessPage";
import PaymentCancelPage from "./pages/paymentSuccessPage/PaymentCancelPage";
import PaymentCanceledByUser from "./pages/paymentSuccessPage/PaymentCanceledByUser";
import UserVehicleBookPage from "./pages/dashboard/user/pages/UserVehicleBookPage";
import TopAlert from "./components/alert/TopAlert";
import ViewUserBookingInvoice from "./components/common/bookedVehicles/pages/ViewUserBookingInvoice";
import UserProfilePage from "./pages/dashboard/user/pages/UserProfilePage";
import ShopOwnerUserProfilePage from "./pages/dashboard/shopOwner/pages/ShopOwnerUserProfilePage";
import SuperAdminUserProfilePage from "./pages/dashboard/super-admin/pages/SuperAdminUserProfilePage";
import PrivacyPolicy from "./pages/companyInfo/privacyPolicy/PrivacyPolicy";
import RefundPolicy from "./pages/companyInfo/refundPolicy.jsx/RefundPolicy";
import TermsAndConditionPage from "./pages/companyInfo/termsAndConditionPage/TermsAndConditionPage";
import ShippingAndDelivery from "./pages/companyInfo/shippingAndDelivery/ShippingAndDelivery";
import WhyRideroz from "./pages/companyInfo/whyRideroz/WhyRideroz";
import HowItWorks from "./pages/companyInfo/howItWorks/HowItWorks";
import Safety from "./pages/companyInfo/safety/Safety";
import FAQSection from "./pages/faq/FAQSection";
import DiscountCoupon from "./pages/companyInfo/discountCoupon/DiscountCoupon";
import PickUpAndDropOff from "./pages/companyInfo/pickUpAndDropOff/PickUpAndDropOff";
import ShopOwnerVehicleBookPage from "./pages/dashboard/shopOwner/pages/ShopOwnerVehicleBookPage";
import ShopOwnerSettelementPage from "./pages/dashboard/shopOwner/pages/ShopOwnerSettelementPage";
import { useContext, useEffect, useState } from "react";
import { messaging } from "./firebase/firebaseConfig";
import { getToken, onMessage } from "firebase/messaging";
import CustomNotification from "./helper/CustomNotification";
import myContext from "./context/myContext";
import SuperAdminGetOrderByShopOwner from "./pages/dashboard/super-admin/pages/SuperAdminGetOrderByShopOwner";
import SuperAdminViewShopOwnerVehiclePage from "./pages/dashboard/super-admin/pages/SuperAdminViewShopOwnerVehiclePage";
import Schema from "./components/seo/Schema";
import ReactGA from 'react-ga';
import { useSaveDeviceTokenMutation } from "./redux/slices/deviceTokenSlice";
import NotificationHandler from "./helper/NotificationHandler";


function App() {
  // const [notification, setNotification] = useState(null);
  // const [notificationToken, setNotificationToken] = useState('')

  // const [saveDeviceToken, { isLoading, isError, isSuccess }] =
  //   useSaveDeviceTokenMutation();



  // useEffect(() => {
  //   if (notificationToken) {
  //     const saveToken = async () => {
  //       try {
  //         await saveDeviceToken(notificationToken).unwrap();
  //         console.log('Token saved successfully!');
  //       } catch (error) {
  //         console.error('Error saving token:', error);
  //       }
  //     };
  //     saveToken();
  //   }
  // }, [notificationToken, saveDeviceToken]);


  ReactGA.initialize('UA-XXXXXX-X'); // Replace with your Google Analytics ID

  // Component to handle page view tracking on route changes
  function usePageViews() {
    const location = useLocation();

    useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);
  }

  usePageViews();

  // useEffect(() => {
  //   const requestPermission = async () => {
  //     try {
  //       const permission = await Notification.requestPermission();
  //       if (permission === "granted") {
  //         const currentToken = await getToken(messaging, {
  //           vapidKey: "BGJ4HEIgOHrkpNXZtvJTWtSH8WZZMHU-IG6FYnxwgU0Bf1OWoM3nMn5F4Rdd8-oLBAzqYQfvuwxap5hUMgNXC2w",
  //         });
  //         if (currentToken) {
  //           console.log("FCM Token:", currentToken);
  //           setNotificationToken(currentToken)
  //         } else {
  //           console.warn("No registration token available.");
  //         }
  //       } else {
  //         console.error("Notification permission not granted.");
  //       }
  //     } catch (error) {
  //       console.error("Error during token retrieval:", error);
  //     }
  //   };

  //   requestPermission();

  //   // // Handle foreground messages
  //   // onMessage(messaging, (payload) => {
  //   //   console.log("Message received in the foreground:", payload);
  //   //   // Set the notification state with the received message
  //   //   setNotification({
  //   //     title: payload.notification?.title,
  //   //     body: payload.notification?.body,
  //   //   });
  //   // });

  //   onMessage(messaging, (payload) => {
  //     if (document.visibilityState === 'visible') {
  //       console.log("App is in the foreground. Handle the message differently.");
  //       console.log("Message received in the foreground:", payload);
  //       // Set the notification state with the received message
  //       setNotification({
  //         title: payload.notification?.title,
  //         body: payload.notification?.body,
  //       });
  //       // Display custom UI or log the message without triggering a new notification
  //     } else {
  //       console.log("App is in the background.");
  //       // Here, `firebase-messaging-sw.js` will handle the notification display
  //     }
  //   });

  // }, []);

  // const handleNotificationClose = () => {
  //   setNotification(null); // Hide the notification
  // };

  // useEffect(() => {
  //   const requestPermission = async () => {
  //     try {
  //       const permission = await Notification.requestPermission();
  //       if (permission === "granted") {
  //         const currentToken = await getToken(messaging, {
  //           vapidKey: "BGJ4HEIgOHrkpNXZtvJTWtSH8WZZMHU-IG6FYnxwgU0Bf1OWoM3nMn5F4Rdd8-oLBAzqYQfvuwxap5hUMgNXC2w",
  //         });
  //         if (currentToken) {
  //           console.log("FCM Token:", currentToken);
  //           setNotificationToken(currentToken);
  //         } else {
  //           console.warn("No registration token available.");
  //         }
  //       } else {
  //         console.error("Notification permission not granted.");
  //       }
  //     } catch (error) {
  //       console.error("Error during token retrieval:", error);
  //     }
  //   };

  //   requestPermission();

  //   // Handle foreground messages
  //   onMessage(messaging, (payload) => {
  //     if (document.visibilityState === 'visible') {
  //       // App is in the foreground
  //       console.log("Message received in the foreground:", payload);

  //       // Handle the notification in the app UI (without showing a system-level notification)
  //       setNotification({
  //         title: payload.notification?.title,
  //         body: payload.notification?.body,
  //       });
  //     }
  //   });
  // }, []);

  return (
    <MyState>
      <>
        <Schema />
        <Toaster />
        <ScrollTop />
        <TopAlert />

        {/* <pre>{JSON.stringify(notificationToken,null,2)}</pre> */}

        {/* <NotificationHandler/> */}

        {/* {notification && (
          <CustomNotification
            title={notification.title}
            body={notification.body}
            onClose={handleNotificationClose}
          />
        )} */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/list-shop" element={<ListShopPage />} />
          <Route path="/list-shop-message" element={<ListShopMessage />} />
          <Route path="/vehicle-info/:city/:id" element={<VehicleInfoPage />} />
          <Route path="/all-vehicles/:city?/:currentLocation?" element={<AllVehiclePage />} />
          <Route path="/checkout/:id" element={<CheckoutPage />} />
          <Route path="/success-payment/:paymentId" element={<PaymentSuccessPage />} />
          <Route path="/payment-cancel" element={<PaymentCancelPage />} />
          <Route path="/payment-cancel-by-user" element={<PaymentCanceledByUser />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-and-condition" element={<TermsAndConditionPage />} />
          <Route path="/shipping-and-delivery" element={<ShippingAndDelivery />} />
          <Route path="/why-rideroz" element={<WhyRideroz />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/discount-coupons" element={<DiscountCoupon />} />
          <Route path="/faqs" element={<FAQSection />} />
          <Route path="/rental-pickup-and-drop-off" element={<PickUpAndDropOff />} />
          <Route path="/*" element={<NoPage />} />



          <>
            <Route
              path="super-admin-dashboard"
              element={
                <ProtectedRoute requiredRole={2}>
                  <SuperAdminDashboard />
                </ProtectedRoute>
              }>

              <Route
                index={true}
                path="super-admin-home-page"
                element={<SuperAdminHomePage />}
              />

              <Route
                index={true}
                path="view-and-add-city"
                element={<SuperAdminViewAndAddCityPage />}
              />

              <Route
                index={true}
                path="view-and-add-roles-and-department"
                element={<SuperAdminAddRoleAndView />}
              />

              <Route
                index={true}
                path="add-and-view-employee"
                element={<SuperAdminAddAndViewEmployeePage />}
              />

              <Route
                index={true}
                path="view-user-and-shop-owner"
                element={<SuperAdminViewUserAndShopOwnerPage />}
              />
              <Route
                index={true}
                path="super-admin-profile"
                element={<SuperAdminUserProfilePage />}
              />

              <Route
                index={true}
                path="super-admin-vehicle-book"
                element={<ShopOwnerVehicleBookPage />}
              />

              <Route
                index={true}
                path="super-admin-home-page/super-admin-vehicle-book/vehicle-book-invoice/:id"
                element={<ViewUserBookingInvoice />}
              />


              <Route
                index={true}
                path="view-user-and-shop-owner/super-admin-get-order-by-shop-owner/:shopId"
                element={<SuperAdminGetOrderByShopOwner />}
              />
              <Route
                index={true}
                path="view-user-and-shop-owner/super-admin-view-shop-owner-vehicle/:shopId"
                element={<SuperAdminViewShopOwnerVehiclePage />}
              />

            </Route>


          </>

          <>
            <Route
              path="user-dashboard"
              element={
                <ProtectedRoute requiredRole={15}>
                  <UserDashboard />
                </ProtectedRoute>
              }>

              <Route
                index={true}
                path="user-home-page"
                element={<SuperAdminHomePage />}
              />

              <Route
                index={true}
                path="user-vehicle-book"
                element={<UserVehicleBookPage />}
              />


              <Route
                index={true}
                path="user-home-page/user-vehicle-book/vehicle-book-invoice/:id"
                element={<ViewUserBookingInvoice />}
              />

              <Route
                index={true}
                path="user-profile"
                element={<UserProfilePage />}
              />
            </Route>


          </>

          <>
            <Route
              path="shop-owner-dashboard"
              element={
                <ProtectedRoute requiredRole={14}>
                  <ShopOwnerDashboard />
                </ProtectedRoute>
              }>

              <Route
                index={true}
                path="shop-owner-home-page"
                element={<ShopOwnerHomePage />}
              />

              <Route
                index={true}
                path="shop-owner-add-vehicle"
                element={<ShopOwnerAddVehiclePage />}
              />

              <Route
                index={true}
                path="shop-owner-all-vehicle"
                element={<ShopOwnerViewVehicle />}
              />

              <Route
                index={true}
                path="shop-owner-profile"
                element={<ShopOwnerUserProfilePage />}
              />
              <Route
                index={true}
                path="shop-owner-vehicle-book"
                element={<ShopOwnerVehicleBookPage />}
              />

              <Route
                index={true}
                path="shop-owner-home-page/shop-owner-vehicle-book/vehicle-book-invoice/:id"
                element={<ViewUserBookingInvoice />}
              />

              <Route
                index={true}
                path="shop-owner-settlement"
                element={<ShopOwnerSettelementPage />}
              />


            </Route>


          </>


        </Routes>
      </>
    </MyState>
  )
}

export default App