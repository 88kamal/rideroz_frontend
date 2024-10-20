/* eslint-disable react/prop-types */
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const StarRating = ({ rating }) => {
  // Function to render stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar className="star-icon" color="#fbc02d" size={18} key={i} />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt className="star-icon" color="gray" size={18} key={i} />);
      } else {
        stars.push(<AiOutlineStar className="star-icon" color="gray" size={18} key={i} />);
      }
    }
    return stars;
  };

  return <div className="star-rating flex items-center space-x-1">{renderStars()}</div>;
};

export default StarRating;
