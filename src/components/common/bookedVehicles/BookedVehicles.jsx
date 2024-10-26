// import React from "react";
// import {
//     Tabs,
//     TabsHeader,
//     TabsBody,
//     Tab,
//     TabPanel,
// } from "@material-tailwind/react";
// import SuccessBookedVehicleTranscation from "./SuccessBookedVehicleTranscation";
// import FailedVehiclesTranscation from "./FailedVehiclesTranscation";

import SuccessBookedVehicleTranscation from "./SuccessBookedVehicleTranscation"

// export default function BookedVehicles() {
//     const [activeTab, setActiveTab] = React.useState("Successfull Transcation");

//     return (
//         <div>
//             <Tabs value={activeTab}>
//                 <TabsHeader
//                     className="rounded-none  bg-transparent p-0 mb-4 overflow-x-auto sm:overflow-x-hidden whitespace-nowrap scrollbar-hide bg-green-100 border border-green-300  "
//                     indicatorProps={{
//                         className:
//                             "bg-transparent border-b-2 border-green-500 shadow-none rounded-none",
//                     }}
//                 >
//                     <Tab
//                         key={'successfull Transcation'}
//                         value={"Successfull Transcation"}
//                         onClick={() => setActiveTab('Successfull Transcation')}
//                         className={`${activeTab === 'Successfull Transcation' ? 'text-green-700' : ''
//                             } px-2 sm:px-4 md:px-6 lg:px-8 py-2  font-bold`}
//                     >
//                         Successfull Transcation
//                     </Tab>

//                     <Tab
//                         key={'Failed Transcation'}
//                         value={"Failed Transcation"}
//                         onClick={() => setActiveTab('View Transcation')}
//                         className={`${activeTab === 'View Transcation' ? 'text-green-700' : ''
//                             } px-2 sm:px-4 md:px-6 lg:px-8 py-2 font-bold`}
//                     >
//                         Failed Transcation
//                     </Tab>
//                 </TabsHeader>

//                 <TabsBody className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap">
//                     <TabPanel key={'successfull Transcation'} value={"Successfull Transcation"}>
//                         <SuccessBookedVehicleTranscation />
//                     </TabPanel>

//                     <TabPanel className="h-full w-full overflow-scroll scrollbar-hide whitespace-nowrap"
//                         key={'failed Transcation'} value={"Failed Transcation"}>
//                         <FailedVehiclesTranscation />
//                     </TabPanel>
//                 </TabsBody>
//             </Tabs>
//         </div>
//     );
// }

const BookedVehicles = () => {
  return (
    <div>
        <SuccessBookedVehicleTranscation/>
    </div>
  )
}

export default BookedVehicles