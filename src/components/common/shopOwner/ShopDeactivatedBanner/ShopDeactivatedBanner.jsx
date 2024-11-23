import { CopyX } from 'lucide-react';
import authService from '../../../../services/authService';
import { useGetUserByIdQuery } from '../../../../redux/slices/userApiSlice';
import { useEffect } from 'react';

const ShopDeactivationBanner = () => {
    const user = authService.getCurrentUser()
    const userId = user?.id
    const { data: getUserById, error, isLoading, refetch } = useGetUserByIdQuery(userId);

    useEffect(() => {
        refetch()
    }, [refetch])

    return (
       <>
       {/* <pre>{JSON.stringify(getUserById,null,2)}</pre> */}
       {getUserById?.user?.adminActivation === false && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 animate-pulse" role="alert">
            <div className="flex items-center">
            <CopyX className=' mr-2' />
                <span className="font-semibold">Rideroz has deactivated your shop.</span>
            </div>
            <p className="mt-2 text-sm app-font">
                Your shop has been deactivated by Rideroz. Please contact Rideroz support for more information.
            </p>
        </div>}
       </>
    );
};

export default ShopDeactivationBanner;
