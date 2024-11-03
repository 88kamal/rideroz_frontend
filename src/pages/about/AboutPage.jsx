import Layout from "../../components/layout/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <div className=" px-4 lg:px-6 py-4 lg:py-6">

        <div className=" drop-shadow bg-white p-4">
        <h1 className=" font-bold text-xl mb-2">About Us</h1>

<div className="">
  <p className=" text-justify ">Rideroz is a premier vehicle rental service platform based in India, offering easy access to a variety of <b>bikes</b>, <b>scooters</b>, and <b>cars</b> for rent. We aim to provide travelers, commuters, and explorers with reliable, cost-effective, and accessible vehicle options. Unlike traditional rental agencies, Rideroz serves as a platform that connects vehicle owners and users, operating on a commission-based model that benefits both parties.</p>
</div>

<div className=" mt-5">
  <h2 className=" text-xl font-bold mb-2">Our Services          </h2>
  <ul className=" list-disc list-inside px-2 ">
    <li className=" mb-2"><b>Bike Rentals:</b> <span className=" "> A perfect option for quick trips or solo travelers looking to beat the city traffic.</span>
    </li>
    <li className=" mb-2"><b>Scooter Rentals:</b>
      <span className=" "> Ideal for comfortable and budget-friendly city commuting.</span>
    </li>
    <li className=" mb-2"><b>Car Rentals:</b>
      <span className=" "> Great for family trips, long-distance journeys, or anyone looking for a comfortable ride.</span>
    </li>
  </ul>

  <p className=" ">Rideroz ensures quality and reliability in all our rental options, making it easy for customers to choose what best suits their travel needs.

  </p>
</div>

<div className="mt-5">
  <h2 className=" text-xl font-bold mb-2">
    Our Mission
  </h2>

  <p className="  text-justify">Our mission is to empower people to explore India in the way that suits them best, whether it’s for a quick city ride or a scenic road trip. We strive to offer the best-in-class rental experience by partnering with vehicle owners to provide users with safe, well-maintained options that fit their travel style and budget.</p>
</div>

<div className="mt-5">
  <h2 className=" text-xl font-bold mb-2">Why Choose Rideroz?
  </h2>

  <ul className=" list-disc list-inside px-2 ">
    <li className=" mb-2">
      <b>Variety of Options:</b> <span className=" ">From bikes to cars, choose the vehicle that fits your travel plan.</span>
    </li>

    <li className=" mb-2">
      <b>Affordable Rates:</b>
      <span className=" "> Enjoy competitive pricing with Rideroz’s commission-based model.</span>
    </li>

    <li className=" mb-2">
      <b>Secure Payments:</b> <span>Complete transactions safely using the Razorpay payment gateway.</span>
    </li>

    <li className=" mb-2">
      <b> Easy Booking Process:</b> <span> Find, book, and pay for rentals in just a few steps.</span>
    </li>

    <li className=" mb-2">
      <b>Reliable Service:</b> <span>Our quality standards ensure that every rental vehicle is in optimal condition.</span>
    </li>
  </ul>
</div>

<div className="mt-5">
  <h2 className="text-xl font-bold mb-2">How It Works
  </h2>

  <ul className=" list-decimal list-inside px-2 ">
    <li className=" mb-2"><b>Browse Vehicles:</b> Visit our website or app to browse available bikes, scooters, and cars.
    </li>

    <li className=" mb-2"><b>Select & Book:</b> Choose the vehicle that best suits your needs and submit your booking request.
    </li>

    <li className=" mb-2"><b>Complete Payment:</b> Pay securely via Razorpay for a fast, secure transaction.
    </li>

    <li className=" mb-2"><b>Enjoy Your Ride:</b> Pick up your rental and hit the road with confidence.
    </li>
  </ul>
</div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage