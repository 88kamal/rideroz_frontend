/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
export default function RatingStar({ ratings, totalRating }) {

    // console.log(totalRating?.length)



    const stars = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {ratings >= index + 1 ?
                    (<FaStar className="star-icon" color="green" size={18} />)
                    : ratings >= number
                        ?
                        <FaStarHalfAlt className="star-icon" color="green" size={18} />
                        : <AiOutlineStar className="star-icon" size={18} color="green" />
                }
            </span>
        )
    })

    return (
        <div className="flex space-x-2">
            <div className="flex items-center space-x-1">
                {stars}
            </div>
            <div className="">
                {totalRating} Reviews
            </div>
        </div>

    )
}