// import { Button, Chip, Input, Option, Select } from "@material-tailwind/react";

// const ViewAllSettlements = () => {
//     return (
//         <div className="min-h-screen">
//             {/* Overview Section */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//                 <div className="bg-green-50 drop-shadow border border-green-200 p-4 rounded">
//                     <p className="text-gray-900">Current balance</p>
//                     <h2 className="text-2xl  app-font">₹ 723.52</h2>
//                 </div>
//                 <div className="drop-shadow border border-green-200 bg-green-50 p-4 rounded">
//                     <p className="text-gray-900">Settlement due today</p>
//                     <h2 className="text-2xl  text-red-500  app-font">₹ 8,676.62</h2>
//                     <p className="text-sm text-gray-900">3 settlements to be processed by 30 Oct, 4:03 PM</p>
//                 </div>
//                 <div className="drop-shadow border border-green-200 bg-green-50 p-4 rounded">
//                     <p className="text-gray-900">Previous settlement</p>
//                     <h2 className="text-2xl  app-font">₹ 3,644.32</h2>
//                 </div>
//                 <div className="drop-shadow border border-green-200 bg-green-50 p-4 rounded">
//                     <p className="text-gray-900">Upcoming settlement</p>
//                     <h2 className="text-2xl app-font">₹ 723.52</h2>
//                     <p className="text-sm text-gray-900">To be processed on 06 Nov, 1:00 PM</p>
//                 </div>
//             </div>

//             {/* Settlements Section */}
//             <div className="bg-white drop-shadow rounded border border-gray-300">
//                 <div className="p-4 border-b">
//                     <h3 className="font-semibold text-lg">Settlements</h3>
//                     <div className="flex items-center gap-4 mt-4">
//                         <Input
//                             label="All Time"
//                             type="date" className="border rounded px-3 py-2 w-1/4"
//                             color="green"
//                         />
//                         <Input
//                             label="UTR number"
//                             type="text" className="border rounded px-3 py-2 w-1/4"
//                             color="green"
//                         />
//                         <Input
//                             label="Settlement ID"
//                             type="text" className="border rounded px-3 py-2 w-1/4"
//                             color="green"
//                         />
//                         <div className="w-1/4">
//                             <Select
//                                 color="green"
//                                 label="Status"
//                                 className="">
//                                 <Option>All</Option>
//                                 <Option>Created</Option>
//                                 <Option>Processed</Option>
//                             </Select>
//                         </div>

//                         {/* <Button type="button"
//                         variant=""
//                             className=" hover:shadow-none shadow-none">
//                             Clear
//                         </Button> */}
//                     </div>
//                 </div>

//                 {/* Table Section */}
//                 <div className="p-4">
//                     <table className="w-full text-left border border-gray-400 ">
//                         <thead>
//                             <tr>
//                                 <th className="py-2 px-2 border-r border-b border-gray-400">Created on</th>
//                                 <th className="py-2 px-2 border-r border-b border-gray-400">Settlement ID</th>
//                                 <th className="py-2 px-2 border-r border-b border-gray-400">UTR number</th>
//                                 <th className="py-2 px-2 border-r border-b border-gray-400">Net settlement</th>
//                                 <th className="py-2 px-2 border-r border-b border-gray-400">Status</th>
//                                 <th className="py-2 px-2 border-r border-b border-gray-400">Details</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {[
//                                 { date: 'Oct 30 2024, 01:03pm', id: 'setl_PFAU0S3QPRVDPR', utr: '-', amount: '₹ 3,644.32', status: 'Created' },
//                                 { date: 'Oct 29 2024, 01:00pm', id: 'setl_PEuGK72xQV1at', utr: '-', amount: '₹ 4,542.30', status: 'Created' },
//                                 { date: 'Oct 28 2024, 01:09pm', id: 'setl_PENWTY8EGTnirx', utr: 'csfk0ahtgukaat21mg0', amount: '₹ 8,170.30', status: 'Processed' },
//                                 // Additional rows can be added here
//                             ].map((row, index) => (
//                                 <tr key={index} className="border-t border-gray-400 app-font">
//                                     <td className="py-2 px-2 border-r border-gray-400">{row.date}</td>
//                                     <td className="py-2 px-2 border-r border-gray-400">{row.id}</td>
//                                     <td className="py-2 px-2 border-r border-gray-400">{row.utr}</td>
//                                     <td className="py-2 px-2 border-r border-gray-400">{row.amount}</td>
//                                     <td className="py-2 px-2 border-r border-gray-400">
//                                         {/* <span className={`px-2 py-1 rounded-full ${row.status === 'Created' ? 'bg-orange-100 text-orange-500' : 'bg-green-100 text-green-500'}`}>
//                                             {row.status}
//                                         </span> */}
//                                         <Chip
//                                             size="sm"
//                                             variant="ghost"
//                                             value={row.status}
//                                             color={row.status === "Created" ? "orange" : "green"}
//                                             className="px-2 text-center w-24"
//                                         />
//                                     </td>
//                                     <td className="py-2 px-2 border-r border-gray-400">
//                                         <a href="#" className="text-blue-500">Details</a>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ViewAllSettlements;

const ViewAllSettlements = () => {
  return (
    <div>ViewAllSettlements</div>
  )
}

export default ViewAllSettlements