/* eslint-disable react/no-unescaped-entities */
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useGetVehicleByIdQuery } from "../../redux/slices/vehicleApiSlice";
import { TicketMinus } from "lucide-react";
import VehicleReview from "../../components/review/VehicleReview";
import RatingStar from "../../components/review/RatingStar";
import VehicleAvailbilityModal from "./modal/VehicleAvailbilityModal";

function ProductInfo() {
    const { id } = useParams();
    const { data: vehicle, error, isLoading } = useGetVehicleByIdQuery(id);
    const navigate = useNavigate();
    // console.log(imageData)
    const [slideImage, setslideImage] = useState("")


    const imageData =
    {
        image1: vehicle?.vehicleImage[0]?.url,
        image2: vehicle?.vehicleImage[1]?.url,
    }

    const { image1, image2 } = imageData;

    // console.log(imageData.image2)

    return (
        <Layout>
            {/* Main Section  */}
            <section className=" sm:py-1">
                {/* div 1  */}
                <div className="container mx-auto px-4">
                    {/* div 2  */}
                    <div className="lg:col-gap-12 xl:col-gap-16 mt-[0.9em] grid grid-cols-1 lg:mt-7 lg:grid-cols-1 lg:gap-1 w-full">
                        {/* div 3  Left Item */}
                        <div className="lg:col-span-3 lg:row-end-1">
                            {/* div 4  */}
                            <div className="lg:flex lg:items-start">
                                {/* Main Image Box  */}
                                <div className="lg:order-2 lg:ml-5">
                                    <div className={` overflow-hidden rounded-lg border flex justify-center`}>
                                        <div className="flex justify-center">
                                            {slideImage ? (
                                                <img
                                                    style={{
                                                        filter: `${isLoading ? 'blur(20px)' : ''}`,
                                                        transition: '1s filter linear',
                                                        // width: '100%',
                                                        background: 'transparent',
                                                    }}
                                                    className=" h-[20.2em] lg:h-[28em] w-96 lg:w-[32em] md:w-[15em]"
                                                    src={slideImage}
                                                    alt=""
                                                />
                                            ) : (
                                                <img
                                                    style={{
                                                        filter: `${isLoading ? 'blur(20px)' : ''}`,
                                                        transition: '1s filter linear',
                                                        // width: '100%',
                                                        background: 'transparent',
                                                    }}
                                                    className=" h-[20.2em] lg:h-[28em] w-96 lg:w-[32em] md:w-[15em] "
                                                    src={image1}
                                                    alt=""
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* All Image Box  */}
                                <div className="mt-3 lg:mt-0 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                                    <div className="flex flex-row items-start lg:flex-col space-x-2 lg:space-x-0 justify-center">
                                        {/* Image 1  */}
                                        {image1 && (
                                            <button
                                                type="button"
                                                className={`flex-0 aspect-square mb-3 h-16 overflow-hidden rounded-lg focus:border 
                                                 focus:border-[#b88ef6] border  text-center`}
                                            >
                                                <img
                                                    style={{
                                                        filter: `${isLoading ? 'blur(20px)' : ''}`,
                                                        transition: '1s filter linear',
                                                        // width: '100%',
                                                        background: 'transparent',
                                                    }}
                                                    onClick={() => setslideImage(image1)}
                                                    className="h-full w-full"
                                                    src={image1}
                                                    alt=""
                                                />
                                            </button>
                                        )}

                                        {/* Image 2  */}
                                        {image2 && (
                                            <button
                                                type="button"
                                                className={`flex-0 aspect-square mb-3 h-16 overflow-hidden rounded-lg focus:border 
                                                 focus:border-[#b88ef6] border  text-center`}
                                            >
                                                <img
                                                    style={{
                                                        filter: `${isLoading ? 'blur(20px)' : ''}`,
                                                        transition: '1s filter linear',
                                                        // width: '100%',
                                                        background: 'transparent',
                                                    }}
                                                    onClick={() => setslideImage(image2)}
                                                    className="h-full w-full object-cover"
                                                    src={image2}
                                                    alt=""
                                                />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* div 5 Right Item  */}
                        <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 cursor-text">
                            {/* Brand Name Text  */}
                            <h2 className={`app-font`}>
                                Rideroz
                            </h2>

                            {/* <pre>{JSON.stringify(vehicle,null,2)}</pre> */}

                            {/* Product Title  */}
                            <h1
                                className="sm: text-2xl font-bold text-gray-900 sm:text-3xl"

                            >
                                {vehicle?.vehicleName}
                            </h1>

                            {/* ratings, totalRating */}
                            <div className="mt-2">
                                <RatingStar
                                    rating={vehicle?.vehicleRatings}
                                    totalRating={vehicle?.numOfReviews}
                                />
                            </div>

                            {/* Price, Discount Percentage  */}
                            <div className="flex flex-wrap mt-5 items-center justify-between">
                                {/* main div  */}
                                <div className="flex items-center space-x-3">
                                    {/* Price  */}
                                    <div className="">
                                        <h1 className={`fontPara text-2xl `}> ₹ {vehicle?.vehiclePrice}</h1>
                                    </div>


                                    <div className={` bg-green-600 px-2 app-font text-white text-sm animate-pulse`}>
                                        {vehicle?.vehicleAvailability && "Available"}
                                    </div>



                                </div>



                                {/* Social Media Icons  */}
                                <div className="flex items-center gap-2 cursor-pointer">
                                    {/* Whatsapp Icon  */}
                                    <BsWhatsapp size={24} className={``} />

                                    {/* Facebook Icon  */}
                                    <FaFacebook size={24} color="#316FF6" />

                                    {/* Instagram Icon  */}
                                    <RiInstagramFill size={24} color="#cd486b" />
                                </div>
                            </div>

                            {/* Enquiry And Add To Cart Button  */}
                            <div className=" mb-2 mt-5">
                                {/* Bottom Border  */}
                                <div className={`mb-4 border-b `} />

                                {/* Buttons  */}
                                <div className="flex gap-4">
                                    {/*Enquiry button  */}
                                
                                    <VehicleAvailbilityModal bookedDates={vehicle?.bookedDates}/>

                                    {/* Add To Cart Button  */}
                                    <Button
                                        onClick={() => navigate(`/checkout/${vehicle?._id}`)}
                                        className="flex items-center justify-center rounded-md bg-slate-900 py-2.5  lg:px-5 lg:py-2 text-center text-[0.6em] lg:text-sm font-medium text-white primaryBgColor w-full hover:shadow-none shadow-none bg-green-500  "
                                    >

                                        <TicketMinus className="mr-2 w-5 h-5 lg:h-6 lg:w-6" />
                                        <span className="fontPara">Book Now</span>
                                    </Button>
                                </div>

                                {/* Bottom Border  */}
                                <div className={`mt-4 mb-2 lg:mb-2 border-b `} />

                                {/* All Buttons  */}
                                <div className="lg:w-[36em] text-justify">
                                    {/* Product Description  */}
                                    <div className="mb-2">
                                        {/* Product Description Text  */}
                                        <h2 className={`fontPara text-lg font-bold `}>
                                            Information:
                                        </h2>

                                        <div className="flex items-center gap-2 mt-2 border p-2 border-green-300">
                                            <h1 className=" font-bold">VehicleType : </h1>
                                            <h1 className=" capitalize">{vehicle?.vehicleType}</h1>
                                        </div>

                                        {/* <div className="flex items-center gap-2 mt-2 border p-2 border-green-300">
                                            <h1 className=" font-bold"> VehicleNumber : </h1>
                                            <h1 className=" capitalize">{vehicle?.vehicleNumber}</h1>
                                        </div> */}

                                        <div className="flex items-center gap-2 mt-2 border p-2 border-green-300">
                                            <h1 className=" font-bold"> VehicleModel: </h1>
                                            <h1 className=" capitalize">{vehicle?.vehicleModel}</h1>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2 border p-2 border-green-300">
                                            <h1 className=" font-bold"> SittingCapacity : </h1>
                                            <h1 className=" capitalize">{vehicle?.sittingCapacity}</h1>
                                        </div>

                                        {/* <Button variant="" className=" mt-2 hover:shadow-none shadow-none w-full bg-blue-500">
                                            Show Location
                                        </Button> */}
                                    </div>

                                    {/* Product Highlights */}
                                    <div className="">
                                        {/* Product Highlights Text  */}
                                        <h2 className={`fontPara text-lg font-bold `}>
                                            Description:
                                        </h2>

                                        {/* Product Highlights List  */}
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt reiciendis ad eum consectetur velit alias quae id laborum ea. Doloribus eveniet consectetur reiciendis. Ut, quia corrupti. Modi, nisi? Voluptatibus, dicta!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <pre>{JSON.stringify(...vehicle)}</pre> */}

                    {/* Reviews and Ratings */}
                    <div className="">
                        <VehicleReview
                            vehicleId={id}
                            vehicle={vehicle}
                            error={error}
                            isLoading={isLoading}
                        />
                    </div>

                </div>
            </section>
        </Layout>
    );
}

export default ProductInfo;