import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";


import ViewUserTable from "./ViewUserTable";
import ViewShopOwnerTable from "./ViewShopOwnerTable";

export default function ViewUserAndShopOwner() {
    const [activeTab, setActiveTab] = React.useState("View User");

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
                        key={'view User'}
                        value={"View User"}
                        onClick={() => setActiveTab('View User')}
                        className={`${activeTab === 'View User' ? 'text-green-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2  font-bold`}
                    >
                        View User
                    </Tab>

                    <Tab
                        key={'view ShopOwner'}
                        value={"View ShopOwner"}
                        onClick={() => setActiveTab('View ShopOwner')}
                        className={`${activeTab === 'View ShopOwner' ? 'text-green-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2 font-bold`}
                    >
                        View Shop Owner
                    </Tab>
                </TabsHeader>

                <TabsBody className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap">
                    <TabPanel key={'view User'} value={"View User"}>
                        <ViewUserTable />
                    </TabPanel>

                    <TabPanel className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap"
                        key={'view ShopOwner'} value={"View ShopOwner"}>
                        <ViewShopOwnerTable />
                    </TabPanel>


                </TabsBody>
            </Tabs>
        </div>
    );
}