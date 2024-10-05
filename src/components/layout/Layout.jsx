/* eslint-disable react/prop-types */

import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import TopHeader from "../topHeader/TopHeader"

function Layout({ children }) {
    return (
        <div className=''>
            {/* Header  */}
            <div className="hidden md:block">
                <TopHeader />
            </div>
            <Navbar />
            <div className=" min-h-screen  ">
                {children}
            </div>
            <Footer />

        </div >
    )
}

export default Layout