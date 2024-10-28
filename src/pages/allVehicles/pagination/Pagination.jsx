import { Button } from "@material-tailwind/react";
 
export default function Pagination() {

  return (
    <div className="flex items-center gap-4 mt-6 justify-between border border-gray-300 drop-shadow bg-white px-2 py-1 rounded-md">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
      >
     Previous
      </Button>
      <div className="flex items-center gap-2">
        <p className=" app-font text-sm">1 Page Of 4</p>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
      >
        Next
      </Button>
    </div>
  );
}