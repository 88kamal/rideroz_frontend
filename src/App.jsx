import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import NoPage from "./pages/noPage/NoPage";


function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/contact" element={ <ContactPage/> } />
        <Route path="/*" element={ <NoPage/> } />
       </Routes>
      </Router>
    </div>
  )
}

export default App