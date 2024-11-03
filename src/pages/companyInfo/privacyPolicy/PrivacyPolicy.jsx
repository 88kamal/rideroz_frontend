// src/PrivacyPolicy.js
import React from 'react';
import Layout from '../../../components/layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className=" mx-auto p-8 text-gray-800">
        <h1 className="text-4xl font-bold  mb-8">Privacy Policy</h1>
        <p>Last Updated: 3 Nov 2024</p>
        <p className="mb-4 text-justify">
          Welcome to Rideroz! We are committed to protecting the privacy and security of our users' personal information.
          This Privacy Policy outlines how we collect, use, share, and protect your information when you use our website,
          mobile applications, or other online services (collectively, the "Platform").
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          When you use our Platform, we may collect the following types of information:
          <ul className="list-disc list-inside mt-2">
            <li><strong>Personal Information:</strong> Details like your name, phone number, email address, and address.</li>
            <li><strong>Payment Information:</strong> Information related to your payment method, handled securely.</li>
            <li><strong>Location Data:</strong> Collected through GPS or other geolocation technology.</li>
            <li><strong>Device Information:</strong> Details about your device such as IP address, OS, and browser type.</li>
            <li><strong>Usage Data:</strong> Information about your activity on our Platform.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          We may use the information we collect for purposes like providing and maintaining services, processing transactions,
          communicating with you, and improving your experience on our Platform.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
        <p className="mb-4">
          We do not sell, trade, or transfer your personal information without your consent, except with service providers,
          for legal compliance, or in the case of a business transfer.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="mb-4">
          We use various security measures to protect your information. However, no method is entirely secure, and we cannot
          guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights and Choices</h2>
        <p className="mb-4">
          You have rights regarding your information, including access, correction, deletion, and withdrawal of consent.
          Contact us to exercise these rights.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Cookies and Tracking Technologies</h2>
        <p className="mb-4">
          We use cookies and similar technologies to improve user experience. You can control cookies through your browser.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Third-Party Links</h2>
        <p className="mb-4">
          Our Platform may contain links to third-party websites. We are not responsible for their privacy practices.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Children’s Privacy</h2>
        <p className="mb-4">
          Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information
          from children.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">9. Changes to this Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. We encourage you to review it regularly.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">10. Contact Us</h2>
        <p className="mb-4">
          If you have questions, contact us at: <br />
          <strong>Email:</strong> support@rideroz.com <br />
          <strong>Address:</strong> Kehri Gaon, Prem Nagar, Dehradun, Uttarakhand 248007, India


        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
