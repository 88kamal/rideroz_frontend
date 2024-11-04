import Layout from "../../../components/layout/Layout";

const PickUpAndDropOff = () => {
  return (
   <Layout>
     <div className=" min-h-screen p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-white drop-shadow border border-gray-100 rounded-md  overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold text-center text-black mb-6">
            Rental Pick-Up and Drop-Off
          </h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Overview
            </h2>
            <p className="text-black app-font">
              At Rideroz, we make renting a bike as convenient and seamless as
              possible. Our service connects you with local bike owners, allowing
              you to pick up a rental at convenient locations and return it with ease.
              Here’s how our pick-up and drop-off process works and what you need to know.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Pick-Up Process
            </h2>
            <ol className="list-decimal pl-6 text-black space-y-3 app-font">
              <li>
                <strong>Booking Confirmation</strong>: After placing a booking,
                you’ll receive a confirmation email with all the details of your
                rental.
              </li>
              <li>
                <strong>Convenient Pick-Up Points</strong>: Choose a location
                close to you during the booking process.
              </li>
              <li>
                <strong>Check-In Requirements</strong>: Bring a valid photo ID,
                sign any rental agreements if required, and inspect the bike.
              </li>
              <li>
                <strong>Rental Duration Starts</strong>: Your rental begins as
                soon as you pick up the bike. Be on time to maximize your rental period.
              </li>
            </ol>
          </section>

          <section className="mb-8 ">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Drop-Off Process
            </h2>
            <ol className="list-decimal pl-6 text-black space-y-3 app-font">
              <li>
                <strong>Return Location</strong>: Return the bike to the same location,
                or as agreed with the bike owner.
              </li>
              <li>
                <strong>Return Timing</strong>: Return the bike on time to avoid
                additional charges.
              </li>
              <li>
                <strong>Condition Check</strong>: Ensure the bike is in the same
                condition as when picked up. Report any issues if needed.
              </li>
              <li>
                <strong>Payment and Closing</strong>: Finalize any outstanding payments
                or charges based on the rental agreement.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-black">
                  1. Can I pick up a bike at one location and drop it off at another?
                </h3>
                <p className="text-black app-font px-5">
                  Currently, all rentals must be returned to the same location
                  unless otherwise agreed upon with the bike owner.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">
                 2. What should I do if I’m running late for drop-off?
                </h3>
                <p className="text-black px-5 app-font">
                  If you’re unable to return the bike on time, please contact the
                  bike owner directly or reach out to Rideroz support. Additional
                  charges may apply for late returns.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">
                  3. Do I need to bring my own helmet?
                </h3>
                <p className="text-black px-5 app-font">
                  Helmets are generally provided with each rental. However, you’re
                  welcome to bring your own if you prefer.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">
                 4. What if the bike breaks down during my rental period?
                </h3>
                <p className="text-black px-5 app-font">
                  In case of mechanical issues, please contact Rideroz support or
                  the bike owner immediately. We will help coordinate assistance
                  or a replacement if possible.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">
                 5. Are there extra charges for early or late pick-ups?
                </h3>
                <p className="text-black px-5 app-font">
                  Early pick-ups or late returns are subject to availability and
                  may incur extra fees. Contact Rideroz or the bike owner to
                  confirm any timing changes.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Contact Us
            </h2>
            <p className="text-black app-font">
              If you have any questions regarding our pick-up and drop-off policies, 
              or if you need assistance with a rental, don’t hesitate to reach out. 
              We’re here to ensure your experience with Rideroz is enjoyable and convenient.
            </p>
          </section>
        </div>
      </div>
    </div>
   </Layout>
  );
};

export default PickUpAndDropOff;
