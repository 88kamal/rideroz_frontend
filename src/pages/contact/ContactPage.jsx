import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Layout from '../../components/layout/Layout';
import { Button, Input, Textarea } from '@material-tailwind/react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <Layout>
      <div className="">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-2 lg:p-8  space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Column - Contact Information */}
          <div className="bg-white drop-shadow rounded-lg p-6 w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6 app-font">Feel free to reach out to us for any inquiries or assistance!</p>

            <div className="mb-4">
              <h3 className="text-lg font-medium app-font">Address</h3>
              <p className='app-font'>Kehri Gaon, Prem Nagar, Dehradun, Uttarakhand 248007, India</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium app-font">Phone</h3>
              <p className='app-font'>+91 7505847229</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium app-font">Email</h3>
              <p className='app-font'>riderozofficial@gmail.com</p>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex space-x-4">
              {/* <a href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl">
              <FaTwitter />
            </a> */}
              <a href="https://www.linkedin.com/in/ride-roz-964164336" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/rideroz_official" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white drop-shadow rounded-lg p-6 w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className=" ">
                <Input
                  type="text"
                  label='Full Name'
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border app-font"
                />
              </div>

              <div className=" ">
                <Input
                  label='Email'
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded app-font"
                />
              </div>

              <div className=" ">
                <Textarea
                  label='Message'
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded app-font"
                />
              </div>

              <div className="">
                <Button
                  type="submit"
                  variant=''
                  className="w-full hover:shadow-none py-3 shadow-none rounded-md bg-blue-500 text-white font-semibold  hover:bg-blue-600">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>

      <div className=" mb-5 px-4">
      <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height={400}
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Kehri%20Gaon,%20Prem%20Nagar,%20Dehradun,%20Uttarakhand%20248007,%20India+(Rideroz)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          >
            &lt;a href="https://www.gps.ie/"&gt;gps vehicle tracker&lt;/a&gt;
          </iframe>
        </div>
      </div>

      </div>

    </Layout>
  );
};

export default ContactPage;
