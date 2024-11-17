import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import AddRole from "./AddRole";
import ViewRole from "./ViewRole";
import AddDepartment from "./AddDepartment";
import ViewDepartment from "./ViewDepartment";

export default function ViewAndAddRoleAndDepartment() {
    const [activeTab, setActiveTab] = React.useState("Add Department");

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
                        key={'add Department'}
                        value={"Add Department"}
                        onClick={() => setActiveTab('Add Department')}
                        className={`${activeTab === 'Add Department' ? 'text-green-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2  font-bold`}
                    >
                        Add Department
                    </Tab>

                    <Tab
                        key={'view Department'}
                        value={"View Department"}
                        onClick={() => setActiveTab('View Department')}
                        className={`${activeTab === 'View Department' ? 'text-green-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2 font-bold`}
                    >
                        View Department
                    </Tab>

                    <Tab
                        key={'add Role'}
                        value={"Add Role"}
                        onClick={() => setActiveTab('Add Role')}
                        className={`${activeTab === 'Add Role' ? 'text-green-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2 font-bold`}
                    >
                        Add Role
                    </Tab>

                    <Tab
                        key={'view Role'}
                        value={"View Role"}
                        onClick={() => setActiveTab('View Role')}
                        className={`${activeTab === 'View Role' ? 'text-green-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2  font-bold`}
                    >
                        View Role
                    </Tab>
                </TabsHeader>

                <TabsBody className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap">
                    <TabPanel key={'add Department'} value={"Add Department"} className=" -p-9">
                        <AddDepartment />
                    </TabPanel>

                    <TabPanel className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap -p-9"  key={'view Department'} value={"View Department"}>
                        <ViewDepartment />
                    </TabPanel>

                    <TabPanel  className=" h-screen -p-9" key={'add Role'} value={"Add Role"}>
                        <AddRole />
                    </TabPanel>

                    <TabPanel className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap -p-9" key={'view Role'} value={"View Role"}>
                        <ViewRole />
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </div>
    );
}