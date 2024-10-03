import React from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Collapse,
    Button,
    Menu,
    MenuHandler,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function Navbars() {
    const [openNav, setOpenNav] = React.useState(false);
    const [openServices, setOpenServices] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-1">
            {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
                { to: '/blog', label: 'Blog' },
                { to: '/faqs', label: 'FAQs' },
            ].map((item, index) => {
                if (item.submenu) {
                    return (
                        <li
                            key={index}
                            className="relative"
                            onMouseEnter={() => setOpenServices(true)}
                            onMouseLeave={() => setOpenServices(false)}
                        >
                            <Menu open={openServices}>
                                <MenuHandler>
                                    <Typography
                                        as="div"
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center p-1 cursor-pointer app-font"
                                    >
                                        {item.label}
                                    </Typography>
                                </MenuHandler>
                            </Menu>
                        </li>
                    );
                } else {
                    return (
                        <p
                            key={index}
                            color="blue-gray"
                            className="p-1 text-md app-font"
                        >
                            <Link to={item.to} className="flex items-center">
                                {item.label}
                            </Link>
                        </p>
                    );
                }
            })}
        </ul>
    );

    const mobileNavList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0">
            {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
                { to: '/blog', label: 'Blog' },
                { to: '/faqs', label: 'FAQs' },
                {to: '/signup' , label : 'Sign Up'}
            ].map((item, index) => {
                if (item.submenu) {
                    return (
                        <li key={index} className="relative">
                            <Typography
                                as="div"
                                variant="small"
                                color="blue-gray"
                                className="flex items-center p-1 cursor-pointer app-font"
                                onClick={() => setOpenServices(!openServices)}
                            >
                                {item.label}
                            </Typography>
                            <Collapse open={openServices}>
                                <ul className="pl-4">
                                    {item.submenu.map((subItem, subIndex) => (
                                        <Typography
                                            key={subIndex}
                                            as="li"
                                            variant="small"
                                            color="blue-gray"
                                            className="p-1 app-font"
                                        >
                                            <Link to={subItem.to} className="flex items-center">
                                                - {subItem.label}
                                            </Link>
                                        </Typography>
                                    ))}
                                </ul>
                            </Collapse>
                        </li>
                    );
                } else {
                    return (
                        <Typography
                            key={index}
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className="p-1 app-font"
                        >
                            <Link to={item.to} className="flex items-center">
                                {item.label}
                            </Link>
                        </Typography>
                    );
                }
            })}
        </ul>
    );

    return (
        <div className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none">
            <Navbar className="sticky inset-0 z-20 h-max shadow-md max-w-full border-none rounded-none py-2 px-4 lg:px-5 lg:py-1.5">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link to={'/'}>
                        <Typography
                            as="a"
                            className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center"
                        >
                            <img
                                className=" w-24 h-9 lg:w-24 lg:h-10"
                                src="/logo/rideroz.png"
                                alt="Devknus Logo"
                            />
                        </Typography>
                    </Link>
                    <div className="flex items-center gap-3 lg:gap-3">
                        <div className="hidden lg:block">{navList}</div>


                        <Button
                            variant=""
                            className="bg-[#E6FFF3] border shadow-none hover:shadow-none border-green-300 rounded-lg py-2 px-4 flex items-center space-x-2">
                            <span className="text-black font-semibold ">List Shop</span>
                            <span className="bg-gradient-to-r from-blue-400 to-green-400 text-white font-semibold rounded-sm px-3 py-[1px] text-[10px] animate-pulse ">
                                Free
                            </span>
                        </Button>


                        {/* User Icon and Sign Up */}
                        <FaUserCircle className="text-black text-2xl cursor-pointer hidden lg:block" />
                        <span className="text-black hover:text-gray-900 cursor-pointer hidden lg:block">
                            Sign Up
                        </span>


                        <IconButton
                            className="ml-auto h-10 w-10 text-inherit rounded-lg lg:hidden bg-white border"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {mobileNavList}
                </Collapse>
            </Navbar>
        </div>
    );
}