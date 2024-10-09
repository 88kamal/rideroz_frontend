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


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/list-shop" element={<ListShopPage />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  )
}

export default App