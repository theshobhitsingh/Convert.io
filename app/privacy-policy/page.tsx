// app/privacy-policy/page.tsx
"use client";

export default function PrivacyPolicy() {
  return (
    <div className="space-y-12 text-md md:text-lg text-gray-300 bg-gray-900 pb-4 md:pb-8 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 glow">
        Privacy Policy
      </h1>
      <p className="text-gray-200">Effective Date: Friday November 1, 2024</p>
      <p className="text-gray-200">
        At Convert.io, I'm committed to safeguarding your privacy. This Privacy
        Policy outlines our practices regarding the collection, use, and
        disclosure of personal information when you use our website and
        services. Please read this policy carefully to understand how we handle
        your data.
      </p>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          1. Information Collected
        </h2>
        <p className="text-gray-200">
          I collect and use limited information to improve the user experience.
          The only data we collect is through Google Analytics, which includes:
          Usage Information: We may collect information about your interaction
          with our website, such as the pages you visit, your IP address,
          browser type, device type, and referral URLs. This information helps
          us understand how users interact with our website to enhance its
          functionality and content.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          2. How I Use Your Information
        </h2>
        <p className="text-gray-200">
          I use the information collected through Google Analytics solely for
          the purpose of understanding user behavior and improving our website's
          performance. I do not sell, rent, or share this information with third
          parties.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          3. Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-200">
          I use cookies and similar tracking technologies to collect and store
          information about your interactions with our website. You can control
          cookie preferences through your browser settings. Please note that
          disabling cookies may affect your experience on our website.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          4. Data Security
        </h2>
        <p className="text-gray-200">
          I take reasonable measures to protect your data against unauthorized
          access, disclosure, alteration, or destruction. However, please be
          aware that no method of data transmission over the internet or
          electronic storage is 100% secure.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          5. Third-Party Links
        </h2>
        <p className="text-gray-200">
          My website may contain links to third-party websites or services that
          are not operated by me. I have no control over the content, privacy
          policies, or practices of these third-party websites. I encourage you
          to review the privacy policies of these websites before providing any
          personal information.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          6. Children's Privacy
        </h2>
        <p className="text-gray-200">
          I do not knowingly collect personal information from children. If you
          are a parent or guardian and believe that your child has provided us
          with personal information, please contact me, and I will take
          appropriate action to remove that information.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          7. Changes to This Privacy Policy
        </h2>
        <p className="text-gray-200">
          I reserve the right to update or modify this Privacy Policy at any
          time without prior notice. Any changes will be effective immediately
          upon posting on this page, and the date of the latest revision will be
          indicated at the top of the policy.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          8. Contact Us
        </h2>
        <p className="text-gray-200">
          If you have any questions or concerns about this Privacy Policy or the
          data we collect, please contact us at theshobhitt@gmail.com
        </p>
      </div>
      <p className="text-gray-200">
        By using Convert.io, you agree to the practices outlined in this Privacy
        Policy. Please discontinue use of our services if you do not agree with
        this policy. Thank you for trusting us with your privacy.
      </p>
      <style jsx>{`
        .glow {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
            0 0 20px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
