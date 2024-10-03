import HeroSection from "../../components/heroSection/HeroSection"
import Layout from "../../components/layout/Layout"
import Services from "../../components/services/Services"

const HomePage = () => {
  return (
    <Layout>
        <HeroSection/>
        <Services/>
    </Layout>
  )
}

export default HomePage