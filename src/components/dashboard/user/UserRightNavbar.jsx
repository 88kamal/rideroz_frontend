import { BellRing } from "lucide-react";

function UserRightNavbar() {

    return (
        <div className=''>
            <div className="rounded-none border-b bg-green-50 border-green-300 border-t-0 border-l-0 border-r-0">
                <div className="flex justify-end px-2 py-3.5">
                    <BellRing className=" size-5"/>
                </div>
            </div>
        </div>
    );
}

export default UserRightNavbar;