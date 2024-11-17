import { BellRing } from 'lucide-react';
import MoreButton from '../../common/moreButton/MoreButton';

function SuperAdminRightNavbar() {

    return (
        <div className=''>
            <div className="rounded-none border-b bg-green-50 border-green-300 border-t-0 border-l-0 border-r-0">
                <div className="flex justify-end px-2 py-2">
                    <MoreButton/>
                </div>
            </div>
        </div>
    );
}

export default SuperAdminRightNavbar;