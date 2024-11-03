
import Layout from '../../../components/layout/Layout';

const SafetyPage = () => {
  return (
   <Layout>
     <div className="py-6 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-black mb-8 text-center">Safety & Responsibility</h1>
        
        {/* Safety Section */}
        <div className="mb-12 bg-white border border-gray-100 drop-border  drop-shadow app-font rounded-lg p-6 app-font">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Safety</h2>
          <ul className=' list-decimal px-4'>
          <li className="text-gray-700 mb-4">
          At Rideroz, your safety is our top priority! As a rider, you’re responsible for your own well-being while on the road. 
          </li>
          <li className="text-gray-700 mb-4">
          Just bring a copy of your driving license for rentals (except bicycles), and remember that helmets are mandatory. Safe riding is our policy—no drinking, and always follow the traffic rules.
          </li>
          <li className="text-gray-700 mb-4">
            Helmets are mandatory. Drinking and driving or using any intoxicants while driving is strictly against our company policies. The rider must adhere to all rules and regulations of the Motor Vehicle Department of the Government of India.
          </li>
          <li className="text-gray-700 mb-4">
          In rare cases like extreme weather or emergencies, we’re here to help, but generally, riders should bring the vehicle back in the same condition it was rented.
          </li>
          <li className="text-gray-700 mb-4">
            The vehicle should be returned in the same safe and sound condition as it was when rented.
          </li>
          </ul>
         
        </div>

        {/* Damage and Loss Section */}
        <div className=" bg-white border border-gray-100 drop-border  drop-shadow app-font rounded-lg p-6 app-font">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Damage and Loss</h2>
         <ul className=' list-decimal px-4'>
         <li className="text-gray-700 mb-4">
         Before each ride, you and our team will inspect the vehicle together to ensure everything is good to go.

          </li>
          <li className="text-gray-700 mb-4">
            We take care of any maintenance issues, but for any damages or losses that happen during your rental, you’re responsible for covering repair costs.
          </li>
          <li className="text-gray-700 mb-4">
          Treat the vehicle as if it’s your own. Our goal is for every rider to enjoy a smooth, safe experience with Rideroz!
          </li>
          <li className="text-gray-700 mb-4">
            You are responsible for paying repair charges or any other charges if there is any damage or loss to the rented vehicle.
          </li>
          <li className="text-gray-700 mb-4">
            Once the rider complies with all the terms and conditions, the vehicle is handed over for use.
          </li>
        
         </ul>
        </div>

        <div className="mt-5">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Safety Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-4 bg-white border border-gray-100 drop-shadow app-font rounded-lg">
              <h3 className="text-xl font-semibold text-black">Wear Protective Gear</h3>
              <p className="text-gray-600 mt-2">Always wear a helmet and other protective gear to ensure your safety.</p>
            </div>
            <div className="p-4 bg-white border border-gray-100 drop-shadow app-font rounded-lg">
              <h3 className="text-xl font-semibold text-black">Follow Traffic Rules</h3>
              <p className="text-gray-600 mt-2">Obey speed limits and traffic signals to avoid accidents.</p>
            </div>
            <div className="p-4 bg-white border border-gray-100 drop-shadow app-font rounded-lg">
              <h3 className="text-xl font-semibold text-black">Stay Alert</h3>
              <p className="text-gray-600 mt-2">Stay aware of your surroundings and avoid distractions while riding.</p>
            </div>
            <div className="p-4 bg-white border border-gray-100 drop-shadow app-font rounded-lg">
              <h3 className="text-xl font-semibold text-black">Check Bike Condition</h3>
              <p className="text-gray-600 mt-2">Before starting your ride, inspect the bike’s brakes, tires, and fuel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </Layout>
  );
};

export default SafetyPage;
