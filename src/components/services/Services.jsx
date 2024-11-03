import { Card } from "@material-tailwind/react";

const services = [
    { icon: 'https://cdn-icons-png.flaticon.com/128/3343/3343387.png', title: `Affordable Prices
` },
    { icon: 'https://cdn-icons-png.flaticon.com/128/854/854894.png', title: 'Multiple Locations' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/11328/11328453.png', title: 'Instant & Secure Payments' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/2173/2173566.png', title: 'Wide Range' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/3912/3912012.png', title: 'Verified Dealers' },
];

const Services = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 lg:py-5 px-4 lg:px-0">
            {services.map((service, index) => (
                <Card
                    key={index}
                    className="flex flex-col items-center px-4 py-6  w-full md:w-1/3 lg:w-1/6 rounded-md border border-green-100 shadow-sm 
                    bg-[#F3FFF9]"
                >
                    <div className="">
                        <img src={service.icon} className=' w-20' />
                    </div>
                    
                    <p className="text-center app-font text-gray-700 mt-2">{service.title}</p>
                </Card>
            ))}
        </div>
    );
};

export default Services;
