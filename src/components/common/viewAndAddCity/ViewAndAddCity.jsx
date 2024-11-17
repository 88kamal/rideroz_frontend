import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

import AddCity from "../addCity/AddCity";
import ViewCity from "../viewCity/ViewCity";

export default function ViewAndAddCity() {
    const [activeTab, setActiveTab] = React.useState("Add City");

    return (
        <div>
            <Tabs value={activeTab}>
                <TabsHeader
                    className="rounded-none  bg-transparent p-0 mb-4 overflow-x-auto sm:overflow-x-hidden whitespace-nowrap scrollbar-hide bg-green-100 border border-green-300  "
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-green-500 shadow-none rounded-none",
                    }}
                >
                    <Tab
                        key={'add City'}
                        value={"Add City"}
                        onClick={() => setActiveTab('Add City')}
                        className={`${activeTab === 'Add City' ? 'text-green-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2  font-bold`}
                    >
                        Add City
                    </Tab>

                    <Tab
                        key={'view City'}
                        value={"View City"}
                        onClick={() => setActiveTab('View City')}
                        className={`${activeTab === 'View City' ? 'text-green-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2 font-bold`}
                    >
                        View City
                    </Tab>
                </TabsHeader>

                <TabsBody className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap">
                    <TabPanel key={'add City'} value={"Add City"} className=" -p-9">
                        <AddCity />
                    </TabPanel>

                    <TabPanel className=" -p-9"  
                    key={'view City'} value={"View City"} >
                        <ViewCity />
                    </TabPanel>

                  
                </TabsBody>
            </Tabs>
        </div>
    );
}