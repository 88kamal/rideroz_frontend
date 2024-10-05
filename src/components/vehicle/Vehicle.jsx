import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Button,
    Card,
} from "@material-tailwind/react";

export default function Vehicle() {
    const [activeTab, setActiveTab] = React.useState("all");
    const vihicleData = [
        {
            label: "All",
            value: "all",
            data: [
                {
                    brandName: 'Ampere',
                    title: 'Electric Scooter',
                    price: "339",
                    imageUrl: 'https://freedo-backend-static-prod.s3.ap-south-1.amazonaws.com/public/uploads/ModelImages/Ampere%20Magnus%20Ex%20EV%201.png'
                },
                {
                    brandName: 'Hero',
                    title: 'Maestro Edge 110',
                    price: "550",
                    imageUrl: 'https://freedo-backend-static-prod.s3.ap-south-1.amazonaws.com/public/uploads/ModelImages/Maestropng.png'
                },
                {
                    brandName: 'Hero',
                    title: 'Maestro Edge 110',
                    price: "350",
                    imageUrl: 'https://freedo-backend-static-prod.s3.ap-south-1.amazonaws.com/public/uploads/ModelImages/MaestroEdgeblackTesterRightpng.png'
                },
                {
                    brandName: 'Hero',
                    title: 'Maestro Edge 110',
                    price: "350",
                    imageUrl: 'https://freedo-backend-static-prod.s3.ap-south-1.amazonaws.com/public/uploads/ModelImages/DestiniRedTesterRightpng.png'
                }
            ]
        },
        {
            label: "Scooty",
            value: "scooty",
            data: [
                {
                    brandName: 'Hero',
                    title: 'Maestro Edge 110',
                    price: "350",
                    imageUrl: 'https://freedo-backend-static-prod.s3.ap-south-1.amazonaws.com/public/uploads/ModelImages/MaestroEdgeblackTesterRightpng.png'
                },
                {
                    brandName: 'Ampere',
                    title: 'Electric Scooter',
                    price: "339",
                    imageUrl: 'https://freedo-backend-static-prod.s3.ap-south-1.amazonaws.com/public/uploads/ModelImages/Ampere%20Magnus%20Ex%20EV%201.png'
                },
                {
                    brandName: 'Hero',
                    title: 'Maestro Edge 110',
                    price: "350",
                    imageUrl: 'https://freedo-backend-static-prod.s3.ap-south-1.amazonaws.com/public/uploads/ModelImages/DestiniRedTesterRightpng.png'
                },
                {
                    brandName: 'Hero',
                    title: 'Maestro Edge 110',
                    price: "550",
                    imageUrl: 'https://freedo-backend-static-prod.s3.ap-south-1.amazonaws.com/public/uploads/ModelImages/Maestropng.png'
                },
            ]
        },
        {
            label: "Bike",
            value: "bike",
            data: [
                {
                    brandName: 'hero',
                    title: 'HF Deluxe',
                    price: "349",
                    imageUrl: 'https://freedo-backend-static-prod.s3.ap-south-1.amazonaws.com/public/uploads/ModelImages/HFDELUXEpng.png'
                },
                {
                    brandName: '',
                    title: 'Splendor +',
                    price: "550",
                    imageUrl: 'https://freedo-backend-static-prod.s3.ap-south-1.amazonaws.com/public/uploads/ModelImages/Splendorpng.png'
                },
                {
                    brandName: '',
                    title: 'Xtreme 200 S',
                    price: "449",
                    imageUrl: 'https://freedo-backend-static-prod.s3.ap-south-1.amazonaws.com/public/uploads/ModelImages/XtremeSpng.png'
                },
                {
                    brandName: '',
                    title: 'Xpulse 200 4V',
                    price: "449",
                    imageUrl: 'https://freedo-backend-static-prod.s3.ap-south-1.amazonaws.com/public/uploads/ModelImages/XpulseVRedTesterRightpng.png'
                }
            ]
        },
        {
            label: "Car",
            value: "car",
            data: [
                {
                    brandName: '',
                    title: 'Hyundai i20 Sportz',
                    price: "3550",
                    imageUrl: 'https://www.rapidriderental.com/wp-content/uploads/2024/08/i20-Sportz-Silver.webp?t=1728126827'
                },
                {
                    brandName: '',
                    title: 'Hyundai i20 Sportz',
                    price: "1550",
                    imageUrl: 'https://www.rapidriderental.com/wp-content/uploads/2024/07/Hyundai-i20-Sportz-Blue.webp'
                },
                {
                    brandName: '',
                    title: 'Hyundai i20',
                    price: "2550",
                    imageUrl: 'https://www.rapidriderental.com/wp-content/uploads/2024/08/Hyundai-i20-2020.webp'
                },
                {
                    brandName: '',
                    title: 'Mahindra Scorpio',
                    price: "1550",
                    imageUrl: 'https://www.rapidriderental.com/wp-content/uploads/2024/08/Swift-2022.webp'
                }
            ]
        },
    ];
    return (
        <div className=" px-4 mt-5">

            <div className="mb-8">
                <h1 className=" text-center app-font text-2xl font-bold">Our Vehicle</h1>
            </div>
            <Tabs value={activeTab}>
                <TabsHeader
                    className="rounded-none border-b  border-blue-gray-50 bg-transparent p-0 container mx-auto max-w-2xl"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-4 border-[#82BE23] shadow-none rounded-none",
                    }}
                >
                    {vihicleData.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-gray-900" : ""}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>

                <TabsBody className="container mx-auto">
                    {vihicleData.map(({ value, data }) => (
                        <TabPanel key={value} value={value}>
                            <section className=" body-font">
                                <div className="container lg:px-5 py-10 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        {data.map((item, index) => {
                                            const {title, price, imageUrl} = item
                                            return (
                                                <div key={index} className="p-4 w-full md:w-1/4">
                                                    <Card className="h-full drop-shadow overflow-hidden">
                                                       <div className="flex justify-center">
                                                       <img
                                                            className="w-[280px] h-[200px] rounded-xl"
                                                            src={imageUrl}
                                                            alt="blog"
                                                        />
                                                       </div>
                                                        <div className="p-6">
                                                            <h2 className="tracking-widest text-xs title-font font-medium mb-1 app-font">
                                                                Rideroz
                                                            </h2>
                                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                                {title}
                                                            </h1>

                                                            <p className=" app-font ">₹ <span className=" font-bold text-black">{price}/-</span> per day</p>

                                                            <Button variant="" className=" bg-[#82BE23] w-full mt-3 shadow-none hover:shadow-none">
                                                                Book Now
                                                            </Button>
                                  
                                                        </div>
                                                    </Card>
                                                </div>
                                            )
                                        })}


                                    </div>

                                </div>
                            </section>

                            <div className=" flex justify-center">
                                <Button variant="" className=" shadow-none hover:shadow-none bg-[#82BE23]">Show more</Button>
                            </div>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
}