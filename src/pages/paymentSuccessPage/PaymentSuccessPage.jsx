import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const PaymentSuccessPage = () => {
    const { width, height } = useWindowSize()
    return (
        <div>
            <Confetti
                width={width}
                height={height}
            />
            <div className="flex justify-center items-center h-screen">
                <div className="">
                    <div className="flex justify-center items-center mb-2">
                        <img className='w-28' src="https://cdn-icons-png.flaticon.com/128/7518/7518748.png" alt="" />
                    </div>
                    <h1 className=" text-center app-font mb-4 text-xl">Payment Successfully</h1>
                    <h1 className=' mb-3'>{"67153b907fc2c450a5bdd351"}</h1>

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