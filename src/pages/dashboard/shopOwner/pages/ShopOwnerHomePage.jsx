import ShopDeactivationBanner from "../../../../components/common/shopOwner/ShopDeactivatedBanner/ShopDeactivatedBanner"
import ShopOwnerHomeDashboardStatus from "../../../../components/common/shopOwner/shopOwnerHomeDashboard/ShopOwnerHomeDashboardStatus"

const ShopOwnerHomePage = () => {
  return (
    <div>
      <ShopDeactivationBanner/>
      <ShopOwnerHomeDashboardStatus/>
    </div>
  )
}

export default ShopOwnerHomePage