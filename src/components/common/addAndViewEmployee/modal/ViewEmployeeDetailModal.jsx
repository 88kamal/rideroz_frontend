/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  IconButton,
} from "@material-tailwind/react";
import { Eye, X } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// eslint-disable-next-line no-unused-vars
export default function ViewEmployeeDetailModal({ _id, employeeName, employeeEmail, employeeMobileNumber, department, role, employeeSalary, employeePhoto, employeeAdharCard, employeePanCard, employeeAgreement }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        variant="text"
        className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
      >
        <Eye className="h-4 w-4" />
      </IconButton>

      <Dialog open={open} size="lg" className="shadow-none hover:shadow-none rounded-none bg-green-100">
        <div className="px-4 py-4">
          <h1 className="text-xl text-black font-bold">Employee Detail</h1>
          <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-200 cursor-pointer" onClick={handleOpen}>
            <X size={20} className="text-green-800 hover:text-green-900" />
          </div>
        </div>
        <DialogBody>
          <div className="mb-8">
            <div className="flex justify-center items-center mb-1">
              <LazyLoadImage
                alt={"img"}
                src={employeePhoto?.url}
                className=" w-20 h-20 rounded-full"
                effect="opacity"
                wrapperProps={{
                  // If you need to, you can tweak the effect transition using the wrapper style.
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            {/* <h1 className=" text-center text-black app-font text-md">{employeeName}</h1> */}
          </div>

          {/* 
          <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-3">
            <span className=" font-bold">Full Name : </span> <span className=" app-font">{employeeName}</span>
          </div> */}

          <div className="flex flex-wrap justify-between items-center">
            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Full Name : </span> <span className=" app-font">{employeeName}</span>
            </div>

            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Email : </span> <span className=" app-font">{employeeEmail}</span>
            </div>

          </div>

          <div className="flex flex-wrap justify-between items-center">
            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Mobile Number : </span> <span className=" app-font">{employeeMobileNumber}</span>
            </div>

            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Departmemt : </span> <span className=" app-font">{department}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center">


            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Role : </span> <span className=" app-font">{role}</span>
            </div>

            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Salary : </span> <span className=" app-font">₹ {employeeSalary}</span>
            </div>

          </div>

          {/* <pre>{JSON.stringify({ employeeAdharCard, employeePanCard, employeeAgreement }, null, 2)}</pre> */}
          <div className="flex justify-between items-center flex-wrap ">
            <Button variant="" className=" hover:shadow-none shadow-none bg-blue-500 border border-green-200 text-black py-3 rounded-none px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/3">
              <a href={employeeAdharCard?.url} target="_blank">
                <p className=" text-center app-font text-white">View Aadhar Card </p>
              </a>
            </Button>

            <Button variant="" className=" hover:shadow-none shadow-none bg-pink-500 border border-green-200 text-black py-3 rounded-none px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/3">
              <a href={employeePanCard?.url} target="_blank">
                <p className=" text-center app-font text-white">View Pan Card </p>
              </a>
            </Button>

            <Button variant="" className=" hover:shadow-none shadow-none bg-indigo-500 border border-green-200 text-black py-3 rounded-none px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/3">
              <a href={employeeAgreement?.url} target="_blank">
                <p className=" text-center app-font text-white">View Agreement </p>
              </a>
            </Button>
          </div>

        </DialogBody>
      </Dialog>
    </>
  );
}
