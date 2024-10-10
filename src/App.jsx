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
import LoginPage from "./pages/registration/LoginPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/list-shop" element={<ListShopPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<NoPage />} />



          <>
            <Route
              path="super-admin-dashboard"
              element={
                <>
                  <SuperAdminDashboard />
                </>
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
            </Route>


          </>


        </Routes>
      </Router>
    </div>
  )
}

export default App