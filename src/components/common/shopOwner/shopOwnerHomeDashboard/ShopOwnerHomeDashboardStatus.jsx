/* eslint-disable react-hooks/exhaustive-deps */

import ChartStatus from "./ChartStatus";
import TodaysOrder from "./TodaysOrder";
import TopCardStatus from "./TopCardStatus";

function ShopOwnerHomeDashboardStatus() {

    return (
        <div>

            <TopCardStatus />
            <div className="flex justify-between items-center gap-2 flex-wrap lg:flex-nowrap">
                <TodaysOrder />
                <ChartStatus />
            </div>
        </div>
    );
}

export default ShopOwnerHomeDashboardStatus;