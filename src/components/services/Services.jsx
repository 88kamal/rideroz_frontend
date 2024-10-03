import { Card } from "@material-tailwind/react";

const services = [
    { icon: './icon1.png', title: `Govt. Compliant Vehicles` },
    { icon: './icon2.png', title: 'Doorstep Delivery of Vehicles' },
    { icon: './icon3.png', title: 'Instant & Secure Payments' },
    { icon: './icon4.png', title: 'Services & Maintenance' },
    { icon: './icon5.png', title: 'Verified Dealers' },
];

const Services = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 py-8 px-4 lg:px-0">
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
