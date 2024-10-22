import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

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
                    <div className="flex justify-center items-center">
                       <img src="" alt="" />
                    </div>
                    {/* <h1 className=" text-center app-font mb-3 text-xl">Congratulation Your Shop has been Listed</h1> */}

                    <div className=" flex justify-center items-center">
                        {/* <Button variant='' className=' hover:shadow-none shadow-none bg-transparent border text-green-600 border-green-600'>Login Now</Button> */}
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccessPage