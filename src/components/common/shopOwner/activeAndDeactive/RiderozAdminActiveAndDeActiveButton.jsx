/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import {
    useActivateShopByAdminMutation,
    useDeactivateShopByAdminMutation,
} from '../../../../redux/slices/shopApiSlice';
import myContext from '../../../../context/myContext';
import { IconButton } from '@material-tailwind/react';
import { CheckCircle, XCircle } from 'lucide-react';

const RiderozAdminActiveAndDeActiveButton = ({ shopId, adminActivation, refetch }) => {
    const [deactivateShopByAdmin, { isLoading: isLoadingDeactive, isSuccess: isSuccessDeactive, isError: isErrorDeactive, error: errorDeactive, data: dataDeactive }] =
        useDeactivateShopByAdminMutation();

    const [activateShopByAdmin, { isLoading: isLoadingActivate, isSuccess: isSuccessActivate, isError: isErrorActivate, error: errorActivate, data: dataActivate }] =
        useActivateShopByAdminMutation();

    const { showAlert } = useContext(myContext);

    const handleDeactivate = async () => {
        try {
            const response = await deactivateShopByAdmin(shopId).unwrap();
            console.log(response.message);
            refetch();
        } catch (error) {
            console.error('Failed to deactivate shop:', error);
        }
    };

    const handleActivate = async () => {
        try {
            const response = await activateShopByAdmin(shopId).unwrap();
            console.log(response.message);
            refetch();
        } catch (error) {
            console.error('Failed to activate shop:', error);
        }
    };

    useEffect(() => {
        if (isErrorDeactive) {
            showAlert(errorDeactive?.data?.error, "error");
        }

        if (isSuccessDeactive) {
            showAlert(dataDeactive?.message);
        }
    }, [isErrorDeactive, isSuccessDeactive, errorDeactive, dataDeactive]);

    useEffect(() => {
        if (isErrorActivate) {
            showAlert(errorActivate?.data?.error, "error");
        }

        if (isSuccessActivate) {
            showAlert(dataActivate?.message);
        }
    }, [isErrorActivate, isSuccessActivate, errorActivate, dataActivate]);

    return (
        <div className="flex items-center space-x-2">
            {adminActivation === false ? (
                <IconButton
                    onClick={handleActivate}
                    disabled={isLoadingActivate}
                    variant="text"
                    className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                >
                    {isLoadingActivate ? (
                        <span>Activating...</span>
                    ) : (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                </IconButton>
            ) : (
                <IconButton
                    onClick={handleDeactivate}
                    disabled={isLoadingDeactive}
                    variant="text"
                    className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                >
                    {isLoadingDeactive ? (
                        <span>Deactivating...</span>
                    ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                    )}
                </IconButton>
            )}
        </div>
    );
};

export default RiderozAdminActiveAndDeActiveButton;
