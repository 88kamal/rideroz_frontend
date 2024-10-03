import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-teal-600 py-2 px-4 flex justify-center items-center text-white relative">
      <div className="font-semibold absolute left-1/2 transform -translate-x-1/2">
        Your Journey, Our Wheels
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-lime-300" />
          <span>example@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-lime-300" />
          <span>8292417430</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
