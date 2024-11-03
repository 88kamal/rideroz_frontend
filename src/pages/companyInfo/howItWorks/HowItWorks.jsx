import Layout from '../../../components/layout/Layout';

const HowItWorks = () => {
  return (
  <Layout>
      <div className=" py-6 px-6">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-3xl font-bold mb-8">How It Works</h1>

        {/* User Section */}
        <div className="mb-16 bg-white drop-shadow border border-gray-300 rounded-md">
          <h2 className="text-2xl app-font text-gray-800 mb-2 bg-gray-100 p-2 rounded-t-md">For Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">

            {/* Step 1 */}
            <div className="flex flex-col items-center bg-gray-100 py-4 px-4 rounded-md">
              <h3 className="text-xl font-semibold text-gray-800">1. Register</h3>
              <p className="text-gray-600 mt-2 app-font">Create an account to start exploring our bike options.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center bg-gray-100 py-4 px-4 rounded-md">
              <h3 className="text-xl font-semibold text-gray-800">2. Choose Your Bike</h3>
              <p className="text-gray-600 mt-2 app-font">Select a bike that suits your needs from our wide range of options.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center bg-gray-100 py-4 px-4 rounded-md">
              <h3 className="text-xl font-semibold text-gray-800">3. Book & Confirm</h3>
              <p className="text-gray-600 mt-2 app-font">Pick a rental duration and confirm your booking with just a few clicks.</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center bg-gray-100 py-4 px-4 rounded-md">
              <h3 className="text-xl font-semibold text-gray-800">4. Enjoy the Ride</h3>
              <p className="text-gray-600 mt-2 app-font">Pick up the bike and hit the road! Enjoy a seamless riding experience.</p>
            </div>
          </div>
        </div>

        {/* Dealer Section */}
        <div className="mb-16 bg-white drop-shadow border border-gray-300 rounded-md">
          <h2 className="text-2xl app-font text-gray-800 mb-2 bg-gray-100 p-2 rounded-t-md">For Dealers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">

            {/* Step 1 */}
            <div className="flex flex-col items-center bg-gray-100 py-4 px-4 rounded-md">
              <h3 className="text-xl font-semibold text-gray-800">1. Sign Up</h3>
              <p className="text-gray-600 mt-2 app-font">Register as a dealer to start listing your bikes with us.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center bg-gray-100 py-4 px-4 rounded-md">
              <h3 className="text-xl font-semibold text-gray-800">2. List Your Bikes</h3>
              <p className="text-gray-600 mt-2 app-font">Add details and photos of the bikes you want to rent out.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center bg-gray-100 py-4 px-4 rounded-md">
              <h3 className="text-xl font-semibold text-gray-800">3. Manage Bookings</h3>
              <p className="text-gray-600 mt-2 app-font">Stay updated with user bookings and ensure bike availability.</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center bg-gray-100 py-4 px-4 rounded-md">
              <h3 className="text-xl font-semibold text-gray-800">4. Earn & Grow</h3>
              <p className="text-gray-600 mt-2 app-font">Earn money by renting out your bikes and grow your business with us.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default HowItWorks;
