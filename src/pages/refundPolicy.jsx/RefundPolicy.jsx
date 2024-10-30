import Layout from '../../components/layout/Layout';



// RefundPolicy.js
import React from 'react';

const RefundPolicy = () => {
  return (
    <Layout>
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Refund Policy</h1>
      <div className="max-w-3xl bg-white shadow-md rounded-lg p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Overview</h2>
          <p className="text-gray-600">
            At Rideroz, we strive to ensure a smooth and satisfactory rental experience. However, we
            understand that there may be situations where a refund is necessary. This policy outlines
            the terms and conditions for refunds.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Eligibility for Refunds</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              **Cancellation Before Pickup**: Full refund if canceled 24 hours before the scheduled pickup time.
            </li>
            <li>
              **Partial Refund**: If canceled within 24 hours of pickup, a 50% refund will be provided.
            </li>
            <li>
              **No Show**: No refund will be issued if the customer does not show up at the scheduled pickup time.
            </li>
            <li>
              **Faulty Vehicle**: In case of mechanical issues with the vehicle provided, we will arrange a replacement or offer a full refund.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Non-Refundable Cases</h2>
          <p className="text-gray-600">
            No refund will be issued in cases of customer negligence, accidents, or improper handling of the vehicle. 
            Rideroz is not liable for refunds due to traffic delays, weather conditions, or other unavoidable circumstances.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Refund Process</h2>
          <p className="text-gray-600">
            Refunds are processed within 7-10 business days. Once approved, you will receive a notification, and the
            refund will be issued to the original payment method.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            For any questions or assistance with refunds, feel free to reach out to us at:
            <br />
            Email: riderozofficial@gmail.com
            <br />
            Phone: +91 8292417430
          </p>
        </section>
      </div>
    </div>
    </Layout>
  );
};

export default RefundPolicy;
