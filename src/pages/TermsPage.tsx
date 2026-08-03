import React from 'react';
import SEO from '../components/SEO';

const termsData = [
  {
    id: '01',
    title: 'Acceptance of Terms',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        By using the WishesIndia website or making a purchase from us, you accept and agree to these Terms &amp; Conditions. If you do not agree to these terms, you must refrain from using the site.
      </p>
    )
  },
  {
    id: '02',
    title: 'Changes to Terms',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        WishesIndia reserves the right to modify or update these Terms &amp; Conditions at any time. Any changes will be posted on this page, and the updated terms will take effect immediately upon posting. It is your responsibility to review this page regularly to stay informed of any changes.
      </p>
    )
  },
  {
    id: '03',
    title: 'Products and Services',
    content: (
      <div className="space-y-4 text-sm md:text-base text-[#6b5a4e] font-light leading-relaxed">
        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Product Availability:</strong>
          All products and services offered on the WishesIndia website are subject to availability. We reserve the right to limit the quantity of products available for purchase or to discontinue any product at our discretion.
        </div>
        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Product Descriptions:</strong>
          While we aim to provide accurate descriptions of our products, there may be occasional discrepancies in images, descriptions, or prices. If a product description is found to be inaccurate, we will make reasonable efforts to correct it. However, we cannot guarantee that all descriptions are error-free.
        </div>
        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Pricing:</strong>
          Prices for our products are listed on the website and are subject to change without notice. Taxes, shipping, and handling fees may be added to the total price at checkout.
        </div>
      </div>
    )
  },
  {
    id: '04',
    title: 'Ordering and Payment',
    content: (
      <div className="space-y-4 text-sm md:text-base text-[#6b5a4e] font-light leading-relaxed">
        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Order Process:</strong>
          To place an order, you must provide accurate and complete information, including your name, contact information, delivery address, and payment details. By submitting an order, you agree to purchase the products in accordance with these Terms &amp; Conditions.
        </div>
        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Payment:</strong>
          Payment must be made in full at the time of purchase through the available payment methods on our website (e.g., credit/debit cards, online wallets). All payments are processed securely.
        </div>
        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Order Confirmation:</strong>
          After placing an order, you will receive an order confirmation email. This is not an acceptance of your order, but merely an acknowledgment of your purchase request. We reserve the right to cancel or refuse any order for any reason, including issues with payment processing or product availability.
        </div>
      </div>
    )
  },
  {
    id: '05',
    title: 'Delivery',
    content: (
      <div className="space-y-4 text-sm md:text-base text-[#6b5a4e] font-light leading-relaxed">
        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Shipping:</strong>
          We will ship your order to the delivery address provided at checkout. Delivery times may vary depending on the shipping method selected, the destination, and other factors.
        </div>
        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Shipping Costs:</strong>
          Shipping costs are calculated during checkout based on the delivery location and method. Additional charges may apply for expedited shipping or international orders.
        </div>
        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Delivery Issues:</strong>
          If there is an issue with your delivery (e.g., damaged items, delays, or incorrect address), please contact us immediately, and we will assist you in resolving the issue.
        </div>
      </div>
    )
  },
  {
    id: '06',
    title: 'Cancellations, Returns, and Refunds',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        Please refer to our <a href="/cancellation" className="text-[#b49377] underline hover:text-[#9a7b60] transition-colors">Cancellation &amp; Refund Policy</a> for detailed information regarding cancellations, returns, and refunds.
      </p>
    )
  },
  {
    id: '07',
    title: 'User Conduct',
    content: (
      <div className="space-y-3 text-sm md:text-base text-[#6b5a4e] font-light leading-relaxed">
        <p>When using the WishesIndia website, you agree to the following:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>You will not use the site for any unlawful purpose or in any way that violates these Terms &amp; Conditions.</li>
          <li>You will not engage in any activity that may interfere with the operation of the website or compromise its security.</li>
          <li>You will not upload or transmit any content that is defamatory, offensive, or in violation of any laws or regulations.</li>
        </ul>
      </div>
    )
  },
  {
    id: '08',
    title: 'Intellectual Property',
    content: (
      <div className="space-y-4 text-sm md:text-base text-[#6b5a4e] font-light leading-relaxed">
        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Copyright:</strong>
          All content on the WishesIndia website, including text, images, logos, graphics, and product designs, is owned by WishesIndia or its licensors and is protected by copyright law. You may not use, reproduce, or distribute any content from the website without our express permission.
        </div>
        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Trademarks:</strong>
          The WishesIndia name and logo, as well as any product names and logos, are trademarks of WishesIndia. These trademarks may not be used without permission.
        </div>
      </div>
    )
  },
  {
    id: '09',
    title: 'Limitation of Liability',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        To the maximum extent permitted by law, WishesIndia shall not be held liable for any damages, losses, or expenses arising from the use or inability to use our website or products, including but not limited to direct, indirect, incidental, or consequential damages.
      </p>
    )
  },
  {
    id: '10',
    title: 'Indemnification',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        You agree to indemnify and hold harmless WishesIndia, its affiliates, employees, and partners from any claims, damages, or expenses arising from your use of the website or violation of these Terms &amp; Conditions.
      </p>
    )
  },
  {
    id: '11',
    title: 'Privacy',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        Your use of the WishesIndia website is also governed by our <a href="/privacy" className="text-[#b49377] underline hover:text-[#9a7b60] transition-colors">Privacy Policy</a>, which outlines how we collect, use, and protect your personal information. Please review our Privacy Policy for more information.
      </p>
    )
  },
  {
    id: '12',
    title: 'Governing Law',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        These Terms &amp; Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be resolved in the courts of India.
      </p>
    )
  }
];

const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#f8f0e5] min-h-screen pt-20 md:pt-24 pb-24 font-jost select-none">
      <SEO
        title="Terms & Conditions | Wishes by Om Sweets"
        description="Read the official Terms & Conditions governing the use of WishesIndia website and purchases from our online luxury store."
      />

      {/* Signature Blush Pink Hero Banner */}
      <div className="relative w-full bg-[#f4c3c0] pt-12 md:pt-16 pb-16 md:pb-20 mb-16">
        <div className="text-center px-6 md:px-12 relative z-10 max-w-4xl mx-auto">
          <h1 className="font-jost text-3xl md:text-[40px] font-light text-black capitalize leading-[1]">
            <span className="font-burgues text-[65px] md:text-[75px] uppercase mr-1">
              T
            </span>
            erms &amp; Conditions
          </h1>
          <p className="font-jost text-[14px] md:text-[16px] text-black/80 font-light leading-relaxed max-w-2xl mx-auto tracking-wide mt-4">
            These Terms &amp; Conditions govern the use of the WishesIndia website and the purchase of products from our online store. By accessing or using our website, you agree to comply with and be bound by these terms. Please read them carefully.
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

      {/* Main Terms Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="space-y-6 md:space-y-8">
          {termsData.map((item) => (
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

        {/* Contact/Support Note */}
        <div className="mt-16 text-center bg-[#fffdfa] border border-[#e8dcc8] p-8 rounded-xl relative overflow-hidden">
          <div className="absolute inset-[5px] border border-dashed border-[#d1b19a] rounded-lg pointer-events-none opacity-30" />
          <div className="relative z-10">
            <h3 className="font-jost font-light text-2xl text-[#2c1f18] mb-2">
              <span className="font-burgues text-[45px] inline-block mr-1">H</span>
              ave Questions Regarding Our Terms?
            </h3>
            <p className="font-jost font-light text-sm text-[#6b5a4e] mb-6">
              If you have any questions or require clarification about our Terms &amp; Conditions, please feel free to reach out to our concierge team.
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

export default TermsPage;
