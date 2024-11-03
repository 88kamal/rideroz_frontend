import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-teal-600 py-2 px-4 flex justify-center items-center text-white relative">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <p className=' text-md app-font'>Your Journey, Our Wheels</p>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-lime-300" />
          <span className='app-font'>riderozofficial@gmail.com

</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-lime-300" />
          <span className='app-font'>7505847229</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
