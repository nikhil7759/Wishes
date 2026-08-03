import React from 'react';
import SEO from '../components/SEO';

const privacyData = [
  {
    id: '01',
    title: 'Information We Collect',
    content: (
      <div className="space-y-3 text-sm md:text-base text-[#6b5a4e] font-light leading-relaxed">
        <p>We may collect the following types of information when you visit our website, make a purchase, or engage with our services:</p>
        <ul className="space-y-2.5 pt-1">
          <li>
            <strong className="font-medium text-[#2c1f18]">Personal Information:</strong> Name, email address, phone number, delivery address, and payment information.
          </li>
          <li>
            <strong className="font-medium text-[#2c1f18]">Order Details:</strong> Information about the products you purchase and your preferences.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: '02',
    title: 'How We Use Your Information',
    content: (
      <div className="space-y-3 text-sm md:text-base text-[#6b5a4e] font-light leading-relaxed">
        <p>The information we collect is used for the following purposes:</p>
        <ul className="list-disc pl-5 space-y-2 pt-1">
          <li>To process and fulfill your orders.</li>
          <li>To communicate with you about your orders, deliveries, and any promotions.</li>
          <li>To improve our website and user experience.</li>
          <li>To send promotional emails, newsletters, or updates about our products and services (you may opt out of receiving these communications).</li>
          <li>To respond to customer service inquiries and improve customer support.</li>
        </ul>
      </div>
    )
  },
  {
    id: '03',
    title: 'How We Protect Your Information',
    content: (
      <div className="space-y-3 text-sm md:text-base text-[#6b5a4e] font-light leading-relaxed">
        <p>We implement a variety of security measures to ensure the safety of your personal information, including:</p>
        <ul className="list-disc pl-5 space-y-2 pt-1">
          <li>Secure Socket Layer (SSL) encryption for transmitting sensitive data.</li>
          <li>Regular security assessments and updates to our systems.</li>
          <li>Access control measures to limit employee access to personal data.</li>
        </ul>
      </div>
    )
  },
  {
    id: '04',
    title: 'Sharing of Information',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        We do not sell, trade, or rent your personal information to third parties.
      </p>
    )
  },
  {
    id: '05',
    title: 'Your Rights and Choices',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        You have the right to access, correct, or delete your personal information.
      </p>
    )
  }
];

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-[#f8f0e5] min-h-screen pt-20 md:pt-24 pb-24 font-jost select-none">
      <SEO
        title="Privacy Policy | Wishes by Om Sweets"
        description="Learn how WishesIndia collects, uses, and safeguards your personal data when you use our website or purchase luxury gifts and sweets."
      />

      {/* Signature Blush Pink Hero Banner */}
      <div className="relative w-full bg-[#f4c3c0] pt-12 md:pt-16 pb-16 md:pb-20 mb-16">
        <div className="text-center px-6 md:px-12 relative z-10 max-w-4xl mx-auto">
          <h1 className="font-jost text-3xl md:text-[40px] font-light text-black capitalize leading-[1]">
            <span className="font-burgues text-[65px] md:text-[75px] uppercase mr-1">
              P
            </span>
            rivacy Policy
          </h1>
          <p className="font-jost text-[14px] md:text-[16px] text-black/80 font-light leading-relaxed max-w-2xl mx-auto tracking-wide mt-4">
            At WishesIndia, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines the types of information we collect, how we use it, and how we safeguard your data. By accessing or using our website or services, you agree to the practices described in this policy.
          </p>
        </div>

        {/* Scalloped Bottom Edge */}
        <div
          className="absolute -bottom-[2px] left-0 w-full h-[16px] pointer-events-none z-20"
          style={{
            backgroundImage: "radial-gradient(circle at 15px 15px, #f8f0e5 14.5px, transparent 15px)",
            backgroundSize: "30px 15px",
            backgroundRepeat: "repeat-x"
          }}
        />
      </div>

      {/* Main Privacy Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="space-y-6 md:space-y-8">
          {privacyData.map((item) => (
            <div
              key={item.id}
              className="group relative p-6 md:p-8 bg-[#fffdfa] border border-[#e8dcc8] rounded-xl transition-all duration-300 hover:shadow-md hover:border-[#d1b19a]"
            >
              {/* Inner dashed decorative border */}
              <div className="absolute inset-[5px] border border-dashed border-[#d1b19a] rounded-lg pointer-events-none opacity-20 group-hover:opacity-50 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col md:flex-row items-start gap-4 md:gap-6">
                {/* Number Badge */}
                <div className="w-9 h-9 rounded-full bg-[#f4c3c0]/50 border border-[#d1b19a]/60 flex items-center justify-center shrink-0 text-[#5a4d41] font-jost text-sm font-medium">
                  {item.id}
                </div>

                {/* Content Block */}
                <div className="flex-1">
                  <h2 className="font-jost font-normal text-xl md:text-2xl text-[#2c1f18] mb-3">
                    {item.title}
                  </h2>
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Note */}
        <div className="mt-16 text-center bg-[#fffdfa] border border-[#e8dcc8] p-8 rounded-xl relative overflow-hidden">
          <div className="absolute inset-[5px] border border-dashed border-[#d1b19a] rounded-lg pointer-events-none opacity-30" />
          <div className="relative z-10">
            <h3 className="font-jost font-light text-2xl text-[#2c1f18] mb-2">
              <span className="font-burgues text-[45px] inline-block mr-1">H</span>
              ave Questions About Your Privacy?
            </h3>
            <p className="font-jost font-light text-sm text-[#6b5a4e] mb-6">
              If you have any questions regarding your data or wish to exercise your privacy rights, please contact our support team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#b49377] hover:bg-[#9a7b60] text-white uppercase text-[11px] font-medium tracking-[0.18em] px-8 py-3.5 rounded-sm transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
