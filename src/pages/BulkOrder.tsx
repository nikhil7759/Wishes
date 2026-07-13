import React, { useState } from 'react';

const BulkOrder: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
    alert('Thank you for your inquiry. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen bg-white mt-40 pb-20 font-jost">
      <div className="w-full max-w-[1600px] mx-auto py-12 px-6 md:px-16  font-jost">

        {/* Section 1: Hero Text */}
        <div className="text-center mb-24">
          <h1 className="font-sloop text-3xl md:text-4xl lg:text-[70px] font-light text-[#5a4d41] capatalize  leading-[1.4] " >
            Celebrate Every Occasion with Elegance
          </h1>
          <p className="text-base md:text-[17px] text-[var(--text)] font-light max-w-[1000px] mx-auto leading-relaxed mt-2">
            At WishesIndia, we believe that every celebration deserves a touch of sweetness and sophistication. Whether it's a corporate milestone,
            festive gifting, or a grand event, our handcrafted luxury sweets and hampers are designed to leave a lasting impression. At WishesIndia, we
            don't just deliver sweets — we deliver emotions wrapped in luxury.
          </p>
        </div>

        {/* Section 2: Perfect for Every Occasion */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 mb-32">
          <div className="w-full md:w-1/2">
            <h2 className="font-sloop  text-[38px] sm:text-[46px] md:text-[40px] lg:text-[50px] text-black  mb-6 font-normal  max-w-xl mb-10">
              Perfect for Every Occasion
            </h2>
            <ul className="space-y-4 text-black font-light text-[17px]">
              <li>1. Corporate gifting &amp; festive hampers</li>
              <li>2. Weddings, anniversaries &amp; special celebrations</li>
              <li>3. Institutional &amp; ceremonial events</li>
              <li>4. Luxury hospitality welcome kits</li>
              <li>5. Personalized return gifts &amp; premium assortments</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/Images/collection1.jpg" alt="Perfect for Every Occasion" className="w-full h-auto object-cover rounded shadow-sm" />
          </div>
        </div>

        {/* Section 3: How It Works */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 mb-32">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <img src="/Images/collection2.jpg" alt="How it works" className="w-full h-[500px] object-cover rounded shadow-sm" />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="font-sloop  text-[38px] sm:text-[46px] md:text-[40px] lg:text-[50px] text-black  mb-6 font-normal  max-w-xl mb-10">
              How It Works
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-md font-jost font-semibold text-[#1d2b45] mb-2 uppercase">Share Your Requirement</h3>
                <p className="text-black font-light text-[16px]">Let us know your occasion, guest count, preferred sweets, and packaging style.</p>
              </div>
              <div>
                <h3 className="text-md font-jost font-semibold text-[#1d2b45] mb-2 uppercase">Personalized Curation</h3>
                <p className="text-black font-light text-[16px]">Our team will craft a bespoke selection of sweets and hampers aligned to your taste, theme, and budget range.</p>
              </div>
              <div>
                <h3 className="text-md font-jost font-semibold text-[#1d2b45] mb-2 uppercase">Approval &amp; Production</h3>
                <p className="text-black font-light text-[16px]">Once finalized, our chefs prepare each batch fresh, ensuring unmatched quality and presentation.</p>
              </div>
              <div>
                <h3 className="text-md font-heading font-semibold text-[#1d2b45] mb-2 uppercase">Delivery &amp; Delight</h3>
                <p className="text-black font-light text-[16px]">Your gifts are delivered beautifully packaged, ready to make a memorable impression.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Form Section */}

    </div>
  );
};

export default BulkOrder;
