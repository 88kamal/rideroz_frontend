import MoreButton from "./moreButton/MoreButton"

/* eslint-disable react/prop-types */
function TopNavbar({ image, name }) {
    return (
        <>
            <div className='rounded-none  bg-green-50 shadow-sm '>
                <div
                    className="flex items-center px-3 py-3  justify-between"
                >
                   <div className="flex items-center gap-3">
                   <div className="flex justify-center">
                        <img className="w-10" src={image} alt="img" />
                    </div>
                    <h1 className="text-center text-xl text-black font-medium app-font">{name} Dashboard</h1>
                   </div>
                    <MoreButton />
                </div>
            </div>
        </>
    )
}

export default TopNavbar