import HeroSection from "../../components/heroSection/HeroSection"
import Layout from "../../components/layout/Layout"
import Services from "../../components/services/Services"
import Vehicle from "../../components/vehicle/Vehicle"

const HomePage = () => {
  return (
    <Layout>
        <HeroSection/>
        <Services/>
        <Vehicle/>
    </Layout>
  )
}

export default HomePage