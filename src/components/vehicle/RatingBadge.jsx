/* eslint-disable react/prop-types */
import { Chip } from "@material-tailwind/react";

const RatingBadge = ({ vehicleRatings }) => {
  return (
    <Chip
      variant="filled"
      size="xs"
      value={
        <div className="flex items-center text-white">
          <span className="text-xs mr-1 app-font">
            {vehicleRatings.toFixed(1)} {/* Display rating with one decimal place */}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-3 h-3"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
      }
      className="rounded-md px-1.5 py-1 bg-green-800"
    />
  );
};

export default RatingBadge;
