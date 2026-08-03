import React from 'react';
import SEO from '../components/SEO';

const cancellationData = [
  {
    id: '01',
    title: 'Cancellation Policy',
    content: (
      <div className="space-y-3 text-sm md:text-base text-[#6b5a4e] font-light leading-relaxed">
        <p>We understand that circumstances may change, and you may need to cancel your order. The following terms apply to order cancellations:</p>
        <div className="space-y-2 pt-1">
          <div>
            <strong className="font-medium text-[#2c1f18] block mb-0.5">Cancellation Before Dispatch:</strong>
            If you wish to cancel your order, please contact us immediately. If the order has not yet been dispatched, we will process the cancellation and issue a full refund.
          </div>
          <div>
            <strong className="font-medium text-[#2c1f18] block mb-0.5">Cancellation After Dispatch:</strong>
            Once the order has been dispatched for delivery, it cannot be canceled. However, you may return the order under our return policy (outlined below) if applicable.
          </div>
        </div>
      </div>
    )
  },
  {
    id: '02',
    title: 'Refund Policy',
    content: (
      <div className="space-y-4 text-sm md:text-base text-[#6b5a4e] font-light leading-relaxed">
        <p>Our goal is to ensure that you are satisfied with your purchase. If you are not satisfied or encounter any issues with your order, we offer the following refund options:</p>

        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Refund Eligibility:</strong>
          <p className="mb-2">Refunds will be considered under the following conditions:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>If the product is damaged, spoiled, or defective upon delivery.</li>
            <li>If the wrong product is delivered.</li>
            <li>If the product is not delivered within the expected time frame (subject to external factors like delivery carrier delays).</li>
          </ul>
        </div>

        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Non-Refundable Items:</strong>
          Due to the nature of our products, we cannot offer refunds for items that have been consumed, partially consumed, or damaged due to mishandling after delivery. Custom orders (e.g., personalized sweet boxes) are also non-refundable.
        </div>

        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Refund Process:</strong>
          <p className="mb-2">If you are eligible for a refund, we will process it as follows:</p>
          <ul className="space-y-2 pl-2">
            <li>
              <span className="font-medium text-[#2c1f18]">Refund for Damaged/Defective Products:</span> If the product is damaged or defective, please contact us within 48 hours of receiving your order. Provide us with a picture of the damaged goods, and we will issue a full refund or arrange a replacement.
            </li>
            <li>
              <span className="font-medium text-[#2c1f18]">Refund for Incorrect Orders:</span> If you receive an incorrect product, we will arrange for the correct item to be sent to you. If this is not possible, we will issue a full refund.
            </li>
          </ul>
        </div>

        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Refund Method:</strong>
          Refunds will be credited to the same payment method used during the original transaction. Please allow 5-7 business days for the refund to be processed.
        </div>
      </div>
    )
  },
  {
    id: '03',
    title: 'Return Policy',
    content: (
      <div className="space-y-4 text-sm md:text-base text-[#6b5a4e] font-light leading-relaxed">
        <p>If you are unsatisfied with the product or if there is an issue with your order, we may accept returns under the following conditions:</p>

        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Return Eligibility:</strong>
          <p className="mb-2">Products can be returned if:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>They are in their original, unopened condition.</li>
            <li>They are not custom items (such as personalized sweet boxes).</li>
          </ul>
        </div>

        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Return Procedure:</strong>
          To initiate a return, please contact us with your order number and details about the issue. Our customer service team will guide you through the return process.
        </div>

        <div>
          <strong className="font-medium text-[#2c1f18] block mb-1">Return Shipping Costs:</strong>
          If a product is being returned due to an error on our part (e.g., damaged or incorrect item), we will cover the return shipping costs. If you are returning the product for any other reason, you will be responsible for the return shipping fees.
        </div>
      </div>
    )
  },
  {
    id: '04',
    title: 'Exchange Policy',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        We do not offer exchanges for products purchased from WishesIndia. If you are unsatisfied with your order, please refer to our refund policy for assistance.
      </p>
    )
  },
  {
    id: '05',
    title: 'Changes to This Policy',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        We reserve the right to update or change this Cancellation &amp; Refund Policy at any time. Any changes will be posted on this page, and the updated policy will take effect immediately upon posting. We encourage you to review this policy periodically to stay informed.
      </p>
    )
  }
];

const CancellationPage: React.FC = () => {
  return (
    <div className="bg-[#f8f0e5] min-h-screen pt-20 md:pt-24 pb-24 font-jost select-none">
      <SEO
        title="Cancellation & Refund Policy | Wishes by Om Sweets"
        description="Understand our Cancellation & Refund Policy, return requirements, refund timelines, and eligibility criteria at WishesIndia."
      />

      {/* Signature Blush Pink Hero Banner */}
      <div className="relative w-full bg-[#f4c3c0] pt-12 md:pt-16 pb-16 md:pb-20 mb-16">
        <div className="text-center px-6 md:px-12 relative z-10 max-w-4xl mx-auto">
          <h1 className="font-jost text-3xl md:text-[40px] font-light text-black capitalize leading-[1]">
            <span className="font-burgues text-[65px] md:text-[75px] uppercase mr-1">
              C
            </span>
            ancellation &amp; Refund Policy
          </h1>
          <p className="font-jost text-[14px] md:text-[16px] text-black/80 font-light leading-relaxed max-w-2xl mx-auto tracking-wide mt-4">
            We strive to deliver exceptional quality and customer satisfaction. Please review our policies regarding cancellations, refunds, returns, and exchanges below.
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="space-y-6 md:space-y-8">
          {cancellationData.map((item) => (
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
              <span className="font-burgues text-[45px] inline-block mr-1">R</span>
              equest a Return or Cancellation?
            </h3>
            <p className="font-jost font-light text-sm text-[#6b5a4e] mb-6">
              Our concierge team is available to assist you with order cancellations, damaged goods reports, or refund inquiries.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#b49377] hover:bg-[#9a7b60] text-white uppercase text-[11px] font-medium tracking-[0.18em] px-8 py-3.5 rounded-sm transition-colors duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPage;
