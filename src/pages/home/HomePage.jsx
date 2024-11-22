import { useEffect, useState } from "react"
import HeroSection from "../../components/heroSection/HeroSection"
import Layout from "../../components/layout/Layout"
import Services from "../../components/services/Services"
import Vehicle from "../../components/vehicle/Vehicle"
import LoginModal from "../../components/registration/LoginModal"
import { useSearchParams } from "react-router-dom";
import LeftSidePopup from "../../components/leftSidePop/LeftSidePop"
import { Helmet } from 'react-helmet';
import HowToBookRide from "../../components/howToBookRide/HowToBookRide"

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
      <Helmet>
        <title>Rent Bikes, Scooty & Cars - Rideroz</title>
        <meta name="description" content="Affordable bike, scooty, and car rental service in India. Book now for the best rates." />
        <meta name="keywords" content="bike rental, scooty rental, car rental, Rideroz" />
        <meta property="og:title" content="Rent Bikes, Scooty & Cars - Rideroz" />
        <meta property="og:description" content="Affordable rental services in India. Flexible booking options available." />
        {/* <meta property="og:image" content="https://rideroz.com/images/banner.jpg" /> */}
      </Helmet>

      <HeroSection />
      <Services  />
      <Vehicle />
      {isLoginModalOpen && <LoginModal autoOpen={true} />}
      {/* <LeftSidePopup /> */}
      <HowToBookRide/>
    </Layout>
  )
}

export default HomePage