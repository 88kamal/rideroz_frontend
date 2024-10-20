/* eslint-disable react/prop-types */
import { ReviewModal } from './ReviewModal';
import { Trash2 } from 'lucide-react';
import StarRating from './StarRating';
import BigRatingStar from './BigRatingStar';
import { useGetVehicleRatingQuery } from '../../redux/slices/vehicleApiSlice';
import RatingProgress from './RatingProgress';


const VehicleReview = ({ vehicle, vehicleId }) => {
    const { data, error, isLoading, refetch } = useGetVehicleRatingQuery(vehicleId);


    return (
        <div>
            {/* Main Section  */}
            <section className="py-5 relative">
                {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
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
                                    <RatingProgress stars={5} percentage={data?.ratingDistribution?.fiveStar ?? 0} />
                                    <RatingProgress stars={4} percentage={data?.ratingDistribution?.fourStar ?? 0} />
                                    <RatingProgress stars={3} percentage={data?.ratingDistribution?.threeStar ?? 0} />
                                    <RatingProgress stars={2} percentage={data?.ratingDistribution?.twoStar ?? 0} />
                                    <RatingProgress stars={1} percentage={data?.ratingDistribution?.oneStar ?? 0} />
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


                        <div className="flex flex-wrap ">
                            {vehicle?.reviews?.map((item, index) => {
                                const readableDate = new Date(item?.createdAt).toLocaleString();
                                return (
                                    <div className="p-1 w-full  md:w-1/2" key={index}>
                                        {/* <pre>{JSON.stringify(item,null,2)}</pre> */}
                                        <div className={`border px-4 py-4 rounded shadow-md `}>
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-2">
                                                    <img className='w-5' src="https://cdn-icons-png.flaticon.com/128/727/727399.png" alt="alt" />
                                                    <h2 className={`text-sm `}>{item?.user?.userName || "Rideroz User"}</h2>
                                                </div>

                                                <div>
                                                    <h2 className={`text-sm `}>{readableDate}</h2>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1 mb-2">
                                                <StarRating rating={item?.rating} />
                                            </div>

                                            <div className="">
                                                <h2 className={``}>{item.comment}</h2>
                                            </div>

                                            <div className="flex justify-end space-x-2 cursor-pointer">
                                                <Trash2 color='#804ccf' size={18} />
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default VehicleReview;