/* eslint-disable react/no-unknown-property */
import { IconButton } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { EllipsisVertical, Network, UserRoundPlus, Users } from 'lucide-react';
import { Drawer, Typography, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

function MoreButton() {
    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <div className=''>
            <div>
                <div className="flex justify-end ">
                    <div className="flex items-center space-x-4">

                        {/* ExtraNavigation Button */}
                        <IconButton
                            variant="text"
                            className=" drop-shadow-none bg-transparent border-none border-green-200 hover:shadow-none shadow-none p-4 hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300"
                            onClick={openDrawer}
                        >
                            <EllipsisVertical />
                        </IconButton>
                    </div>
                </div>
            </div>

            {/* Drawer Component */}
            <Drawer placement='top' className=' shadow-none drop-shadow bg-green-50' overlay={true} open={open} onClose={closeDrawer}>
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography variant="h5" color="blue-gray">
                        More Services.....
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>

                <List>
                    <Link onClick={() => setOpen(false)} to={'view-and-add-city'}>
                        <ListItem className='hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300'>
                            <ListItemPrefix>
                                <PlusCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Add Or View
                        </ListItem>
                    </Link>


                    <Link onClick={() => setOpen(false)} to={'view-and-add-roles-and-department'}>
                        <ListItem className='hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300'>
                            <ListItemPrefix>
                                <Network />
                            </ListItemPrefix>
                            Add Or View Roles And Department
                        </ListItem>
                    </Link>

                    <Link onClick={() => setOpen(false)} to={'add-and-view-employee'}>
                        <ListItem className='hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300'>
                            <ListItemPrefix>
                                <UserRoundPlus />
                            </ListItemPrefix>
                            Add And View Employee
                        </ListItem>
                    </Link>

                    <Link onClick={() => setOpen(false)} to={'view-user-and-shop-owner'}>
                        <ListItem className='hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300'>
                            <ListItemPrefix>
                                <Users />
                            </ListItemPrefix>
                            View User And Shop Owner
                        </ListItem>
                    </Link>

                </List>


            </Drawer>
        </div>
    );
}

export default MoreButton;