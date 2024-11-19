import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { Button } from '@material-tailwind/react'
import { Link, useParams } from 'react-router-dom'

const PaymentSuccessPage = () => {
    const { width, height } = useWindowSize()

    const {paymentId} = useParams()
    return (
        <div>
            <Confetti
                width={width}
                height={height}
            />
            <div className="flex justify-center items-center h-screen">
                <div className="">
                    <div className="flex justify-center items-center mb-2">
                        {/* <img className=' w-80 lg:w-28' 
                        src="https://cdn-icons-png.flaticon.com/128/7518/7518748.png" alt="" /> */}
                         <img className=' w-80 lg:w-80' 
                        src="https://img.freepik.com/free-vector/transfer-money-concept-illustration_114360-3762.jpg?t=st=1731986320~exp=1731989920~hmac=af1d105028d56b23dad5c5609ad2648cd35d31a63948639d747b3068c3d09d2e&w=1060" alt="" />
                    </div>
                    <h1 className=" text-center app-font mb-4 text-2xl font-bold text-green-500 lg:text-xl">Payment Successfully</h1>
                    <h1 className=' mb-3 text-center'>{paymentId}</h1>

                    <div className=" flex justify-center items-center">
                        <Link to={'/user-dashboard/user-vehicle-book'}>
                         <Button variant=''
                            className=' py-3 hover:shadow-none shadow-none bg-transparent border text-green-600 border-green-600'>
                            View Vehicle
                        </Button>
                        </Link>
                       

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccessPage