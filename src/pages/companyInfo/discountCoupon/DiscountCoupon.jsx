import Layout from '../../../components/layout/Layout';
import CouponCard from './CouponCard';

const DiscountCoupon = () => {
    const coupons = [
        {
            image: '../../../rideroz-front.png',
            title: 'Exclusive Discount on Every Ride',
            description: 'Enjoy a 5% discount on all vehicle bookings with Rideroz! Make the most of your journeys with this limited-time offer.',
            discountCode: 'Rideroz234',
            expiryDate: 'Valid until December 30, 2024',
        },
    ];
    

    return (
        <Layout>
            <div className="min-h-screen bg-gray-50 py-10">
                <h1 className="text-center text-2xl font-bold text-gray-700 mb-10">Discount Coupons</h1>
                <div className="flex flex-wrap justify-center gap-6">
                    {coupons.map((coupon, index) => (
                        <CouponCard
                            key={index}
                            title={coupon.title}
                            description={coupon.description}
                            discountCode={coupon.discountCode}
                            expiryDate={coupon.expiryDate}
                            image={coupon.image}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default DiscountCoupon;
