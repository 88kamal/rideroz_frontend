import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { Button } from '@material-tailwind/react'
import Lottie from "lottie-react";
import shoplist from '../../../public/success.json'
import LoginModal from '../../components/registration/LoginModal';
const ListShopMessage = () => {
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
                        <Lottie
                            animationData={shoplist}
                            loop={true}
                            style={{ width: 300, height: 300 }} // Set width and height here
                        />
                    </div>
                    {/* <h1 className=" text-center app-font mb-3 text-xl">Congratulation Your Shop has been Listed</h1> */}

                    <div className=" flex justify-center items-center">
                        {/* <Button variant='' className=' hover:shadow-none shadow-none bg-transparent border text-green-600 border-green-600'>Login Now</Button> */}
                        <div className=" border text-green-600 border-green-600 px-10 py-2 rounded-md cursor-pointer bg-green-50">
                        <LoginModal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListShopMessage