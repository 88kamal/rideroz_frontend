/* eslint-disable react/prop-types */
import { HomeIcon, UsersIcon } from '@heroicons/react/24/solid';
import { TicketCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
    return (
        <div className="fixed z-50 bottom-0 left-0 w-full bg-green-50 border-t border-green-100">
            <div className="flex justify-around py-1">
                <NavItem
                    icon={<HomeIcon className="w-6 h-6" />}
                    label="Home"
                    link={'user-home-page'}
                />
                <NavItem
                    icon={<TicketCheck className="w-6 h-6" />}
                    label="Booked"
                    link={'user-vehicle-book'}
                />
                <NavItem
                    icon={<UsersIcon className="w-6 h-6" />}
                    label="Profile"
                    link={'user-profile'}
                />
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, link }) => (
    <Link to={link}>
    <button type='button' className="flex flex-col items-center text-blacj hover:text-green-800">
        {icon}
        <span className="text-xs mt-1">{label}</span>
    </button>
    </Link>
);

export default BottomNavigation;
