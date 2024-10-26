import { Link } from "react-router-dom";

const UserBottomNavigation = () => {
    return (
        <div className="">
            <div className=" fixed z-50 w-full h-14 max-w-lg -translate-x-1/2 bg-white border-t border-gray-200 bottom-0 left-1/2" >
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                    <button
                        data-tooltip-target="tooltip-home"
                        type="button"
                        className="inline-flex flex-col items-center justify-center px-5 rounded-s-full group"
                    >
                        <Link to={'user-home-page'}>
                            <svg
                                className="w-5 h-5 mb-1 text-gray-500 group-hover:text-green-600 dark:group-hover:text-green-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            <span className="sr-only">Home</span>
                        </Link>

                    </button>

                    <div
                        id="tooltip-home"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                    >
                        Home
                        <div className="tooltip-arrow" data-popper-arrow="" />
                    </div>

                    <button
                        data-tooltip-target="tooltip-wallet"
                        type="button"
                        className="inline-flex flex-col items-center justify-center px-5 group"
                    >
                     <Link to={'user-vehicle-book'}>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                        className="size-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500">
                            <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                        </svg>
                        </Link>


                        <span className="sr-only">Vehicle Book</span>
                    </button>
                    <div
                        id="tooltip-wallet"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        Wallet
                        <div className="tooltip-arrow" data-popper-arrow="" />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            data-tooltip-target="tooltip-new"
                            type="button"
                            className="inline-flex items-center justify-center w-10 h-10 font-medium bg-green-600 rounded-full hover:bg-green-700 group focus:ring-4 focus:ring-green-300 focus:outline-none dark:focus:ring-green-800"
                        >
                            <svg
                                className="w-4 h-4 text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                            <span className="sr-only">New item</span>
                        </button>
                    </div>
                    <div
                        id="tooltip-new"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        Create new item
                        <div className="tooltip-arrow" data-popper-arrow="" />
                    </div>
                    <button
                        data-tooltip-target="tooltip-settings"
                        type="button"
                        className="inline-flex flex-col items-center justify-center px-5  dark:hover:bg-gray-800 group"
                    >
                        <svg
                            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                            />
                        </svg>
                        <span className="sr-only">Settings</span>
                    </button>
                    <div
                        id="tooltip-settings"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        Settings
                        <div className="tooltip-arrow" data-popper-arrow="" />
                    </div>
                    <button
                        data-tooltip-target="tooltip-profile"
                        type="button"
                        className="inline-flex flex-col items-center justify-center px-5 rounded-e-full  dark:hover:bg-gray-800 group"
                    >
                        <svg
                            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <span className="sr-only">Profile</span>
                    </button>
                    <div
                        id="tooltip-profile"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        Profile
                        <div className="tooltip-arrow" data-popper-arrow="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserBottomNavigation;

