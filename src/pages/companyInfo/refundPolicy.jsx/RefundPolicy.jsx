/* eslint-disable react/no-unescaped-entities */
import Layout from "../../../components/layout/Layout";

const RefundPolicy = () => {
  return (
    <Layout>
      <div className=" px-4 py-4">

        <div className=" ">
        <div className=" bg-white drop-shadow border border-gray-100 rounded-md">
          <h2 className=' text-lg font-medium mb-3 bg-gray-100 p-3 rounded-t-md'>
            <b>Cancellation and Refund Policy</b>
          </h2>
          <div className="p-3">

          <ul className=' list-disc px-4 '>
            <li className=' mb-2'> <b>Standard Cancellations: </b> Cancellations
              made within 1 hour of the booking time
              are eligible for a 50% refund of the rental
              fee. Note that platform fees, service fees,
              and any additional charges are non
              refundable.</li>

            <li className=' mb-2'>
              <b>Processing Time:</b> Refunds will be
              processed within 2-3 working days,
              subject to bank processing times and the
              renter's payment method.
            </li>

            <li className=' mb-2'>
              <b>Non-Refundable Circumstances: </b>
              Cancellations due to failure to present ID,
              license, or other required documentation,
              late arrival for pickup, or violating these
              terms will not be eligible for refunds.
            </li>
          </ul>
          </div>
        </div>

        <div className="mt-5  bg-white drop-shadow border border-gray-100 rounded-md">
          <h2 className='text-lg font-bold mb-3 bg-gray-100 p-3 rounded-t-md '>Booking and Collection Policy</h2>

          <div className="p-3">
          <ul className=' list-disc px-4'>
            <li className=' mb-2'>

              <b>Timely Pickup: </b> Renters are required to
              pick up the vehicle at least one hour prior
              to the booking start time. Failure to
              collect the vehicle within this period will
              forfeit the booking, and norefund will be
              issued.
            </li>

            <li className=' mb-2'>
              <b>Verification on Collection: </b> Renters must
              present avalid ID and booking
              confirmation at the time of pickup.
              Failure to provide necessary
              identification may result in denied
              accessto the vehicle without a refund.
            </li>

            <li className=' mb-2'>
              <b>Return Policy: </b> The vehicle must be
              returned by the specified end time to
              avoid additional charges or penalties.
            </li>
          </ul>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default RefundPolicy;
