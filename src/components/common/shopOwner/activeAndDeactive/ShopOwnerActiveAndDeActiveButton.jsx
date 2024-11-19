/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { useActivateShopByOwnerMutation, useDeactivateShopByOwnerMutation } from '../../../../redux/slices/shopApiSlice';
import myContext from '../../../../context/myContext';
import { Button } from '@material-tailwind/react';

const ShopOwnerActiveAndDeActiveButton = ({ shopId, ownerActivation, refetch }) => {
    const [deactivateShopByOwner, { isLoading: isLoadingDeactive, isSuccess: isSuccessDeactive, isError: isErrorDeactive, error: errorDeactive, data: dataDeactive }] = useDeactivateShopByOwnerMutation();

    const [activateShopByOwner, { isLoading: isLoadingActivate,
        isSuccess: isSuccessActivate, isError: isErrorActivate, error: errorActivate, data: dataActivate }] = useActivateShopByOwnerMutation();

    const { showAlert } = useContext(myContext);

    const handleDeactivate = async () => {
        try {
            const response = await deactivateShopByOwner(shopId).unwrap();
            console.log(response.message);
            refetch();
        } catch (error) {
            console.error('Failed to deactivate shop:', error);
        }
    };

    const handleActivate = async () => {
        try {
            const response = await activateShopByOwner(shopId).unwrap();
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
        <div className=' mt-3'>

            {ownerActivation === false ?
                <Button onClick={handleActivate}>Activate Shop</Button>

                :
                <Button onClick={handleDeactivate}>Deactivate Shop</Button>

            }


        </div>
    );
};

export default ShopOwnerActiveAndDeActiveButton;
