/* eslint-disable react/no-unescaped-entities */

import Layout from "../../components/layout/Layout";

const PrivacyPolicy = () => {
  return (
   <Layout>
     <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
      <div className="max-w-3xl bg-white shadow-md rounded-lg p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Introduction</h2>
          <p className="text-gray-600">
            At Rideroz, we value your privacy and are committed to protecting your personal information. 
            This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Information Collection</h2>
          <p className="text-gray-600">
            We collect personal information that you provide to us directly, such as your name, email, contact 
            information, and payment details when you use our service. We also collect information about 
            your interactions with our site, including your IP address, browser type, and device data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Use of Information</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>To facilitate and process rental bookings and payments.</li>
            <li>To improve our services and enhance user experience.</li>
            <li>To communicate with you about updates, promotions, and service-related information.</li>
            <li>To ensure compliance with legal obligations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Information Sharing</h2>
          <p className="text-gray-600">
            Rideroz does not sell or share your personal data with third parties for marketing purposes.
            We may share information with trusted partners only to facilitate our services or when required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Data Security</h2>
          <p className="text-gray-600">
            We implement industry-standard security measures to protect your personal information from unauthorized 
            access, disclosure, or loss. However, no online platform is 100% secure, and we encourage users to be 
            mindful of sharing sensitive data online.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Your Rights</h2>
          <p className="text-gray-600">
            You have the right to access, correct, or delete your personal information at any time. If you would like 
            to exercise these rights, please contact us at support@rideroz.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Changes to the Privacy Policy</h2>
          <p className="text-gray-600">
            Rideroz reserves the right to update this Privacy Policy periodically. We will notify users of any major 
            changes through our website or by email.
          </p>
        </section>
      </div>
    </div>
   </Layout>
  );
};

export default PrivacyPolicy;
