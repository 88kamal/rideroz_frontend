import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import NoPage from "./pages/noPage/NoPage";
import { Toaster } from 'react-hot-toast';
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


function App() {
  return (
    <MyState>
      <Router>
        <Toaster />
        <ScrollTop />
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

            </Route>


          </>


        </Routes>
      </Router>
    </MyState>
  )
}

export default App