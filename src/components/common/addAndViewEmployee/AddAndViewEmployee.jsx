import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import AddEmployee from "./AddEmployee";
import ViewEmployee from "./ViewEmployee";

export default function AddAndViewEmployee() {
    const [activeTab, setActiveTab] = React.useState("Add Employee");

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
                        key={'add Employee'}
                        value={"Add Employee"}
                        onClick={() => setActiveTab('Add Employee')}
                        className={`${activeTab === 'Add Employee' ? 'text-green-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2  font-bold`}
                    >
                        Add New Employee
                    </Tab>

                    <Tab
                        key={'view Employee'}
                        value={"View Employee"}
                        onClick={() => setActiveTab('View Employee')}
                        className={`${activeTab === 'View Employee' ? 'text-green-700' : ''
                            } px-2 sm:px-4 md:px-6 lg:px-8 py-2 font-bold`}
                    >
                        View Employee
                    </Tab>
                </TabsHeader>

                <TabsBody className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap">
                    <TabPanel key={'add Employee'} value={"Add Employee"}>
                        <AddEmployee />
                    </TabPanel>

                    <TabPanel className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap"  
                    key={'view Employee'} value={"View Employee"}>
                        <ViewEmployee />
                    </TabPanel>

                  
                </TabsBody>
            </Tabs>
        </div>
    );
}