import { useEffect, useState } from "react"
import HeroSection from "../../components/heroSection/HeroSection"
import Layout from "../../components/layout/Layout"
import Services from "../../components/services/Services"
import Vehicle from "../../components/vehicle/Vehicle"
import LoginModal from "../../components/registration/LoginModal"
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [searchParams] = useSearchParams();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    // Check for the 'loginModal' query parameter
    if (searchParams.get("loginModal") === "true") {
        setIsLoginModalOpen(true); // Open the login modal
    }
}, [searchParams]);
  return (
    <Layout>
        <HeroSection/>
        <Services/>
        <Vehicle/>
        {isLoginModalOpen && <LoginModal autoOpen={true} />}
    </Layout>
  )
}

export default HomePage