/* eslint-disable react/no-unescaped-entities */
// src/PrivacyPolicy.js
import React from 'react';
import Layout from '../../../components/layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className=" mx-auto p-8 text-gray-800">
        <h1 className="text-2xl font-bold  mb-4">Privacy Policy</h1>
        <p className=' mb-5'>Last Updated: 4 Nov 2024</p>
        <p className="mb-4 text-justify">
          Welcome to Rideroz! We are committed to protecting the privacy and security of our users' personal information.
          This Privacy Policy outlines how we collect, use, share, and protect your information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4 app-font">
          When you use our Platform, we may collect the following types of information:
          <ul className="list-disc list-inside mt-2">
            <li className=' mb-2'><strong>Personal Information:</strong> Details like your name, phone number, email address, and address.</li>
            <li className=' mb-2'><strong>Payment Information:</strong> Information related to your payment method, handled securely.</li>
            <li className=' mb-2'><strong>Location Data:</strong> Collected through GPS or other geolocation technology.</li>
            <li className=' mb-2'><strong>Device Information:</strong> Details about your device such as IP address, OS, and browser type.</li>
            <li className=' mb-2'><strong>Usage Data:</strong> Information about your activity on our Platform.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <p className='app-font'>We use your information forthe following
          purposes:</p>
        <ul className="list-disc list-inside mt-2 app-font">
          <li className=' mb-2'><strong>Account Creation and Management: </strong>
            To help you register, maintain, and
            personalize your account.
          </li>
          <li className=' mb-2'><strong>Service Delivery: </strong>
            To process bookings,
            verify identities,and communicate with
            users regarding rentals.
          </li>
          <li className=' mb-2'><strong>Security and Verification: </strong>
            To ensure the
            safety and integrity of our platform,we
            use identification information solely for
            verification.
          </li>
          <li className=' mb-2'><strong>Legal Compliance: </strong>
            To comply with
            applicable laws,regulations, and legal
            processes.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
        <p className='app-font'>Rideroz respects your privacy and does not
          sell or rent your personal information.
          How ever, we may share your data in the
          following circumstances:</p>

        <ul className="list-disc list-inside mt-2 app-font">
          <li className=' mb-2'><strong>With Vehicle Owners: </strong>
            For verification
            and fulfillment of bookings.
          </li>
          <li className=' mb-2'><strong>Service Providers: </strong>
            With trusted third
            party vendors who assist in providing our
            services.
          </li>
          <li className=' mb-2'><strong>Legal Requirements: </strong>
            When required by
            law, or to protect Rideroz's rights, users,
            or platform integrity.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="mb-4 app-font">
          Rideroz uses appropriate security measures
          to protect your information from
          unauthorized access, loss,or misuse.
          However, no method of transmission
          storage is completely secure, and we cannot
          guarantee absolute security
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights and Choices</h2>
        <p className="mb-4 app-font">
          Depending on your location,you may have
          rightsto access, correct,or delete your
          personal data. To make requests regarding
          your data,please contact us at riderozofficial@gmail.com
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Retention of Information</h2>
        <p className="mb-4 app-font">
          We retain your information as long as
          necessary to fulfillthe purposes outlined in
          this Privacy Policy, comply with legal
          obligations, or res disputes.
        </p>



        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to this Privacy Policy</h2>
        <p className="mb-4 app-font">
          We may update this Privacy Policy to reflect
          changes in our practices or for legal or
          regulatory reasons. Any significantchanges
          willbe communicated via email or on the
          platform. Continued use of our platform
          constitutes acceptanceof these changes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
        <p className="mb-4 app-font">
          If you have questions, contact us at: <br />
          <strong>Phone:</strong> +917505847229 <br />
          <strong>Email:</strong> riderozofficial@gmail.com <br />
          <strong>Address:</strong> Kehri Gaon, Prem Nagar, Dehradun, Uttarakhand 248007, India


        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
