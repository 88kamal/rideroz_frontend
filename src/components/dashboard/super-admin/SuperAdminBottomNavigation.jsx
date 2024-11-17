/* eslint-disable react/prop-types */
import { HomeIcon, PlusCircleIcon, TicketIcon, UsersIcon } from '@heroicons/react/24/solid';
import { CarFront } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShopOwnerBottomNavigation = () => {
    return (
        <div className="fixed z-50 bottom-0 left-0 w-full bg-green-50 border-t border-green-100 shadow-lg">
            <div className="flex justify-around py-1">
                <NavItem
                    icon={<HomeIcon className="w-6 h-6" />}
                    label="Home"
                    link={'super-admin-home-page'}
                />
                <NavItem
                    icon={<TicketIcon className="w-6 h-6" />}
                    label="Booked"
                    link={'super-admin-vehicle-book'}
                />

              

                <NavItem
                    icon={<CarFront className="w-6 h-6" />}
                    label="All Vehicle"
                    link={'shop-owner-all-vehicle'}
                />

                <NavItem
                    icon={<UsersIcon className="w-6 h-6" />}
                    label="Profile"
                    link={'shop-owner-profile'}
                />
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, link }) => (
    <Link to={link}>
        <button type='button' className="flex flex-col items-center text-black hover:text-green-800">
            {icon}
            <span className="text-xs mt-1">{label}</span>
        </button>
    </Link>
);

export default ShopOwnerBottomNavigation;
