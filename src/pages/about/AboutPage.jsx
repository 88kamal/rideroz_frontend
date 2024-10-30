import Layout from "../../components/layout/Layout"

const AboutPage = () => {
  return (
    <Layout>
         <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Who We Are</h2>
          <p className="text-gray-600">
            Rideroz is a bike, scooty, and car rental service company based in India. We provide
            a seamless rental experience by connecting customers with vehicle owners, allowing 
            you to explore and travel on your terms. We charge only a 10% commission on each rental.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At Rideroz, we aim to offer a reliable and convenient platform for vehicle rentals,
            helping travelers and residents find affordable and quality rental options without
            the hassle of ownership.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">What We Do</h2>
          <p className="text-gray-600">
            Rideroz connects you with bike, scooty, and car owners to ensure you have access to 
            reliable transportation wherever you need it. We handle all rental logistics, so you can 
            focus on the journey, not the paperwork.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Customer-centric service</li>
            <li>Trust and transparency</li>
            <li>Reliability and quality assurance</li>
            <li>Support for local vehicle owners</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our 6-D Process</h2>
          <p className="text-gray-600">
            We follow a structured 6-D process: Define, Design, Develop, Deliver, Deploy, and
            Drive to continuously enhance our platform, making it user-friendly and efficient.
          </p>
        </section>
      </div>
    </div>
    </Layout>
  )
}

export default AboutPage