/* eslint-disable no-unused-vars */
import { ArrowPathIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    CardHeader,
    Input,
    Typography,
    Button,
    Spinner,
} from "@material-tailwind/react";
import ViewCityImageModal from "./modal/ViewCityImageModal";
import { useState } from "react";
import { useGetCitiesForAdminQuery } from "../../../redux/slices/cityApiSlice";
import DeleteCityModal from "./modal/DeleteCityModal";
import EditCityModal from "./modal/EditCityModal";

const TABLE_HEAD = ["S.No", "City Name", "City State", "City Image", "Edit", "Delete"];

export default function ViewCity() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    // Pass the search, page, and limit as parameters to the query
    const { data: cities, error, isLoading, refetch } = useGetCitiesForAdminQuery({ search, page, limit });

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        const totalPages = Math.ceil((cities?.totalCities ?? 0) / limit);
        if (page < totalPages) setPage(page + 1);
    };

    return (
        <div className="h-full w-full bg-white pt-1 rounded-md border border-green-300">
            {/* <pre>{JSON.stringify(error, null, 2)}</pre> */}
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            All City
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all cities
                        </Typography>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className=" w-64 md:w-72">
                            <Input
                                label="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                color="green"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div>
                        <Button
                            variant=""
                            color="green"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-green-200 bg-transparent border text-black"
                            onClick={refetch}
                        >
                            <ArrowPathIcon className="h-5 w-5" />
                            <p className=" hidden lg:block md:block sm:block">Refresh</p>
                        </Button>
                    </div>
                </div>

            </CardHeader>

            {/* <pre>{JSON.stringify(error,null,2)}</pre> */}

            <div className="overflow-scroll p-2">
                {isLoading ? (
                    <div className="flex justify-center p-4">
                        <Spinner className="h-8 w-8 text-green-500" />
                        {/* <img className="h-14 w-14 text-green-500"
                            src="https://cdn-icons-gif.flaticon.com/17905/17905752.gif" alt="" /> */}
                    </div>
                ) : error ? (
                    <div className="p-4">
                        <div className=" flex justify-center items-center">
                            <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
                        </div>
                        <h1 className=" text-center" color="red">{error?.data?.error}</h1>
                    </div>
                )
                    :

                    (
                        <table className=" w-full min-w-max table-auto text-left ">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-y border-l border-r border-green-200 bg-green-50 p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-bold leading-none text-green-700 "
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody >
                                {cities?.cities?.map(
                                    ({ _id, cityImage, cityName, cityState }, index) => {
                                        const isLast = index === cities?.cities?.length - 1;
                                        const classes = isLast
                                            ? "px-5 py-   border-l  border-r border-b border-green-300"
                                            : "px-5 py-  border-l  border-r border-b border-green-300";

                                        return (
                                            <tr key={index} className=" hover:bg-green-50/50 cursor-pointer">
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font"
                                                    >
                                                        {index + 1 + (page - 1) * limit}.
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font capitalize"
                                                    >
                                                        {cityName}
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal app-font capitalize"
                                                    >
                                                        {cityState}
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <ViewCityImageModal
                                                        cityImage={cityImage}
                                                    />
                                                </td>

                                                <td className={classes}>
                                                    <EditCityModal 
                                                    id={_id} 
                                                    cityName={cityName}
                                                    cityState={cityState}
                                                    cityImage={cityImage}
                                                    />
                                                </td>

                                                <td className={classes}>
                                                    <DeleteCityModal id={_id} />
                                                </td>
                                            </tr>
                                        );
                                    },
                                )}
                            </tbody>
                        </table>
                    )

                }

            </div>
            <div className="flex items-center justify-between border-t border-green-300 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {page} of {Math.ceil((cities?.totalCities ?? 0) / limit)}
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant=""
                        size="sm"
                        className="hover:bg-green-50 active:bg-green-50 focus:bg-green-50 transition-colors duration-300 hover:shadow-none shadow-none bg-transparent border text-black border-green-200 "
                        onClick={handlePrevious} disabled={page === 1}>
                        Previous
                    </Button>

                    <Button
                        variant=""
                        size="sm"
                        className=" hover:shadow-none shadow-none   bg-green-500 "
                        onClick={handleNext}
                        disabled={page === Math.ceil((cities?.totalCities ?? 0) / limit)}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}