/* eslint-disable react/no-unknown-property */
import { IconButton } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { BookCheck, EllipsisVertical, Eye, Network } from 'lucide-react';
import { Drawer, Typography, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

function SuperAdminRightNavbar() {
    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <div className=''>
            <div className="rounded-none border-b drop-shadow border-gray-300 border-t-0 border-l-0 border-r-0">
                <div className="flex justify-end px-2 py-3.5">
                    <div className="flex items-center space-x-4">

                        {/* ExtraNavigation Button */}
                        <IconButton
                            variant="text"
                            className=" drop-shadow-none bg-white border border-green-200 hover:shadow-none shadow-none p-4 hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300"
                            onClick={openDrawer}
                        >
                            <EllipsisVertical />
                        </IconButton>
                    </div>
                </div>
            </div>

            {/* Drawer Component */}
            <Drawer placement='top' className=' shadow-none drop-shadow' overlay={true} open={open} onClose={closeDrawer}>
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
                    <Link onClick={() => setOpen(false)} to={'add-city'}>
                        <ListItem className='hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300'>
                            <ListItemPrefix>
                                <PlusCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Add City
                        </ListItem>
                    </Link>

                    <Link onClick={() => setOpen(false)} to={'view-city'}>
                        <ListItem className='hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300'>
                            <ListItemPrefix>
                                <Eye />
                            </ListItemPrefix>
                            View City
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

                    <Link onClick={() => setOpen(false)} to={'super-admin-add-task'}>
                        <ListItem className='hover:bg-green-50 active:bg-green-100 focus:bg-green-100 transition-colors duration-300'>
                            <ListItemPrefix>
                                <BookCheck />
                            </ListItemPrefix>
                            Add Task
                        </ListItem>
                    </Link>
                </List>


            </Drawer>
        </div>
    );
}

export default SuperAdminRightNavbar;