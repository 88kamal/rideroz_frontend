/* eslint-disable react/prop-types */
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const BigRatingStar = ({ rating }) => {
  // Function to render stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar className="star-icon" color="green" size={34} key={i} />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt className="star-icon" color="green" size={34} key={i} />);
      } else {
        stars.push(<AiOutlineStar className="star-icon" color="gray" size={34} key={i} />);
      }
    }
    return stars;
  };

  return <div className="star-rating flex items-center space-x-4 mb-3">{renderStars()}</div>;
};

export default BigRatingStar;
