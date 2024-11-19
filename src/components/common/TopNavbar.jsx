import { Link } from "react-router-dom";
import authService from "../../services/authService"
import MoreButton from "./moreButton/MoreButton"

/* eslint-disable react/prop-types */
function TopNavbar({ image, name }) {
    const user = authService.getCurrentUser();
    return (
        <>
            <div className='rounded-none  bg-green-50 shadow-sm '>
                <div
                    className="flex items-center px-3 py-3  justify-between"
                >
                    <Link to={'/'}>
                    <div className="flex items-center gap-3">
                        <div className="flex justify-center">
                            <img className="w-10" src={image} alt="img" />
                        </div>
                        <h1 className="text-center text-xl text-black font-medium app-font">{name} Dashboard</h1>
                    </div>
                    </Link>
                   {[2].includes(user?.role) &&  <MoreButton />}
                </div>
            </div>
        </>
    )
}

export default TopNavbar