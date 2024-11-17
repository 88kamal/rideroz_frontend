/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Chip,
  Dialog,
  DialogBody,
  IconButton,
} from "@material-tailwind/react";
import { Eye, X } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// eslint-disable-next-line no-unused-vars
export default function ViewShopOwnerDetailModal({_id, shopImage, legalDoc, shopName, ownerName, ownerEmail, ownerPhoneNumber, gender, selectCity, lat, lng, account_holder_name, ifsc, account_number, account_verified}) {
  const [open, setOpen] = useState(false);
  const [dialogSize, setDialogSize] = useState("lg");

  // const { _id, shopImage, legalDoc, shopName, ownerName, ownerEmail, ownerPhoneNumber, gender, selectCity, lat, lng, account_holder_name, ifsc, account_number, account_verified } = shop

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setDialogSize("xxl"); // Adjust size for mobile
        } else {
            setDialogSize("xl"); // Adjust size for desktop
        }
    };

    window.addEventListener("resize", handleResize);

    // Call resize function initially to set the right size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
}, [])
  return (
    <>
      <IconButton
        onClick={handleOpen}
        variant="text"
        className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
      >
        <Eye className="h-4 w-4" />
      </IconButton>

      <Dialog open={open} size={dialogSize} className="shadow-none hover:shadow-none rounded-none bg-green-100 overflow-y-scroll">
        <div className="px-4 py-4">
          {/* <pre>{JSON.stringify(shop, null, 2)}</pre> */}
          <h1 className="text-xl text-black font-bold">Shop Owner Detail</h1>
          <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-200 cursor-pointer" onClick={handleOpen}>
            <X size={20} className="text-green-800 hover:text-green-900" />
          </div>
        </div>
        <DialogBody>
          <div className="mb-8">
            <div className="flex justify-center items-center mb-1">
              <LazyLoadImage
                alt={"img"}
                src={shopImage?.url}
                className=" w-28 h-28 rounded-full shadow-md border border-green-200"
                effect="opacity"
                wrapperProps={{
                  // If you need to, you can tweak the effect transition using the wrapper style.
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center">
            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Shop Name : </span> <span className=" app-font">{shopName}</span>
            </div>

            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Owner Name : </span> <span className=" app-font">{ownerName}</span>
            </div>

          </div>

          <div className="flex flex-wrap justify-between items-center">
            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Email : </span> <span className=" app-font">{ownerEmail}</span>
            </div>

            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Mobile Number : </span> <span className=" app-font">{ownerPhoneNumber}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center">
            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Gender : </span> <span className=" app-font capitalize">{gender}</span>
            </div>

            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">City : </span> <span className=" app-font capitalize">{selectCity?.cityName}, {selectCity?.cityState}</span>
            </div>

          </div>

          <div className="flex flex-wrap justify-between items-center">
            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Account holder name : </span> <span className=" app-font capitalize">{account_holder_name}</span>
            </div>

            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Account number : </span> <span className=" app-font capitalize">{account_number}</span>
            </div>

          </div>

          <div className="flex flex-wrap justify-between items-center">
            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">IFSC Code : </span> <span className=" app-font capitalize">{ifsc}</span>
            </div>

            <div className=" bg-green-50 border border-green-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2 flex items-center gap-2">
              <span className=" font-bold">Account Verification : </span> <span className=" app-font capitalize">
              <Chip
                    size="sm"
                    variant="ghost"
                    value={account_verified === false ? "Not Verified" : "Verified"}
                    color={account_verified === false ? "red" : "green"}
                    className="px-3 text-center w-28"
                />
              </span>
            </div>

          </div>

          {/* <pre>{JSON.stringify({ employeeAdharCard, employeePanCard, employeeAgreement }, null, 2)}</pre> */}
          <div className="flex justify-between items-center flex-wrap ">
            <div className=" hover:shadow-none shadow-none border border-green-300 text-black py-3 rounded-none px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/3">
              <img src={legalDoc?.url} alt="" />
            </div>




          </div>

        </DialogBody>
      </Dialog>
    </>
  );
}
