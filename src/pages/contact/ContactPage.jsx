import Layout from "../../components/layout/Layout"

const ContactPage = () => {
  return (
    <Layout>
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-gray-600 mb-8 text-center">
        Have questions or need help with your booking? Reach out to us!
      </p>
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="text-center mt-8 text-gray-700">
        <p>Or reach us at:</p>
        <p>Email: riderozofficial@gmail.com</p>
        <p>Phone: +91 8292417430</p>
      </div>
    </div>
    </Layout>
  )
}

export default ContactPage