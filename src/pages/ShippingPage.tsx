import React from 'react';
import SEO from '../components/SEO';

const shippingData = [
  {
    id: '01',
    title: 'Delivery Areas',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        We currently offer delivery exclusively within <strong className="font-medium text-[#2c1f18]">Delhi NCR</strong> (Delhi, Gurugram, Noida, Greater Noida, Ghaziabad, and Faridabad). To maintain handcrafted freshness and delicate quality, delivery outside Delhi NCR (PAN India) is currently not available.
      </p>
    )
  },
  {
    id: '02',
    title: 'Delivery Timeframe',
    content: (
      <div className="space-y-2 text-sm md:text-base text-[#6b5a4e] font-light leading-relaxed">
        <p>Orders within Delhi NCR are typically delivered within 2 to 24 hours, depending on your selected delivery slot and product availability.</p>
        <p>Same-day or next-day delivery options are available across Delhi NCR based on order placement time.</p>
        <p>Delivery timelines may vary during peak festive seasons or due to traffic/weather disruptions.</p>
      </div>
    )
  },
  {
    id: '03',
    title: 'Delivery Slots',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        You may choose your preferred delivery slot at checkout (subject to availability). We offer multiple time slots throughout the day for your convenience.
      </p>
    )
  },
  {
    id: '04',
    title: 'Delivery Charges',
    content: (
      <div className="space-y-2 text-sm md:text-base text-[#6b5a4e] font-light leading-relaxed">
        <p>Delivery charges may apply based on the order value, location, or urgency of delivery.</p>
        <p>Free delivery may be offered on orders above a certain value (as displayed during checkout).</p>
        <p>Any applicable delivery fees will be shown before confirming the order.</p>
      </div>
    )
  },
  {
    id: '05',
    title: 'Order Tracking',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        Once your order is confirmed, you will receive a notification with the delivery status. Live order tracking and delivery updates will be available through the Website.
      </p>
    )
  },
  {
    id: '06',
    title: 'Delivery Attempts',
    content: (
      <div className="space-y-2 text-sm md:text-base text-[#6b5a4e] font-light leading-relaxed">
        <p>Our delivery personnel will attempt delivery at the address provided.</p>
        <p>In case of no response or failed delivery attempts, our team will contact you via phone.</p>
        <p>If delivery fails due to incorrect address or non-availability, the order may be canceled or rescheduled.</p>
      </div>
    )
  },
  {
    id: '07',
    title: 'Packaging & Handling',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        Products are packed using hygienic and secure packaging materials. Perishable and delicate items are packed to maintain required temperature levels during transit.
      </p>
    )
  },
  {
    id: '08',
    title: 'Delays & Exceptions',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        Wishes will not be held liable for delays caused due to external factors including weather, strikes, natural calamities, or service provider disruptions. We will keep you informed in case of any unexpected delays.
      </p>
    )
  },
  {
    id: '09',
    title: 'Order Modifications',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        Once the order is confirmed, modifications to delivery address or time may not be possible. Please reach out to customer support immediately for any urgent changes.
      </p>
    )
  },
  {
    id: '10',
    title: 'Delivery Confirmation',
    content: (
      <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
        You may be asked to confirm receipt of delivery through OTP, digital signature, or Website confirmation. This helps us ensure the safety and accuracy of the delivery.
      </p>
    )
  }
];

const ShippingPage: React.FC = () => {
  return (
    <div className="bg-[#f8f0e5] min-h-screen pt-20 md:pt-24 pb-24 font-jost select-none">
      <SEO
        title="Shipping & Delivery Policy | Wishes by Om Sweets"
        description="Review our Shipping & Delivery Policy to understand delivery timeframes, pin code coverage, slots, charges, and packaging standards at Wishes."
      />

      {/* Signature Blush Pink Hero Banner */}
      <div className="relative w-full bg-[#f4c3c0] pt-12 md:pt-16 pb-16 md:pb-20 mb-16">
        <div className="text-center px-6 md:px-12 relative z-10 max-w-4xl mx-auto">
          <h1 className="font-jost text-3xl md:text-[40px] font-light text-black capitalize leading-[1]">
            <span className="font-burgues text-[65px] md:text-[75px] uppercase mr-1">
              S
            </span>
            hipping &amp; Delivery Policy
          </h1>
          <p className="font-jost text-[14px] md:text-[16px] text-black/80 font-light leading-relaxed max-w-2xl mx-auto tracking-wide mt-4">
            At Wishes, we aim to ensure timely and safe delivery of your orders. This Shipping &amp; Delivery Policy outlines how and when your items will be delivered once you place an order through our website.
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

      {/* Main Shipping Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="space-y-6 md:space-y-8">
          {shippingData.map((item) => (
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
              <span className="font-burgues text-[45px] inline-block mr-1">N</span>
              eed Assistance With Your Delivery?
            </h3>
            <p className="font-jost font-light text-sm text-[#6b5a4e] mb-6">
              Our customer support concierge is ready to assist you with order updates, delivery slots, or special shipping requests.
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

export default ShippingPage;
