import { HeartIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-[#f4fff4]">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <div className="">
                <img className=" w-48" src="../../logo/rideroz.png" alt="" />
              </div>
            </a>
          </div>


          <div className="flex-grow flex flex-wrap  md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
              <h2 className="title-font font-bold text-black  tracking-widest text-sm mb-3">
                MY INFORMATION

              </h2>
              <nav className="list-none mb-10">
                <li>

                  <Link to={'/about'} >
                    <p className="text-black mb-3 app-font cursor-pointer">About Rideroz</p>
                  </Link>
                </li>
                <li>

                  <Link to={'/why-rideroz'} >
                    <p className="text-black mb-3 app-font cursor-pointer">
                      Why Rideroz?
                    </p>
                  </Link>
                </li>
                <li>

                  <Link to={'/how-it-works'} >
                    <p className="text-black mb-3 app-font cursor-pointer">
                      How Rideroz Works
                    </p>
                  </Link>
                </li>
                <li>

                  <Link to={'/list-shop'} >
                    <p className="text-black mb-3 app-font cursor-pointer">
                      Patern with Us
                    </p>
                  </Link>
                </li>

                <li>

                  <Link to={'/contact'} >
                    <p className="text-black mb-3 app-font cursor-pointer">
                      Contact Us
                    </p>
                  </Link>
                </li>


              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
              <h2 className="title-font font-bold uppercase text-black tracking-widest text-sm mb-3">
                Privacy & Legal
              </h2>
              <nav className="list-none mb-10">
                <li>

                  <Link to={'/refund-policy'} >
                    <p className="text-black mb-3 app-font cursor-pointer">Refund Policy</p>
                  </Link>
                </li>
                <li>

                  <Link to={'/privacy-policy'} >
                    <p className="text-black mb-3 app-font cursor-pointer">
                      Privacy Policy
                    </p>
                  </Link>
                </li>
                <li>

                  <Link to={'/terms-and-condition'} >
                    <p className="text-black mb-3 app-font cursor-pointer">
                      Terms And Condition
                    </p>
                  </Link>
                </li>

                <li>

                  <Link to={'/safety'} >
                    <p className="text-black mb-3 app-font cursor-pointer">
                      Safety
                    </p>
                  </Link>
                </li>

                <li>

                  <Link to={'/discount-coupons'} >
                    <p className="text-black mb-3 app-font cursor-pointer">
                      Discount And Coupons
                    </p>
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
              <h2 className="title-font font-bold uppercase text-black tracking-widest text-sm mb-3">
                Call Us & Mail
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-black mb-3 app-font cursor-pointer">riderozofficial@gmail.com
                  </p>
                </li>
                <li>
                  <p className="text-black mb-3 app-font cursor-pointer text-2xl">
                    +91 7505847229
                  </p>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
              <h2 className="title-font font-bold uppercase text-black tracking-widest text-sm mb-3">
                Additional
              </h2>
              <nav className="list-none mb-10">

                <Link to={'/shipping-and-delivery'}>
                  <li>
                    <p className="text-black mb-3 app-font cursor-pointer">
                      Shipping And Delivery
                    </p>
                  </li>
                </Link>


                <Link to={'/rental-pickup-and-drop-off'}>
                  <li>
                    <p className="text-black mb-3 app-font cursor-pointer">
                      Rental Pick Up And Drop Off
                    </p>
                  </li>
                </Link>

              </nav>
            </div>

          </div>
        </div>
        <div className="bg-[#E6FFF3]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-black text-sm text-center sm:text-left">
              © 2024 Rideroz —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-black ml-1"
                target="_blank"
              >
                @rideroz
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/rideroz_official" target="_blank" className="ml-3 hover:text-pink-500 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ride-roz-964164336" target="_blank" className="ml-3 hover:text-blue-500 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>

        <div className=" bg-gray-800 p-2">
          <h1 className=" text-center text-white flex items-center justify-center gap-1 app-font">
            Made with <HeartIcon className=" w-6 h-6 text-red-400" /> by Team Rideroz</h1>
        </div>
      </footer>
    </div>
  )
}

export default Footer