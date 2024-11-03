import { FaMoneyBillWave, FaMotorcycle, FaClock, FaMobileAlt, FaShieldAlt, FaStar, FaTags } from 'react-icons/fa';
import Layout from '../../../components/layout/Layout';

const WhyChooseRideroz = () => {
  return (
    <Layout>
      <div className=" py-6 px-6">
        <div className="">
          <h1 className="text-2xl font-bold text-black mb-8">Why Choose Rideroz?</h1>

          {/* Affordable & Transparent */}
          <div className="mb-8 flex items-center gap-3 ">
            <div className=" bg-green-500 p-2">
              <FaMoneyBillWave className="text-white text-4xl" />
            </div>
            <div className="">
              <h2 className="lg:text-2xl text-gray-800 app-font">Affordable & Transparent</h2>
              <p className="text-gray-600 mt-2 app-font">Rideroz only charges a booking fee, making it budget-friendly and clear—no hidden costs.</p>
            </div>
          </div>

          {/* Wide Range of Bikes */}
          <div className="mb-8 flex items-center gap-3">
            <div className="bg-green-500 p-2">
            <FaMotorcycle className="text-white text-4xl " />
            </div>
           <div className="">
           <h2 className="lg:text-2xl text-gray-800 app-font">Wide Range of Bikes</h2>
           <p className="text-gray-600 mt-2 app-font">Choose from a variety of well-maintained bikes for city rides, long trips, or off-road adventures.</p>
           </div>
          </div>

          {/* Flexible Rental Options */}
          <div className="mb-8 flex items-center gap-3">
           <div className="bg-green-500 p-2">
           <FaClock className="text-white text-4xl" />
           </div>
           <div className="">
           <h2 className="lg:text-2xl text-gray-800 app-font">Flexible Rental Options</h2>
           <p className="text-gray-600 mt-2 app-font">Rent by the hour, day, or week. Pick the plan that suits your schedule best.</p>
           </div>
          </div>

          {/* Easy & Fast Booking */}
          <div className="mb-8 flex items-center gap-3">
          <div className="bg-green-500 p-2">
          <FaMobileAlt className="text-white text-4xl" />
          </div>
           <div className="">
           <h2 className="lg:text-2xl text-gray-800 app-font">Easy & Fast Booking</h2>
           <p className="text-gray-600 mt-2 app-font">Book quickly with our simple, user-friendly website and app.</p>
           </div>
          </div>

          {/* Reliable Support & Safety */}
          <div className="mb-8 flex  items-center gap-3">
           <div className="bg-green-500 p-2">
           <FaShieldAlt className="text-white text-4xl" />
           </div>
            <div className="">
            <h2 className="lg:text-2xl text-gray-800 app-font">Reliable Support & Safety</h2>
            <p className="text-gray-600 mt-2 app-font">All bikes are regularly serviced, and we offer real-time tracking and roadside assistance.</p>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="mb-8 flex  items-center gap-3">
            <div className="bg-green-500 p-2">
            <FaStar className="text-white text-4xl" />
            </div>
           <div className="">
           <h2 className="lg:text-2xl text-gray-800 app-font">Customer Reviews</h2>
           <p className="text-gray-600 mt-2 app-font">See why customers love us! Read real reviews and ratings from happy riders.</p>
           </div>
          </div>

          {/* Exclusive Offers */}
          <div className="mb-8 flex  items-center gap-3">
           <div className="bg-green-500 p-2">
           <FaTags className="text-white text-4xl" />
           </div>
           <div className="">
           <h2 className="lg:text-2xl text-gray-800 app-font">Exclusive Offers</h2>
           <p className="text-gray-600 mt-2 app-font">Enjoy special discounts and rewards for frequent riders.</p>
           </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhyChooseRideroz;
