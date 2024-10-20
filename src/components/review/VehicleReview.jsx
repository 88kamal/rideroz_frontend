/* eslint-disable react/prop-types */
import { ReviewModal } from './ReviewModal';
import { Trash2 } from 'lucide-react';
import StarRating from './StarRating';
import BigRatingStar from './BigRatingStar';
import { useDeleteReviewMutation, useGetVehicleRatingQuery } from '../../redux/slices/vehicleApiSlice';
import RatingProgress from './RatingProgress';
import authService from '../../services/authService';
import { Spinner } from '@material-tailwind/react';


const VehicleReview = ({ vehicle, vehicleId, error, isLoading }) => {
    const { data, refetch } = useGetVehicleRatingQuery(vehicleId);

    const [deleteReview,] = useDeleteReviewMutation();

    const user = authService.getCurrentUser();

    const handleDelete = async (reviewId) => {
        try {
            await deleteReview({ vehicleId, reviewId }).unwrap();
        } catch (error) {
            console.error('Failed to delete review:', error);
        }
    };

    return (
        <div>
            {/* Main Section  */}
            <section className="py-5 relative">
                {/* <pre>{JSON.stringify({error}, null, 2)}</pre> */}
                {/* div 1 */}
                <div className={`border border-green-100 px-5 py-5 w-full max-w-7xl  md:px-5 lg-6 mx-auto shadow-md mt-3 lg:mt-5 rounded-md `}>
                    {/* div 2  */}
                    <div className="w-full">
                        {/* Review Text  */}
                        <h2 className={`font-manrope font-bold text-4xl mb-8 text-center `}>
                            Our customer reviews
                        </h2>

                        {/* div 3  */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-11 pb-5 max-xl:max-w-2xl max-xl:mx-auto">
                            {/* div 3  Review Left */}
                            <div className="box flex flex-col gap-y-4 w-full ">

                                <div className="box flex flex-col gap-y-4 w-full">
                                    <RatingProgress stars={5}
                                        count={data?.ratingDistribution?.fiveStar?.count ?? 0}
                                        percentage={data?.ratingDistribution?.fiveStar?.percentage ?? 0}
                                    />
                                    <RatingProgress stars={4}
                                        count={data?.ratingDistribution?.fourStar?.count ?? 0}
                                        percentage={data?.ratingDistribution?.fourStar?.percentage ?? 0}
                                    />
                                    <RatingProgress stars={3}
                                        count={data?.ratingDistribution?.threeStar?.count ?? 0}
                                        percentage={data?.ratingDistribution?.threeStar?.percentage ?? 0}
                                    />
                                    <RatingProgress stars={2}
                                        count={data?.ratingDistribution?.twoStar?.count ?? 0}
                                        percentage={data?.ratingDistribution?.twoStar?.percentage ?? 0}
                                    />
                                    <RatingProgress stars={1}
                                        count={data?.ratingDistribution?.oneStar?.count ?? 0}
                                        percentage={data?.ratingDistribution?.oneStar?.percentage ?? 0}
                                    />
                                </div>


                                {/* Review Modal Component  */}
                                <div className="">
                                    <ReviewModal
                                        vehicleId={vehicle?._id}
                                        image={vehicle?.vehicleImage[0]?.url}
                                        refetch={refetch}
                                    />
                                </div>
                            </div>

                            {/* Right Review  */}
                            <div className={`p-8  rounded-3xl flex items-center justify-center flex-col bg-green-50`}>
                                {/* Rating Text  */}
                                <h2 className="font-manrope font-bold text-5xl primaryColor mb-6">
                                    {parseFloat(vehicle?.vehicleRatings || 0).toFixed(1)}

                                </h2>

                                {/* Rating Star */}
                                <div className="">
                                    <BigRatingStar rating={vehicle?.vehicleRatings} />
                                </div>

                                {/* Rating Count Text  */}
                                <p className="font-medium text-xl leading-8 text-gray-900 text-center">
                                    {vehicle?.numOfReviews || 0} Ratings
                                </p>
                            </div>
                        </div>

                        {/* <pre>{JSON.stringify(error,null,2)}</pre> */}


                        <div className="flex flex-wrap justify-center ">
                            {isLoading ? (
                                <div className="flex justify-center p-4">
                                    <Spinner className="h-8 w-8 text-green-500" />
                                    {/* <img className="h-14 w-14 text-green-500"
                            src="https://cdn-icons-gif.flaticon.com/17905/17905752.gif" alt="" /> */}
                                </div>
                            ) : error ? (
                                <div className="p-4">
                                    <div className=" flex justify-center items-center">
                                        <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
                                    </div>
                                    <h1 className=" text-center" color="red">{error?.data?.error}</h1>
                                </div>
                            )
                                :

                                <>

                                    {vehicle?.reviews?.map((item, index) => {
                                        const readableDate = new Date(item?.createdAt).toLocaleString();

                                        // Check if the logged-in user is the author of the review
                                        const isUserReview = user && item?.user?._id === user.id;

                                        return (
                                            <div className="p-1 w-full md:w-1/2" key={index}>
                                            <div className={`border px-4 py-4 rounded shadow-md min-h-[8.2em] md:h-auto`}>
                                                <div className="flex items-center justify-between mb-3 flex-wrap">
                                                    <div className="flex items-center gap-2">
                                                        <img className='w-5' src="https://cdn-icons-png.flaticon.com/128/727/727399.png" alt="alt" />
                                                        <h2 className={`text-sm break-words`}>{item?.user?.userName || "Rideroz User"}</h2>
                                                    </div>
                                        
                                                    <div>
                                                        <h2 className={`text-sm text-right`}>{readableDate}</h2>
                                                    </div>
                                                </div>
                                        
                                                <div className="flex items-center gap-1 mb-2">
                                                    <StarRating rating={item?.rating} />
                                                </div>
                                        
                                                <div className="">
                                                    <h2 className={`break-words`}>{item.comment}</h2>
                                                </div>
                                        
                                                {/* Show delete button only if the review belongs to the logged-in user */}
                                                {isUserReview && (
                                                    <div
                                                        className="flex justify-end space-x-2 cursor-pointer mt-2"
                                                        onClick={() => handleDelete(item._id)}
                                                    >
                                                        <Trash2 color="red" size={18} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        )
                                    })}
                                </>
                            }


                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default VehicleReview;