import { X } from 'lucide-react';
import React, { useState } from 'react';

const LeftSidePopup = () => {
    const [isVisible, setIsVisible] = useState(true);

    const closePopup = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div className="fixed left-0 bottom-0 px-2 lg:px-0 mb-2 lg:mb-4 lg:ml-4 z-50">
                    <div className="relative shadow-md">
                        <div className="">
                            <button
                                onClick={closePopup}
                                className="absolute top-[2px] right-[1px]"
                            >
                                <X  className=' w-5 h-5 lg:w-4 lg:h-4' color='black' />
                            </button>
                        </div>
                        <img
                            src="../../rideroz-front.png"  // This should be updated with the correct path for the image
                            alt="RideRoz Promo"
                            className="w-full lg:w-96 h-auto object-cover"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default LeftSidePopup;
