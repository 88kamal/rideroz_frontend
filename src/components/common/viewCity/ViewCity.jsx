import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    CardHeader,
    Input,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Trash2 } from "lucide-react";
import ViewCityImageModal from "./modal/ViewCityImageModal";
import { useState } from "react";
import { useGetCitiesForAdminQuery } from "../../../redux/slices/cityApiSlice";

const TABLE_HEAD = ["S.No", "City Name", "City State", "City Image", "Delete"];

const TABLE_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        job: "Manager",
        org: "Organization",
        online: true,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com",
        job: "Executive",
        org: "Projects",
        online: false,
        date: "19/09/17",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Michael Levi",
        email: "michael@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: true,
        date: "24/12/08",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
];

export default function ViewCity() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    // Pass the search, page, and limit as parameters to the query
    const { data: cities, error, isLoading } = useGetCitiesForAdminQuery({ search, page, limit });

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        const totalPages = Math.ceil((cities?.totalCities ?? 0) / limit);
        if (page < totalPages) setPage(page + 1);
    };

    return (
        <div className="h-full w-full  drop-shadow bg-white pt-1 rounded-md">
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

                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            color="green"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                    </div>
                </div>

            </CardHeader>

            <div className="overflow-scroll p-2">
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
                    <tbody className=" p-2">
                        {cities?.cities?.map(
                            ({ _id, cityImage, cityName, cityState }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "px-5 py-   border-l  border-r border-b border-green-200"
                                    : "px-5 py-  border-l  border-r border-b border-green-200";

                                return (
                                    <tr key={name} className=" hover:bg-green-50/50 cursor-pointer">
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
                                            <IconButton variant="text" className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300">
                                                <Trash2 className="h-4 w-4" />
                                            </IconButton>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
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