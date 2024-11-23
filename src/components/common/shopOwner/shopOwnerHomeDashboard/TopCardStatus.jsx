// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useGetShopStatsQuery } from "../../../../redux/slices/shopApiSlice";
// import authService from "../../../../services/authService";

// const AnimatedNumber = ({ target }) => {
   

//     const controls = useAnimation();
//     const [currentValue, setCurrentValue] = useState(0);

//     useEffect(() => {
//         controls.start({
//             value: target,
//             transition: { duration: 2, ease: "easeInOut" },
//         });
//     }, [target, controls]);

//     return (
//         <motion.span
//             animate={controls}
//             initial={{ value: 0 }}
//             onUpdate={(latest) => setCurrentValue(Math.round(latest.value))}
//         >
//             {currentValue}
//         </motion.span>
//     );
// };

// const TopCardStatus = () => {
//     const cardsData = [
//         {
//             id: 1,
//             title: "Total Vehicle",
//             icon: "https://cdn-icons-png.flaticon.com/128/3774/3774278.png",
//             color: "#d81b60",
//             target: 50,
//         },
//         {
//             id: 2,
//             title: "Total Order",
//             icon: "https://cdn-icons-png.flaticon.com/128/3500/3500833.png",
//             color: "#ff8f00",
//             target: 120,
//         },
//         {
//             id: 3,
//             title: "Total Settled",
//             icon: "https://cdn-icons-png.flaticon.com/128/4951/4951243.png",
//             color: "#3B3B98",
//             target: 85,
//         },
//         {
//             id: 4,
//             title: "Pending Settlement",
//             icon: "https://cdn-icons-png.flaticon.com/128/16970/16970673.png",
//             color: "#ff4d4d",
//             target: 15,
//         },
//         {
//             id: 5,
//             title: "Total Revenue",
//             icon: "https://cdn-icons-png.flaticon.com/128/10365/10365210.png",
//             color: "#4CAF50",
//             target: 10757,
//             isCurrency: true,
//         },
//     ];

//     const user = authService.getCurrentUser();
//     const shopId = user?.id
//     const { data, error, isLoading } = useGetShopStatsQuery({ shopId , year : "2024", month : "11" });

//     return (
//         <div>
//             <pre>{JSON.stringify({data, error, isLoading},null,2)}</pre>
//             <section className="body-font">
//                 <div className="">
//                     <div className="flex flex-wrap -m-1 xl:-m-2.5 mb-2 xl:mb-1">
//                         {cardsData.map((card, index) => (
//                             <motion.div
//                                 key={card.id}
//                                 className={`p-1 xl:p-2 ${
//                                     card.id === 5
//                                         ? "xl:w-1/5 lg:w-full md:w-full w-full"
//                                         : "xl:w-1/5 lg:w-1/2 md:w-1/2 w-1/2"
//                                 } outline-none cursor-pointer`}
//                                 initial={{ opacity: 0, y: 50 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                             >
//                                 <div className="h-full rounded-lg overflow-hidden bg-green-50 border border-green-400">
//                                     <div className="py-5 text-black">
//                                         <div className="flex justify-center mb-3">
//                                             <img
//                                                 className="w-11"
//                                                 src={card.icon}
//                                                 alt={card.title}
//                                             />
//                                         </div>
//                                         <p
//                                             className={`text-center text-xl font-bold app-font`}
//                                             style={{ color: card.color }}
//                                         >
//                                             {card.isCurrency ? (
//                                                 <>
//                                                     ₹ <AnimatedNumber
//                                                         target={card.target}
//                                                     />
//                                                 </>
//                                             ) : (
//                                                 <AnimatedNumber target={card.target} />
//                                             )}
//                                         </p>
//                                         <h1 className="title-font text-md text-center first-letter:uppercase app-font">
//                                             {card.title}
//                                         </h1>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default TopCardStatus;


import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useGetShopStatsQuery } from "../../../../redux/slices/shopApiSlice";
import authService from "../../../../services/authService";

const AnimatedNumber = ({ target }) => {
    const controls = useAnimation();
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        controls.start({
            value: target,
            transition: { duration: 2, ease: "easeInOut" },
        });
    }, [target, controls]);

    return (
        <motion.span
            animate={controls}
            initial={{ value: 0 }}
            onUpdate={(latest) => setCurrentValue(Math.round(latest.value))}
        >
            {currentValue}
        </motion.span>
    );
};

const TopCardStatus = () => {
    const user = authService.getCurrentUser();
    const shopId = user?.id;
    const { data, error, isLoading } = useGetShopStatsQuery({ shopId, year: "2024", month: "11" });

    const cardsData = data
        ? [
              {
                  id: 1,
                  title: "Total Vehicle",
                  icon: "https://cdn-icons-png.flaticon.com/128/3774/3774278.png",
                  color: "#d81b60",
                  target: data.totalVehicles || 0,
              },
              {
                  id: 2,
                  title: "Total Order",
                  icon: "https://cdn-icons-png.flaticon.com/128/3500/3500833.png",
                  color: "#ff8f00",
                  target: data.totalOrders || 0,
              },
              {
                  id: 3,
                  title: "Total Settled",
                  icon: "https://cdn-icons-png.flaticon.com/128/4951/4951243.png",
                  color: "#3B3B98",
                  target: data.totalSettled || 0,
              },
              {
                  id: 4,
                  title: "Pending Settlement",
                  icon: "https://cdn-icons-png.flaticon.com/128/16970/16970673.png",
                  color: "#ff4d4d",
                  target: data.pendingSettlements || 0,
              },
              {
                  id: 5,
                  title: "Total Revenue",
                  icon: "https://cdn-icons-png.flaticon.com/128/10365/10365210.png",
                  color: "#4CAF50",
                  target: data.totalRevenue || 0,
                  isCurrency: true,
              },
          ]
        : [];

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Failed to load data.</p>;
    }

    return (
        <div>
            <section className="body-font">
                <div className="">
                    <div className="flex flex-wrap -m-1 xl:-m-2.5 mb-2 xl:mb-1">
                        {cardsData.map((card, index) => (
                            <motion.div
                                key={card.id}
                                className={`p-1 xl:p-2 ${
                                    card.id === 5
                                        ? "xl:w-1/5 lg:w-full md:w-full w-full"
                                        : "xl:w-1/5 lg:w-1/2 md:w-1/2 w-1/2"
                                } outline-none cursor-pointer`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="h-full rounded-lg overflow-hidden bg-green-50 border border-green-400">
                                    <div className="py-5 text-black">
                                        <div className="flex justify-center mb-3">
                                            <img
                                                className="w-11"
                                                src={card.icon}
                                                alt={card.title}
                                            />
                                        </div>
                                        <p
                                            className={`text-center text-xl font-bold app-font`}
                                            style={{ color: card.color }}
                                        >
                                            {card.isCurrency ? (
                                                <>
                                                    ₹ <AnimatedNumber
                                                        target={card.target}
                                                    />
                                                </>
                                            ) : (
                                                <AnimatedNumber target={card.target} />
                                            )}
                                        </p>
                                        <h1 className="title-font text-md text-center first-letter:uppercase app-font">
                                            {card.title}
                                        </h1>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopCardStatus;
