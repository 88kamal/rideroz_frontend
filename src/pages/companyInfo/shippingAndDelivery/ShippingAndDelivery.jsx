import { Link } from "react-router-dom";
import Layout from "../../../components/layout/Layout";

const ShippingAndDelivery = () => {
  return (
    <Layout>
      <div className=" flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white  drop-shadow border border-gray-100 rounded-md overflow-hidden p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Shipping and Delivery
        </h1>
        <p className="text-center text-gray-800 text-lg mb-8 app-font">
          We currently do not offer shipping or delivery services at Rideroz.
        </p>
        <p className="text-center text-gray-800 mb-4 app-font">
          Rideroz specializes in connecting you with local bike owners for convenient rental pick-up and drop-off services. We encourage customers to pick up and return rentals at designated locations.
        </p>
        <p className="text-center text-gray-800 mb-4 app-font">
          For any questions regarding pick-up or drop-off options, please feel free to contact our support team. We’re here to make your rental experience smooth and hassle-free.
        </p>
        <div className="text-center mt-8">
          <Link
            to="/contact"
            className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ShippingAndDelivery;
